"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectModal from "./ProjectModal";

const Work = () => {
  // State to track which project is selected (null = no modal open)
  const [selectedProject, setSelectedProject] = useState(null);

  // State to track how many projects to display initially
  const [visibleCount, setVisibleCount] = useState(4);

  // Categories for filtering
  const categories = ["All", "Enterprise", "Government", "Management", "Freelance"];
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All"
    ? workData
    : workData.filter(project => project.category === activeFilter);

  return (
    <div id="Work" className="w-full px-[12%] py-10 mb-24 scroll-mt-20 mt-20">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">My Portfolio</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-Ovo">My Latest Work </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        welcome to my portfolio! Here, you can explore a selection of my recent
        projects that showcase my skills and creativity. Each project reflects
        my dedication to delivering high-quality work and my passion for web
        development. Feel free to browse through the projects, and if you have
        any questions or would like to collaborate, don't hesitate to reach out!
      </motion.p>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveFilter(category);
              setVisibleCount(4); // Reset visible count on filter change
            }}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${activeFilter === category
              ? "bg-rose-600 text-white border-rose-600 shadow-md scale-105"
              : "border-gray-300 text-gray-600 hover:border-rose-600 hover:text-rose-600 dark:border-white/20 dark:text-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 my-10 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.title}
              className="group cursor-pointer rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1a1c23] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden h-full"
              onClick={() => setSelectedProject(project)}
            >
              {/* Top Text Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category/Client Tags and Title - Stacked vertically */}
                <div className="mb-6">
                  <div className="flex flex-col items-start gap-2 mb-4">
                    <span className="text-[10px] sm:text-xs font-bold px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-[#c8c2ff] dark:text-[#1c1a3b] rounded-full tracking-wider uppercase">
                      {project.category}
                    </span>
                    {project.client && (
                      <span className="text-[10px] sm:text-xs font-semibold px-4 py-2 bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300 rounded-full">
                        {project.client}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-Ovo leading-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {project.shortDescription || project.description}
                </p>
              </div>

              {/* Bottom Image Area */}
              <div className="px-5 pb-5 mt-auto">
                <div
                  className="w-full aspect-[4/3] rounded-t-xl sm:rounded-xl shadow-inner border border-gray-200 dark:border-white/5 bg-white dark:bg-gray-100 flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-[1.03] relative overflow-hidden"
                >
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className={`object-contain p-2 ${project.bgImage && project.bgImage.match(/\.(jpg|jpeg)$/i) ? 'mix-blend-multiply drop-shadow-none' : 'drop-shadow-sm'} transition-transform duration-300`}
                    style={{
                      transform: project.bgImage && project.bgImage.includes('GCO') ? 'scale(1.1)' : project.bgImage && project.bgImage.includes('NFS-Ascent') ? 'scale(1.5)' : 'scale(1)'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleCount < filteredProjects.length && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => setVisibleCount(filteredProjects.length)}
          className="w-max flex items-center justify-center gap-2 text-gray-700 
            border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 
            hover:bg-lightHover duration-500 dark:text-white dark:border-white/50 dark:hover:bg-darkHover cursor-pointer"
        >
          Show more{" "}
          <Image
            src={assets.right_arrow_bold}
            alt="Right Arrow"
            className="w-5"
          />
        </motion.button>
      )}

      {/* PROJECT MODAL — rendered when a project card is clicked */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
