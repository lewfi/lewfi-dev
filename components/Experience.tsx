// Component for Experience section of website: Experience, date range, description, etc.

export default function Experience() {
    return (
        <section className="snap-start min-h-screen flex flex-col justify-center px-4 md:px-8 max-w-5xl mx-auto" id="exp">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">
                Experience
            </p>

            <div className="flex flex-col gap-4">
                <div className="bg-zinc-900 rounded-2xl p-6">
                    <p className="text-sm text-zinc-200 mb-2 font-bold">
                        Course Reader (Intro to Comp. Networks)
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                        UC Santa Cruz • Mar. 2026 - Present
                    </p>
                    <span className= "text-zinc-400 text-sm">Assisted course instruction by grading assignments, providing feedback, and supporting students' understanding of course material.</span>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6">
                    <p className="text-sm text-zinc-200 mb-2 font-bold">
                        Office Assistant
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                        Merrill F. West High School • Sep 2021 – May 2022
                    </p>
                    <span className= "text-zinc-400 text-sm">Aided front office operations by assisting parents and staff, managing confidential records, and developing strong organizational skills.</span>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6">
                    <p className="text-sm text-zinc-200 mb-2 font-bold">
                        Barista
                    </p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">
                        T4 Tracy • Sep 2021 – Dec 2021
                    </p>
                    <span className= "text-zinc-400 text-sm">Supported front-end operations while strengthening communication, time management, and adaptability within a fast-paced environment.</span>
                </div>
            </div>
        </section>
    )
}