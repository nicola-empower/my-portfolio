"use client";
import React, { useState, useMemo } from 'react';
import ProjectCarousel from '@/components/ProjectCarousel';

// Define categories for filtering
const CATEGORIES = ["All", "Highlights", "AI & GenAI", "Dashboards", "Creative & Web", "Automation"];

const projectsData = [
    // --- TIER 1: HEAVY LIFTERS (Highlights) ---
    {
        title: "Design Forge AI",
        role: "GenAI Interface & Blueprint Engine",
        summary: "DesignForge AI is a comprehensive web design visualisation and blueprinting tool powered by Google's Gemini models. It allows developers and designers to conceptualise interfaces instantly, generate assets, and create technical specifications for their projects.",
        value: "A unified platform featuring an Interactive Design Playground for real-time visual editing, an AI Design Assistant for accessibility monitoring, an Image Studio for asset generation, and a Project Blueprint engine for technical specs and PDF exports.",
        technical_scope: "React 19, Google GenAI SDK, TypeScript, Tailwind CSS",
        link: "https://designforge-ai.vercel.app/",
        deployment_type: "Demo App",
        category: "Highlights"
    },
    {
        title: "The Ultimate Wedding Planner",
        role: "B2C Event Management with Generative AI",
        summary: "A premium, direct-to-consumer application designed to replace the stress of wedding planning with an elegant, digital experience. It features a dual-interface system: a robust management dashboard for the couple and a streamlined mobile concierge for guests.",
        value: "A centralised 'Command Centre' that handles logistics (RSVPs, Budgets) alongside a unique 'AI Senior Stylist.' This Gemini-powered agent acts as a digital diplomat, analysing bridesmaid features to generate harmonious, etiquette-compliant colour palettes instantly.",
        technical_scope: "Next.js 14, TypeScript, Tailwind CSS v4, Google Gemini API",
        link: "https://wedding-planner-lyart.vercel.app/",
        deployment_type: "Demo App",
        category: "Highlights"
    },
    {
        title: "Urban Stay",
        role: "Modern City Rental & Booking Interface",
        summary: "A high-performance booking application engineered to provide a fluid, app-like experience for luxury urban rentals. The project features advanced UI/UX synchronization, including dynamic two-way map linking and Zod-powered date dependency validation.",
        value: "Zod Date Dependency Validation, Two-Way Map Sync, Shared Element Transitions, GPU-Accelerated Carousels",
        technical_scope: "Next.js 14, Framer Motion, Zod Validation, Tailwind CSS v4",
        link: "https://urban-stay-seven.vercel.app/",
        deployment_type: "Live Website",
        category: "Highlights"
    },
    {
        title: "Cairn Architects",
        role: "Performance-Driven Architectural Portfolio",
        summary: "A premium, minimalist architectural portfolio built on a performance-first foundation. The project leverages Astro's Islands Architecture to deliver a visually rich, responsive experience with minimal JavaScript overhead.",
        value: "Astro Islands Architecture, Shared Element Transitions (Gallery), Sub-Second Load Times, Complex Dependency Resolution",
        technical_scope: "Astro, React 19, Framer Motion, Lenis Scroll",
        link: "https://cairn-architects.vercel.app/",
        deployment_type: "Live Website",
        category: "Creative & Web"
    },
    {
        title: "Neon Syntax Memory Game",
        role: "Performance-Driven Logic & State Showcase",
        summary: "A highly performant memory match game built with Svelte 5 (Runes) to showcase modern state management and fast UI rendering. The project features a 'Neon Syntax' aesthetic and intelligent click-logic.",
        value: "Svelte Runes Reactivity, Intelligent Timeout Logic, Persistent High Score, Neon Syntax UI",
        technical_scope: "Svelte 5, Vite, Runes, Local Storage",
        link: "https://memory-card-match-one.vercel.app/",
        deployment_type: "Live App",
        category: "Creative & Web"
    },
    {
        title: "Project DANA",
        role: "Secure Legal Evidence Archive",
        summary: "A privacy-first evidence gathering tool for domestic abuse survivors, featuring military-grade security and plausible deniability. Created for my own needs when despite numerous police reports, they didn't act until it was too late.",
        value: "A 'Vault' disguised as a recipe app ('ChefAI'). It features a Quick Exit panic button, secure entry, dual-timestamping for legal integrity and a generic 'Duress Mode' for safety.",
        technical_scope: "React, Security, UX Design",
        link: "https://nicola-empower.github.io/dana-demo/",
        deployment_type: "Demo App",
        category: "Highlights"
    },

    // --- TIER 2: MODERN DASHBOARDS ---
    {
        title: "Empower Monitor 💎",
        role: "High-Performance Rails 8 Uptime Monitor",
        summary: "A lightweight, high-performance uptime monitoring application built with the latest Ruby on Rails 8 stack. It features a custom Glassmorphism design system and production-ready infrastructure.",
        value: "A 'Glass UI' dashboard that provides real-time health checks, SSL expiration alerts, and response time tracking. Built with a 'No-Build' philosophy for the frontend (Vanilla CSS + Import Maps).",
        technical_scope: "Ruby on Rails 8.1, Solid Queue, Glassmorphism CSS, PostgreSQL",
        link: "",
        deployment_type: "Live Private App",
        category: "Dashboards"
    },
    {
        title: "Medi-Sync",
        role: "Family Care Coordination Dashboard",
        summary: "A trauma-informed dashboard designed to reduce the cognitive load of managing complex multi-person care.",
        value: "A 'Single Source of Truth' for medical logs and routines. The UI uses 'Calm Technology' principles (low contrast, low noise) to reduce cortisol levels during crisis logging.",
        technical_scope: "Next.js, Firebase, Calm Technology",
        link: "https://medisync-app.vercel.app/",
        deployment_type: "Demo App",
        category: "Dashboards"
    },
    {
        title: "Empower Command Centre",
        role: "AI-Driven SaaS Monitoring Dashboard",
        summary: "A white-label business dashboard that provides agencies with real-time client insights and AI-driven growth strategies.",
        value: "A dynamic multi-client dashboard that fuses analytics with an AI engine to translate technical data into actionable business fixes.",
        technical_scope: "Next.js 15, Chart.js, Gemini AI",
        link: "https://empower-command-centre.vercel.app/",
        deployment_type: "Live App",
        category: "Dashboards"
    },

    // --- TIER 3: AI & GEMINI (AI) ---
    {
        title: "Smart Proposal Builder",
        role: "AI-Powered Sales Automation for Agencies",
        summary: "A comprehensive web application designed to streamline the sales process for agencies. This tool leverages Google's Gemini AI to transform unstructured client discovery notes into professional, structured business proposals. Generates PDF and includes Terms and Conditions and e-signature functionality.",
        value: "An AI-powered workspace that transforms raw context into structured contracts. Features a 'Service Layer' architecture to isolate AI logic, integrated e-signatures, and a real-time pipeline dashboard.",
        technical_scope: "React 18, TypeScript, Gemini API, Tailwind CSS",
        link: "",
        deployment_type: "Live Private App",
        category: "AI & GenAI"
    },
    {
        title: "TradePro",
        role: "Intelligent Field Service Management",
        summary: "An AI-powered web application streamlining operations for independent tradespeople.",
        value: "A mobile-first dashboard that uses AI to parse natural language booking requests (e.g., 'Boiler fix at John's tomorrow') and automatically drafts invoices.",
        technical_scope: "Next.js 14, Gemini AI, Google Maps API",
        link: "https://trades-app-lyart.vercel.app/",
        deployment_type: "Demo App",
        category: "AI & GenAI"
    },
    {
        title: "Project Voyager",
        role: "AI-Powered Travel Planner",
        summary: "A modern Next.js travel planning application with AI-powered flight and hotel recommendations using Google's Gemini AI. It features flexible search options for multiple departure airports and destinations.",
        value: "An intelligent travel agent that uses GenAI to understand vague requirements (e.g., 'Warm place in October for £500') and returns concrete, bookable itineraries with real-time pricing.",
        technical_scope: "Next.js 16, React 18, Tailwind CSS v4, Google Gemini AI",
        link: "https://voyager-next.vercel.app/",
        deployment_type: "Demo App",
        category: "AI & GenAI"
    },

    // --- TIER 4: TOOLS & UTILITIES ---
    {
        title: "Finance Ninja",
        role: "Financial Data Tracking & Tax Forecasting",
        summary: "A personal finance dashboard for self-employed individuals to track income and forecast UK taxes.",
        value: "A glassmorphism-styled dashboard that calculates real-time take-home pay after UK/Scottish tax deductions.",
        technical_scope: "Next.js 15, Chart.js, Financial Logic",
        link: "https://finance-ninja-5183.vercel.app/",
        deployment_type: "Demo App",
        category: "Dashboards"
    },
    {
        title: "VAAssist",
        role: "Virtual Assistant Productivity Platform",
        summary: "A streamlined internal portal for Virtual Assistants to manage clients and generate documents.",
        value: "A unified platform for client filtering, time tracking, and instant generation of Invoices and NDAs.",
        technical_scope: "Next.js, SaaS Architecture",
        link: "https://vaassist-app.vercel.app/dashboard",
        deployment_type: "Demo App",
        category: "Dashboards"
    },
    {
        title: "Website Health Checker",
        role: "Lead Funnel Tool",
        summary: "An interactive audit tool that analyses website performance and SEO health.",
        value: "A lead-generation tool that runs real-time performance checks and offers priced action plans.",
        technical_scope: "Next.js, PageSpeed API",
        link: "https://empowerdigitalsolutions.co.uk/website-health-checker/",
        deployment_type: "Live App",
        category: "Dashboards"
    },

    // --- TIER 5 & 6 ---
    {
        title: "AURA",
        role: "Cinematic Personal Branding Platform",
        summary: "A high-performance, editorial-style digital platform designed to translate personal presence into code. Features a custom 'Midnight & Champagne' design system with cinema-grade video backgrounds.",
        value: "Parallax Video Spines, Infinite Marquee, Glassmorphism UI",
        technical_scope: "React + Vite, Framer Motion, Lenis Scroll, CSS Grid",
        link: "https://aura-nine-ochre.vercel.app/",
        deployment_type: "Live Website",
        category: "Creative & Web"
    },
    {
        title: "Global Logistics Planner",
        role: "Real-Time Resource Manager",
        summary: "A white-label logistics engine capable of two distinct modes: 'Enterprise' for global asset tracking and 'Personal' (My Wee Wander Planner) for travel itineraries.",
        value: "A unified 'Core Engine' with swappable CSS modules and logic toggles. The system handles complex multi-leg journeys and resource allocation, whether for shipping containers or holiday memories.",
        technical_scope: "Firebase, React, Styled Components, White-Label",
        link: "https://empowervaservices.co.uk/portfolio/global-logistics-planner",
        deployment_type: "Demo",
        category: "Dashboards"
    },
    {
        title: "Event Proposal Generator",
        role: "Sales Automation",
        summary: "A tool for automatically generating event proposals.",
        value: "A web app that assembles proposals from templates and user input.",
        technical_scope: "Bespoke Web App, Document Assembly",
        link: "https://nicola-empower.github.io/quote-generator/",
        deployment_type: "Demo",
        category: "Automation"
    },
    {
        title: "VowSuite",
        role: "The Future of Weddings is Digital",
        summary: "A premium, white-label SaaS solution designed for wedding planners to scale their business. It replaces scattered emails and spreadsheets with a centralised digital hub.",
        value: "A centralised digital hub with role-based views (Planner, Bride, Guest) and 'Agency-Tier' features like global checklists and smart calendaring.",
        technical_scope: "React (Vite), TypeScript, Tailwind CSS, React Router DOM",
        link: "https://vowsuite-theta.vercel.app/",
        deployment_type: "Live App",
        category: "Dashboards"
    },
    {
        title: "Quote Command",
        role: "Mobile-First Pricing Engine for Trades",
        summary: "A mobile-first pricing engine designed for independent tradespeople. It acts as a 'Digital Daybook', transforming the chaotic process of estimating jobs into a standardized workflow.",
        value: "A local-first SPA that allows rapid batch entry of quotes on the road. Features a dynamic profit engine that calculates Net Cost, Markup, and VAT instantly.",
        technical_scope: "HTML5, Vanilla JS, Tailwind CSS, Chart.js",
        link: "https://nicola-empower.github.io/quote-command/",
        deployment_type: "Demo",
        category: "Dashboards"
    },
    {
        title: "Dashboard Auth Prototype",
        role: "Authentication & Protected Routes",
        summary: "A functional prototype demonstrating secure user authentication and protected dashboard routing.",
        value: "A lightweight React application showcasing a working login system with guarded dashboard access.",
        technical_scope: "React, Vite, Authentication",
        link: "https://dashboard-demo-tgen.vercel.app/",
        deployment_type: "Live App",
        category: "Creative & Web"
    },
    {
        title: "Client Portal & Onboarding Suite",
        role: "Secure Project Operations Ecosystem",
        summary: "A premium, secure infrastructure designed to professionalise the client intake process. This application replaces manual administrative chains with a seamless, gated digital journey.",
        value: "Encrypted Credential Sharing, Guided Onboarding Flow, Physics-Based Animations",
        technical_scope: "Next.js 14, Tailwind CSS v4, Framer Motion, TypeScript",
        link: "https://client-portal-pearl-eight.vercel.app/",
        deployment_type: "Live App",
        category: "Creative & Web"
    },
    {
        title: "ISA Time Machine",
        role: "HD Investment Simulator",
        summary: "An interactive simulation tool that visualises the power of compound interest and asset class volatility.",
        value: "A 'Time Machine' simulator that runs historical market data against user-defined capital to show potential outcomes in real-time.",
        technical_scope: "Chart.js, Tailwind CSS, Financial Data",
        link: "https://isa-time-machine.vercel.app/",
        deployment_type: "Live App",
        category: "Dashboards"
    },
    {
        title: "Subscription Slayer",
        role: "Recurring Expense Auditor",
        summary: "A browser-based audit tool that parses bank statement CSVs to identify and calculate wasted spend on subscriptions.",
        value: "A privacy-first tool that scans CSVs client-side, visualises monthly outgoings, and automatically generates cancellation emails or direct links for known services.",
        technical_scope: "Client-Side Logic, Chart.js, Regex Parsing",
        link: "https://nicola-empower.github.io/subscription-slayer-demo/",
        deployment_type: "Coming Soon",
        category: "Automation"
    },
    {
        title: "Empower Virtual Assistant Services",
        role: "Operational Architecture for the Modern VA",
        summary: "A full-stack 'Virtual Assistant Operating System' that serves as both a marketing platform and an operational command center.",
        value: "Hybrid Astro Architecture, Supabase Auth & Database, SaaS Branding Strategy",
        technical_scope: "Astro, React, Supabase, Tailwind CSS",
        link: "https://empowervaservices.co.uk/",
        deployment_type: "Live Website",
        category: "Creative & Web"
    },
    {
        title: "Empower Automation",
        role: "Custom Google Workspace Automation & Business Process Optimisation",
        summary: "A modern, high-performance website for niche consultancy services. It showcases automation through an interactive, developer-themed design featuring custom tools and educational content.",
        value: "A platform that productizes complex services into clear packages using a 'Terminal Aesthetic'. It features a unified serverless backend (Google Apps Script).",
        technical_scope: "Astro v5.16.3, React v19.2.0, Tailwind CSS v4, Google Apps Script",
        link: "https://empowerautomation.co.uk",
        deployment_type: "Live Website",
        category: "Creative & Web"
    },
    {
        title: "Empower Digital Solutions",
        role: "Custom Code & Scale",
        summary: "A modern, high-performance website built to showcase custom web applications and digital services.",
        value: "Features a secure Client Portal ('The Vault'), an Admin Dashboard for task triage and timekeeping, and automated document generation.",
        technical_scope: "Astro v5, React v19, Supabase, Tailwind CSS v4",
        link: "https://empowerdigitalsolutions.co.uk",
        deployment_type: "Live Website",
        category: "Creative & Web"
    },
    {
        title: "The Zen Den",
        role: "Minimalist Wellness Studio Platform",
        summary: "A high-performance studio website built with a 'Japanese-Scandi' aesthetic.",
        value: "Focuses on advanced responsive layouts—specifically transforming complex data tables into mobile-friendly stacks without losing information.",
        technical_scope: "Next.js 14, TypeScript, Tailwind CSS v4, Framer Motion",
        link: "https://zen-den-azure.vercel.app/",
        deployment_type: "Live Website",
        category: "Creative & Web"
    },
    {
        title: "Bistro 44",
        role: "Atmospheric Dining & Reservation Platform",
        summary: "A sensory-led digital experience for a modern European restaurant, designed to replace static PDF menus with interactive applications.",
        value: "Features 'Warm Luxury' aesthetic, dietary filtering, and a robust reservation engine powered by real-time Zod schema validation.",
        technical_scope: "Next.js 14, Tailwind CSS v4, Framer Motion, Zod Validation",
        link: "https://bistro44.vercel.app/",
        deployment_type: "Live Website",
        category: "Creative & Web"
    },
    {
        title: "Inbox Zero Script",
        role: "Process Automation (GAS)",
        summary: "Bespoke script to tackle chaotic inboxes (15k+ emails).",
        value: "90% reduction in daily management time.",
        technical_scope: "Serverless Google Apps Script with advanced filtering.",
        link: "https://empowervaservices.co.uk/portfolio/inbox-zero",
        deployment_type: "Case Study",
        category: "Automation"
    },
    {
        title: "Automated Lead Funnel",
        role: "Python Data Automation",
        summary: "Structured lead generation pipeline.",
        value: "Delivers 40+ qualified leads/month, saving 8 hrs/week.",
        technical_scope: "Python, BeautifulSoup, Selenium for data scraping/enrichment.",
        link: "https://empowervaservices.co.uk/portfolio/lead-generation",
        deployment_type: "Case Study",
        category: "Automation"
    },
    {
        title: "Intelligent Lead Generation",
        role: "Bespoke Scraping Engine & Audit Tool",
        summary: "Engineered a bespoke scraping engine to simply 'find' businesses and technically audit them in real-time to identify high-intent leads.",
        value: "Replaces 'hunt and peck' manual searching with automated 'Hot Lead' sheets (No Website, SSL Invalid, Slow Speed), enabling tech-driven consulting.",
        technical_scope: "Ruby on Rails, Public Data Sources, Custom Audit Logic",
        link: "https://empowervaservices.co.uk/portfolio/intelligent-lead-generation",
        deployment_type: "Case Study",
        category: "Automation"
    },
    {
        title: "Digital Daybook",
        role: "Custom Quote Automation",
        summary: "Digital replacement for manual joinery quotes.",
        value: "Seamless transfer from field calculator to office master sheet.",
        technical_scope: "Google Apps Script backend streaming to Sheets.",
        link: "https://nicola-empower.github.io/cgh-joinery/",
        deployment_type: "Demo",
        category: "Automation"
    }
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projectsData;
        return projectsData.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="projects" className="py-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-4">My Work & <span className="text-primary">Projects</span></h2>
            <p className="text-center text-text-muted max-w-3xl mx-auto mb-12">
                Explore a selection of my work. Swipe or click to navigate the deck.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                                ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                                : "bg-gray-900 text-gray-400 border-gray-700 hover:border-primary/50 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* 3D Carousel Stage */}
            <div className="relative">
                <ProjectCarousel projects={filteredProjects} />
            </div>
        </section>
    );
}