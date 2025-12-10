"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
    title: string;
    subtitle?: string;
    description?: string;
    items?: string[];
    icon?: React.ReactNode;
    className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, description, items, icon, className = "" }) => {
    return (
        <motion.div
            className={`bg-gray-800/50 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors duration-300 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3 mb-3">
                {icon && <div className="text-2xl text-primary">{icon}</div>}
                <h3 className="text-xl font-bold text-secondary">{title}</h3>
            </div>

            {subtitle && <p className="text-primary font-semibold mb-2">{subtitle}</p>}

            {description && <p className="text-text-main mb-4 leading-relaxed">{description}</p>}

            {items && items.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-text-muted">
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export default InfoCard;
