// Component for taskbar section of website: holds all the sections of webpage and scrolls down on selected section

// "use client" tells Next.js to run this component in the browser, enabling interactivity like onClick events.
"use client" 

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex justify-between items-center px-16 py-4 bg-zinc-900 backdrop-blur-sm">
            <span className="font-bold text-white text-sm">lewfi.dev</span>

            <div className="hidden md:flex gap-8 font-serif text-sm text-zinc-400">
                <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    Home
                </button>
                <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    About
                </button>
                <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    Projects
                </button>
                <button 
                    onClick={() => document.getElementById('exp')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    Experience
                </button>
            </div>
        </nav>
    )
}