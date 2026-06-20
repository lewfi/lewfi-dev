import CursorGlow from "../components/CursorGlow";
import AnimationInit from "../components/AnimationInit";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Now from "../components/Now";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <AnimationInit />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Now />
        <Contact />
      </main>
    </>
  );
}
