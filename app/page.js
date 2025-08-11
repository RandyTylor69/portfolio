import Image from "next/image";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";

export default function Home() {
  return (
    <div className="flex flex-col w-full md:w-150 lg:w-300">
      <header className="flex justify-center items-center">
        <Navbar />
      </header>
      <main className="">
        <section id="start">
          <Start />
        </section>
      </main>
    </div>
  );
}
