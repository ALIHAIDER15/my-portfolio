"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4 pb-20">

      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 10 }}
        className="mt-50">
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex  items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Ali Haider
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack Developer Based in Doha Qatar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo">
        I am a Full Stack Developer with a passion for creating dynamic and responsive web applications.
        I specialize in both front-end and back-end development, ensuring seamless user experiences and robust functionality.
        My expertise includes .NET, React, Azure, and various databases.
        I thrive on solving complex problems and continuously learning new technologies to enhance my skills.
        Let's build something amazing together!
      </motion.p>

      <div className="flex flex-col sm:flex-row  items-center gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent cursor-default"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/Ali_Haider_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4 " />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
