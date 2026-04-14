// Main page of website, where components are imported and rendered.

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
    <Navbar />
    <main className="pt-8 px-8 max-w-3xl mx-auto">
      <Hero />
      <Projects />
    </main>
    </div>
  );
}
