import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
// import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-8xl">
        <div className="sm:px-10 px-5">
          <FloatingNav navItems={navItems} />
          <Hero />
          <TechStack />
          <Projects />
          <Experience />
          <Approach />
        </div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
