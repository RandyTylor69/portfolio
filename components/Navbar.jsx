export default function Navbar() {
  const navArr = ["#home", "#projects", "#works", "#connect"];
  const navItems = navArr.map((i) => {
    const keyword = i.slice(1);
    return (
      <button
        className="flex justify-center items-center text-gray-800
                 text-center px-2 rounded-[1.5rem] cursor-pointer
                 duration-300 hover:bg-[#B3C5B1]
                 
                 "
        key={i}
      >
        <a href={i} className="">
          {keyword}
        </a>
      </button>
    );
  });

  return (
    <nav
      className="p-1 flex flex-row justify-center items-center gap-1
     rounded-[2rem] bg-[#C5D5C3]/90 backdrop-blur-sm
     w-fit
     "
    >
      {navItems}
    </nav>
  );
}
