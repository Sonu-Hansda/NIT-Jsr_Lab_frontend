"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import groupPhoto from "@/assets/images/group_photo.png";

function Gallery() {

  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative block rounded-xl overflow-hidden"
          >
            <Image
              src={groupPhoto}
              alt="Gallery Image"
              width={560}
              height={400}
              className="rounded-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative block rounded-xl overflow-hidden"
          >
            <Image
              src={groupPhoto}
              alt="Gallery Image"
              width={560}
              height={400}
              className="rounded-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative block rounded-xl overflow-hidden"
          >
            <Image
              src={groupPhoto}
              alt="Gallery Image"
              width={560}
              height={400}
              className="rounded-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative block rounded-xl overflow-hidden"
          >
            <Image
              src={groupPhoto}
              alt="Gallery Image"
              width={560}
              height={400}
              className="rounded-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative block rounded-xl overflow-hidden"
          >
            <Image
              src={groupPhoto}
              alt="Gallery Image"
              width={560}
              height={400}
              className="rounded-xl w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;