"use client";
import { motion } from 'framer-motion';

// --- 1. UPDATED projectsData ARRAY ---
// This array now uses 'summary', 'value', and 'technical_scope' fields.
const projectsData = [
    {
        title: "Empower Hub: Full-Stack SaaS Client Management Platform",
        role: "System Architecture & Custom Business OS (Next.js, Supabase, TypeScript)",
        summary: "A comprehensive, all-in-one platform for financial management, project planning, secure file sharing, and time tracking. View the Figma prototype.",
        value: "To create a secure, highly professional, and seamless client hub that functions as a single source of truth, replacing email attachments and disconnected third-party tools.",
        technical_scope: "Dynamic dual-view CRM (admin/client), client-specific interactive Onboarding Checklists, a Document Centre with secure Supabase Storage integration, and real-time messaging.",
        link: "https://icon-eraser-87714674.figma.site/"
    },
    {
        title: "Project DANA: Secure Evidence Archive for Legal & Safety Planning",
        role: "Full-Stack Application Architecture, Security Engineering, & Sensitive UX Design",
        summary: "A secure, password-protected web application designed to empower survivors of domestic abuse with a structured interface for documenting and organising evidence.",
        value: "Provides a secure, structured tool to transform scattered data into a clear, consolidated, and court-ready narrative, streamlining the complex process of evidence submission.",
        technical_scope: "Showcases a critical Quick Exit button that instantly swaps the screen for a generic Decoy Page for user safety. Demonstrates structured data capture and filtering logic for legal case building, and is designed for strict Row-Level Security (RLS) and end-to-end encryption.",
        link: "https://nicola-empower.github.io/dana-demo/"
    },
    {
        title: "Empower Command Centre: AI-Driven SaaS Monitoring Platform",
        role: "Full-Stack Application Architecture, Dynamic Theming, & Data Fusion",
        summary: "A high-fidelity, interactive demo of an all-in-one 'Command Centre' that pulls scattered data from Google Analytics, PageSpeed, and App Monitoring tools.",
        value: "Features the 'How-to-Fix Engine,' which translates complex technical alerts into plain-English, actionable, non-developer steps for immediate issue resolution. The multi-client switcher instantly re-skins the UI and tailors data/solutions for different industries.",
        technical_scope: "High-fidelity front-end built with HTML/Tailwind/JS. Demonstrates Dynamic Multi-Client Switching and Data Fusion Visualisation. Ready for a Next.js build with a Node.js/Python API and OpenAI integration for AI-powered insights.",
        link: "https://nicola-empower.github.io/command-centre/"
    },
    {
        title: "Quote Command: Dynamic Trades Profit Calculator & Job Tracker",
        role: "Full-Stack Application Prototype (Client-Side Logic Focus)",
        summary: "A bespoke web application built for tradespeople to streamline quoting and job management.",
        value: "A specialised tool designed to eliminate guesswork and under-quoting for tradespeople. It guarantees profitability by enforcing a mandatory profit margin and instantly calculating the final client quote (including VAT), saving time and ensuring accurate cash flow.",
        technical_scope: "This is a fully functional client-side application built with HTML, Tailwind CSS, and vanilla JavaScript. It handles complex financial logic, real-time state management, dynamic table sorting, and CSV data export.",
        link: "https://nicola-empower.github.io/quote-command/"
    },
    {
        title: "FinanceNinja: Financial Data Tracking & UK Tax Forecasting SaaS",
        role: "Full-Stack Application Development, Complex Financial Logic, & Data Visualisation",
        summary: "A full-featured personal finance management application with income/expense tracking and savings goal management.",
        value: "Consolidated tool for self-employed individuals to track cash flow and accurately forecast their true take-home pay after statutory deductions (UK/Scottish tax logic) and sinking funds. Eliminates financial anxiety.",
        technical_scope: "Highly functional prototype using Chart.js and complex vanilla JavaScript. Key achievement is the Self-Employment Calculator utilising real-world, region-specific tax bands and NI rules, proving the ability to handle nested financial compliance logic.",
        link: "https://nicola-empower.github.io/finance-ninja-demo/"
    },
    {
        title: "VAAssist: Virtual Assistant Productivity Platform",
        role: "Systems Architecture & Development",
        summary: "A full-featured productivity platform designed to help VAs manage their entire operation.",
        value: "Solves the operational challenge of tool scatter by consolidating CRM, task management, time tracking, and document generation into one interface, leading to higher billable hours and reduced admin overhead.",
        technical_scope: "Multi-module interactive prototype demonstrating a Client-Centric CRM, Real-Time Time Tracker, and Document Automation (merging client details with legal templates to auto-generate a document preview). Designed as a unified full-stack system with a central API.",
        link: "https://nicola-empower.github.io/va-assist-demo/"
    },
    {
        title: "Global Logistics Planner (Formerly 'My Wee Wander Planner')",
        role: "Full-Stack Application Development with Firebase",
        summary: "A fully functional web application developed from scratch to manage complex travel logistics using front-end development (HTML, CSS, JS) and back-end database integration (Google Firebase).",
        value: "Manages complex, high-stakes logistics for multi-leg projects by centralising all data—from multi-city itineraries to resource allocation—eliminating fragmented spreadsheets and ensuring real-time reliability.",
        technical_scope: "Demonstrates full-stack persistence using Firebase Firestore for real-time data sync. Features a Complex Itinerary Engine to handle multi-layered, time-sensitive data and calculates a live countdown to the next event.",
    },
    {
        title: "Inbox Zero Transformation",
        role: "Custom Scripting & Process Automation (Google Apps Script)",
        summary: "Developed a bespoke Google Apps Script to tackle a chaotic inbox with over 15,000 emails.",
        value: "Successfully solved a client's critical inbox chaos, resulting in a **90% reduction in daily email management time** and a 100% elimination of missed sales opportunities. Directly translates technical skill into measurable business efficiency.",
        technical_scope: "Complex Google Apps Script solution for Mass Archiving and Advanced Triage/Labeling using sophisticated keyword and sender filtering. The logic is adaptable for Automated Lead Capture or Financial Auto-Sorting.",
        link: "https://nicola-empower.github.io/inbox-zero-demo/"
    },
    {
        title: "Automated Lead Generation Funnel",
        role: "Process Automation, Data Scraping, & Sales Workflow Design",
        summary: "Designed and implemented a structured process that transformed an ad-hoc approach into a reliable system.",
        value: "Replaced unreliable, ad-hoc lead sourcing with a repeatable, data-driven system that reliably delivers over 40 qualified leads per month, saving sales teams over 8 hours per week of manual qualification.",
        technical_scope: "A Process Simulation Demo modeling a multi-step data pipeline (Web Scraping, Contact Enrichment, Lead Qualification Triage). Logic is built with Python/BeautifulSoup/Selenium and integrates with CRM/APIs for a zero-touch pipeline.",
        link: "https://nicola-empower.github.io/lead-gen-demo/"
    },
    {
        title: "CGH Joinery Digital Daybook: Full-Stack Quote Automation",
        role: "Custom Automation, Financial Logic, & Google Apps Script Integration",
        summary: "A 'Digital Daybook' built for a joiner to replace his manual quote process.",
        value: "Developed a direct replacement for the client's manual, paper-based 'daybook' quote process. The primary value is the seamless digital transfer of real-time data from the field calculator directly to the office's main data sheet.",
        technical_scope: "Fully functional client-side app with complex real-time financial calculations. The full solution uses a Google Apps Script (GAS) backend to automatically stream the quote details to a master Google Sheet in real-time, eliminating manual data entry.",
        link: "https://nicola-empower.github.io/cgh-joinery/"
    },
    {
        title: "Website Health Checker Tool",
        role: "Full-Stack Web Application (Next.js & TypeScript)",
        summary: "An interactive tool that provides an instant audit of a site's performance, SEO, and accessibility using the Google PageSpeed API.",
        value: "Core feature is a dynamic pricing engine that translates scores into a tailored, priced action plan, transforming the tool from a simple checker into an **automated lead-generation funnel**.",
        technical_scope: "Full-stack application utilising the **Google PageSpeed API** for real-time data fetching. Built with Next.js and TypeScript, demonstrating API integration and complex data-to-value translation logic.",
        link: "https://website-health-checker.vercel.app/"
    },
    {
        title: "Bespoke Wedding Guest App",
        role: "Full-Stack Web App Development (React & Firebase)",
        summary: "A fully-featured, bespoke web application designed to enhance the wedding guest experience.",
        value: "Provides guests with a single source of truth for the event, including live schedule updates, digital menu display, and secure photo/video sharing, all accessible via a simple QR code.",
        technical_scope: "Custom-branded React application with a Firebase/Supabase backend architecture. Structured to manage user access and handle secure, high-traffic data for specialised B2C clients.",
        link: "https://empowervaservices.co.uk/wedding-webapp/"
    }, 
    {
        title: "Automated Invoice Process",
        role: "Process Automation & Custom Scripting (Google Apps Script)",
        summary: "A bespoke, five-step system using Google Apps Script that automatically generates and sends personalised invoices.",
        value: "Saves significant administrative time and ensures consistent, error-free billing by automating the entire invoice generation, PDF conversion, saving, and emailing process.",
        technical_scope: "Uses **Google Apps Script** to integrate Google Sheets, Google Drive, and Gmail APIs, showcasing complex multi-step workflow automation and custom document generation.",
        link: "https://empowervaservices.co.uk/automated-invoice-workflow/"
    },
    {
        title: "Dynamic Onboarding Form & Quote Generator",
        role: "Bespoke Web App Development",
        summary: "A two-part solution for streamlining the client acquisition process.",
        value: "Creates professional, comprehensive contracts and proposals with immediate pricing, saving hours of manual admin and transforming a chaotic client onboarding process into a seamless, professional experience.",
        technical_scope: "Fully interactive, multi-stage prototype using vanilla JavaScript. Demonstrates **Dynamic Data Flow** and Document Assembly (dynamically building a PDF-style proposal).",
        link: "https://nicola-empower.github.io/quote-generator/"
    },
    {
        title: "Demo App: Airbnb for Onboarding",
        role: "Client Experience System",
        summary: "A demonstration of how a bespoke system can transform a chaotic client onboarding process.",
        value: "Transforms the client onboarding process into a seamless, professional experience, eliminating messy email chains and building trust from day one.",
        technical_scope: "Conceptual system architecture for a client-side onboarding portal, demonstrating UX/UI design principles for complex, step-by-step administrative workflows.",
        link: "https://empowervaservices.co.uk/onboarding-demo-app/"
    },
    // The following entries were kept simple as per the original for less technical projects
    {
        title: "Social Media Content Generator",
        role: "Web App Development",
        summary: "A personal project to take the thought process out of creating social media posts. With space to enter an entire blog post, a generate button with the output giving me a perfect post for LinkedIn using my own voice and personal style.",
        value: "Automates the content creation process by generating social media posts in a consistent, personal voice, drastically reducing the time spent on content strategy and writing.",
        technical_scope: "Requires server-side functions to manage AI API calls (for content generation) and the LinkedIn API (for scheduling/publishing), transforming content chaos into a structured, automated pipeline.",
        link: "https://social-genie.vercel.app/"
    },
    {
        title: "Full Business System Build for a Trades Company",
        role: "Systems Architecture & Operations",
        summary: "A comprehensive project to build a company’s entire operational framework from the ground up.",
        value: "Created a full suite of SOPs, GDPR and H&S compliance documents, and customer journey maps, giving the client a professional, scalable operational foundation.",
        technical_scope: "Project focused on high-level systems architecture, process mapping, and operational design before technical implementation.",
        link: "https://empowervaservices.co.uk/business-system-admin/"
    },
    {
        title: "Demo App: Custom Apps for Trades",
        role: "Web Application Prototype",
        summary: "A demonstration of my ability to architect a complex operational system for the trades industry.",
        value: "Showcases a seamless client-side interface for booking services and a management portal for tradespeople, solving complex service dispatch and management problems.",
        technical_scope: "Demonstration of complex operational system architecture, including user authentication (Client/Trader) and real-time job/location handling concepts.",
        link: "https://empowervaservices.co.uk/uber-for-trades/"
    },
];

// --- 2. REVISED ProjectCard COMPONENT ---
type ProjectCardProps = {
    title: string;
    role: string;
    summary: string; 
    value: string;
    technical_scope: string;
    link?: string; 
};

const ProjectCard = ({ title, role, summary, value, technical_scope, link }: ProjectCardProps) => {
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
                {/* Conditionally render the link icon if a link exists */}
                {link && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                )}
            </div>
            
            <p className="font-semibold text-primary mb-4">{role}</p>

            {/* Value for Client/Business */}
            {value && (
                <div className="mb-4">
                    <p className="text-lg font-extrabold text-accent mb-1">Impact & Value</p>
                    {/* The whitespace-pre-line class is key to rendering line breaks (\n) */}
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

            {/* General Summary */}
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
                Each project below is structured to showcase **business value** first and **technical complexity** second.
            </p>
            
            <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        role={project.role}
                        summary={project.summary} // New prop name
                        value={project.value} // New prop
                        technical_scope={project.technical_scope} // New prop
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}