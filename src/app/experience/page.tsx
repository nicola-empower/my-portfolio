"use client";
import { motion } from 'framer-motion';
import InfoCard from '@/components/InfoCard';
import { FaGraduationCap, FaGlobe, FaBrain, FaBolt, FaComments, FaMountain } from 'react-icons/fa';

// --- Data Definitions ---

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
        title: "International Experience (North Cyprus)",
        company: "Various Sectors",
        dates: "2010 – 2014",
        description: "Roles: Teaching Assistant, Sales, Hospitality & Professional Modelling. Impact: Developed cultural adaptability and strong communication skills. Teaching honed my ability to explain complex concepts, while living abroad built self-reliance."
    },
    {
        title: "Sales & Customer Service",
        company: "Various Roles",
        dates: "2003 – 2010",
        description: "Impact: A solid foundation in direct sales, lead generation, and identifying client needs."
    }
];

const toolkitData = [
    { title: "Frontend Core", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
    { title: "Styling & UI", items: ["Tailwind CSS", "Framer Motion", "CSS Modules", "Responsive Design"] },
    { title: "Backend & Data", items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Supabase", "REST APIs", "Google Apps Script"] },
    { title: "Tools & Ecosystem", items: ["Git", "GitHub", "Vercel", "Netlify", "Google Cloud", "VS Code", "Redux", "Tanstack Query", "NextAuth"] }
];

const superpowers = [
    { title: "Operational Intelligence", icon: <FaBrain />, desc: "I see the business flaw before I write the code fix." },
    { title: "Crisis Management", icon: <FaBolt />, desc: "Honed during 10 years in care; code bugs don't panic me." },
    { title: "Communication", icon: <FaComments />, desc: "I speak \"Client\", \"Designer\", and \"Developer.\"" },
    { title: "Resilience", icon: <FaMountain />, desc: "I solve problems and love a challenge." }
];

// --- Components ---

const ExperienceCard = ({ title, company, dates, description, projects }: any) => (
    <motion.div
        className="relative border-l-2 border-primary/50 pl-8 pb-12 last:pb-0"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
        <p className="font-semibold text-primary mb-1">{company} <span className="text-text-muted text-sm font-normal">| {dates}</span></p>
        <p className="text-text-main mb-3">{description}</p>
        {projects && (
            <div className="mt-3 bg-gray-900/40 p-4 rounded-md">
                <p className="text-sm font-semibold text-accent mb-2">Selected Projects:</p>
                <ul className="list-disc list-inside text-sm text-text-muted space-y-1">
                    {projects.map((p: string, i: number) => <li key={i}>{p}</li>)}
                </ul>
            </div>
        )}
    </motion.div>
);

export default function ExperiencePage() {
    return (
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header Section */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-bold mb-4">Nicola <span className="text-primary">Berry</span></h1>
                <p className="text-xl text-text-muted mb-2">Falkirk, Scotland</p>
                <h2 className="text-2xl font-medium text-secondary mb-6">Full Stack Developer & Business Process Architect</h2>
                <div className="inline-block bg-accent/20 px-6 py-3 rounded-full border border-accent/20">
                    <p className="text-accent italic">"Bridging the gap between Business Operations and Software Engineering."</p>
                </div>
                <p className="mt-8 text-lg text-text-main max-w-3xl mx-auto leading-relaxed">
                    I don't just write code; I build business engines. With a background in operations, I thoroughly enjoy creating website applications, dynamic websites, internal business tools, white-label SaaS platforms and automation solutions that eliminate friction and drive ROI.
                </p>
            </motion.div>

            {/* About Me Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-3xl font-bold text-secondary border-b border-gray-700 pb-2">About Me</h3>
                    <div className="text-text-main space-y-4 leading-relaxed">
                        <p>
                            "My path to software engineering wasn't traditional and that is my greatest asset. With over a decade spent in high-pressure care environments and direct sales, I learned to anticipate needs, manage crises, and communicate clearly long before I wrote my first line of code.
                        </p>
                        <p>
                            After founding Empower Virtual Assistant Services to help businesses streamline their operations, I realised that the true bottleneck wasn't just administration; it was the lack of bespoke, intelligent software; none currently meet the full needs of every business. I pivoted to engineering to build the solutions my clients couldn't find.
                        </p>
                        <p>
                            Today, I combine that deep operational logic with a modern tech stack (React, TypeScript, Next.js). I don't just build websites; I build platforms like VowSuite: resilient, intuitive, and designed with a level of empathy and efficiency that you only get from living a life fully lived. As a mum of three, I know that time is our most valuable currency, so I build software that saves it."
                        </p>
                    </div>
                </motion.div>

                {/* Toolkit Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {toolkitData.map((t, i) => (
                        <InfoCard key={i} title={t.title} items={t.items} className="h-full" />
                    ))}
                </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-20">
                <h3 className="text-3xl font-bold text-secondary border-b border-gray-700 pb-6 mb-10">Professional <span className="text-primary">Experience</span></h3>
                <div className="ml-4 md:ml-12 border-l border-gray-800 pl-8">
                    {experienceData.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="text-3xl font-bold text-secondary border-b border-gray-700 pb-2 mb-6 flex items-center gap-3">
                        <FaGraduationCap className="text-primary" /> Education
                    </h3>
                    <div className="space-y-6">
                        <InfoCard
                            title="HND Business Administration"
                            subtitle="SCQF Level 8 | Scotland"
                            description="Focus: Business Law, Economics, Financial Management. Relevance: Provides the business logic foundation for my software architecture."
                        />
                        <InfoCard
                            title="Scottish Highers"
                            subtitle="SCQF Level 6"
                            items={["STEM: Mathematics, Chemistry", "Languages: English, Spanish, French", "Vocational: Hospitality"]}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-secondary border-b border-gray-700 pb-2 mb-6 flex items-center gap-3">
                        <FaGlobe className="text-primary" /> Languages
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-800/30 p-4 rounded-lg border border-accent/10">
                            <h4 className="font-bold text-secondary">English</h4>
                            <p className="text-text-muted">Native</p>
                        </div>
                        <div className="bg-gray-800/30 p-4 rounded-lg border border-accent/10">
                            <h4 className="font-bold text-secondary">Spanish</h4>
                            <p className="text-text-muted">Higher Proficiency (Academic)</p>
                        </div>
                        <div className="bg-gray-800/30 p-4 rounded-lg border border-accent/10">
                            <h4 className="font-bold text-secondary">French</h4>
                            <p className="text-text-muted">Higher Proficiency (Academic)</p>
                        </div>
                        <div className="bg-gray-800/30 p-4 rounded-lg border border-accent/10">
                            <h4 className="font-bold text-secondary">Turkish</h4>
                            <p className="text-text-muted">Conversational</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Superpowers Section */}
            <div>
                <h3 className="text-3xl font-bold text-secondary text-center mb-10">The <span className="text-accent">Superpowers</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {superpowers.map((power, index) => (
                        <InfoCard
                            key={index}
                            title={power.title}
                            description={power.desc}
                            icon={power.icon}
                            className="text-center flex flex-col items-center"
                        />
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something <span className="text-primary">Great</span></h2>
            </div>
        </section>
    );
}