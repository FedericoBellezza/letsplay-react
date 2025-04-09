import { Link, NavLink } from "react-router";

export default function Navbar() {
  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <div className="lg:w-98/100 mx-auto  text-gray-200 shadow-2xl rounded-b-3xl mb-10 bg-white/50 fixed z-99  backdrop-blur-md ">
        <div className="mx-auto flex justify-between items-center gap-10 lg:py-5 py-3 px-5">
          <Link
            href="/"
            className="flex justify-between items-center gap-3 lg:ps-3"
          >
            <img
              src="./imgs/logo white.png"
              className="h-8"
              alt="Let's Play logo"
            />
            <h2 className="lg:text-3xl text-2xl text-white font-extrabold italic">
              Let's Play
            </h2>
          </Link>

          <div className="gap-3 text-xl hidden lg:flex lg:pe-3">
            <NavLink
              className="hover:text-shadow-md  rounded-xl transition"
              to="/events"
            >
              Eventi
            </NavLink>
            <NavLink
              className="hover:hover:text-shadow-md  rounded-xl transition"
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
          <NavLink className="px-3 py-4" to="/events">
            Qualcosa
          </NavLink>
        </div>
      </div>
    </>
  );
}
