"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLayerGroup, FaCheckCircle, FaPython, FaDatabase, FaBrain, FaServer } from "react-icons/fa";

export default function HeroGlassCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square"
        >
            {/* Background Glows (The "Glitch" vibe user liked, subtle here) */}
            <div className="absolute top-1/4 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

            {/* The Glass Card */}
            <div
                className="relative h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-8 flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-colors"
                style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)"
                }}
            >
                {/* Header: Identity */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-black p-[2px] shadow-lg">
                        <img
                            src="/portfolio.jpg"
                            alt="Nicola"
                            className="w-full h-full rounded-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-wide">NICOLA BERRY</h3>
                        <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                            <FaCheckCircle /> Verified System
                        </div>
                    </div>
                    <div className="ml-auto opacity-50">
                        <FaCode size={24} className="text-white/20 group-hover:text-primary transition-colors" />
                    </div>
                </div>

                {/* Body: Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-6">
                    <div className="p-4 bg-black/20 rounded-xl border border-white/5 hover:bg-black/30 transition-colors">
                        <div className="text-2xl font-bold text-white mb-1">5+</div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">Years Exp</div>
                    </div>
                    <div className="p-4 bg-black/20 rounded-xl border border-white/5 hover:bg-black/30 transition-colors">
                        <div className="text-2xl font-bold text-accent mb-1">36+</div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="p-4 bg-black/20 rounded-xl border border-white/5 hover:bg-black/30 transition-colors">
                        <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">Automation</div>
                    </div>
                    <div className="p-4 bg-black/20 rounded-xl border border-white/5 hover:bg-black/30 transition-colors">
                        <div className="text-2xl font-bold text-white mb-1">24/7</div>
                        <div className="text-xs text-text-muted uppercase tracking-wider">Uptime</div>
                    </div>
                </div>

                {/* Footer: Active Stack */}
                <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 font-mono mb-3 uppercase">Core Systems</p>
                    <div className="flex gap-4 text-2xl text-gray-400">
                        <span title="React / Next.js" className="hover:text-[#61DAFB] transition-colors cursor-help"><FaRocket /></span>
                        <span title="Python & Automation" className="hover:text-yellow-400 transition-colors cursor-help"><FaPython /></span>
                        <span title="Systems Architecture" className="hover:text-green-400 transition-colors cursor-help"><FaServer /></span>
                        <span title="AI & Logic" className="hover:text-purple-400 transition-colors cursor-help"><FaBrain /></span>
                        <span title="Data & Backend" className="hover:text-blue-400 transition-colors cursor-help"><FaDatabase /></span>
                    </div>
                </div>

                {/* Decorative Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>
        </motion.div>
    );
}
