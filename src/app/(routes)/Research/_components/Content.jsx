"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const Content = ({ link, text, imageUrl, thumbnailImage }) => {
  const { ref, controls } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-wrap justify-around items-start bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 md:p-8 mx-auto my-10 max-w-[1256px]"
    >
      <div className="flex-[1_1_330px] h-full p-4 m-2 max-w-[600px] relative">
        <div className="w-full mb-5 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt="Research Image"
            width={1000}
            height={600}
            layout="responsive"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex-[1_1_330px] p-4 m-2 max-w-[600px]">
        <h3 className="pb-6 text-xl text-sky-900 opacity-95 tracking-wide font-bold">
          RESEARCH CONTENT
        </h3>
        <p className="text-sm text-gray-700 tracking-wider pb-6">{text}</p>
        <Button text={"Research Contents PDF"} href={link || "/"} />
      </div>

      <div className="w-full h-[40vw] bg-blue-500 relative lg:max-h-[400px] xl:max-h-[400px] py-4 my-4 rounded-lg overflow-hidden">
        <Image
          src={thumbnailImage}
          alt="Content Image"
          layout="fill"
          className="object-cover"
          priority={false}
        />
      </div>
    </motion.div>
  );
};

export default Content;