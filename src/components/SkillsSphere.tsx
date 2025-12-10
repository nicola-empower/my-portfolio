"use client";
import React, { useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { allSkills } from '@/data/skills';

const colors = ['#9A5B8F', '#468585', '#7A93AC', '#E0D8E6'];

// Helper to convert Icon component to Data URI
const iconToDataUrl = (Icon: React.ElementType, color: string) => {
    const svgString = renderToStaticMarkup(<Icon size={48} color={color} />);
    const encodedSvg = typeof window !== 'undefined' ? window.btoa(svgString) : Buffer.from(svgString).toString('base64');
    return `data:image/svg+xml;base64,${encodedSvg}`;
};

const SkillsSphere = () => {
    // State to hold valid image URLs to prevent hydration mismatches
    const [iconUrls, setIconUrls] = useState<string[]>([]);

    useEffect(() => {
        // Generate icon URLs only on client side
        const info = allSkills.map((skill, index) => {
            return iconToDataUrl(skill.icon, colors[index % colors.length]);
        });
        setIconUrls(info);
    }, []);

    useEffect(() => {
        if (iconUrls.length === 0) return;

        try {
            // @ts-ignore
            TagCanvas.Start('myCanvas', 'tags', {
                textColour: null,
                outlineColour: '#0000',
                reverse: true,
                depth: 0.8,
                maxSpeed: 0.05,
                weight: true,
                initial: [0.05, -0.05],
                activeCursor: 'pointer',
                tooltip: 'div',
                tooltipClass: 'canvas-tooltip',
                imageMode: 'image', // Use images only
                imagePosition: 'centre', // Center images
                bgColour: 'transparent',
            });
        } catch (e) {
            console.error('Canvas error:', e);
            const canvas = document.getElementById('myCanvas');
            if (canvas) canvas.style.display = 'none';
        }
    }, [iconUrls]);

    return (
        <div className="w-full flex justify-center items-center h-[500px]">
            {/* 
               We render the list once locally so references exist for TagCanvas to parse.
               TagCanvas looks for the 'tags' list.
             */}
            <div id="tags" style={{ display: 'none' }}>
                <ul>
                    {allSkills.map((skill, index) => (
                        <li key={index}>
                            <a href="#" onClick={(e) => e.preventDefault()} title={skill.name}>
                                {/* Render img tag with data URI src if available */}
                                {iconUrls[index] && (
                                    <img
                                        src={iconUrls[index]}
                                        width={50}
                                        height={50}
                                        alt={skill.name}
                                    />
                                )}
                                {/* Fallback text for when parsing if image fails or accessibility */}
                                <span className="hidden">{skill.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <canvas id="myCanvas" width="500" height="500"></canvas>
        </div>
    );
};

export default SkillsSphere;