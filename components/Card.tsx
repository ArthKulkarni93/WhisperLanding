"use client"

import React from "react";

type Props = {
  number: string;
  heading: string;
  subheading: string;
  media: React.ReactNode;
};

export default function Card({ number, heading, subheading, media }: Props) {
  return (
    <div className="rounded-3xl shadow-lg p-7 h-[500px] w-[380px] bg-white flex flex-col justify-between">
      <div>
        <button className="bg-[#e4e7ec] text-[#68686a] h-8 w-8 rounded-lg">
          {number}
        </button>
        <div className="text-[#242424] text-xl font-semibold mt-4">
          {heading}
        </div>
        <div className="text-xl text-[#898989]">
          {subheading}
        </div>
      </div>
      <div className="mt-6">{media}</div>
    </div>
  );
}
