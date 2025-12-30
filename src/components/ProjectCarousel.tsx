"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

interface Project {
    title: string;
    role: string;
    summary: string;
    value: string;
    technical_scope: string;
    link?: string;
    deployment_type?: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Reset index when projects array changes (e.g. filtering)
    useEffect(() => {
        setActiveIndex(0);
    }, [projects]);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const getVisibleProjects = () => {
        if (projects.length === 0) return [];

        // Logic to get 3 items: prev, current, next
        const prevIndex = (activeIndex === 0 ? projects.length - 1 : activeIndex - 1);
        const nextIndex = (activeIndex + 1) % projects.length;

        return [
            { ...projects[prevIndex], index: prevIndex, position: 'left' },
            { ...projects[activeIndex], index: activeIndex, position: 'center' },
            { ...projects[nextIndex], index: nextIndex, position: 'right' }
        ];
    };

    if (!projects.length) {
        return <div className="text-center text-gray-500 py-20">No projects found in this category.</div>;
    }

    return (
        <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-10">

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 z-20 p-4 bg-gray-900/50 hover:bg-primary/20 rounded-full text-white backdrop-blur-md transition-all border border-white/10"
            >
                <FaChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 z-20 p-4 bg-gray-900/50 hover:bg-primary/20 rounded-full text-white backdrop-blur-md transition-all border border-white/10"
            >
                <FaChevronRight size={24} />
            </button>

            {/* Carousel Container */}
            <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center perspective-1000">
                <AnimatePresence initial={false} mode="popLayout">
                    {/* We render a key based on activeIndex to force re-renders for specialized transitions if needed, 
                but for a carousel, keeping positions stable is better. 
                Here we map the 'positions' to styling.
            */}

                    {getVisibleProjects().map((project, i) => {
                        const isCenter = project.position === 'center';
                        const isLeft = project.position === 'left';

                        // Variants for positions
                        const xOffset = isCenter ? 0 : isLeft ? -300 : 300;
                        const scale = isCenter ? 1 : 0.8;
                        const opacity = isCenter ? 1 : 0.5;
                        const zIndex = isCenter ? 10 : 5;
                        const rotateY = isCenter ? 0 : isLeft ? 25 : -25;
                        const blur = isCenter ? 0 : 4;

                        return (
                            <motion.div
                                key={`${project.title}-${project.index}`}
                                layout
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    x: xOffset,
                                    scale: scale,
                                    opacity: opacity,
                                    zIndex: zIndex,
                                    rotateY: rotateY,
                                    filter: `blur(${blur}px)`
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                className={`absolute w-[90%] md:w-[600px] bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl flex flex-col ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                                onClick={() => {
                                    if (isLeft) prevSlide();
                                    if (!isLeft && !isCenter) nextSlide();
                                }}
                            >
                                {/* Header / Top Bar */}
                                <div className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    {project.deployment_type && (
                                        <span className="text-xs font-mono text-gray-400 uppercase">{project.deployment_type}</span>
                                    )}
                                </div>

                                {/* Content Body */}
                                <div className="p-8 flex-1 flex flex-col relative overflow-y-auto">

                                    {/* Background Gradient for Active Card */}
                                    {isCenter && (
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
                                    )}

                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-primary font-semibold mb-6">{project.role}</p>

                                    <div className="space-y-4 mb-8 flex-1">
                                        <div>
                                            <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Summary</h4>
                                            <p className="text-text-muted text-sm leading-relaxed">{project.summary}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Impact</h4>
                                            <p className="text-gray-300 text-sm">{project.value.replace(/\*\*/g, '')}</p>
                                        </div>
                                    </div>

                                    {/* Footer / Tech & Links */}
                                    <div className="pt-4 border-t border-gray-800">
                                        <div className="mb-4">
                                            <p className="text-xs text-gray-500 font-mono mb-2">stack_trace:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technical_scope.split(',').map((tech, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-primary hover:bg-primary-dark text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
                                                >
                                                    Visit Live <FaExternalLinkAlt size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Pagination / Progress Dots */}
            <div className="absolute bottom-0 flex gap-2">
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-primary w-6' : 'bg-gray-700 hover:bg-gray-500'}`}
                    />
                ))}
            </div>
        </div>
    );
}
