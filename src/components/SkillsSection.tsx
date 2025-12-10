// src/components/SkillsSection.tsx
import React from 'react';
import SkillsSphere from './SkillsSphere';
import { skillCategories, Skill } from '@/data/skills';

// Reusable component for the skill "pills" inside the cards
const SkillPill = ({ skill }: { skill: Skill }) => (
    <div className="bg-accent/20 text-accent px-3 py-1 text-sm rounded-full font-medium flex items-center gap-2 hover:bg-accent/30 transition-colors">
        <skill.icon className="text-lg" />
        <span>{skill.name}</span>
    </div>
);

// Reusable component for the skill category cards
const SkillCard = ({ title, skills }: { title: string; skills: Skill[] }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-accent/30 hover:shadow-glow-card transition-shadow duration-300">
        <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => <SkillPill key={skill.name} skill={skill} />)}
        </div>
    </div>
);

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-primary">Skills</span></h2>

            {/* The animated sphere of logos */}
            <SkillsSphere />

            {/* The grid of skill cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {skillCategories.map((category) => (
                    <SkillCard
                        key={category.title}
                        title={category.title}
                        skills={category.skills}
                    />
                ))}
            </div>
        </section>
    );
}