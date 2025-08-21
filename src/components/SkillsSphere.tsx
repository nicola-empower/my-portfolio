"use client";
import React, { useEffect } from 'react';

const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Express.js', 'MongoDB', 'Python', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Figma', 'Git', 'GitHub', 'REST APIs', 'Vercel', 'Framer Motion', 'Canva'
];

const colors = ['#9A5B8F', '#468585', '#7A93AC', '#E0D8E6'];

const SkillsSphere = () => {
    useEffect(() => {
        try {
            // @ts-ignore - TagCanvas is loaded from the script in layout.tsx
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
            });
        } catch (e) {
            console.error('Canvas error:', e);
            const canvas = document.getElementById('myCanvas');
            if (canvas) canvas.style.display = 'none';
        }
    }, []);

    return (
        <div className="w-full flex justify-center items-center h-[500px]">
            <canvas id="myCanvas" width="500" height="500"></canvas>
            <div id="tags" style={{ display: 'none' }}>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <a href="#" style={{ color: colors[index % colors.length] }}>
                                {skill}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkillsSphere;