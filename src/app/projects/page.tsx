"use client";
import { motion } from 'framer-motion';

const projectsData = [
    {
        title: "Empower Hub: My Personal Business Command Centre",
        role: "Full-Stack Systems Architecture & Development",
        description: "An ongoing project to build a comprehensive, all-in-one platform using Next.js, TypeScript, and Supabase. It includes modules for financial management, project planning with RLS-based client access, automated quote generation, secure file sharing, and time tracking."
    },
    {
        title: "Automated Invoice Process",
        role: "Process Automation & Custom Scripting (Google Apps Script)",
        description: "A bespoke, five-step system using Google Apps Script that automatically generates a personalized invoice from a Google Sheet, converts it to a professional PDF, saves it to a Google Drive folder, and drafts an email with the invoice attached. This process saves significant administrative time and ensures consistent, error-free billing."
    },
    {
        title: "Empower Virtual Assistant Services Website",
        role: "Web Development & Custom Design",
        description: "My professional business website, built on WordPress with the Astra theme. This project demonstrates my ability to not only manage content and functionality on a popular CMS, but also to implement custom design and layout using HTML, CSS, and Tailwind CSS."
    },
    {
        title: "FinanceNinja: Personal Finance Web App",
        role: "Full-Stack Application Development",
        description: "A full-featured personal finance management application. Key features include income and expense tracking, savings goal management, detailed budget summaries, and a self-employment calculator that handles tax, NI, pension, and other critical deductions."
    },
    {
        title: "VAAssist: Virtual Assistant Productivity Platform",
        role: "Systems Architecture & Development",
        description: "A full-featured productivity platform designed to help VAs manage their entire operation. This system includes a time tracker, document automation for quotes and contracts, task management, and a social media content planner."
    },
    {
        title: "Dynamic Onboarding Form & Quote Generator",
        role: "Bespoke Web App Development",
        description: "A two-part solution for streamlining the client acquisition process, featuring a menu-style tool for immediate pricing and a dynamic form that creates professional, comprehensive contracts and proposals, saving hours of manual admin."
    },
    {
        title: "Flagship Project: My Wee Wander Planner",
        role: "Full-Stack Application Development",
        description: "A fully functional web application I developed from scratch to manage complex travel logistics using front-end development (HTML, CSS, JS) and back-end database integration (Google Firebase). The app features interactive checklists, live budget tracking, and a dynamic itinerary system."
    },
    {
        title: "Demo App: Uber for Trades",
        role: "Web Application Prototype",
        description: "A demonstration of my ability to architect a complex operational system for the trades industry. This prototype showcases a client-side interface for booking services and a management portal for tradespeople."
    },
    {
        title: "Demo App: Airbnb for Onboarding",
        role: "Client Experience System",
        description: "A demonstration of how a bespoke system can transform a chaotic client onboarding process into a seamless, professional experience, eliminating messy email chains and building trust from day one."
    },
    {
        title: "Social Media Content Generator",
        role: "Web App Development",
        description: "A personal project to take the thought process out of creating social media posts. With space to enter an entire blog post, a generate button with the output giving me a perfect post for LinkedIn using my own voice and personal style."
    },
    {
        title: "Full Business System Build for a Trades Company",
        role: "Systems Architecture & Operations",
        description: "A comprehensive project to build a company’s entire operational framework from the ground up, including customer journey mapping, creating a full suite of SOPs, and drafting GDPR and H&S compliance documents."
    },
    {
        title: "Automated Lead Generation System",
        role: "Process Automation",
        description: "Designed and implemented a structured process that transformed an ad-hoc approach into a reliable system, delivering 40+ qualified leads per month and saving the client 8+ hours weekly."
    },
    {
        title: "Inbox Zero Transformation",
        role: "Custom Scripting (Google Apps Script)",
        description: "Developed a bespoke Google Apps Script to tackle a chaotic inbox with over 15,000 emails, reducing daily management time by over 90% and eliminating missed opportunities for the client."
    }
];

const ProjectCard = ({ title, role, description }: typeof projectsData[0]) => (
    <motion.div 
        className="bg-gray-800/50 p-6 rounded-lg border border-accent/30 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
        <p className="font-semibold text-primary mb-2">{role}</p>
        <p className="text-text-main">{description}</p>
    </motion.div>
);

export default function ProjectsPage() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-4">My Work & <span className="text-primary">Projects</span></h2>
            <p className="text-center text-text-muted max-w-3xl mx-auto mb-12">
                I believe in showing, not just telling. Below is a selection of projects that demonstrate the tangible results and high-level skills I bring to my clients.
            </p>
            
            <div className="flex flex-col items-center gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        role={project.role}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}