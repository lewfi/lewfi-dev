// Component for projects section of website, will display project cards and will link to project

import Image from "next/image"

const projects = [
    {
        title: "ChariWork",
        description: "Automated Charity Donation Platform",
        image: "https://api.microlink.io/?url=https://chari-work-115.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        href: "https://chari-work-115.vercel.app/"
    }
]

export default function Projects() {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Projects
            </h2>

            <div className="grid gap-6 grid-cols-2">
                {projects.map((project) => (
                    
                    /* ChariWork Card */
                    <a 
                        key={project.title}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-800 hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image 
                            src={project.image} 
                            alt={project.title}
                            width={600}
                            height={400}
                            className="hover:scale-110 transition-transform duration-500 overflow-hidden rounded-lg"
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white mb-1">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </a>

                ))}
            </div>
        </section>
    );
}