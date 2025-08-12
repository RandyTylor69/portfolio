import Image from "next/image";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";
import Projects from "@/components/Projects";
import Works from "@/components/Works";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <div className="flex flex-col w-full md:w-150 lg:w-300 justify-center items-center">
      <header className="flex justify-center items-center fixed top-6 z-1200">
        <Navbar />
      </header>
      <main>
        <section id="home"  className="scroll-m-20">
          <Start />
        </section>
        <section id="projects" className="scroll-m-20">
          <Projects />
        </section>
        <section id="works" className="scroll-m-20">
          <Works />
        </section>
                <section id="connect" className="scroll-m-20">
          <Connect />
        </section>
      </main>
    </div>
  );
}
