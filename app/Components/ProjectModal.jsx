"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets";

const ProjectModal = ({ project, onClose }) => {
    // Close modal when user presses the Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);

        // Lock body scroll when modal is open
        document.body.style.overflow = "hidden";

        // Cleanup: remove listener + unlock scroll when modal closes
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    // If no project is selected, don't render anything
    if (!project) return null;

    return (
        // BACKDROP — dark semi-transparent overlay behind the modal
        // Clicking it closes the modal
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            {/* MODAL CARD — the white popup box */}
            {/* e.stopPropagation() prevents clicks INSIDE the modal from closing it */}
            <motion.div
                className="relative bg-white dark:bg-darkTheme rounded-2xl shadow-2xl 
          w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 40 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* CLOSE BUTTON (X) — top right corner */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center 
            rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 
            transition cursor-pointer"
                >
                    <span className="text-lg leading-none dark:text-white">✕</span>
                </button>

                {/* PROJECT IMAGE — displayed at the top of the modal */}
                <div className="w-full h-56 sm:h-64 relative rounded-t-2xl overflow-hidden bg-white dark:bg-gray-100 flex items-center justify-center p-2 border-b border-gray-200 dark:border-white/10">
                    <div className="relative w-full h-full max-w-2xl mx-auto">
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            fill
                            className={`object-contain ${project.bgImage.match(/\\.(jpg|jpeg)$/i) ? 'mix-blend-multiply drop-shadow-none' : 'drop-shadow-sm'} transition-transform duration-300`}
                            style={{
                                transform: project.bgImage.includes('GCO') ? 'scale(1.1)' : project.bgImage.includes('NFS-Ascent') ? 'scale(1.5)' : 'scale(1)'
                            }}
                        />
                    </div>
                </div>

                {/* CONTENT SECTION — title, category, description, tech, buttons */}
                <div className="p-6 sm:p-8">
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
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-Ovo leading-tight">
                            {project.title}
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="mt-4 text-gray-600 dark:text-white/80 leading-relaxed font-ovo text-[15px]">
                        {project.description.split('\\n').map((line, index) => {
                            if (line.trim() === '') return <br key={index} />;
                            if (line.startsWith('**') && line.endsWith('**')) {
                                return <h4 key={index} className="font-bold text-gray-900 dark:text-white mt-4 mb-2">{line.replaceAll('**', '')}</h4>;
                            }
                            if (line.trim().startsWith('•')) {
                                return (
                                    <ul key={index} className="list-disc pl-5 mb-1 space-y-1">
                                        <li className="pl-1 text-gray-600 dark:text-white/80">{line.replace('•', '').trim()}</li>
                                    </ul>
                                );
                            }
                            return <p key={index} className="mb-3">{line}</p>;
                        })}
                    </div>

                    {/* TECH STACK — array of pill-shaped tags */}
                    {project.techStack && project.techStack.length > 0 && (
                        <div className="mt-5">
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-white/90 mb-2">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium rounded-full 
                      bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/80"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ACTION BUTTONS & INTERNAL BADGE */}
                    <div className="flex gap-3 mt-6">
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 bg-black text-white text-sm rounded-full 
                    hover:bg-black/80 transition flex items-center gap-2 
                    dark:bg-white dark:text-black dark:hover:bg-white/80"
                            >
                                Live Demo
                                <Image src={assets.right_arrow_white} alt="" className="w-3 dark:invert" />
                            </a>
                        ) : !project.githubUrl ? (
                            <span className="px-6 py-2.5 bg-black text-white text-sm rounded-full 
                    cursor-not-allowed opacity-90 flex items-center gap-2 
                    dark:bg-white dark:text-black">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                Internal System
                            </span>
                        ) : null}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 border border-gray-400 text-sm rounded-full 
                    hover:bg-gray-50 transition dark:border-white/50 dark:text-white 
                    dark:hover:bg-darkHover"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
