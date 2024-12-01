"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { QuickBooking } from "./quick-booking";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(videoRef);
  
  const titleY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const buttonY = useTransform(scrollY, [0, 500], [0, 150]);
  const videoY = useTransform(scrollY, [0, 1000], [0, -200]);
  const bookY = useTransform(scrollY, [0, 500], [0, -200]);

  useEffect(() => {
    if (isInView && videoRef.current?.paused) {
      videoRef.current.play()
    }
    if (!isInView && videoRef.current &&!videoRef.current?.paused) {
      videoRef.current.pause()
    }
  }, [isInView])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 h-[120%]"
      >
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted={isMuted}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-v0.mp4" type="video/mp4" />
        </video>
        <Image
          src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5"
          alt="Mountain view from Refuge de Loriaz"
          fill
          className="object-cover hidden"
          priority
          quality={100}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20">
        <div className="container mx-auto px-4 h-full">
          {/* Two-column layout */}
          <div className="h-full lg:flex lg:gap-8 items-center lg:justify-between lg:px-10 2xl:px-28 max-lg:grid">
            {/* Left column - Hero content */}
            <div className="flex my-auto flex-col justify-center items-center lg:items-start text-center lg:text-left text-white  ">
              {/* Updated speaker icon button styling */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-2 left-1/2 z-50 p-4 rounded-full bg-white/50 hover:bg-black/70 transition-colors border border-white/20 backdrop-blur-sm"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-[#555]" />
        ) : (
          <Volume2 className="w-6 h-6 text-[#555]" />
        )}
      </button>
              <motion.h1
                style={{ y: titleY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                Refuge de Loriaz
              </motion.h1>
              <motion.p
                style={{ y: textY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl mb-8 max-w-2xl lg:max-w-none"
              >
                Experience the magic of the Alps at 2020m altitude
              </motion.p>
              <motion.button
                style={{ y: buttonY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all lg:self-start"
              >
                Book Your Stay
              </motion.button>
            </div>

            {/* Right column - QuickBooking */}
            <div className="hidden lg:flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full"
                style={{y: bookY}}
              >
                <QuickBooking small className="max-w-sm flex flex-col justify-center items-center  overflow-hidden" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Show bounce arrow only on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white lg:hidden"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>

      
    </div>
  );
}