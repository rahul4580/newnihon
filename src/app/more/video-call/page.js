'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { FaPhone, FaVideo, FaVideoSlash, FaMicrophone, FaMicrophoneSlash, FaPhoneSlash, FaCopy, FaArrowLeft } from 'react-icons/fa';
import { db } from '@/lib/firebase';
import { collection, addDoc, onSnapshot, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

export default function VideoCallPage() {
  const router = useRouter();
  const [stream, setStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [pc, setPc] = useState(null);
  const [callId, setCallId] = useState('');
  const [inputCallId, setInputCallId] = useState('');
  const [status, setStatus] = useState('idle'); // idle, calling, joined
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const unsubscribes = useRef([]);

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    return () => {
      unsubscribes.current.forEach(fn => fn());
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (pc) {
        pc.close();
      }
    };
  }, [stream, pc]);

  const startLocalStream = async () => {
    try {
      const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const remoteStream = new MediaStream();

      setStream(localStream);
      setRemoteStream(remoteStream);

      if (localVideoRef.current) localVideoRef.current.srcObject = localStream;
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = remoteStream;

      return { localStream, remoteStream };
    } catch (err) {
      console.error('Error accessing media devices:', err);
      alert('Could not access camera/microphone. Please check permissions.');
    }
  };

  const createCall = async () => {
    const { localStream, remoteStream } = await startLocalStream();
    const peerConnection = new RTCPeerConnection(servers);
    setPc(peerConnection);

    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    const callDoc = doc(collection(db, 'calls'));
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');

    setCallId(callDoc.id);

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        addDoc(offerCandidates, event.candidate.toJSON());
      }
    };

    const offerDescription = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await setDoc(callDoc, { offer });

    const unsubCall = onSnapshot(callDoc, (snapshot) => {
      const data = snapshot.data();
      if (!peerConnection.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        peerConnection.setRemoteDescription(answerDescription);
      }
    });

    const unsubAnswer = onSnapshot(answerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          peerConnection.addIceCandidate(candidate);
        }
      });
    });

    unsubscribes.current.push(unsubCall, unsubAnswer);
    setStatus('calling');
  };

  const joinCall = async () => {
    const { localStream, remoteStream } = await startLocalStream();
    const peerConnection = new RTCPeerConnection(servers);
    setPc(peerConnection);

    localStream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    const callDoc = doc(db, 'calls', inputCallId);
    const offerCandidates = collection(callDoc, 'offerCandidates');
    const answerCandidates = collection(callDoc, 'answerCandidates');

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        addDoc(answerCandidates, event.candidate.toJSON());
      }
    };

    const callData = (await getDoc(callDoc)).data();
    if (!callData) {
      alert('Invalid Room ID');
      return;
    }

    const offerDescription = callData.offer;
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await updateDoc(callDoc, { answer });

    const unsubOffer = onSnapshot(offerCandidates, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const data = change.doc.data();
          peerConnection.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });

    unsubscribes.current.push(unsubOffer);
    setStatus('joined');
  };

  const hangup = () => {
    unsubscribes.current.forEach(fn => fn());
    unsubscribes.current = [];
    if (pc) pc.close();
    if (stream) stream.getTracks().forEach(t => t.stop());
    setPc(null);
    setStream(null);
    setRemoteStream(null);
    setStatus('idle');
    setCallId('');
    setInputCallId('');
  };

  const toggleMute = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setMuted(!audioTrack.enabled);
      }
    }
  };

  const toggleCamera = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setCameraOff(!videoTrack.enabled);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6 mb-12"
        >
          <button 
            onClick={() => router.back()}
            className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/back shadow-sm"
          >
            <FaArrowLeft className="group-hover/back:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Video Calling
            </h1>
            <p className="text-gray-400 dark:text-neutral-500 font-medium text-sm mt-1">
              Private, real-time communication powered by WebRTC.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
          {/* Main Video Views */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-black border border-black/5 dark:border-white/5 shadow-2xl group/call shadow-black/20">
            {/* Remote Video (Full Screen) */}
            <video 
              ref={remoteVideoRef} 
              autoPlay 
              playsInline 
              className="w-full h-full object-cover"
            />
            {status === 'calling' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse mb-4">
                  <FaPhone className="text-purple-500 text-3xl animate-bounce" />
                </div>
                <h3 className="text-xl font-black tracking-tight mb-2 text-white">Calling...</h3>
                <p className="text-gray-400 text-sm">Waiting for someone to join the room.</p>
              </div>
            )}
            {status === 'idle' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900">
                <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4">
                  <FaVideo className="text-gray-400 text-2xl" />
                </div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">No Active Call</p>
              </div>
            )}

            {/* Local Video (Floating) */}
            <div className={`absolute bottom-6 right-6 w-48 h-32 rounded-3xl overflow-hidden border-4 border-black/20 dark:border-white/10 shadow-2xl transition-all duration-500 ${status === 'idle' ? 'scale-0' : 'scale-100'}`}>
              <video 
                ref={localVideoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover bg-neutral-800"
              />
            </div>

            {/* Controls Overlay */}
            <AnimatePresence>
              {status !== 'idle' && (
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 px-8 py-4 bg-black/40 dark:bg-neutral-900/40 backdrop-blur-2xl rounded-[2rem] border border-white/10"
                >
                  <ControlButton 
                    icon={muted ? <FaMicrophoneSlash /> : <FaMicrophone />} 
                    active={muted} 
                    onClick={toggleMute} 
                    color="bg-white/10 hover:bg-white/20"
                  />
                  <ControlButton 
                    icon={cameraOff ? <FaVideoSlash /> : <FaVideo />} 
                    active={cameraOff} 
                    onClick={toggleCamera} 
                    color="bg-white/10 hover:bg-white/20"
                  />
                  <ControlButton 
                    icon={<FaPhoneSlash />} 
                    onClick={hangup} 
                    color="bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Signaling / Actions */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[2.5rem] bg-white dark:bg-neutral-900/40 border border-black/5 dark:border-white/5 backdrop-blur-2xl shadow-xl space-y-8"
            >
              <div>
                <h3 className="text-2xl font-black tracking-tight mb-2">Create a Call</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Start a private meeting and share the ID with your partner.</p>
                <button 
                  onClick={createCall}
                  disabled={status !== 'idle'}
                  className="mt-6 w-full py-5 rounded-[1.25rem] bg-purple-600 text-white font-black text-sm hover:bg-purple-700 active:scale-95 transition-all shadow-xl shadow-purple-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <FaVideo /> Start New Call
                </button>
              </div>

              {callId && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between"
                >
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-1">Your Room ID</div>
                    <div className="font-mono font-bold text-sm tracking-tighter truncate max-w-[200px]">{callId}</div>
                  </div>
                  <button 
                    onClick={() => {
                        navigator.clipboard.writeText(callId);
                        alert('ID Copied!');
                    }}
                    className="p-3 rounded-2xl bg-white dark:bg-black/40 border border-black/5 dark:border-white/5 hover:scale-110 active:scale-90 transition-all"
                  >
                    <FaCopy className="text-purple-600" />
                  </button>
                </motion.div>
              )}

              <div className="pt-8 border-t border-black/5 dark:border-white/5">
                <h3 className="text-2xl font-black tracking-tight mb-2">Join a Call</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Enter a Room ID shared by your partner to connect.</p>
                <div className="mt-6 flex flex-col md:flex-row gap-3">
                  <input 
                    value={inputCallId}
                    onChange={(e) => setInputCallId(e.target.value)}
                    placeholder="Enter Room ID"
                    className="flex-1 px-6 py-4 rounded-[1.25rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 outline-none text-sm font-bold focus:border-purple-500/50 transition-all"
                  />
                  <button 
                    onClick={joinCall}
                    disabled={status !== 'idle' || !inputCallId}
                    className="px-8 py-4 rounded-[1.25rem] bg-black text-white dark:bg-white dark:text-black font-black text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg disabled:opacity-50"
                  >
                    Join
                  </button>
                </div>
              </div>
            </motion.div>

            <div className="p-8 rounded-[2rem] bg-blue-500/5 border border-blue-500/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex-shrink-0 flex items-center justify-center">
                 <span className="text-blue-500 font-black text-xs">i</span>
              </div>
              <div>
                <div className="text-sm font-black tracking-tight mb-1 text-blue-600 dark:text-blue-400">Technical Note</div>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  This system uses WebRTC for peer-to-peer data transfer and Firebase Firestore for connection signaling. Camera and microphone permissions are required to start or join a call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ControlButton({ icon, onClick, active, color }) {
  return (
    <button 
      onClick={onClick}
      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl transition-all active:scale-90 ${color} ${active ? 'text-red-500' : 'text-white'}`}
    >
      {icon}
    </button>
  );
}
