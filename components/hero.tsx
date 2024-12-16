"use client";

import { Link } from "@/navigation";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
// import { QuickBooking } from "./quick-booking";

export function Hero({ hero, common }: IntlMessages) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(videoRef);

  const titleY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const buttonY = useTransform(scrollY, [0, 500], [0, 150]);
  const videoY = useTransform(scrollY, [0, 1000], [0, -200]);
  // const bookY = useTransform(scrollY, [0, 500], [0, -200]);

  useEffect(() => {
    if (isInView && videoRef.current?.paused) {
      videoRef.current.play();
    }
    if (!isInView && videoRef.current && !videoRef.current?.paused) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y: videoY }} className="absolute inset-0 h-[120%]">
        <video
          ref={videoRef}
          playsInline
          autoPlay
          loop
          muted={isMuted}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-v0.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20">
        <div className="container mx-auto px-4 h-full">
          <div className="h-full lg:flex lg:gap-8 items-center justify-center lg:px-10 2xl:px-28 max-lg:grid">
            <div className="flex my-auto flex-col justify-center items-center lg:items-start text-center lg:text-left text-white">
              <motion.h1
                style={{ y: titleY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                {hero.title}
              </motion.h1>
              <motion.p
                style={{ y: textY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl mb-8 max-w-2xl lg:max-w-none"
              >
                {hero.subtitle}
              </motion.p>
              

              <div className="flex justify-center lg:justify-between items-center w-full">
                
              <motion.button
                style={{ y: buttonY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all lg:self-start"
              >
                <Link href={"#booking" as "/"}>{common.book}</Link>
              </motion.button>

              <motion.button
                onClick={() => setIsMuted(!isMuted)}
                className="max-lg:hidden z-50 p-3 rounded-full bg-white/50 hover:bg-black/70 transition-colors border border-white/20 backdrop-blur-sm"
                style={{ y: buttonY }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 }}

                aria-label={isMuted ? hero.unmute : hero.mute}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-[#555]" />
                ) : (
                  <Volume2 className="w-6 h-6 text-[#555]" />
                )}
              {isMuted && (
                <motion.div
                  className="absolute -inset-1"
                  animate={{
                    scale: [1, 1.3, 1.1, 1, 1.4],
                    opacity: [0.5, 0.2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/30" />
                </motion.div>
              )}
              </motion.button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white lg:hidden"
      >
                      <motion.button
                onClick={() => setIsMuted(!isMuted)}
                className="lg:hidden z-50 p-3 rounded-full bg-white/50 hover:bg-black/70 transition-colors border border-white/20 backdrop-blur-sm"
                style={{ y: buttonY }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 }}

                aria-label={isMuted ? hero.unmute : hero.mute}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-[#555]" />
                ) : (
                  <Volume2 className="w-6 h-6 text-[#555]" />
                )}
              {isMuted && (
                <motion.div
                  className="absolute -inset-1"
                  animate={{
                    scale: [1, 1.3, 1.1, 1, 1.4],
                    opacity: [0.5, 0.2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/30" />
                </motion.div>
              )}
              </motion.button>
        {/* <ChevronDown className="w-8 h-8 animate-bounce" /> */}
      </motion.div>
    </div>
  );
}
