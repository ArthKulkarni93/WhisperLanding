"use client";

import { useState, useEffect } from 'react';

// The full text you want to animate
const fullText = "The key to productivity isn't just doing more; it's about making consistent progress on the right things. "

// Typing speed in milliseconds
const TYPING_SPEED = 50;

export default function GetTranscript() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // If the text is fully typed, do nothing.
    if (typedText.length === fullText.length) return;

    // Set up an interval to add one character at a time
    const interval = setInterval(() => {
      setTypedText((prev) => fullText.substring(0, prev.length + 1));
    }, TYPING_SPEED);

    // Clean up the interval when the component unmounts or text is fully typed
    return () => clearInterval(interval);
  }, [typedText]);

  return (
    <>
      {/* This inline style tag creates the blinking cursor effect */}
      <style jsx global>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <div className="mt-5">
        <div className="border rounded-2xl h-auto p-6 md:p-8 bg-gradient-to-b from-[#ff9800] to-blue-300 shadow-lg">
          <p className="text-lg md:text-xl text-black font-mono leading-relaxed">
            {typedText}
            {/* The cursor only shows while typing */}
            {typedText.length < fullText.length && (
              <span className="blinking-cursor text-lime-300">|</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}