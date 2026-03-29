// Main page of website, where components are imported and rendered.

import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-24 max-w-3xl mx-auto">
      <Hero />
      <Socials />
      <Projects />
    </main>
  );
}
