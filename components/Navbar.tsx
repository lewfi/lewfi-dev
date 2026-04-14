// Component for taskbar section of website: holds all the sections of webpage and scrolls down on selected section

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex justify-between items-center px-16 py-4 bg-zinc-900 backdrop-blur-sm">
            <span className="font-bold text-white text-sm">lewfi.dev</span>

            <div className="flex gap-8 font-serif text-sm text-zinc-400">
                <a className="hover:text-white transition-colors" href="#about">About</a>
                <a className="hover:text-white transition-colors" href="#skills">Skills</a>
                <a className="hover:text-white transition-colors" href="#proj">Projects</a>
                <a className="hover:text-white transition-colors" href="#exp">Experiences</a>
            </div>
        </nav>
    )
}