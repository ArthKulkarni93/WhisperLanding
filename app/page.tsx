// app/page.tsx
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import { Roboto } from 'next/font/google';
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`bg-[#f4f4f4] min-h-screen ${roboto.className} relative`}>
      <div className="w-full h-[1px] bg-[#e0e2e3] absolute top-0 left-0" />
      <div className="2xl:mx-32 py-6 px-7 min-h-screen bg-[#f4f4f4] relative">
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:left-0 2xl:top-0 xl:left-10 hidden xl:block" />
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:right-0 2xl:top-0 xl:right-10 hidden xl:block" />
        <Navbar />
        <Hero />
      </div>


      <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0" />
      <div className="2xl:mx-32 mt-1 py-6 px-7 min-h-screen bg-[#f4f4f4] relative">
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:left-0 2xl:top-0 xl:left-10 hidden xl:block" />
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:right-0 2xl:top-0 xl:right-10 hidden xl:block" />
        <HowItWorks />
      </div>

      <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0" />

      <div className="2xl:mx-32 mt-1 py-6 px-7 min-h-screen bg-[#f4f4f4] relative">
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:left-0 2xl:top-0 xl:left-10 hidden xl:block" />
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:right-0 2xl:top-0 xl:right-10 hidden xl:block" />
        <Features />
      </div>

      <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0" />

      <div className="2xl:mx-32 mt-1 py-6 px-7 min-h-screen bg-[#f4f4f4] relative">
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:left-0 2xl:top-0 xl:left-10 hidden xl:block" />
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:right-0 2xl:top-0 xl:right-10 hidden xl:block" />
        <Testimonial />
      </div>

      <div className="w-full h-[1px] bg-[#e0e2e3] absolute left-0" />

      <div className="2xl:mx-32 mt-1 py-6 px-7 h-[10] bg-[#f4f4f4] relative">
       <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:left-0 2xl:top-0 xl:left-10 hidden xl:block" />
        <div className="h-full w-[1px] bg-[#e0e2e3] absolute 2xl:right-0 2xl:top-0 xl:right-10 hidden xl:block" />
        <Footer />
      </div>
    </div>
  );
}
