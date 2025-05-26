import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const ctaRef = useRef(null);

  useGSAP(() => {
    if (!ctaRef.current) return;

    gsap.fromTo(
      "#hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5 }
    );

    // ScrollTrigger animation
    gsap.to(ctaRef.current, {
      marginBottom: "10vh",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="w-full min-h-[100vh] bg-gradient-to-b from-neutral-950 to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-5 mix-blend-overlay" />

      <div className="h-[100vh] w-full flex-center flex-col mt-16">
        <h1
          id="hero-title"
          className="text-6xl font-medium tracking-tighter text-gray-200 bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300 mb-4"
        >
          iPhone 15 Pro
        </h1>
        <div className="md:w-10/12 w-9/12 relative mb-4">
          <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-3xl -z-10" />
          <video
            className="pointer-events-none rounded-2xl shadow-2xl shadow-teal-500/20"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          ref={ctaRef}
          className="flex flex-col items-center opacity-0 mt-3"
        >
          <a
            href="#highlights"
            className="px-8 py-3 rounded-full bg-neutral-700 text-gray-100 font-medium border border-neutral-600 hover:bg-neutral-500 hover:border-neutral-300 transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              Buy Now →
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
          </a>
          <div className="mt-6 text-center space-y-1">
            <p className="font-semibold text-neutral-100 text-sm md:text-base">
              Starting at $699 or $29.12/mo. for 24 mo.*
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
