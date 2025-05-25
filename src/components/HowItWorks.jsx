import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();
  const frameContainerRef = useRef();

  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    // Video play on scroll trigger
    ScrollTrigger.create({
      trigger: frameContainerRef.current,
      start: "top center",
      onEnter: () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      },
      onLeaveBack: () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      },
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            The A17 Pro - <br />
            Redefining Mobile Performance
          </h2>

          <p className="hiw-subtitle">
            Our most advanced GPU architecture ever powers console-quality
            gaming
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14" ref={frameContainerRef}>
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              Experience{" "}
              <span className="text-white">
                {" "}
                unprecedented graphics fidelity{" "}
              </span>{" "}
              - the A17 Pro delivers up to 20% faster GPU performance.
            </p>

            <p className="hiw-text g_fadeIn">
              <span className="text-white">Console-level immersion</span> now
              fits in your palm, with hardware-accelerated ray tracing and mesh
              shading.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Breakthrough</p>
            <p className="hiw-bigtext">GPU Architecture</p>
            <p className="hiw-text">6-core design with hardware ray tracing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
