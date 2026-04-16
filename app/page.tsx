// Main page of website, where components are imported and rendered.

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Experience from "../components/Experience"

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white h-screen overflow-y-scroll snap-y snap-proximity">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}