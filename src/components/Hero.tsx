const Hero = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="relative w-full py-60 rounded-2xl flex justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/media/bg.mp4" type="video/mp4" />
        </video>
        {/* Text */}
        <h2 className="relative text-9xl md:text-[220px] lg:text-[275px] xl:text-[350px] text-white font-[Climate_Crisis] z-10 text-shadow-lg/30">
          KOFI
        </h2>
        {/* Button */}
        <div className="absolute bottom-12 flex gap-10 z-10">
          <a href="#menu">
            <button className="backdrop-blur-xs hover:backdrop-brightness-110 duration-500 ease-in-out p-6 border border-neutral-300 shadow-lg shadow-neutral-600 rounded-lg cursor-pointer active:scale-98 text-xl">
              Menu
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
