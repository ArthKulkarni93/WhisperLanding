import { OrbitingCirclesDemo } from "@/components/magicui/orbiting-circles";
import Card from "../../components/Card";
import SpeakUpload from "@/components/SpeakUpload";
import GetTranscript from "@/components/GetTranscript";

export default function HowItWorks() {
  return (
    <div className="mt-20 min-h-screen flex flex-col items-center px-4 md:px-14">

      <div className="flex justify-center gap-1 items-center shadow-md text-xs rounded-2xl bg-white w-fit px-2 py-1">
        <img
          className="h-4 w-4"
          src="https://framerusercontent.com/images/yPGnqYboSnvCWBTbI34z6O2FY.svg"
          alt=""
        />
        How it works
      </div>


      <div className="text-center mt-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter">
          Spend less time typing, more creating
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-xl text-[#898989] max-w-3xl mx-auto">
          Stop staring at a blank page. Go from raw inspiration to structured
          drafts, so you can focus on high-impact creative work.
        </p>
      </div>


      <button className="mt-6 px-4 py-2 rounded-lg text-white bg-black flex gap-2 items-center text-sm sm:text-base">
        Start Note‑Taking
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="greater than icon"
        >
          <polyline
            points="6,4 10,8 6,12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>


      <div className="flex mt-10 flex-col lg:flex-row lg:flex-nowrap gap-6">

        <Card
          number={"01"}
          heading="Speak or Upload"
          subheading="Record a new voice note on the spot or simply upload an existing audio file to begin."
          media={<SpeakUpload />}
        />

        <Card
          number={"02"}
          heading="Get an Accurate Transcript"
          subheading="Our AI quickly and accurately transcribes your audio into a clean, polished text transcript."
          media={<GetTranscript />}
        />

        <Card
          number={"03"}
          heading="Choose Your Content"
          subheading="Turn your new transcript into a summary, list, or email with just a single click."
          media={<OrbitingCirclesDemo />}
        />
      </div>
    </div>
  );
}
