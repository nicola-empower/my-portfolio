"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`px-3 py-2 rounded-md text-sm font-medium text-text-main hover:bg-primary/50 transition-colors relative`}>
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-secondary rounded-full"></span>
      )}
    </Link>
  );
};

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-glow-nav">
        <div className="flex items-baseline space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}