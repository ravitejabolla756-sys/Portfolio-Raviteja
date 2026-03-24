import TerminalIntro from "@/components/TerminalIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationCerts from "@/components/EducationCerts";
import Skills from "@/components/Skills";
import Bavio from "@/components/Bavio";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen transition-colors duration-500 overflow-x-hidden">
      <TerminalIntro />
      <Navbar />
      <Hero />
      <About />
      <EducationCerts />
      <Skills />
      <Bavio />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
