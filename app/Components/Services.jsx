"use client";
import { serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Services = () => {
  return (
    <>
      <div id='Services' className="w-full px-[12%] py-10 scroll-mt-20 mt-20 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/header-bg-color.png')] bg-cover bg-no-repeat bg-center opacity-30 dark:opacity-10 z-[-1]"></div>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400 uppercase tracking-widest">Core Competencies</motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-5xl font-Ovo bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">Technical Expertise</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300">
          I specialize in delivering high-value, scalable solutions that meet complex enterprise requirements. From robust backend architectures to intelligent AI integrations, I ensure that your systems operate seamlessly, securely, and efficiently.
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 relative z-10'>
          {serviceData.map(({ icon, title, description }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden border border-gray-200 bg-white/50 backdrop-blur-sm rounded-2xl px-8 py-10 
             cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-darkTheme/50 dark:hover:border-blue-500/50">

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              <div>
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-xl mb-6 shadow-sm border border-gray-100 dark:bg-white/5 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Image src={icon} alt={title} className="w-7 h-7 object-contain opacity-80" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
