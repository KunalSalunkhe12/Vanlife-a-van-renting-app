import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 right-0">
      <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-background">
        <Link to="/">
          <img className=" w-24 md:w-36" src={Logo} alt="VanLife logo" />
        </Link>
        <ul className="flex gap-10 font-semibold">
          <li className="cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
