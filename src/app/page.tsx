"use client";

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="home" className="min-h-screen flex items-center -mt-16 md:-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Portfolio <br /><span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Nicola Berry</span>
            </h1>
            <p className="mt-4 text-xl text-secondary font-semibold">
              Business Systems Analyst | Custom Web App Developer
            </p>

            {/* 👇 Your detailed intro text has been restored here 👇 */}
            <p className="mt-4 text-text-muted">
              A modern, tech-forward administrative and operational support consultancy based in Falkirk, Scotland. I specialise in moving beyond traditional virtual assistance by acting as a Strategic Partner for small to medium-sized enterprises (SMEs), solopreneurs and service-based businesses. My mission is to solve operational problems at their root by designing and implementing custom, automated solutions.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/projects" className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-80 transition-opacity">
                Learn More
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-secondary text-white rounded-lg hover:opacity-80 transition-opacity">
                Get in Touch
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="hidden md:block bg-gray-800/50 p-6 rounded-lg border border-accent/30"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <TypeAnimation
              sequence={[
                `const profile = {
  name: 'Nicola Berry',
  title: 'Business Systems Analyst | Systems & Automation Consultant',
  skills: [
    ''React', 'NextJS', 'NodeJS', 'Google Apps Script', 'WordPress', 'JavaScript', 'Firebase', 'Python', 'Systems Architecture', 'Workflow Automation', 'Canva', 'TypeScript', 'Supabase', 'Figma','Framer Motion', 'Tailwind CSS', 'HTML5', 'CSS3', 'MongoDB', 'Mongoose', 'REST APIs', 'GraphQL', 'Express.js', 'Redux', 'Tanstack Query', 'NextAuth', 'OAuth', 'Git', 'GitHub', 'Vercel', 'Netlify', 'Google Cloud', 'Google Drive', 'UI Animation' 
  ],
  philosophy: 'Don\\'t just do tasks; eliminate them.',
  yearsOfExperience: 5,
  isAvailable: function() {
    const hasCoreSkills = this.skills.includes('Systems Architecture');
    const hasRightMindset = this.philosophy.includes('eliminate');
    
    return hasCoreSkills && hasRightMindset && this.yearsOfExperience >= 5;
  }
};`,
                5000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '0.9em', display: 'block', whiteSpace: 'pre-line', color: '#A7D1D2' }}
              repeat={Infinity}
            />
          </motion.div>
        </div>
      </section>

      {/* --- "ABOUT ME" SECTION --- */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div 
                className="flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Image
                  src="/portfolio.jpg"
                  alt="A photo of Nicola Berry at work"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full max-w-sm mx-auto h-auto border-4 border-accent/30 shadow-glow-card"
                />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
                From Solving My Problems to Building Your Solutions
                </h2>
                <div className="space-y-4 text-text-muted">
                <p>
                    As a Systems Analyst, I specialise in moving businesses beyond traditional assistance by designing and implementing custom, automated solutions that solve operational problems at their root.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                    "I realised the bottlenecks I had eliminated for myself were the same ones holding other businesses back. My focus shifted... I'm not just offering my time anymore; I am designing and creating solutions."
                </blockquote>
                <p>
                    My mission is to transform business operations, moving clients from manual chaos to streamlined, scalable systems. I don't just perform tasks; I build the custom engines that eliminate them permanently.

I bridge the critical gap between high-level administrative support, back-end process automation (Google Apps Script) and full-stack web development. This unique blend allows me to do more than just automate a process; I can design, build and deploy the entire user-friendly platform that runs that process.

My approach focuses on the strategic ROI of building bespoke, permanent solutions that create a single source of truth and reclaim your most valuable asset: time. 
</p>
                </div>
            </motion.div>

        </div>
      </section>
    </>
  );
}