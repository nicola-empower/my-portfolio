"use client";
import React, { useState } from 'react';
import ProjectLivePreview from '@/components/ProjectLivePreview';
import ProjectCardMinimal from '@/components/ProjectCardMinimal';

const projectsData = [
    {
        title: "Empower Hub: Full-Stack SaaS Client Management Platform",
        role: "System Architecture & Custom Business OS",
        summary: "A comprehensive, all-in-one platform for financial management, project planning, and secure file sharing.",
        value: "Creates a single source of truth, replacing email attachments and disconnected third-party tools.",
        technical_scope: "Uses Supabase, Gemini API, and CRON jobs. Full-stack Next.js and TypeScript.",
        link: "https://icon-eraser-87714674.figma.site/",
        deployment_type: "Figma Prototype"
    },
    {
        title: "Project DANA: Secure Legal Evidence Archive",
        role: "Full-Stack Security Architecture",
        summary: "A secure, password-protected web application designed to empower survivors of domestic abuse.",
        value: "Consolidated, court-ready narrative tool with high security and plausible deniability features.",
        technical_scope: "Focuses on SHA-256 hashing, dual-timestamping, and Row-Level Security (RLS).",
        link: "https://nicola-empower.github.io/dana-demo/",
        deployment_type: "GitHub Pages"
    },
    {
        title: "Empower Command Centre",
        role: "Full-Stack Application Architecture",
        summary: "A high-fidelity 'Command Centre' pulling scattered data from multiple tools.",
        value: "Translates complex technical alerts into plain-English fixes with the 'How-to-Fix Engine'.",
        technical_scope: "Demonstrates Dynamic Multi-Client Switching and Data Fusion Visualisation.",
        link: "https://nicola-empower.github.io/command-centre/",
        deployment_type: "GitHub Pages"
    },
    {
        title: "Social Genie",
        role: "Full-Stack AI Integration",
        summary: "AI-powered content planning and automation module.",
        value: "Automates content creation in a personal voice, reducing strategy time.",
        technical_scope: "Uses Gemini API for content and LinkedIn API for posting.",
        link: "https://social-genie.vercel.app/",
        deployment_type: "Live App"
    },
    {
        title: "Website Health Checker",
        role: "Full-Stack Web Application",
        summary: "Interactive audit tool for site performance and SEO.",
        value: "Translates scores into a priced action plan, acting as a lead-gen funnel.",
        technical_scope: "Utilises Google PageSpeed API for real-time data fetching.",
        link: "https://website-health-checker.vercel.app/",
        deployment_type: "Live App"
    },
    {
        title: "Bespoke Wedding Guest App",
        role: "Full-Stack Web App Development",
        summary: "Bespoke application for enhancing the wedding guest experience.",
        value: "Features interactive schedules and secure photo sharing.",
        technical_scope: "Uses Firebase for real-time photo uploads and guest management.",
        link: "https://empowervaservices.co.uk/wedding-webapp/",
        deployment_type: "Overview"
    },
    {
        title: "Global Logistics Planner",
        role: "Full-Stack Real-Time Resource Manager",
        summary: "Web app to manage complex travel logistics.",
        value: "Centralises high-stakes project data into a single source of truth.",
        technical_scope: "Uses Firebase Firestore & Google Maps API. Vanilla JS mastery.",
        link: "https://nicola-empower.github.io/global-logistics-planner/",
        deployment_type: "Demo"
    },
    {
        title: "Project Voyager",
        role: "AI-Assisted Travel Platform",
        summary: "Generates complex travel itineraries from natural language prompts.",
        value: "Hybrid Automation model: AI researches, human books. Increases profitability.",
        technical_scope: "Designed for Gemini API integration. 'Plan, Don't Book' architecture.",
        link: "https://nicola-empower.github.io/project-voyager-demo/",
        deployment_type: "Demo"
    },
    {
        title: "Quote Command",
        role: "Full-Stack Application Prototype",
        summary: "Streamlines quoting and job management for tradespeople.",
        value: "Guarantees profitability by enforcing mandatory profit margins.",
        technical_scope: "Complex financial logic, real-time state, CSV export. Vanilla JS.",
        link: "https://nicola-empower.github.io/quote-command/",
        deployment_type: "Demo"
    },
    {
        title: "FinanceNinja",
        role: "Financial Data Tracking SaaS",
        summary: "Personal finance management with tax forecasting.",
        value: "Calculates true take-home pay with UK/Scottish tax logic.",
        technical_scope: "Chart.js visualisation and complex nested financial compliance logic.",
        link: "https://nicola-empower.github.io/finance-ninja-demo/",
        deployment_type: "Demo"
    },
    {
        title: "VAAssist",
        role: "Productivity Platform SaaS",
        summary: "Consolidates CRM, time tracking, and docs for VAs.",
        value: "Solves tool scatter, increasing billable hours.",
        technical_scope: "Multi-module system with Client CRM and Document Automation.",
        link: "https://nicola-empower.github.io/va-assist-demo/",
        deployment_type: "Demo"
    },
    {
        title: "Inbox Zero Script",
        role: "Process Automation (GAS)",
        summary: "Bespoke script to tackle chaotic inboxes (15k+ emails).",
        value: "90% reduction in daily management time.",
        technical_scope: "Serverless Google Apps Script with advanced filtering.",
        link: "https://nicola-empower.github.io/inbox-zero-demo/",
        deployment_type: "Demo"
    },
    {
        title: "Automated Lead Funnel",
        role: "Python Data Automation",
        summary: "Structured lead generation pipeline.",
        value: "Delivers 40+ qualified leads/month, saving 8 hrs/week.",
        technical_scope: "Python, BeautifulSoup, Selenium for data scraping/enrichment.",
        link: "https://nicola-empower.github.io/lead-gen-demo/",
        deployment_type: "Demo"
    },
    {
        title: "Digital Daybook",
        role: "Custom Quote Automation",
        summary: "Digital replacement for manual joinery quotes.",
        value: "Seamless transfer from field calculator to office master sheet.",
        technical_scope: "Google Apps Script backend streaming to Sheets.",
        link: "https://nicola-empower.github.io/cgh-joinery/",
        deployment_type: "Demo"
    },
    {
        title: "Event Proposal Generator",
        role: "Document Assembly Web App",
        summary: "Streamlines client acquisition with digital proposals.",
        value: "Improves conversion rates via 2-step digital workflow.",
        technical_scope: "Dynamic Data Flow and PDF-style proposal generation.",
        link: "https://nicola-empower.github.io/quote-generator/",
        deployment_type: "Demo"
    }
];

export default function ProjectsPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="projects" className="py-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-4">My Work & <span className="text-primary">Projects</span></h2>
            <p className="text-center text-text-muted max-w-3xl mx-auto mb-16">
                Explore a selection of my work. On desktop, watch the live preview update as you scroll.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">

                {/* Left Column: Scrolling List */}
                <div className="flex flex-col gap-16 lg:pb-screen">
                    {projectsData.map((project, index) => (
                        <ProjectCardMinimal
                            key={index}
                            {...project}
                            isActive={activeIndex === index}
                            onActivate={() => setActiveIndex(index)}
                        />
                    ))}
                </div>

                {/* Right Column: Sticky Preview (Hidden on Mobile) */}
                <div className="hidden lg:block relative">
                    <div className="sticky top-24">
                        <ProjectLivePreview
                            url={projectsData[activeIndex].link}
                            title={projectsData[activeIndex].title}
                        />
                        {/* Decoration background behind the preview */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-3xl -z-10" />
                    </div>
                </div>

            </div>
        </section>
    );
}