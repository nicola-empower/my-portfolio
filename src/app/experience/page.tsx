"use client";
import { motion } from 'framer-motion';

// The new data from your HTML file.
const experiences = [
    {
        title: "Founder & Business Systems Architect",
        company: "Empower VA Services",
        dates: "May 2025 – Present",
        description: "Founded a specialist consultancy focused on providing bespoke automation and operational solutions for small businesses and entrepreneurs. Responsible for client consultation, system architecture, custom development, and project delivery. Initially started as a Virtual Assistant, but realised I could do so much more than offer basic administration."
    },
    {
        title: "Business Operations & Automation Lead",
        company: "O'Neill Trees & Timber Ltd.",
        dates: "December 2024 – May 2025",
        description: "Recruited for an administrative role, I rapidly expanded responsibilities to design and implement the company's operational, marketing, and compliance frameworks from scratch. I documented the entire customer journey, authored a comprehensive suite of Standard Operating Procedures (SOPs), and created the company's first GDPR Compliance Policy."
    },
    {
        title: "Technical Project",
        company: "My Wee Wander Planner",
        dates: "Self-Directed Project",
        description: "I developed a full-stack, single-page web application to manage detailed travel itineraries, packing lists, and budgets. The project demonstrates a strong proficiency in front-end development (HTML5, CSS3, JavaScript) and backend integration using a Firebase (Firestore) database for real-time data persistence."
    }
];

// This is the same reusable card component we used before.
const ExperienceCard = ({ title, company, dates, description }: typeof experiences[0]) => (
    <motion.div 
        className="bg-gray-800/50 p-6 rounded-lg border border-accent/30 w-full md:w-5/6 lg:w-2/3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
        <p className="font-semibold text-primary">{company}</p>
        <p className="text-sm text-text-muted mb-3">{dates}</p>
        <p className="text-text-main">{description}</p>
    </motion.div>
);

export default function ExperiencePage() {
    return (
        <section id="experience" className="py-20">
            {/* Updated the title to match your new content */}
            <h2 className="text-4xl font-bold text-center mb-12">Professional <span className="text-primary">Journey</span></h2>
            
            <div className="flex flex-col items-center gap-8">
                {experiences.map((exp, index) => (
                    <ExperienceCard 
                        key={index}
                        title={exp.title}
                        company={exp.company}
                        dates={exp.dates}
                        description={exp.description}
                    />
                ))}
            </div>
        </section>
    );
}