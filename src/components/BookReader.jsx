'use client';

import React, { useState, useCallback } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { FaTimes, FaSearchPlus, FaSearchMinus, FaSync } from 'react-icons/fa';

const BookReader = ({ bookUrl, bookTitle, onClose }) => {
  const [scale, setScale] = useState(1.0);
  const [notes, setNotes] = useState([]);
  const [highlights, setHighlights] = useState([]);

  const zoomPluginInstance = zoomPlugin();
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        onEnterFullScreen: () => {
          document.documentElement.requestFullscreen();
        },
        onExitFullScreen: () => {
          document.exitFullscreen();
        },
      },
    },
  });

  const handleZoomIn = useCallback(() => {
    setScale(prevScale => Math.min(prevScale + 0.2, 3.0));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  }, []);

  const handleResetZoom = useCallback(() => {
    setScale(1.0);
  }, []);

  const handleTextSelection = (selection) => {
    if (selection && selection.text.trim()) {
      const note = prompt('Add a note for this selection:');
      if (note) {
        setNotes(prev => [...prev, {
          text: selection.text,
          note: note,
          pageNumber: selection.pageIndex + 1,
          timestamp: new Date().toISOString()
        }]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col">
      <div className="bg-white dark:bg-gray-900 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{bookTitle}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Zoom out"
          >
            <FaSearchMinus className="w-5 h-5" />
          </button>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Zoom in"
          >
            <FaSearchPlus className="w-5 h-5" />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Reset zoom"
          >
            <FaSync className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors"
            title="Close reader"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={bookUrl}
            plugins={[
              defaultLayoutPluginInstance,
              zoomPluginInstance,
            ]}
            defaultScale={scale}
            onTextSelection={handleTextSelection}
          />
        </Worker>
      </div>

      {notes.length > 0 && (
        <div className="bg-white dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-700 max-h-48 overflow-y-auto">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Notes</h3>
          {notes.map((note, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
              <p className="text-sm text-gray-700 dark:text-gray-300">{note.note}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookReader;
