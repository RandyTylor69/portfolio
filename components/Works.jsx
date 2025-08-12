import Image from "next/image";

export default function Works() {
  return (
    <div className="h-auto w-full">
      {/* ----------------- P1 ------------------ */}
      <article
        className="text-md sm:text-xl md:text-2xl
            mt-20 md:mt-40"
      >
        <p>
          I've volunteered to improve the front page components of multiple
          websites with React and Next.js.
        </p>
      </article>
      <div
        className=" mt-20
            flex flex-col flex-wrap md:flex-row gap-8 md:gap-12 justify-center items-center
            "
      >
        <section className="flex flex-col flex-1 gap-4">
          <div className=" relative h-[45vw] w-[90vw] md:w-full md:h-[20vw]">
            <a
              href="https://wrestling-tournament-sales-page.vercel.app/"
              target="_blank"
            >
              <Image
                src={"/images/wt.gif"}
                fill
                alt="wt image"
                className="rounded-[1.5rem] md:rounded-[2rem] cursor-pointer object-cover"
              ></Image>
            </a>
          </div>
          <article className="text-[12px] sm:text-sm flex flex-row flex-wrap gap-x-2 ">
            <p>Wrestling Tournament Sales Page</p>
          </article>
        </section>
        <section className="flex flex-col flex-1 gap-4">
          <div className=" relative h-[45vw] w-[90vw] md:w-full md:h-[20vw]">
            <a
              href="https://practice-3-g1uh7j6vk-depayss-projects.vercel.app/"
              target="_blank"
            >
              <Image
                src={"/images/museum.gif"}
                fill
                alt="museum image"
                className="rounded-[1.5rem] md:rounded-[2rem] object-cover"
              ></Image>
            </a>
          </div>
          <article className="text-[12px] sm:text-sm flex flex-row  flex-wrap gap-x-2">
            <p>Museum Landing Page</p>
          </article>
        </section>
      </div>

      {/* ----------------- P2 ------------------ */}

      <article
        className="text-md sm:text-xl md:text-2xl
            mt-20 md:mt-20"
      >
        <p>
          Using vanilla CSS, SASS and Tailwind, I transform static posters into
          fully responsive platforms.
        </p>
      </article>

      <div className="grid gap-8 md:gap-12
      grid-cols-[repeat(auto-fit,minmax(200px,1fr))] 
      h-auto
        w-full pt-20
       ">
        <div className="bg-purple-400 h-110 sm:h-80 max-w-85 sm:max-w-60">
          
        </div>
        <div className="bg-purple-400 h-110 sm:h-80 max-w-85 sm:max-w-60"></div>
        <div className="bg-purple-400 h-110 sm:h-80 max-w-85 sm:max-w-60"></div>
        <div className="bg-purple-400 h-110 sm:h-80 max-w-85 sm:max-w-60"></div>
        <div className="bg-purple-400 h-110 sm:h-80 max-w-85 sm:max-w-60"></div>
        <div className="bg-purple-400 h-110 sm:h-80 max-w-85 sm:max-w-60"></div>
      </div>
    </div>
  );
}
