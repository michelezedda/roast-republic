const Navbar = () => {
  return (
    <nav className="absolute flex justify-between items-center w-full p-6 z-50">
      <a href="/">
        <img src="/media/logo.png" alt="Roast Republic logo" className="w-30" />
      </a>
      {/* <ul className="flex items-center gap-10 text-lg text-black">
        <a href="/">
          <li>Since 1998</li>
        </a>
        <a href="/">
          <li>Menu</li>
        </a>
        <a href="/">
          <li>Reviews</li>
        </a>
      </ul> */}
    </nav>
  );
};

export default Navbar;
