// SpeakUpload.tsx

import React from "react";

export default function SpeakUpload() {
  return (
    <div>
      <div className="flex justify-center mt-10 relative h-[170px]">
        {/* Animated sound waves */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Wave delay="0s" />
          <Wave delay="0.7s" />
          <Wave delay="1.4s" />
        </div>
        {/* Mic SVG */}
        <svg
          className="relative z-10"
          width="170"
          height="170"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mic body */}
          <rect
            x="22"
            y="10"
            width="20"
            height="40"
            rx="10"
            fill="#4285F4"
            stroke="#4285F4"
            strokeWidth="4"
          />
          {/* Mic grill */}
          <rect x="26" y="14" width="12" height="24" rx="6" fill="#fff" />
          {/* Stand */}
          <rect x="30" y="42" width="4" height="10" rx="2" fill="#4285F4" />
          <rect x="24" y="54" width="16" height="4" rx="2" fill="#4285F4" />
          {/* Base */}
          <rect x="18" y="58" width="28" height="4" rx="2" fill="#4285F4" />
          {/* Decorative dots on grill */}
          <circle cx="32" cy="20" r="1.2" fill="#4285F4" />
          <circle cx="32" cy="24" r="1.2" fill="#4285F4" />
          <circle cx="32" cy="28" r="1.2" fill="#4285F4" />
          <circle cx="32" cy="32" r="1.2" fill="#4285F4" />
        </svg>
      </div>
    </div>
  );
}

// Animated wave component
function Wave({ delay }: { delay: string }) {
  // Make SVG much larger than the circle's base radius * max scale
  // r=60, scale=1.7 => needs at least 204px, so use 220 for margin
  return (
    <svg
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      width="220"
      height="220"
      style={{ zIndex: 0, pointerEvents: "none" }}
    >
      <circle
        cx="110"
        cy="110"
        r="60"
        fill="none"
        stroke="#4285F4"
        strokeWidth="3"
        style={{
          opacity: 0.5,
          transformOrigin: "110px 110px",
          animation: `wave-pulse 2.1s cubic-bezier(0.4,0,0.2,1) infinite`,
          animationDelay: delay,
        }}
      />
      <style>
        {`
          @keyframes wave-pulse {
            0% {
              transform: scale(0.7);
              opacity: 0.7;
            }
            70% {
              transform: scale(1.3);
              opacity: 0.2;
            }
            100% {
              transform: scale(1.7);
              opacity: 0;
            }
          }
        `}
      </style>
    </svg>
  );
}
