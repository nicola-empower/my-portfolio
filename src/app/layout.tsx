// src/app/layout.tsx

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: 'Nicola Berry | Systems Analyst & Full Stack Developer',
  description: 'Portfolio of Nicola Berry, a Business Systems Analyst and Full Stack Developer specialising in custom automation, React/Next.js applications, and operational strategy.',
  keywords: ['Business Systems Analyst', 'Full Stack Developer', 'React', 'Next.js', 'Automation', 'Nicola Berry', 'Web Development', 'Falkirk', 'Scotland'],
  openGraph: {
    title: 'Nicola Berry | Systems Analyst & Full Stack Developer',
    description: 'Specialising in moving businesses beyond traditional assistance by acting as a Strategic Partner for SMEs.',
    url: 'https://nicolaberry.uk', // Assuming this is the domain based on email
    siteName: 'Nicola Berry Portfolio',
    images: [
      {
        url: '/portfolio.jpg', // Using the profile image as fallback
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicola Berry | Systems Analyst & Full Stack Developer',
    description: 'Building custom engines that eliminate manual tasks.',
    images: ['/portfolio.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className} bg-background text-text-main relative`}>

        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10rem] right-[5rem] w-72 h-72 bg-secondary rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-[-5rem] left-[-5rem] w-72 h-72 bg-primary rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <Navbar />

        {/* This <main> tag is what centers your content. */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <Script
          strategy="afterInteractive"
          src="https://www.goat1000.com/tagcanvas.min.js"
        />
      </body>
    </html>
  );
}