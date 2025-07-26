'use client';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [unzoom, setUnzoom] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headingBottom = headingRef.current?.getBoundingClientRect().bottom || 0;
      setUnzoom(headingBottom < 0); // When heading is out of view
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="bg-white rounded-2xl mt-20 w-full h-auto mx-auto max-w-7xl shadow-lg">
        <div className="flex flex-col lg:flex-row">

          <div
            ref={headingRef}
            className="tracking-tighter py-20 px-6 lg:py-44 lg:pl-10 lg:w-[45vw]"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
              Capture Your Thoughts By Voice
            </div>

            <div className="mt-5 text-base sm:text-lg md:text-xl text-[#898989] max-w-[60vw]">
              Don’t let important details slip through the cracks. Whisper captures
              every word and turns it into clear notes and summaries—ready for you
              and your team to use.
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-10">
              <button className="flex items-center gap-2 px-4 border bg-black text-white h-11 cursor-pointer rounded-2xl py-2 tracking-tight">
                <img
                  className="h-8 w-8"
                  src="https://developers.google.com/static/identity/images/branding_guideline_sample_dk_rd_sl.svg"
                  alt=""
                />
                Sign up with Google
              </button>

              <button className="flex items-center gap-2 px-4 border border-neutral-300 bg-[#f4f4f4] text-black h-11 cursor-pointer rounded-2xl py-2 tracking-tight">
                Sign up with email
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="6 4 10 8 6 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="text-[#898989] mt-2 text-lg">No credit card required</div>
          </div>


          <div className="my-10 lg:my-28 items-center">
            <div
              className="overflow-hidden 2xl:w-[40vw] xl:w-[55vw] h-[55vh]"
              style={{ position: 'relative' }}
            >
              <video
                className={`h-full object-cover object-left transition-all duration-500
                  ${
                    unzoom
                      ? 'w-full left-0'
                      : 'w-[150%] md:w-[150%] lg:w-[150%] left-[12px]'
                  }
                `}
                src="/Video_Ready_No_Names.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                }}
              />
            </div>


            <div className="flex flex-col items-center justify-center mt-10 px-4">
              <div className="flex flex-wrap justify-center gap-6 items-center text-center">
                <span>Powered by</span>
                <span>Free & open source</span>
                <span>Secure by default</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 items-center mt-4">
                <span className="text-white border rounded-3xl bg-black py-2 px-4 flex items-center">
                  <span>together</span>
                  <span className="text-blue-500 mx-1">&#x2022;</span>
                  <span>ai</span>
                </span>

                <button className="text-white border rounded-3xl bg-black py-2 px-4 flex gap-2 items-center">

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="..."/>
                  </svg>
                  Stars on Github 200+
                </button>

                <button className="text-white border rounded-3xl bg-black py-2 px-4 flex gap-2 items-center">

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="..."/>
                  </svg>
                  Secured with Clerk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
