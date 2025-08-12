import Image from "next/image";

export default function Projects() {
  return (
    <div
      className="
      flex flex-col flex-wrap md:flex-row gap-8 md:gap-12 justify-center items-center
      "
    >
      <section className="flex flex-col flex-1 gap-4">
        <div className=" relative h-[45vw] w-[90vw] md:w-full md:h-[20vw]">
          <a href="https://personal-blog-app-tau.vercel.app/" target="_blank">
            <Image
              src={"/images/temp-project-1.jpg"}
              fill
              alt="blog app image"
              className="rounded-[1.5rem] md:rounded-[2rem] cursor-pointer object-cover"
            ></Image>
          </a>
        </div>
        <article className="text-[12px] sm:text-sm flex flex-row flex-wrap gap-x-2 ">
          <p>A Blog of One's Own</p>
          <p className="text-gray-500">
            Full-stack dev blog powered by a RESTful API
          </p>
        </article>
      </section>
      <section className="flex flex-col flex-1 gap-4">
        <div className=" relative h-[45vw] w-[90vw] md:w-full md:h-[20vw]">
          <a href="https://beats-maker-app.vercel.app/" target="_blank">
            <Image
              src={"/images/beats-maker.gif"}
              fill
              alt="blog app image"
              className="rounded-[1.5rem] md:rounded-[2rem] object-cover"
            ></Image>
          </a>
        </div>
        <article className="text-[12px] sm:text-sm flex flex-row  flex-wrap gap-x-2">
          <p>Music Sequencer</p>
          <p className="text-gray-500">
            16-step beat maker with a compact database
          </p>
        </article>
      </section>
    </div>
  );
}
