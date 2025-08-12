// src/components/SkillsSection.tsx

import SkillsSphere from './SkillsSphere';

// Reusable component for the skill "pills" inside the cards
const SkillPill = ({ name }: { name: string }) => (
    <div className="bg-accent/20 text-accent px-3 py-1 text-sm rounded-full font-medium">
        {name}
    </div>
);

// Reusable component for the skill category cards
const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-accent/30 hover:shadow-glow-card transition-shadow duration-300">
        <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => <SkillPill key={skill} name={skill} />)}
        </div>
    </div>
);

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-primary">Skills</span></h2>
            
            {/* The animated sphere of logos */}
            <SkillsSphere />

            {/* The grid of skill cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <SkillCard 
                    title="Frontend Development" 
                    skills={['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']} 
                />
                <SkillCard 
                    title="Backend Development" 
                    skills={['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs']} 
                />
                <SkillCard 
                    title="UI/UX Design" 
                    skills={['Figma', 'Responsive Design', 'Wireframing', 'Prototyping']} 
                />
                <SkillCard 
                    title="Cloud & DevOps" 
                    skills={['Git', 'GitHub', 'Vercel', 'Netlify', 'Google Cloud']} 
                />
                <SkillCard 
                    title="Tools & Technologies" 
                    skills={['VS Code', 'Redux', 'Tanstack Query', 'NextAuth', 'Firebase']} 
                />
                <SkillCard 
                    title="Creative Skills" 
                    skills={['UI Animation', 'SVG Animation', 'Graphic Design']} 
                />
            </div>
        </section>
    );
}