"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NewsCard = ({ date, title, description, viewMoreLink, galleryLink }) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-6"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col space-y-4">
        <span className="text-sm text-slate-500">{new Date(date).toLocaleDateString()}</span>
        <h2 className="text-2xl font-semibold text-sky-950">{title}</h2>
        <p className="text-slate-700">{description}</p>
        <div className="flex space-x-4">
          <Link href={viewMoreLink} className="text-sky-600 hover:text-sky-700">
            View More
          </Link>
          <Link href={galleryLink} className="text-sky-600 hover:text-sky-700">
            Gallery
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;