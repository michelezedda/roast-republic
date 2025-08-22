const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-center items-center w-[91%] py-8 z-50 border-2xl bg-[#dad3bd]">
      <img
        src="/media/logo.png"
        alt="Kofi logo"
        className="absolute top-0 w-40 p-2 bg-[#dad3bd] rounded-full"
      />
    </nav>
  );
};

export default Navbar;
