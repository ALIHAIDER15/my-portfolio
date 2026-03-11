"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 pb-96 scroll-mt-20 mt-20">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-Ovo">About me</motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-64 sm:w-72 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3x1"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1">
          <p className="mb-6 max-w-2xl font-ovo text-[15px] leading-relaxed">
            Being a Senior Software Engineer with 6+ years of experience,
            I have delivered projects for prestigious clients such as
            Mercedes‑Benz Group AG / BMW AG,
            Qatar Energy,
            Ministry of Foreign Affairs (MOFA),
            Qatar Olympic Committee (Organizer of FIFA World Cup Qatar) and
            Qatar Government Office (GCO).
            I specialize in building scalable web applications using .NET, React, Azure, and modern databases,
            ensuring seamless user experiences and robust functionality. I thrive on solving complex problems,
            collaborating with teams, and continuously learning new technologies to create impactful solutions.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:translate-y-1 duration-500 shadow-[4px_4px_#000] dark:border-white dark:shadow-white dark:hover:bg-darkHover"
                key={index}
              >
                <Image src={icon} alt={title} className="w-6 mt-1 dark:hidden" />
                <Image src={iconDark} alt={title} className="w-6 mt-1 hidden dark:block" />
                <h3 className="my-2 font-semibold text-gray-700 dark:text-white text-md">{title}</h3>
                <p className="text-gray-600 text-xs leading-snug dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="my-4 text-grey-700 font-Ovo">Tools I use</motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4">
            {toolsData.map(({ icon, name }, index) => (
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                key={index}
                className="group relative flex items-center justify-center w-10 
                    sm:w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 dark:border-white/50 bg-white/10 dark:bg-white/5 hover:shadow-md"
              >
                <Image src={icon} alt={name} className="w-5 sm:w-6 object-contain" />

                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-[10px] sm:text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-white/10 z-10">
                  {name}
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
