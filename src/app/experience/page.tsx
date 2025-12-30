"use client";
import React from 'react';
import { motion } from 'framer-motion';
import InfoCard from '@/components/InfoCard';
import { FaGraduationCap, FaGlobe, FaBrain, FaBolt, FaComments, FaMountain, FaBriefcase } from 'react-icons/fa';

// --- Data Definitions (Same as before, simplified for this view) ---
const experienceData = [
    {
        title: "Founder & Lead Developer",
        company: "Empower Digital Solutions",
        dates: "2025 – Present",
        description: "Architecting and deploying full-stack web applications and premium web designs.",
        projects: [
            "VowSuite: White-Label SaaS Platform for Wedding Planners.",
            "The Zen Den: High-performance wellness studio platform.",
            "Bistro 44: Interactive dining experience & reservation engine.",
            "AURA: Cinematic personal branding platform."
        ]
    },
    {
        title: "Automation Engineer",
        company: "Empower Automation",
        dates: "2025 – Present",
        description: "Designing bespoke Google Apps Script solutions to bridge API gaps. Transforming manual business workflows into automated systems."
    },
    {
        title: "Operations Manager",
        company: "Empower Virtual Assistant Services",
        dates: "2020 – 2025",
        description: "Founded and scaled a virtual assistance agency, managing business finances, GDPR compliance, and operational systems. The Pivot: Realised 80% of admin tasks could be solved with better code, sparking my transition to engineering."
    },
    {
        title: "Professional Care & Advocacy",
        company: "Private & Public Sector",
        dates: "2014 – 2020",
        description: "Role: Dedicated care professional and advocate for vulnerable individuals. Transferable Skills: Crisis management, high-pressure decision making and unwavering resilience."
    },
    {
        title: "International Experience",
        company: "North Cyprus",
        dates: "2010 – 2014",
        description: "Roles: Teaching Assistant, Sales, Hospitality & Professional Modelling. Impact: Developed cultural adaptability and strong communication skills."
    },
    {
        title: "Sales & Customer Service",
        company: "Various Roles",
        dates: "2003 – 2010",
        description: "Impact: A solid foundation in direct sales, lead generation, and identifying client needs."
    }
];

const superpowers = [
    { title: "Operational Intelligence", icon: <FaBrain />, desc: "I see the business flaw before I write the code fix." },
    { title: "Crisis Management", icon: <FaBolt />, desc: "Honed during 10 years in care; code bugs don't panic me." },
    { title: "Communication", icon: <FaComments />, desc: "I speak \"Client\", \"Designer\", and \"Developer.\"" },
    { title: "Resilience", icon: <FaMountain />, desc: "I solve problems and love a challenge." }
];

const GlassTimelineCard = ({ data, index }: { data: any, index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* The Dot on the Timeline */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-900 z-10 transform -translate-x-[10px] md:-translate-x-1/2">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
            </div>

            {/* Empty space for the other side (Desktop only) */}
            <div className="hidden md:block w-5/12" />

            {/* The Content Card */}
            <div className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-5/12">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md shadow-xl hover:border-primary/30 transition-all hover:bg-white/10 group">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{data.title}</h3>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">{data.dates}</span>
                    </div>
                    <p className="text-sm font-bold text-secondary mb-4 flex items-center gap-2">
                        <FaBriefcase className="text-xs" /> {data.company}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{data.description}</p>

                    {data.projects && (
                        <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                            <p className="text-xs font-bold text-gray-300 mb-2 uppercase tracking-wide">Key Projects</p>
                            <ul className="space-y-1">
                                {data.projects.map((p: string, i: number) => (
                                    <li key={i} className="text-xs text-gray-500 pl-2 border-l-2 border-primary/30 truncate">{p}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};


export default function ExperiencePage() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            {/* Header */}
            <motion.div
                className="text-center mb-24"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    A timeline of transformation: from high-pressure crisis management to high-performance software engineering.
                </p>
            </motion.div>

            {/* Glass Timeline Container */}
            <div className="relative mb-32">
                {/* Centre Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent transform md:-translate-x-1/2 opacity-30" />

                {experienceData.map((exp, index) => (
                    <GlassTimelineCard key={index} data={exp} index={index} />
                ))}
            </div>

            {/* Superpowers Grid */}
            <div className="mb-20">
                <h3 className="text-3xl font-bold text-center text-white mb-12">My <span className="text-accent">Superpowers</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {superpowers.map((power, index) => (
                        <InfoCard
                            key={index}
                            title={power.title}
                            description={power.desc}
                            icon={power.icon}
                            className="text-center flex flex-col items-center bg-gray-900/50 backdrop-blur border border-white/5 hover:border-accent/40 transition-all"
                        />
                    ))}
                </div>
            </div>

            {/* Education (Simplified) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/5">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
                        <FaGraduationCap className="text-primary" /> Education
                    </h3>
                    <ul className="space-y-4 text-gray-400">
                        <li>
                            <strong className="text-white block">HND Business Administration</strong>
                            <span className="text-sm">SCQF Level 8 | Scotland (Business Law, Finance)</span>
                        </li>
                        <li>
                            <strong className="text-white block">Scottish Highers</strong>
                            <span className="text-sm">STEM, Languages & Vocational</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 justify-center md:justify-start">
                        <FaGlobe className="text-primary" /> Languages
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">English (Native)</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">Spanish (Academic)</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">French (Academic)</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10">Turkish (Conversational)</span>
                    </div>
                </div>
            </div>

        </section>
    );
}