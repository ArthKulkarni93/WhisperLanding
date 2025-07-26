// Vid.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";

// VideoPlayer component remains largely the same, but we'll fix the className in Vid.
function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleVideoClick = () => {
    setMuted((prev) => !prev);
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };

  return (
    // The video player itself doesn't need a wrapper div if sized correctly
    <video
      ref={videoRef}
      className="rounded-xl shadow-2xl w-full h-auto" // Correct responsive classes
      src="/8V1HNfzRDt429XtD.mp4" // Using the source from the site
      autoPlay
      loop
      muted={muted}
      playsInline
      onClick={handleVideoClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default function Vid() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const getCard = () => {
    if (time >= 8) { // Adjusted timing for a better demo
      return ["Start whispering", "Edit your words", "Transform into email"];
    } else if (time >= 5) {
      return ["Start whispering", "Edit your words"];
    } else if (time >= 2) {
      return ["Start whispering"];
    }
    return [];
  };

  const activeCards = getCard();

  return (
    // Main container: relative, centered, and with a max-width
    <div className="relative w-full max-w-4xl mx-auto my-20 px-4">
      {/* Video is the base layer */}
      <div className="w-full md:w-3/4">
        <VideoPlayer />
      </div>

      {/* Cards container: positioned absolutely relative to the main container */}
      <div className="hidden md:block absolute top-1/4 -right-10 lg:-right-20 w-72">
        <div className="flex flex-col gap-4">
          {activeCards.map((text, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-4 transition-all duration-500 ease-in-out transform opacity-100"
            >
              <div className="text-sm font-semibold text-gray-500">#{text.split(" ")[0]}</div>
              <div className="text-xl font-semibold text-black mt-1">{text.substring(text.indexOf(' ') + 1)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}