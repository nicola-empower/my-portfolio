"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardMinimalProps {
    title: string;
    role: string;
    summary: string;
    value: string;
    technical_scope: string;
    link?: string;
    deployment_type?: string;
    isActive: boolean;
    onActivate: () => void;
}

const ProjectCardMinimal: React.FC<ProjectCardMinimalProps> = ({
    title, role, summary, value, technical_scope, link, deployment_type, isActive, onActivate
}) => {
    const ref = useRef(null);
    // Trigger when 50% of the card is in view
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) {
            onActivate();
        }
    }, [isInView, onActivate]);

    return (
        <motion.div
            ref={ref}
            className={`p-6 rounded-xl border transition-all duration-500 ${isActive
                    ? 'bg-gray-800 border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] scale-[1.02]'
                    : 'bg-gray-900/40 border-gray-800 opacity-60 hover:opacity-100'
                }`}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-secondary' : 'text-gray-400'}`}>{title}</h3>
                {deployment_type && (
                    <span className="px-2 py-1 text-xs font-bold rounded bg-gray-700 text-gray-300 uppercase tracking-wider whitespace-nowrap ml-2">
                        {deployment_type}
                    </span>
                )}
            </div>

            <p className="font-semibold text-primary mb-4">{role}</p>

            <div className="mb-4">
                <p className="text-sm font-bold text-accent mb-1 uppercase tracking-wider">Impact</p>
                {/* Simplified rendering of value text */}
                <p className="text-text-main text-sm leading-relaxed">
                    {value.replace(/\*\*/g, '')}
                </p>
            </div>

            <div className="mb-4">
                <p className="text-sm font-bold text-accent mb-1 uppercase tracking-wider">Tech</p>
                <p className="text-text-muted text-sm border-l-2 border-gray-700 pl-3 italic">
                    {technical_scope.replace(/\*\*/g, '')}
                </p>
            </div>

            <p className="text-text-muted text-sm mb-4">{summary}</p>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors group"
                >
                    Visit Project <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                </a>
            )}
        </motion.div>
    );
};

export default ProjectCardMinimal;
