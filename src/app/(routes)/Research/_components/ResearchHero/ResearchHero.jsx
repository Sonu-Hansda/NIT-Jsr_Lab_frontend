"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

export default function Hero({ title, subtitle, imageUrl }) {
  const { ref, controls } = useAnimationHook();

  return (
    <div className="h-[64vh] md:h-[82vh] overflow-hidden relative">
      <Image
        src={imageUrl}
        alt="hero img"
        className="w-full h-full object-cover opacity-75 animate-zoom"
        width={1920}
        height={1080}
        priority
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 md:left-48 text-center w-full max-w-4xl px-4 z-10"
      >
        <div className="backdrop-blur-md bg-white/20 border border-white/10 rounded-lg shadow-lg p-6 md:p-8 w-full mx-auto">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#073863d7] mb-4 break-words">
            {title}
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-800 break-words">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
}