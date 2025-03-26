"use client";

import { Link } from "@/navigation";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { QuickBooking } from "./quick-booking";
import { cn } from "@/lib/utils";
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
        <div className="mx-auto px-4 h-full container">
          <div className="lg:flex justify-center items-center lg:gap-8 max-lg:grid max-lg:grid-cols-1 lg:px-10 2xl:px-28 max-lg:py-32 h-full">
            <div className="flex flex-col justify-center items-center lg:items-start my-auto text-white lg:text-left text-center">
              <motion.h1
                style={{ y: titleY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 font-bold text-5xl lg:text-7xl"
              >
                {hero.title}
              </motion.h1>
              <motion.p
                style={{ y: textY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 lg:max-w-none max-w-2xl text-xl lg:text-2xl"
              >
                {hero.subtitle}
              </motion.p>

              <div className="flex justify-center lg:justify-between items-center w-full">
                {/* <motion.button
                  style={{ y: buttonY }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                  className="lg:self-start bg-white hover:bg-opacity-90 px-8 py-3 rounded-full font-semibold text-black transition-all"
                >
                  <Link href={"/booking"}>{common.book}</Link>
                </motion.button> */}

                <motion.button
                  onClick={() => setIsMuted(!isMuted)}
                  className="max-lg:hidden z-50 bg-white/50 hover:bg-black/70 backdrop-blur-sm p-3 border border-white/20 rounded-full transition-colors"
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
                      <div className="bg-white/30 rounded-full w-full h-full" />
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </div>
            <div
              className={cn(
                "lg:hidden"
                // "md:absolute w-full bottom-10 flex justify-center items-center z-50"
              )}
            >
              <QuickBooking small />
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "hidden lg:block",
          "lg:right-4 lg:bottom-4 z-10 lg:absolute"
        )}
      >
        <QuickBooking small />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="lg:hidden bottom-8 left-1/2 absolute text-white -translate-x-1/2 transform"
      >
        <motion.button
          onClick={() => setIsMuted(!isMuted)}
          className="lg:hidden z-50 bg-white/50 hover:bg-black/70 backdrop-blur-sm p-3 border border-white/20 rounded-full transition-colors"
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
              <div className="bg-white/30 rounded-full w-full h-full" />
            </motion.div>
          )}
        </motion.button>
        {/* <ChevronDown className="w-8 h-8 animate-bounce" /> */}
      </motion.div>
    </div>
  );
}
