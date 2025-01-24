"use client";
import React, { useState } from 'react';

const ViewMore = ({ width, colour, hovering }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="flex flex-col w-fit items-start cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative font-sans text-xl font-light text-right">
        <span className="mr-2" style={{ color: colour }}>
          View More
        </span>
        <span className="text-2xl transition-transform duration-300" style={{ color: colour }}>
          {hovering === "yes" || hovered ? '-' : '+'}
        </span>
      </div>

      <div
        className="relative h-[2px] rounded-xl overflow-hidden bg-white/50 mt-4 mb-7 lg:mb-3"
        style={{ width: `${width}px` }}
      >
        <div
          className={`absolute rounded-xl top-0 left-0 h-full transition-all duration-300 ${
            hovering === "yes" || hovered ? 'w-full bg-sky-400' : 'w-1/5 bg-sky-400'
          }`}
        ></div>
      </div>
    </span>
  );
};

export default ViewMore;