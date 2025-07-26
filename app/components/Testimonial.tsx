import { TweetCard } from "@/components/magicui/tweet-card";
import Vid from "@/components/Video";
import React from "react";

const tweetIds = [
  "1947703819871433213",
  "1947717968470688049",
  "1947784647427166285",
  "1947841274658361459",
  "1947799496441925921",
  "1947854504629834211",
  "1947698852108378252",
  "1947857168478441670",
  "1947767015072252316",
  "1948046974894358691",
  "1948108358373839110",
  "1948040585195254006",
  "1947926616547397968",
  "1947869275139809307",
];

const scrollDuration = 30; 

function getColumnIds(ids: string[], col: number, totalCols: number) {
  const colIds = ids.filter((_, idx) => idx % totalCols === col);
  return [...colIds, ...colIds];
}

export default function Testimonial() {
  const columns = 3;
  const mobileScrollDuration = scrollDuration * 3; 

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mt-12 md:mt-20 flex flex-col items-center w-full px-4 sm:px-8 md:px-14">
        <div className="flex justify-center gap-1 items-center shadow-md text-xs tracking-wider rounded-2xl bg-white w-fit px-3 py-1">
          <img
            className="h-4 w-4"
            src="https://framerusercontent.com/images/sYUBjougHccp72elUF4Yg63Vw.svg"
            alt=""
          />
          Testimonial
        </div>

        <div className="text-center mt-6 w-full">
          <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter">
            What People Are Saying
          </div>
          <div className="mx-auto mt-4 text-base sm:text-lg md:text-xl text-[#898989] max-w-2xl">
            Our users are our best ambassadors. Read their stories and see what makes us their first choice.
          </div>
        </div>


        <div className="block md:hidden relative overflow-hidden w-full max-w-md mt-8 h-[900px]">
          <div
            className="flex flex-col"
            style={{
              animation: `scroll-up-mobile ${mobileScrollDuration}s linear infinite`,
            }}
          >
            {[...tweetIds, ...tweetIds].map((id, idx) => (
              <div key={id + idx} className="relative mb-6">
                <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0 top-0" />
                <TweetCard id={id} className="bg-white" />
                <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0 bottom-0" />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes scroll-up-mobile {
              0% { transform: translateY(0%); }
              100% { transform: translateY(-50%); }
            }
          `}</style>
        </div>


        <div className="hidden md:block relative overflow-hidden w-full max-w-7xl mt-8 h-[900px]">
          <div className="grid grid-cols-3 gap-8 h-full">
            {[...Array(columns)].map((_, colIdx) => (
              <div
                key={colIdx}
                className="relative h-full"
                style={{ overflow: "hidden" }}
              >
                <div
                  className="flex flex-col"
                  style={{
                    animation: `scroll-up-${colIdx} ${scrollDuration +
                      colIdx * 4}s linear infinite`,
                  }}
                >
                  {getColumnIds(tweetIds, colIdx, columns).map((id, idx) => (
                    <div key={id + idx} className="relative mb-6">
                      <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0 top-0" />
                      <TweetCard id={id} className="bg-white" />
                      <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0 bottom-0" />
                    </div>
                  ))}
                </div>
                <style>{`
                  @keyframes scroll-up-${colIdx} {
                    0% { transform: translateY(0%); }
                    100% { transform: translateY(-50%); }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full flex justify-center mt-10 mb-10">

        <div className="w-full max-w-md h-64 sm:h-80 md:hidden">
          <Vid />
        </div>

        <div className="hidden md:block w-full max-w-4xl h-[500px]">
          <Vid />
        </div>
      </div>
    </div>
  );
}