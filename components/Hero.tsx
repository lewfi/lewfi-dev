// Component for hero section of website: name & job aspiration

// Note: className (green) is used instead of class in React, and the values (yellow) are Tailwind CSS classes for styling

export default function Hero() {
    return (
        <section className="mb-4">
            <h1 className="text-4xl font-serif font-bold text-white mb-2">
                Benjamin Lien
            </h1>
            <p className="text-zinc-400 text-lg mb-1">
                Aspiring Full-Stack Developer & Data Engineer
            </p>
        </section>
    );
}