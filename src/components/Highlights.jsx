import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { useState } from "react";

const Highlights = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  useGSAP(() => {
    // Only animate the title text
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
        y: 40,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  const videoConfig = {
    film: {
      youtubeEmbed: "https://www.youtube.com/embed/wqX6dLtkxak",
    },
    event: {
      youtubeEmbed: "https://www.youtube.com/embed/n446Ic4iHlg", // Apple event example
    },
  };

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading opacity-0">
            Discover the Innovation
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <button
              className="link cursor-pointer"
              onClick={() => setActiveVideo("film")}
            >
              Behind the Design
              <img src={watchImg} alt="watch" className="ml-2 inline" />
            </button>
            <button
              className="link cursor-pointer"
              onClick={() => setActiveVideo("event")}
            >
              Watch the event
              <img src={rightImg} alt="right" className="ml-2 inline" />
            </button>
          </div>
        </div>

        <VideoCarousel />
        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-teal-300 hover:text-gray-200 transition-colors"
              >
                Close
              </button>

              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`${videoConfig[activeVideo].youtubeEmbed}?autoplay=1&controls=1`}
                  className="w-full h-[50vh] md:h-[70vh]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded video"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Highlights;
