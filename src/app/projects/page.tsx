"use client";
import { motion } from 'framer-motion';

// --- 1. UPDATED projectsData ARRAY ---
// All descriptions are in UK English, highly detailed, and structured for dual audience appeal.
const projectsData = [
    {
        title: "Empower Hub: Full-Stack SaaS Client Management Platform",
        role: "System Architecture & Custom Business OS (Next.js, Supabase, TypeScript)",
        summary: "A comprehensive, all-in-one platform for financial management, project planning, secure file sharing, and time tracking. The link is to the Figma prototype, as the full app is not yet deployed.",
        value: "To create a secure, highly professional, and seamless client hub that functions as a single source of truth, replacing email attachments and disconnected third-party tools.",
        technical_scope: "Uses **Supabase** for the backend (Auth, Database, Storage) and **Gemini API** for content generation/task summaries. Features a **CRON job** for automated tasks. Built with Next.js and TypeScript, demonstrating secure full-stack development.",
        link: "https://icon-eraser-87714674.figma.site/",
        deployment_type: "Figma Prototype (Not Deployed)" 
    },
    {
        title: "Project DANA: Secure Legal Evidence Archive & Narrative Assistant",
        role: "Full-Stack Security Architecture & Sensitive UX Design",
        summary: "A secure, password-protected web application designed to empower survivors of domestic abuse by structuring and organising evidence for legal use.",
        value: "Provides a secure, structured tool to transform scattered data (photos, audio, narrative) into a clear, **consolidated, and court-ready narrative**, streamlining the complex process of evidence submission for **solicitors**.",
        technical_scope: "Focuses on high-level security: 1. **Plausible Deniability**: Features a **Quick Exit button** that instantly swaps the screen for a generic Decoy Page. 2. **Legal Integrity**: Uses **dual-timestamping** (incident date and system capture date) and **cryptographic hashing (SHA-256)** on all files to prove evidence integrity. 3. **Role-Based Access**: Architecture designed for PostgreSQL/Supabase **Row-Level Security (RLS)** to allow authenticated lawyers to view multiple linked clients' files via a **secure sharing PIN**.",
        link: "https://nicola-empower.github.io/dana-demo/",
        deployment_type: "GitHub Pages (Demo)"
    },
    {
        title: "Empower Command Centre: AI-Driven SaaS Monitoring Platform",
        role: "Full-Stack Application Architecture, Dynamic Theming, & Data Fusion",
        summary: "A high-fidelity, interactive demo of an all-in-one 'Command Centre' that pulls scattered data from multiple monitoring tools. The link is to the static front-end demo.",
        value: "Features the **'How-to-Fix Engine,'** which translates complex technical alerts (security, speed, SEO) into **plain-English, actionable, non-developer steps** for immediate issue resolution. The multi-client switcher instantly re-skins the UI and tailors data/solutions for different industries.",
        technical_scope: "Future live version will integrate **Google PageSpeed API** and **Google Console API**. Static demo built with HTML/Tailwind/JS. Demonstrates **Dynamic Multi-Client Switching** and Data Fusion Visualization. Designed for a Next.js build with a Node.js/Python API and **OpenAI/AI integration**.",
        link: "https://nicola-empower.github.io/command-centre/",
        deployment_type: "GitHub Pages (Demo)"
    },
    {
        title: "Social Genie: AI-Powered Content Planning & Automation Module",
        role: "Full-Stack AI Integration & Workflow Automation",
        summary: "A personal project to take the thought process out of creating social media posts in a personal style.",
        value: "Automates the content creation process by generating social media posts in a consistent, personal voice based on a rough idea or brief, drastically reducing the time spent on content strategy.",
        technical_scope: "Hosted on **Vercel**. Uses the **Gemini API** for content generation, **LinkedIn API** for post data, and **Supabase** for user authentication and content storage. Built with Next.js/React.",
        link: "https://social-genie.vercel.app/",
        deployment_type: "Vercel (Live App)"
    },
    {
        title: "Website Health Checker Tool",
        role: "Full-Stack Web Application (Next.js & TypeScript)",
        summary: "An interactive tool that provides an instant audit of a site's performance, SEO, and accessibility.",
        value: "The core feature is a dynamic pricing engine that translates scores into a tailored, priced action plan, transforming the tool from a simple checker into an **automated lead-generation funnel**.",
        technical_scope: "Full-stack application utilising the **Google PageSpeed API** for real-time data fetching. Built with Next.js and TypeScript. Hosted on **Vercel**.",
        link: "https://website-health-checker.vercel.app/",
        deployment_type: "Vercel (Live App)"
    },
    {
        title: "Bespoke Wedding Guest App / VowSuite (SaaS Concept)",
        role: "Full-Stack Web App Development (React & Firebase/Supabase)",
        summary: "A fully-featured, bespoke web application designed to enhance the wedding guest experience. The link is to a dedicated project overview page, not the live, private app.",
        value: "A B2C application built to significantly enhance the client's guest experience and streamline wedding logistics. Key Features include **Interactive Schedules** and secure **Photo/Video Sharing** for guests.",
        technical_scope: "Hosted on **Vercel**. Uses **Firebase** for photo uploads and guestlist management (live data). Built with React, demonstrating secure event-based data handling and client experience architecture.",
        link: "https://empowervaservices.co.uk/wedding-webapp/",
        deployment_type: "Vercel (Project Overview)"
    }, 
    {
        title: "Global Logistics Planner: Full-Stack Real-Time Resource Manager",
        role: "Full-Stack Development, Architectural Design, and Complex Data Modelling (Firebase)",
        summary: "A fully functional web application I developed from scratch to manage complex travel logistics using front-end development and back-end database integration.",
        value: "Designed to eliminate the chaos of managing high-stakes, multi-leg projects (like international roadshows or large event coordination) by centralising all data into a single source of truth.",
        technical_scope: "Uses **Firebase Firestore** for real-time data sync. Features the **Google Maps API** for route planning/logistics. Built with vanilla HTML/CSS/JS, demonstrating mastery of integrated development without a modern framework.",
        link: "[Insert New, Safe Demo Link Here]",
        deployment_type: "Firebase (Demo)"
    },
    {
        title: "Quote Command: Dynamic Trades Profit Calculator & Job Tracker",
        role: "Full-Stack Application Prototype (Client-Side Logic Focus)",
        summary: "A bespoke web application built for tradespeople to streamline quoting and job management.",
        value: "A specialised tool designed to eliminate guesswork and under-quoting for tradespeople. It guarantees profitability by enforcing a **mandatory profit margin** and instantly calculating the final client quote (including VAT), saving time and ensuring accurate cash flow.",
        technical_scope: "This is a **fully functional client-side application** built with **HTML, Tailwind CSS, and vanilla JavaScript**. It handles complex financial logic, **real-time state management**, dynamic table sorting, and **CSV data export**.",
        link: "https://nicola-empower.github.io/quote-command/",
        deployment_type: "GitHub Pages (Demo)"
    },
    {
        title: "FinanceNinja: Financial Data Tracking & UK Tax Forecasting SaaS",
        role: "Full-Stack Application Development, Complex Financial Logic, & Data Visualisation",
        summary: "A full-featured personal finance management application with income/expense tracking and savings goal management.",
        value: "Provides a consolidated tool for self-employed individuals to not only track cash flow but also **accurately forecast their true take-home pay** after statutory deductions (UK/Scottish tax logic), eliminating financial anxiety.",
        technical_scope: "Highly functional interactive prototype built with **Chart.js** and complex **vanilla JavaScript**. Key achievement is the **Self-Employment Calculator** utilising real-world UK tax bands and NI rules, proving the ability to handle nested financial compliance logic.",
        link: "https://nicola-empower.github.io/finance-ninja-demo/",
        deployment_type: "GitHub Pages (Demo)"
    },
    {
        title: "VAAssist: Virtual Assistant Productivity Platform (SaaS Architecture)",
        role: "Systems Architecture, Client Management, & Workflow Consolidation",
        summary: "A full-featured productivity platform designed to help VAs manage their entire operation.",
        value: "Solves the major operational challenge for solo service businesses: **tool scatter**. It consolidates CRM, task management, time tracking, and document generation into one clean interface, resulting in **higher billable hours**.",
        technical_scope: "Highly detailed, multi-module interactive prototype demonstrating a Client-Centric CRM, Real-Time Time Tracker, and **Document Automation**. Built with HTML/Tailwind CSS and vanilla JavaScript, designed as a unified full-stack system with a central API.",
        link: "https://nicola-empower.github.io/va-assist-demo/",
        deployment_type: "GitHub Pages (Demo)"
    },
    {
        title: "Inbox Zero Transformation: High-Impact Custom Scripting Case Study",
        role: "Process Automation & Custom Script Engineering (Google Apps Script)",
        summary: "Developed a bespoke Google Apps Script to tackle a chaotic inbox with over 15,000 emails.",
        value: "Successfully solved a client's critical inbox chaos, resulting in a **90% reduction in daily email management time** and a 100% elimination of missed sales opportunities.",
        technical_scope: "Complex **Google Apps Script** solution (serverless) for Mass Archiving and Advanced Triage/Labelling using sophisticated keyword and sender filtering. Showcases expertise in Google Workspace automation.",
        link: "https://nicola-empower.github.io/inbox-zero-demo/",
        deployment_type: "GitHub Pages (Demo of Outcome)"
    },
    {
        title: "Automated Lead Generation Funnel (Python-Powered)",
        role: "Process Automation, Data Scraping, & Sales Workflow Design",
        summary: "Designed and implemented a structured process that transformed an ad-hoc approach into a reliable system.",
        value: "Replaced unreliable, ad-hoc lead sourcing with a **repeatable, data-driven system** that reliably delivers over **40 qualified leads per month**, saving sales teams over **8 hours per week**.",
        technical_scope: "A Process Simulation Demo modelling a multi-step data pipeline (Web Scraping $\to$ Contact Enrichment $\to$ Lead Qualification Triage). System is typically built using **Python** with libraries like **BeautifulSoup/Selenium**.",
        link: "https://nicola-empower.github.io/lead-gen-demo/",
        deployment_type: "GitHub Pages (Process Demo)"
    },
    {
        title: "CGH Joinery Digital Daybook: Full-Stack Quote Automation",
        role: "Custom Automation, Financial Logic, & Google Apps Script Integration",
        summary: "A 'Digital Daybook' built for a joiner to replace his manual quote process.",
        value: "Developed a direct replacement for the client's paper-based quote process. The primary value is the seamless, digital transfer of real-time data from the field calculator directly to the office's master data sheet.",
        technical_scope: "Fully functional client-side app. The full solution uses a **Google Apps Script (GAS) backend** to automatically stream quote details to a master Google Sheet, eliminating manual data entry.",
        link: "https://nicola-empower.github.io/cgh-joinery/",
        deployment_type: "GitHub Pages (Demo)"
    },
    {
        title: "Event Proposal Generator: Sales Automation & Document Assembly",
        role: "Bespoke Web App Development",
        summary: "A two-part solution for streamlining the client acquisition process.",
        value: "Transforms the chaotic, manual process of creating complex event proposals into a **seamless, two-step digital workflow**. This system dramatically improves conversion rates and reduces admin hours.",
        technical_scope: "Fully interactive, multi-stage prototype built with HTML/Tailwind CSS and vanilla JavaScript. Demonstrates **Dynamic Data Flow** and Document Assembly (dynamically building a PDF-style proposal).",
        link: "https://nicola-empower.github.io/quote-generator/",
        deployment_type: "GitHub Pages (Demo)"
    },
    {
        title: "Automated Invoice Process",
        role: "Process Automation & Custom Scripting (Google Apps Script)",
        summary: "A bespoke, five-step system using Google Apps Script that automatically generates and sends personalised invoices.",
        value: "Saves significant administrative time and ensures consistent, error-free billing by automating the entire invoice generation, PDF conversion, saving, and emailing process.",
        technical_scope: "Uses **Google Apps Script** (serverless) to integrate Google Sheets, Google Drive, and Gmail APIs, showcasing complex multi-step workflow automation and custom document generation.",
        link: "https://empowervaservices.co.uk/automated-invoice-workflow/",
        deployment_type: "Project Overview"
    },
    {
        title: "Full Business System Build for a Trades Company",
        role: "Systems Architecture & Operations",
        summary: "A comprehensive project to build a company’s entire operational framework from the ground up.",
        value: "Created a full suite of SOPs, GDPR and H&S compliance documents, and customer journey maps, giving the client a professional, scalable operational foundation.",
        technical_scope: "Project focused on high-level systems architecture, process mapping, and operational design before technical implementation. Demonstrates non-code solutions.",
        link: "https://empowervaservices.co.uk/business-system-admin/",
        deployment_type: "Project Overview"
    },
    {
        title: "Demo App: Airbnb for Onboarding",
        role: "Client Experience System",
        summary: "A demonstration of how a bespoke system can transform a chaotic client onboarding process.",
        value: "Transforms the client onboarding process into a seamless, professional experience, eliminating messy email chains and building trust from day one.",
        technical_scope: "Conceptual system architecture for a client-side onboarding portal, demonstrating UX/UI design principles for complex, step-by-step administrative workflows.",
        link: "https://empowervaservices.co.uk/onboarding-demo-app/",
        deployment_type: "Project Overview"
    },
    {
        title: "Demo App: Uber for Trades",
        role: "Web Application Prototype",
        summary: "A demonstration of my ability to architect a complex operational system for the trades industry.",
        value: "Showcases a seamless client-side interface for booking services and a management portal for tradespeople, solving complex service dispatch and management problems.",
        technical_scope: "Demonstration of complex operational system architecture, including user authentication (Client/Trader) and real-time job/location handling concepts.",
        link: "https://empowervaservices.co.uk/uber-for-trades/",
        deployment_type: "Project Overview"
    }
];

