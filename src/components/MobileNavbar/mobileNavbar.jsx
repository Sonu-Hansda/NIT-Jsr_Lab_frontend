"use client";
import React, { useState } from 'react';
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { useResearchSubroutes, membersSubroutes, achievementsSubroutes, gallerySubroutes, updatesSubroutes } from '@/routes/navbarRoutes';

export const MobileNavbar = () => {
  const { researchSubroutes, loading } = useResearchSubroutes();

  const subroutes = [
    {
      name: 'Research',
      href: '/Research',
      subroutes: researchSubroutes,
    },
    {
      name: 'Members',
      href: '/',
      subroutes: membersSubroutes,
    },
    {
      name: 'Achievements',
      href: '/Achievements',
      subroutes: achievementsSubroutes,
    },
    {
      name: 'Gallery',
      href: '/Gallery',
      subroutes: gallerySubroutes,
    },
    {
      name: 'Updates',
      href: '/Updates',
      subroutes: updatesSubroutes,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      },
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden xl:hidden sm:visible md:visible fixed flex flex-row justify-between top-0 left-0 h-20 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-md">
      <span className="p-4 flex items-center">
        <Link href="/">
          <Image
            src={logo}
            height={70}
            width={70}
            alt="logo"
            className="hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      </span>

      <span className="mx-3 flex items-center justify-center z-60">
        <Hamburger toggled={isOpen} size={28} toggle={setOpen} />
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm pt-20"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-black/90 backdrop-blur-md rounded-lg mx-4 p-6 shadow-lg overflow-y-auto max-h-[80vh] scrollbar-hide"
              variants={itemVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {subroutes.map((section, index) => (
                <motion.div key={index} className="mb-6" variants={itemVariants}>
                  <h2 className="text-2xl text-cyan-200 opacity-90 mb-3">
                    <Link href={section.href} onClick={handleLinkClick}>
                      {section.name}
                    </Link>
                  </h2>
                  <hr className="h-[1px] w-48 bg-gray-300 mx-auto mb-4" />
                  <ul className="list-none p-0">
                    {section.subroutes.map((route, routeIndex) => (
                      <motion.li key={routeIndex} className="mb-3" variants={itemVariants}>
                        <Link href={route.href} onClick={handleLinkClick}>
                          <div className="block p-2 text-lg text-slate-200 hover:text-cyan-300 hover:bg-gray-800/50 rounded-lg transition duration-200 ease-in-out">
                            {route.name}
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};