"use client";

import React from "react";
import { useNews } from "@/contexts/NewsContext";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import Link from "next/link";

function NewsDetailsPage() {
  const { news } = useNews();

  if (!news) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
        <BreadCrumbs />
        <p className="text-xl mt-4">No news selected</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-5 px-4 bg-gray-50 min-h-fit">
      {/* Breadcrumbs and Title */}
      <div className="max-w-[1256px] w-full flex flex-col sm:flex-row justify-between items-center mb-8">
        <BreadCrumbs />
        <h2 className="text-3xl sm:text-4xl text-sky-950 font-sans font-light mt-4 sm:mt-0">
          News Details
        </h2>
      </div>

      {/* News Card */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg overflow-hidden max-w-[1256px] w-full mb-14">
        <div className="p-6 sm:p-8">
          {/* News Title */}
          <h1 className="text-3xl sm:text-4xl font-sans font-light mb-6 text-center text-gray-900">
            {news.attributes.Title}
          </h1>

          {/* News Description */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {news.attributes.Description}
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link
              href={news.attributes.Pdf?.data?.attributes?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="transition duration-500 border-2 rounded-sm border-sky-500 bg-sky-500 text-white hover:bg-white hover:text-sky-500 py-2 px-6 text-lg cursor-pointer">
                Click for more details
              </div>
            </Link>
          </div>
        </div>

        {/* News Image */}
        {news.image && (
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover rounded-b-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsDetailsPage;