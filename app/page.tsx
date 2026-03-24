import TerminalIntro from "@/components/TerminalIntro";
import Header from "@/components/Header";
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
    <main className="relative bg-[#020617] overflow-x-hidden">
      <TerminalIntro />
      <Header />
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
