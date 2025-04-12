import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="md:w-98/100 w-full mx-auto  text-gray-200 shadow-2xl rounded-b-3xl mb-10 bg-white/40 fixed z-99  backdrop-blur-sm ">
        <div className="mx-auto flex justify-between items-center gap-10 lg:py-5 py-3 px-5">
          <Link
            to="/"
            className="flex justify-between items-center gap-3 lg:ps-3"
          >
            <h2 className="lg:text-3xl text-2xl text-white font-extrabold italic ">
              Let's Play
            </h2>
          </Link>

          <div className="gap-5 text-xl hidden lg:flex lg:pe-3">
            <NavLink
              className="hover:text-shadow-md  rounded-xl transition"
              to="/events"
            >
              Eventi
            </NavLink>
            <NavLink
              className="hover:text-shadow-md  rounded-xl transition"
              to="/contacts"
            >
              Contatti
            </NavLink>
          </div>
        </div>
        <div className="py-3 ps-3 lg:hidden">
          <NavLink className="px-3 py-4" to="/events">
            Eventi
          </NavLink>
          <NavLink className="px-3 py-4" to="/contacts">
            Contatti
          </NavLink>
        </div>
      </div>
    </>
  );
}
