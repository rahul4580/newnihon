'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { motion } from 'framer-motion';
import { 
  Mic, MicOff, Video, VideoOff, PhoneOff, Copy, ArrowLeft,
  User, MonitorUp, Settings, Signal, AlertTriangle, Wifi, LogOut
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { 
  collection, addDoc, onSnapshot, doc, 
  setDoc, deleteDoc, 
  query, where, serverTimestamp 
} from 'firebase/firestore';
import { useUser, useAuth, SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

// WebRTC Configuration
const rtcConfig = {
  iceServers: [
    { urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'] },
  ],
  iceCandidatePoolSize: 10,
};

export default function MultiUserVideoCall() {
  // Clerk Hooks
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  // State
  const [isInCall, setIsInCall] = useState(false);
  const [roomId, setRoomId] = useState('');
  
  // Local state derived from Clerk or user input
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  const [localStream, setLocalStream] = useState(null);
  const [peers, setPeers] = useState({}); 
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  // Remove custom authStatus/authError since Clerk handles this mainly
  
  // Refs
  const pcsRef = useRef({}); 
  const cleanupRefs = useRef([]);

  const streamRef = useRef(null); // Ref to hold stream for cleanup

  // --- Effects ---

  // If user ended a call previously, force a one-time reload on next visit
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const shouldReload = sessionStorage.getItem('videoCall:forceReload') === '1';
    if (shouldReload) {
      sessionStorage.removeItem('videoCall:forceReload');
      window.location.reload();
    }
  }, []);

  // Sync Clerk User -> Local State
  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
        setUserId(user.id);
        setUserName(prev => prev || user.fullName || user.firstName || `User ${user.id.slice(0,4)}`);
    }
  }, [isLoaded, isSignedIn, user]);

  const leaveCall = useCallback(async () => {
    try {
      // Stop all media tracks
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }

      // Cleanup listeners
      cleanupRefs.current.forEach(fn => fn());
      cleanupRefs.current = [];

      // Close peer connections
      Object.values(pcsRef.current).forEach(pc => pc.close());
      pcsRef.current = {};

      // Remove from Firestore
      if (roomId && userId) {
        await deleteDoc(doc(db, 'rooms', roomId, 'participants', userId));
      }
    } catch (e) {
      console.error("Error cleaning up:", e);
    } finally {
      // Reset state
      setIsInCall(false);
      setRoomId('');
      setPeers({});
      setLocalStream(null);

      // Mark to reload this page on next visit, then go back to /more
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('videoCall:forceReload', '1');
      }
      router.replace('/more');
    }
  }, [roomId, userId, localStream, router]);

  // Initialize Local Stream & CLEANUP
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: true, 
            audio: true 
        });
        setLocalStream(stream);
        streamRef.current = stream; // Store in ref for cleanup
      } catch (err) {
        console.error("Error accessing media:", err);
      }
    };
    startCamera();

    // CLEANUP FUNCTION: Stops camera when component unmounts (navigating away)
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        console.log("Camera tracks stopped.");
      }
    };
  }, []);



  // --- Handlers ---

  const createRoom = async () => {
    if (!isSignedIn) return alert('Authentication Error: Not connected');
    if (!userName) return alert("Please enter your name");
    if (!localStream) return alert("Camera not ready");

    try {
        const roomRef = doc(collection(db, 'rooms'));
        await setDoc(roomRef, { createdAt: serverTimestamp() });
        setRoomId(roomRef.id);
        joinRoomLogic(roomRef.id, localStream);
    } catch (e) {
        alert("Failed to create room: " + e.message);
    }
  };

  const joinRoom = async () => {
    if (!isSignedIn) return alert('Authentication Error: Not connected');
    if (!roomId) return alert("Enter Room ID");
    if (!userName) return alert("Enter Name");
    if (!localStream) return alert("Camera not ready");
    
    joinRoomLogic(roomId, localStream);
  };

  // ... (joinRoomLogic remains mostly the same, ensuring userId is used) ...

  // ... (rest of logic) ...





  const joinRoomLogic = async (roomID, stream) => {
    if (!userId) {
      console.warn('Cannot join room: userId is not set');
      alert('User authentication required. Please refresh the page.');
      return;
    }
    setIsInCall(true);

    try {
        // 1. Add self to participants
        const participantRef = doc(db, 'rooms', roomID, 'participants', userId);
        await setDoc(participantRef, { 
          userName, 
          joinedAt: serverTimestamp(),
        });

        // 2. Listen to other participants
        const participantsRef = collection(db, 'rooms', roomID, 'participants');
        const unsubParticipants = onSnapshot(participantsRef, (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            const peerId = change.doc.id;
            const peerData = change.doc.data();

            if (peerId === userId) return; 

            if (change.type === 'added') {
              if (!pcsRef.current[peerId]) {
                if (userId > peerId) {
                    createPeerConnection(peerId, stream, true, roomID);
                } else {
                    createPeerConnection(peerId, stream, false, roomID);
                }
              }
              
              setPeers(prev => ({
                ...prev,
                [peerId]: { ...prev[peerId], userName: peerData.userName }
              }));
            } 
            
            if (change.type === 'removed') {
               if (pcsRef.current[peerId]) {
                 pcsRef.current[peerId].close();
                 delete pcsRef.current[peerId];
               }
               setPeers(prev => {
                 const newPeers = { ...prev };
                 delete newPeers[peerId];
                 return newPeers;
               });
            }
          });
        });

        // 3. Listen for Signals
        if (!userId) {
          console.warn('Cannot listen for signals: userId is not set');
          return;
        }
        
        const signalsRef = collection(db, 'rooms', roomID, 'signals');
        const q = query(signalsRef, where('to', '==', userId));
        const unsubSignals = onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach(async (change) => {
            if (change.type === 'added') {
              const data = change.doc.data();
              const senderId = data.from;
              deleteDoc(change.doc.ref);

              const pc = pcsRef.current[senderId] || createPeerConnection(senderId, stream, false, roomID);

              if (data.type === 'offer') {
                 await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
                 const answer = await pc.createAnswer();
                 await pc.setLocalDescription(answer);
                 await sendSignal(roomID, senderId, { type: 'answer', answer });
              } else if (data.type === 'answer') {
                 await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
              } else if (data.type === 'candidate') {
                 if (pc.remoteDescription) {
                    await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
                 }
              }
            }
          });
        });


        cleanupRefs.current.push(unsubParticipants, unsubSignals);

    } catch (e) {
        console.error("Join Error:", e);
        alert("Failed to join room properly: " + e.message);
    }
  };

  const createPeerConnection = (targetPeerId, stream, isInitiator, activeRoomId) => {
    if (pcsRef.current[targetPeerId]) return pcsRef.current[targetPeerId];

    const pc = new RTCPeerConnection(rtcConfig);
    pcsRef.current[targetPeerId] = pc;

    stream.getTracks().forEach(track => pc.addTrack(track, stream));

    pc.ontrack = (event) => {
      const remoteStream = event.streams[0];
      setPeers(prev => ({
        ...prev,
        [targetPeerId]: { ...prev[targetPeerId], stream: remoteStream }
      }));
    };

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        sendSignal(activeRoomId, targetPeerId, { type: 'candidate', candidate: event.candidate.toJSON() });
      }
    };

    if (isInitiator) {
       const createOffer = async () => {
         const offer = await pc.createOffer();
         await pc.setLocalDescription(offer);
         sendSignal(activeRoomId, targetPeerId, { type: 'offer', offer });
       };
       createOffer();
    }

    return pc;
  };

  const sendSignal = async (roomID, targetUserId, payload) => {
     if (!userId) {
       console.warn('Cannot send signal: userId is not set');
       return;
     }
     try {
       await addDoc(collection(db, 'rooms', roomID, 'signals'), {
         ...payload,
         from: userId,
         to: targetUserId,
         timestamp: serverTimestamp()
       });
     } catch(e) { console.error("Signal Error:", e); }
  };




  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(t => t.enabled = !t.enabled);
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
       localStream.getVideoTracks().forEach(t => t.enabled = !t.enabled);
       setIsVideoOff(!isVideoOff);
    }
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    alert("Room ID copied!");
  };

  // --- CLERK LOGIN SCREEN ---
  if (!isLoaded) {
     return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
           <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
              <span>Connecting to Secure Auth...</span>
           </div>
        </div>
     );
  }

  if (!isSignedIn && !isInCall) {
      return (
         <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
             
             {/* Background Effects */}
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20 pointer-events-none"></div>
             <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="relative z-10 flex flex-col items-center gap-8">
                 <div className="text-center space-y-2">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4 backdrop-blur-md border border-white/10">
                         <User className="w-8 h-8 text-white" />
                     </div>
                     <h1 className="text-4xl font-black text-white tracking-tight">Welcome Back</h1>
                     <p className="text-neutral-400">Secure Application Access</p>
                 </div>

                 <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-2 rounded-[2rem] shadow-2xl">
                    <SignIn 
                      appearance={{
                        elements: {
                          rootBox: "w-full",
                          card: "bg-transparent shadow-none w-full",
                          headerTitle: "hidden",
                          headerSubtitle: "hidden",
                          socialButtonsBlockButton: "bg-white text-black hover:bg-neutral-200 border-none font-bold",
                          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-bold",
                          footerActionLink: "text-blue-400 hover:text-blue-300",
                          formFieldLabel: "text-neutral-400",
                          formFieldInput: "bg-black/40 border-white/10 text-white focus:border-blue-500",
                          dividerLine: "bg-white/10",
                          dividerText: "text-neutral-500",
                        }
                      }}
                    />
                 </div>
             </div>
         </div>
      );
  }

  return (
    <div className="bg-neutral-950 min-h-screen text-white overflow-hidden selection:bg-purple-500/30">
      
      {!isInCall && <Navbar />}
      
      {/* LOBBY View */}
      {!isInCall ? (
        <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center relative z-10 pt-20">
          <div className="absolute top-24 left-4 md:left-10">
            <button
              type="button"
              onClick={() => router.replace('/more')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-neutral-900/70 text-neutral-200 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to More
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl items-center justify-center">
             
             {/* Left: Camera Preview */}
             <div className="w-full max-w-lg">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl ring-1 ring-white/5">
                   <VideoPlayer stream={localStream} isLocal={true} isVideoOff={isVideoOff} />
                   
                   <div className="absolute top-4 right-4 flex gap-2">
                      <div className={`px-3 py-1 rounded-full backdrop-blur-md text-xs font-bold flex items-center gap-2 border ${localStream ? 'bg-black/60 border-white/10' : 'bg-red-500/20 border-red-500/50 text-red-200'}`}>
                         {localStream ? (
                             <><Signal className="w-3 h-3 text-green-500" /> Camera Ready</>
                         ) : (
                             <><AlertTriangle className="w-3 h-3" /> No Camera</>
                         )}
                      </div>
                   </div>

                   {/* Auth Status Overlay */}
                   <div className="absolute top-4 left-4">
                       <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold flex items-center gap-2 backdrop-blur-md">
                           <Wifi className="w-3 h-3" /> Connected
                       </div>
                   </div>

                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
                      <button onClick={toggleMute} className={`p-3 rounded-xl transition-all ${isMuted ? 'bg-red-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}>
                         {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                      </button>
                      <button onClick={toggleVideo} className={`p-3 rounded-xl transition-all ${isVideoOff ? 'bg-red-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}>
                         {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                      </button>
                      <button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all">
                         <Settings className="w-5 h-5" />
                      </button>
                   </div>
                </div>
                <p className="text-center text-neutral-500 text-sm mt-4 font-medium">Check your look. You&apos;re going to be great! ✨</p>
             </div>

             {/* Right: Join Controls */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }} 
               animate={{ opacity: 1, x: 0 }}
               className="w-full max-w-md bg-neutral-900/50 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl"
             >
                <div className="mb-8 flex justify-between items-start">
                   <div>
                       <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">Join Meeting</h1>
                       <p className="text-neutral-400">Enter your details to start connecting.</p>
                   </div>
                   <button onClick={() => signOut()} className="p-2 hover:bg-white/10 rounded-full text-neutral-400" title="Logout">
                       <LogOut className="w-5 h-5" />
                   </button>
                </div>

                <div className="space-y-5">
                   <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-500 ml-4 mb-2 block">Display Name</label>
                      <input 
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 transition-all font-bold placeholder:text-neutral-700"
                        placeholder="Your Name"
                      />
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={createRoom}
                        disabled={!localStream || !isSignedIn}
                        className="p-6 rounded-2xl bg-white text-black font-black hover:scale-[1.02] active:scale-95 transition-all flex flex-col items-center gap-3 disabled:opacity-50 disabled:grayscale"
                      >
                         <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                            <MonitorUp className="w-5 h-5" />
                         </div>
                         <span>New Room</span>
                      </button>
                      
                      <div className="flex flex-col gap-3">
                        <input 
                           value={roomId}
                           onChange={e => setRoomId(e.target.value)}
                           className="w-full flex-1 bg-black/20 border border-white/10 rounded-2xl px-4 outline-none focus:border-blue-500 transition-all text-sm text-center font-mono placeholder:text-neutral-700"
                           placeholder="Room ID"
                        />
                        <button 
                           onClick={joinRoom}
                           disabled={!roomId || !localStream || !isSignedIn}
                           className="w-full p-4 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 disabled:opacity-50 transition-all"
                        >
                           Join
                        </button>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      ) : (
        /* ACTIVE CALL View */
        <div className="h-screen flex flex-col relative bg-black">
           
           {/* Header */}
           <div className="absolute top-0 left-0 right-0 p-6 z-50 flex justify-between items-center pointer-events-none">
              <div className="pointer-events-auto flex items-center gap-3">
                 <button
                   type="button"
                   onClick={leaveCall}
                   className="flex items-center gap-2 px-4 py-2 mr-4 rounded-full border border-white/10 bg-neutral-900/80 backdrop-blur-md text-neutral-200 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                 >
                   <ArrowLeft className="w-3.5 h-3.5" />
                   Back to More
                 </button>
                 <button onClick={leaveCall} className="group flex items-center gap-2 pr-4 bg-neutral-900/80 backdrop-blur-md rounded-full border border-white/10 hover:border-red-500/50 transition-all overflow-hidden">
                    <div className="p-2 bg-red-500/10 text-red-500 rounded-full group-hover:bg-red-500 group-hover:text-white transition-colors">
                       <ArrowLeft className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-neutral-400 group-hover:text-white">Leave</span>
                 </button>
                 
                 <div className="bg-neutral-900/80 backdrop-blur-md pl-4 pr-2 py-2 rounded-full border border-white/10 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    <span className="font-mono text-xs font-bold tracking-wider text-neutral-300">{roomId}</span>
                    <button onClick={copyRoomId} className="p-2 hover:bg-white/10 rounded-full text-neutral-400 hover:text-white transition-colors"><Copy className="w-3 h-3" /></button>
                 </div>
              </div>
           </div>

           {/* Grid Layout */}
           <div className="flex-1 p-4 md:p-6 flex gap-6 overflow-hidden relative pt-24 pb-28">
              <div className="flex-1 grid gap-4 md:gap-6 auto-rows-fr"
                   style={{
                      gridTemplateColumns: `repeat(auto-fit, minmax(Min(100%, 400px), 1fr))`
                   }}
              >
                 {/* Local User Card */}
                 <motion.div layout className="relative bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                    <VideoPlayer stream={localStream} isLocal={true} isVideoOff={isVideoOff} />
                    
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 data-[speaking=true]:ring-green-500/50 rounded-[2rem] transition-all"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                       <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{userName} (You)</span>
                          {isMuted && <MicOff className="w-3 h-3 text-red-500" />}
                       </div>
                    </div>
                 </motion.div>

                 {/* Peers */}
                 {Object.entries(peers).map(([peerId, peer]) => (
                    <motion.div layout key={peerId} className="relative bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                       <VideoPlayer stream={peer.stream} />
                       
                       <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                          <span className="text-sm font-bold text-white">{peer.userName || 'Unknown'}</span>
                       </div>
                    </motion.div>
                 ))}
              </div>

              
           </div>

           {/* Floating Control Dock */}
           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 p-3 bg-neutral-900/90 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-50 hover:scale-105 transition-transform duration-300">
               <ControlBtn 
                 icon={isMuted ? <MicOff /> : <Mic />} 
                 active={isMuted} 
                 onClick={toggleMute}
                 activeColor="bg-red-500 text-white"
               />
               <ControlBtn 
                 icon={isVideoOff ? <VideoOff /> : <Video />} 
                 active={isVideoOff} 
                 onClick={toggleVideo}
                 activeColor="bg-red-500 text-white"
               />
               <div className="w-px h-8 bg-white/10 mx-1"></div>
               <button 
                 onClick={leaveCall}
                 className="w-12 h-12 rounded-2xl bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-500/20 hover:bg-red-600 transition-all"
               >
                  <PhoneOff className="w-5 h-5" />
               </button>
           </div>
        </div>
      )}
    </div>
  );
}

// Robust Video Player Component (unchanged)
const VideoPlayer = ({ stream, isLocal, isVideoOff }) => {
   const videoRef = useRef(null);
   useEffect(() => {
      if (videoRef.current && stream) {
         videoRef.current.srcObject = stream;
      }
   }, [stream]);
   return (
      <div className="w-full h-full bg-neutral-900 relative">
         <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted={isLocal} 
            className={`w-full h-full object-cover ${isLocal ? 'transform -scale-x-100' : ''} ${isVideoOff ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
         />
         {!stream || isVideoOff ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-800 text-neutral-600 gap-4">
               <div className="w-20 h-20 rounded-full bg-black/20 flex items-center justify-center">
                   <User className="w-8 h-8 opacity-50" />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest opacity-50">Camera Off</span>
            </div>
         ) : null}
      </div>
   );
};

const ControlBtn = ({ icon, active, onClick, activeColor }) => (
   <button 
      onClick={onClick}
      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
         active 
         ? activeColor
         : 'bg-white/5 text-white hover:bg-white/10'
      }`}
   >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
   </button>
);


