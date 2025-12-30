"use client";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center p-4">
            {/* Glitch Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            </div>

            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 mb-4 animate-pulse relative z-10">
                404
            </h1>
            <h2 className="text-2xl font-mono text-white mb-8 relative z-10">
                SYSTEM FAILURE <span className="animate-blink">_</span>
            </h2>
            <p className="text-text-muted max-w-md mb-8 relative z-10">
                The requested digital asset could not be located. It may have been deprecated, moved, or deleted by the administrator.
            </p>

            <a href="/" className="px-8 py-3 bg-red-500/20 border border-red-500/50 hover:bg-red-500 hover:text-white transition-all rounded-lg font-mono text-red-400 relative z-10">
                REBOOT SYSTEM (HOME)
            </a>
        </div>
    );
}
