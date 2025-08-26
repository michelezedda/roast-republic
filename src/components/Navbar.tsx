const Navbar = () => {
  return (
    <nav className="absolute flex justify-between items-center w-full p-6 z-50 backdrop-blur-xs lg:backdrop-blur-none">
      <a href="/">
        <img src="/media/logo.png" alt="Roast Republic logo" className="w-30" />
      </a>
      <span className="text-black text-lg hover:underline cursor-pointer">
        Find a location
      </span>
    </nav>
  );
};

export default Navbar;
