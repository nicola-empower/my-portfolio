"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';

interface ProjectLivePreviewProps {
    url: string | null;
    title: string;
    isMobile?: boolean;
}

const ProjectLivePreview: React.FC<ProjectLivePreviewProps> = ({ url, title, isMobile = false }) => {
    const [isLoading, setIsLoading] = useState(true);
    // Reset loading state when URL changes
    useEffect(() => {
        setIsLoading(true);
    }, [url]);

    if (isMobile) return null; // Don't render on mobile

    return (
        <div className="sticky top-24 w-full h-[600px] bg-gray-900 rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden hidden lg:flex flex-col">
            {/* Browser Toolbar Mockup */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-gray-900 flex-1 ml-4 px-3 py-1 rounded text-xs text-gray-400 font-mono truncate">
                    {url || "No Preview Available"}
                </div>
            </div>

            {/* Content Area */}
            <div className="relative flex-1 bg-white">
                <AnimatePresence mode="wait">
                    {url ? (
                        <motion.div
                            key={url}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                        >
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                                    <FaSpinner className="animate-spin text-4xl text-primary" />
                                </div>
                            )}
                            <iframe
                                src={url}
                                title={`Preview of ${title}`}
                                className="w-full h-full border-0"
                                onLoad={() => setIsLoading(false)}
                                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                            />
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full bg-gray-900 text-text-muted">
                            <div className="p-4 rounded-full bg-gray-800 mb-4">
                                <FaExternalLinkAlt className="text-3xl text-gray-600" />
                            </div>
                            <p>Preview not available for this project</p>
                        </div>
                    )}
                </AnimatePresence>

                {/* Overlay to prevent interaction stealing while scrolling */}
                {/* We allow pointer events only on hover if desired, but blocking keeps scroll smooth */}
                <div className="absolute inset-0 bg-transparent" />
            </div>

            {/* Footer with actual link action */}
            {url && (
                <div className="absolute bottom-4 right-4 pointer-events-auto">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-lg shadow-lg transition-colors text-sm font-bold"
                    >
                        Visit Live Site <FaExternalLinkAlt size={12} />
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectLivePreview;
