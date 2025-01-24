"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ViewMore from "../ViewMoreComponent/ViewMoreComponent";
import Link from "next/link";

const TeamComponent = ({ title, description, link, imageUrl }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <Link href={link}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="relative h-[345px] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-full w-full">
          <Image
            src={imageUrl}
            alt="Research Image"
            fill
            className="object-cover hover:grayscale-0 transition-all duration-500"
          />

          <div
            className={`absolute inset-0 transition-all duration-300 ${
              hovered ? "bg-black/10 backdrop-blur-none" : "bg-black/40 backdrop-blur-sm"
            }`}
          />
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <motion.h2
            className="text-2xl lg:text-3xl font-sans font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {title}
          </motion.h2>

          <div className="self-end">
            <ViewMore width={90} colour="white" hovering={hovered ? "yes" : "no"} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default TeamComponent;