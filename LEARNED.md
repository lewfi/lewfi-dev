This .md summarizes what I learned from this project.

1. React components:
    - export default function ComponentName: Creating components so that other files can import them for use
    - Component names should always start with capital letter to distinguish them from HTML elements

2. JSX:
    - HTML-like syntax written inside of JavaScript/TypeScript
    - So instead of (pure HTML structure in JavaScript): 
        const element = document.createElement("h1")
        element.className = "text-white"
        element.textContent = "Benjamin Lien"

      We can have (JSX):
        const element = <h1 className="text-white">Benjamin Lien</h1>
    - JSX is just Javascript with certain HTML words changed to avoid clashing like class -> className
    - If you want to run actual JavaScript, must switch into "JavaScript mode" by wrapping it in {}

3. Tailwind CSS:
    - Utility-first CSS framework that lets you style elements by adding class names directly into your JSX.
    - Example: p-8, mb-8, gap-6, pt-24, bg-zinc-950, text-zinc-400, text-white, text-4xl, font-serif, flex, grid-cols-2, max-w-3xl, mx-auto, hover:text-white, hover:scale-110, etc

4. Semantic HTML:
    - HTML elements carry meaning
    - <section> represents a distinct part of a page
    - <h1>, <h2>, etc. represents heading hierarchy
    - <div> is a generic container without semantic meaning, unlike <section>

5. Arrays and .map():
    - .map() is a JavaScript array method that loops over every item in an array and transforms each one into something new.
    - React uses it to turn a data array into JSX elements
    - Items rendered inside a .map() needs a unique key prop so React can track and efficiently update each item
    - Example: links.map((link) => ...)

6. External Links:
    - Use target="_blank" to open new tab and rel="noopener noreferrer" as security measure to prevent new tab from having access to your page

7. Next.js Image Component:
    - <Image /> component from "next/image" requires src, alt, width, height
    - For any external image URLs, whitelist the domain in next.config.ts under images.remotePatterns (security feature to prevent app from loading images from untrusted sources)

8. CSS Inheritance:
    - CSS properties like color cascade down from parent to child elements
    - Example: setting text-zinc-500 on <div> will make all <a> tags inherit color unless they override it
