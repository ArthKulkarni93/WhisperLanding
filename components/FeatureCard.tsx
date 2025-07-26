// components/FeatureCard.tsx
"use client";

import { useEffect, useState } from "react";

// --- Type Definitions ---
type Feature = {
  tag: string;
  heading: string;
  subheading: string;
  photo: string;
};

type Props = {
  features: Feature[];
};

// --- Component Constants ---
const AUTO_PLAY_DURATION_MS = 6000; // 6 seconds for each feature

export default function FeatureCard({ features }: Props) {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // Effect to handle the auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, AUTO_PLAY_DURATION_MS);
    return () => clearInterval(timer);
  }, [features.length]);

  if (!features || features.length === 0) return null;

  return (
    <>
      {/* This inline style tag injects the keyframe animation for the progress bar.
          This is a clean way to keep the component fully self-contained. */}
      <style jsx global>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
      
      <div className="relative p-8 md:p-12 border border-gray-200 rounded-3xl bg-white w-full h-auto lg:h-[600px] flex flex-col lg:flex-row gap-12 shadow-xl shadow-gray-200/60">
        
        {/* Left Column: Text Content & Interactive Tags */}
        <div className="flex flex-col justify-between flex-1">
          {/* Animated Text Section */}
          <div className="relative h-48 md:h-56">
            {features.map((feature, idx) => (
              <div
                key={feature.tag}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${currentFeatureIndex === idx ? "opacity-100" : "opacity-0"}`}
              >
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">{feature.heading}</h2>
                <p className="text-lg text-[#898989] max-w-md">{feature.subheading}</p>
              </div>
            ))}
          </div>

          {/* Interactive Tag Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            {features.map((feature, idx) => {
              const isActive = currentFeatureIndex === idx;
              return (
                <button
                  key={feature.tag}
                  onClick={() => setCurrentFeatureIndex(idx)}
                  className={`relative px-4 py-2 rounded-lg font-semibold text-sm capitalize outline-none transition-all duration-300
                    ${isActive
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  {feature.tag}
                  {isActive && (
                    <div
                      key={currentFeatureIndex} // The key resets the animation when the feature changes
                      className="absolute bottom-0 left-0 h-0.5 bg-lime-300 origin-left"
                      style={{ animation: `progress ${AUTO_PLAY_DURATION_MS}ms linear` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Animated Image Showcase */}
        <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-full rounded-2xl overflow-hidden bg-gray-100">
          {features.map((feature, idx) => (
            <img
              key={feature.photo}
              src={feature.photo}
              alt={feature.tag}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out
                ${currentFeatureIndex === idx ? "opacity-100" : "opacity-0"}`
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}