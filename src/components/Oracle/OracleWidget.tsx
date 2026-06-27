'use client';
import React, { useState } from 'react';
import OracleTerminal from './OracleTerminal';

export default function OracleWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* The Pop-up Terminal Overlay */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-[400px] shadow-2xl origin-bottom-right transition-all animate-fade-in-up">
          <div 
            className="bg-toxic text-black p-3 flex justify-between items-center font-black text-xs tracking-widest cursor-pointer hover:bg-white transition-colors border border-toxic"
            onClick={() => setIsOpen(false)}
          >
            <span>[ CLOSE_CONNECTION ]</span>
            <span>X</span>
          </div>
          <OracleTerminal isWidget={true} />
        </div>
      )}
      
      {/* The Floating Thought Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-toxic rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-110 transition-transform duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
}
