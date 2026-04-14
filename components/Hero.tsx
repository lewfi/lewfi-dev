// Component for hero section of website: name & job aspiration

// Note: className (green) is used instead of class in React, and the values (yellow) are Tailwind CSS classes for styling

import Socials from "../components/Socials";

export default function Hero() {
    return (
        <div className="bg-zinc-900 rounded-2xl p-6 mb-4">
            <p className="text-stone-500 text-sm font-bold mb-2">
                Computer Science • University of California, Santa Cruz
            </p>
            <h1 className="text-4xl font-serif font-bold text-white mb-2">
                Benjamin Lien
            </h1>
            <p className="text-zinc-400 text-lg mb-2">
                Aspiring Full-Stack Developer & Data Engineer
            </p>
            <p className="text-stone-400 mb-2">
                A fourth-year Computer Science student at UC Santa Cruz that enjoys learning about full-stack development and data engineering, and building projects related to those topics.
            </p>

            <Socials />
        </div>
    );
}