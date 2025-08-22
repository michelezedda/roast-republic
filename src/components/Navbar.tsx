import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-between items-center w-full p-6 z-50 border-2xl">
      <Link to="/">
        <img src="/media/logo.png" alt="Roast Republic logo" className="w-30" />
      </Link>
      <ul className="flex items-center gap-10 text-lg text-black lg:text-white">
        <a href="">
          <li>Since 1998</li>
        </a>
        <a href="#menu">
          <li>Menu</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
