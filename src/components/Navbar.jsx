import Logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-primary fixed w-full top-0 right-0">
      <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-background">
        <Link to="/">
          <img className=" w-24 md:w-36" src={Logo} alt="VanLife logo" />
        </Link>
        <ul className="flex gap-10 font-semibold">
          <li className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : null
              }
              to="/host"
            >
              Host
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : null
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : null
              }
              to="/vans"
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
