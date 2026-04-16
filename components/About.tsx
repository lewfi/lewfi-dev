// Component for About section of website: talks about me, my goals, my skills, etc.

export default function About(){
    return (
        <section className="flex flex-col justify-center snap-start min-h-screen px-4 md:px-8 max-w-5xl mx-auto py-12" id="about">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
                About Me
            </p>
            <div className="bg-zinc-900 rounded-2xl p-8 mb-4 w-full">
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    I'm a fourth-year Computer Science student at UC Santa Cruz, graduating in June 2026. 
                    I enjoy working across Full-Stack Development, Machine Learning, and Data Engineering, with a desire to build products that are helpful at scale. 
                    My goal is to leverage data and machine learning to deliver meaningful insights through my projects and future work.
                </p>
            </div>

            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
                Skills
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-2xl p-8">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                        Languages
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">TypeScript/JavaScript</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Python</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">C/C++</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Java</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">HTML/CSS</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Shell</span>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-8">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                        Frameworks & Libraries
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">React</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Next.js</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Tailwind CSS</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">ReCharts</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Scikit-Learn</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">NumPy</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Scapy</span>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-8">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                        Tools & Databases
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Git/GitHub</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">PostgreSQL (Neon, Supabase)</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Vercel</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Powershell</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">Linux</span>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-8">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                        Certifications
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">CompTIA A+</span>
                        <span className="bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-serif font-bold">AWS Certified Cloud Practitioner</span>
                    </div>
                </div>
            </div>
        </section>
    )
}