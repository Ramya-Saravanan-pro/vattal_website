import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Office from "./sections/Office";
import Services from "./sections/Services";
import Work from "./sections/Work";
import eyeballVideo from "./assets/eyeball.mp4";
import Brand from "./sections/Brand";
import Footer from "./sections/Footer";
import CreativeIdeas from "./sections/CreativeIdeas";
import Testimonials from "./sections/Testimonials";

type IntroPhase = "intro" | "zoom" | "complete";

export default function App() {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<IntroPhase>("intro");

  useEffect(() => {
    document.body.style.overflow =
      phase === "complete" ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const startZoom = () => {
    if (phase !== "intro") return;

    setPhase("zoom");

    window.setTimeout(() => {
      setPhase("complete");
      window.scrollTo(0, 0);
    }, 1900);
  };

  const handleIntroTimeUpdate = () => {
    const video = introVideoRef.current;

    if (!video || !video.duration || phase !== "intro") return;

    if (video.currentTime >= video.duration - 0.8) {
      startZoom();
    }
  };

  const handleIntroEnded = () => {
    startZoom();
  };

  return (
    <main className="min-h-screen bg-[#08050D]">
      {phase !== "complete" && (
        <section className="fixed inset-0 z-[9999] h-screen w-full overflow-hidden bg-black">
          <video
            ref={introVideoRef}
            src={eyeballVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleIntroTimeUpdate}
            onEnded={handleIntroEnded}
            className={`absolute inset-0 h-full w-full object-cover transform-gpu transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
              phase === "intro"
                ? "scale-100 duration-300"
                : "scale-[20] duration-[1900ms]"
            }`}
          />

          <div
            className={`absolute inset-0 z-20 bg-[#10091D] transition-opacity duration-700 ${
              phase === "zoom" ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute inset-0 z-30 transition-opacity duration-500 ${
              phase === "zoom" ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="absolute left-6 top-6 text-[10px] font-black tracking-[0.25em] text-white md:left-8 md:top-8">
              VATTAL STUDIOS
            </div>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/50">
                PERSPECTIVE
              </p>

              <p className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
                WE CREATE.
              </p>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right md:right-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/50">
                OUTPUT
              </p>

              <p className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
                WE IMPACT.
              </p>
            </div>

            <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.25em] text-white/60 md:bottom-8 md:left-8">
              CHENNAI · TIRUPPUR
            </div>

            <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.25em] text-white/60 md:bottom-8 md:right-8">
              360° CREATIVE STUDIO
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">
              <div className="h-full w-full bg-[#E6D35C]" />
            </div>
          </div>
        </section>
      )}

      {phase === "complete" && (
  <>
    <Navbar />

    <div id="hero" className="scroll-mt-24">
      <Hero />
    </div>

    <div id="services" className="scroll-mt-24">
      <Services />
    </div>

    <Office />

    <div id="brand" className="scroll-mt-24">
      <Brand />
    </div>

    <div id="work" className="scroll-mt-24">
      <Work />
    </div>

    <div id="ideas" className="scroll-mt-24">
      <CreativeIdeas />
    </div>

    <div id="testimonials" className="scroll-mt-24">
      <Testimonials />
    </div>

    <div id="contact" className="scroll-mt-24">
      <Footer />
    </div>
  </>
)}
    </main>
  );
}