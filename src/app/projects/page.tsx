"use client";
import { motion } from 'framer-motion';
import { link } from 'fs';

const projectsData = [
    {
        title: "Empower Hub: My Personal Business Command Centre",
        role: "Full-Stack System Development",
        description: "An ongoing project to build a comprehensive, all-in-one platform using Next.js, TypeScript, and Supabase. It includes modules for financial management, project planning with RLS-based client access, automated quote generation, secure file sharing, and time tracking. View the Figma prototype.",
        link: "https://icon-eraser-87714674.figma.site/"
    },
    {
        title: "Bespoke Wedding Guest App",
        role: "Full-Stack Web App Development (React & Firebase)",
        description: "A fully-featured, bespoke web application designed to enhance the wedding guest experience. The app is custom-branded to match the event's theme and includes features like photo/video sharing, an interactive schedule, a digital menu, and a searchable seating plan, all accessible via a simple QR code.",
        link: "https://empowervaservices.co.uk/wedding-webapp/"
    }, // --- FIX: Added the missing comma here ---
    { // --- FIX: Added the missing opening curly brace here ---
        title: "Automated Invoice Process",
        role: "Process Automation & Custom Scripting (Google Apps Script)",
        description: "A bespoke, five-step system using Google Apps Script that automatically generates a personalized invoice from a Google Sheet, converts it to a professional PDF, saves it to a Google Drive folder, and drafts an email with the invoice attached. This process saves significant administrative time and ensures consistent, error-free billing.",
        link: "https://empowervaservices.co.uk/automated-invoice-workflow/"
    },
      {
        title: "Website Health Checker Tool",
        role: "Full-Stack Web Application (Next.js & TypeScript)",
        description: "An interactive tool that provides an instant audit of a site's performance, SEO, and accessibility using the Google PageSpeed API. The app's core feature is a dynamic pricing engine that translates scores into a tailored, priced action plan, transforming the tool from a simple checker into an automated lead-generation funnel.",
        link: "https://website-health-checker.vercel.app/"
    },
    {
        title: "Empower Virtual Assistant Services Website",
        role: "Web Development & Custom Design",
        description: "My professional business website, built on WordPress with the Astra theme. This project demonstrates my ability to not only manage content and functionality on a popular CMS, but also to implement custom design and layout using HTML, CSS, and Tailwind CSS.",
        link: "https://empowervaservices.co.uk/"
    },
        {
        title: "Empower Automation Website",
        role: "Web Development & Custom Design",
        description: "My professional business website, built on WordPress with the Astra theme. This project demonstrates my ability to not only manage content and functionality on a popular CMS, but also to implement custom design and layout using HTML, CSS, and Tailwind CSS.",
        link: "https://empowerautomation.co.uk/"
    },
        {
        title: "Empower Digital Solutions Website",
        role: "Web Development & Custom Design",
        description: "My professional business website, built on WordPress with the Astra theme. This project demonstrates my ability to not only manage content and functionality on a popular CMS, but also to implement custom design and layout using HTML, CSS, and Tailwind CSS.",
        link: "https://empowerdigitalsolutions.co.uk/"
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
        title: "Project DANA (Digital Archive & Narrative Assistant)",
        role: "Secure Full-Stack Application (Next.js & Encrypted Storage)",
        description: "A secure, password-protected web application designed to empower survivors of domestic abuse. The platform provides a structured, intuitive interface for individuals to chronologically document events, upload evidence (such as screenshots, audio, and documents), and organize their narrative. The final output is a clear, consolidated, and court-ready format, designed to be shared with solicitors or the Procurator Fiscal, streamlining the complex and often re-traumatising process of evidence submission.",
        link: "https://portfolio.empowervaservices.co.uk/contact"
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
        description: "A demonstration of my ability to architect a complex operational system for the trades industry. This prototype showcases a client-side interface for booking services and a management portal for tradespeople.",
        link: "https://empowervaservices.co.uk/uber-for-trades/"
    },
    {
        title: "Demo App: Airbnb for Onboarding",
        role: "Client Experience System",
        description: "A demonstration of how a bespoke system can transform a chaotic client onboarding process into a seamless, professional experience, eliminating messy email chains and building trust from day one.",
        link: "https://empowervaservices.co.uk/onboarding-demo-app/"
    },
    {
        title: "Social Media Content Generator",
        role: "Web App Development",
        description: "A personal project to take the thought process out of creating social media posts. With space to enter an entire blog post, a generate button with the output giving me a perfect post for LinkedIn using my own voice and personal style. Note: As this is a personal project using my own LinkedIn Profile API I have not designed this to allow other people to use and post on my behalf.",
        link: "https://social-genie.vercel.app/"
    },
    {
        title: "Full Business System Build for a Trades Company",
        role: "Systems Architecture & Operations",
        description: "A comprehensive project to build a company’s entire operational framework from the ground up, including customer journey mapping, creating a full suite of SOPs, and drafting GDPR and H&S compliance documents.",
        link: "https://empowervaservices.co.uk/business-system-admin/"
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

// --- FIX: Define the types for the component's props ---
type ProjectCardProps = {
  title: string;
  role: string;
  description: string;
  link?: string; // The '?' makes the link prop optional
};

// The ProjectCard component now uses the defined types
const ProjectCard = ({ title, role, description, link }: ProjectCardProps) => {
    // The visual content of the card
    const cardContent = (
        <motion.div
            className="bg-gray-800/50 p-6 rounded-lg border border-accent/30 w-full h-full flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-secondary pr-4">{title}</h3>
                {/* Conditionally render the link icon if a link exists */}
                {link && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                )}
            </div>
            <p className="font-semibold text-primary mb-2">{role}</p>
            <p className="text-text-main">{description}</p>
        </motion.div>
    );

    // If a link is provided, wrap the card content in an anchor tag
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 ease-in-out hover:scale-105">
                {cardContent}
            </a>
        );
    }

    // If no link, just return the card content
    return cardContent;
};

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
                        // Pass the new link property to the card
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}