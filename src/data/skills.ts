import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaShapes, FaShieldAlt, FaPenNib } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiVercel, SiFramer, SiCanva, SiNetlify, SiGooglecloud, SiRedux, SiReactquery, SiFirebase } from 'react-icons/si';
import { TbApi, TbBrandVscode } from 'react-icons/tb';
import { MdDevices, MdDesignServices, MdAnimation } from 'react-icons/md';
import { FaVectorSquare } from 'react-icons/fa6'; // New FontAwesome 6 import for VectorSquare if needed, or fallback

// Define the type for a skill
export interface Skill {
    name: string;
    icon: any; // Using 'any' for React Icon component type flexibility
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiFramer },
        ]
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Python", icon: FaPython },
            { name: "REST APIs", icon: TbApi },
        ]
    },
    {
        title: "UI/UX Design",
        skills: [
            { name: "Figma", icon: FaFigma },
            { name: "Canva", icon: SiCanva },
            { name: "Responsive Design", icon: MdDevices },
            { name: "Wireframing", icon: MdDesignServices },
            { name: "Prototyping", icon: FaShapes },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "Vercel", icon: SiVercel },
            { name: "Netlify", icon: SiNetlify },
            { name: "Google Cloud", icon: SiGooglecloud },
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            { name: "VS Code", icon: TbBrandVscode },
            { name: "Redux", icon: SiRedux },
            { name: "Tanstack Query", icon: SiReactquery },
            { name: "NextAuth", icon: FaShieldAlt },
            { name: "Firebase", icon: SiFirebase },
        ]
    },
    {
        title: "Creative Skills",
        skills: [
            { name: "UI Animation", icon: MdAnimation },
            { name: "SVG Animation", icon: FaVectorSquare },
            { name: "Graphic Design", icon: FaPenNib },
        ]
    }
];

// Flatten the categories to get a single list for the Sphere
export const allSkills: Skill[] = skillCategories.flatMap(category => category.skills);
