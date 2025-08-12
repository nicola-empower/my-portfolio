// src/components/ExperienceSection.tsx

"use client";
import { motion } from 'framer-motion';

// An array to hold your experience data. This makes it easy to add or change jobs later.
const experiences = [
    {
        title: "Jr. Mern Stack Developer",
        company: "Talent People",
        dates: "October 2024 - December 2024",
        description: "Created a Full-Stack Web Application using the MERN Stack, including User Authentication, Data Management, and Responsive Design. Collaborated with a team to implement RESTful APIs."
    },
    {
        title: "Frontend Developer",
        company: "Freelancing",
        dates: "December 2024 - January 2025",
        description: "Created Responsive and User-Friendly Web Applications using Next.js and Tailwind CSS. Integrated Nodemailer for email services."
    },
    {
        title: "Frontend Developer",
        company: "Freelancing",
        dates: "February 2025",
        description: "Built a responsive Web Application for a Sports Management System using Next.js, TypeScript, and Tailwind CSS. Also created the UI/UX design in Figma."
    }
];

// Reusable card component for displaying each job
const ExperienceCard = ({ title, company, dates, description }: typeof experiences[0]) => (
    <motion.div 
        className="bg-gray-800/50 p-6 rounded-lg border border-accent/30 w-full md:w-5/6 lg:w-2/3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Ensures the animation runs only once
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
        <p className="font-semibold text-primary">{company}</p>
        <p className="text-sm text-text-muted mb-3">{dates}</p>
        <p className="text-text-main">{description}</p>
    </motion.div>
);

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Work <span className="text-primary">Experience</span></h2>
            
            {/* We create a vertical timeline effect with a flex column layout */}
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