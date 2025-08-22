const Hero = () => {
  return (
    <section className="relative flex justify-center items-center">
      <div className="bg-[#909e4b] p-60 w-[90%] rounded-2xl flex justify-center">
        <h2 className="text-[140px] font-[Climate_Crisis]">KOFI</h2>
        <img
          src="/media/glass.png"
          alt="matcha latte"
          className="absolute w-60 top-36 z-1"
        />
        <img
          src="/media/ice.png"
          alt="ice cubes"
          className="absolute top-16 w-80"
        />
        <div className="absolute bottom-12 flex gap-10">
          <button className="backdrop-blur hover:backdrop-brightness-110 duration-500 ease-in-out p-6 border border-neutral-300 shadow-lg shadow-neutral-600 rounded-lg z-2 text-neutral-200 cursor-pointer active:scale-98 text-xl">
            Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
