export default function Connect() {
  return (
    <div className="h-auto w-full">
      <article
        className="text-md sm:text-xl md:text-2xl
            mt-20 md:mt-40 mb-20 flex flex-col gap-4
            "
      >
        <p>My goal is to help your company grow with my skillset.</p>
        <ul className="flex flex-col md:flex-row text-black/40 text-md md:gap-4 md:text-[1.2rem]">
          <li>
            <a
              href="https://github.com/RandyTylor69"
              className="hover:text-black hover:underline duration-300"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/christopher-mao-2414752a8/"
              className="hover:text-black hover:underline duration-300"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1rL9Pake3w-jYaXBXkYKFobHkoqyq97HW/view?usp=sharing"
              className="hover:text-black hover:underline duration-300"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="mailto:christophermaomao@gmail.com"
              className="hover:text-black hover:underline duration-300"
              target="_blank"
            >
              Email
            </a>
          </li>
        </ul>
      </article>

      <link
        rel="stylesheet"
        href="https://jacobl04.github.io/Western-Webrings/webring.css"
      />

      <div
        id="western-webring"
        data-style="default"
        data-color="blue"
        data-show-list="true"
        data-show-random="true"
        data-random-text="[?]"
        data-arrow-prev="&lt; Prev"
        data-arrow-next="Next &gt;"
      ></div>

      <script
        src="https://jacobl04.github.io/Western-Webrings/webring.js"
        async
      ></script>
    </div>
  );
}