// --- 2. REVISED ProjectCard COMPONENT ---
type ProjectCardProps = {
    title: string;
    role: string;
    summary: string;
    value: string;
    technical_scope: string;
    link?: string;
    deployment_type?: string; 
};

const ProjectCard = ({ title, role, summary, value, technical_scope, link, deployment_type }: ProjectCardProps) => {
    // The visual content of the card
    const cardContent = (
        <motion.div
            className="bg-gray-800/50 p-6 rounded-lg border border-accent/30 w-full h-full flex flex-col transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-secondary pr-4">{title}</h3>
                {link && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                )}
            </div>
            
            <p className="font-semibold text-primary mb-4 flex items-center">
                {role}
                {/* Display deployment type as a badge */}
                {deployment_type && (
                    <span className="ml-4 px-2 py-0.5 text-xs font-bold rounded bg-primary/20 text-primary uppercase tracking-wider">
                        {deployment_type}
                    </span>
                )}
            </p>

            {/* Value for Client/Business */}
            {value && (
                <div className="mb-4">
                    <p className="text-lg font-extrabold text-accent mb-1">Impact & Value</p>
                    <p className="text-text-main whitespace-pre-line">{value}</p>
                </div>
            )}
            
            {/* Separator for clear visual break */}
            <div className="border-t border-gray-700/50 my-2"></div>
            
            {/* Technical Scope for Developer/Recruiter */}
            {technical_scope && (
                <div>
                    <p className="text-lg font-extrabold text-accent mb-1">Technical Scope</p>
                    <p className="text-text-main whitespace-pre-line">{technical_scope}</p>
                </div>
            )}

            {/* General Summary/Original Description */}
            {summary && (
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-sm italic text-text-muted">Summary: {summary}</p>
                </div>
            )}
            
        </motion.div>
    );

    // If a link is provided, wrap the card content in an anchor tag
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl hover:border-primary">
                {cardContent}
            </a>
        );
    }

    // If no link, just return the card content
    return cardContent;
};

// --- 3. ProjectsPage COMPONENT (Map Logic) ---
export default function ProjectsPage() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-4">My Work & <span className="text-primary">Projects</span></h2>
            <p className="text-center text-text-muted max-w-3xl mx-auto mb-12">
                This portfolio is structured for easy reading: **Impact & Value** for clients, and **Technical Scope** for developers.
            </p>
            
            <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        role={project.role}
                        summary={project.summary} 
                        value={project.value} 
                        technical_scope={project.technical_scope} 
                        link={project.link}
                        deployment_type={project.deployment_type} 
                    />
                ))}
            </div>
        </section>
    );
}