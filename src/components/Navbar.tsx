const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-center items-center w-full py-8 z-50 border-2xl bg-[#dad3bd]">
      <img
        src="/media/logo.png"
        alt="Kofi logo"
        className="absolute top-0 w-35 bg-[#dad3bd] rounded-full"
      />
    </nav>
  );
};

export default Navbar;
