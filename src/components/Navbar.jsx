import { useState } from "react";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <div className="   w-screen border border-gray-300 text-gray-700">
        <div className="container mx-auto flex justify-between items-center gap-10 py-3 px-3">
          <a href="/" className="flex justify-between items-center gap-3">
            <img
              src="./imgs/logo gray.png"
              className="lg:h-13 h-8"
              alt="Let's Play logo"
            />
            <h2 className="lg:text-4xl text-2xl font-extrabold italic">
              Let's Play
            </h2>
          </a>
          <div className="lg:text-3xl text-xl">
            <span
              className="lg:hidden cursor-pointer"
              onClick={() => {
                isNavbarOpen ? setIsNavbarOpen(false) : setIsNavbarOpen(true);
              }}
            >
              {isNavbarOpen ? "❌" : "🍔"}
            </span>
          </div>
          <div className=" gap-5 text-xl hidden lg:flex">
            <a
              className="hover:bg-gray-100 px-3 py-1 rounded-xl transition"
              href="/"
            >
              Eventi
            </a>
            <a
              className="hover:bg-gray-100 px-3 py-1 rounded-xl transition"
              href="/"
            >
              Contatti
            </a>
          </div>
        </div>
      </div>
      {/* dropdown menu */}
      <div
        className={`bg-gray-700  text-white flex flex-col absolute w-full  ${
          isNavbarOpen ? "block" : "hidden"
        }`}
      >
        <a className="px-3 py-4" href="/events">
          Eventi
        </a>
        <a className="px-3 py-4" href="/events">
          Contatti
        </a>
      </div>
    </>
  );
}
