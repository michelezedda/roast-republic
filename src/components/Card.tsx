import { useState } from "react";
import type { CardProps } from "../types/types";

const Card = ({ bg, title, paragraph }: CardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={`flex justify-start items-end bg-cover brightness-80 lg:w-1/3 h-200 lg:h-screen bg-center lg:hover:w-300 duration-700 ease-in-out cursor-pointer`}
      style={{ backgroundImage: `url(${bg})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex flex-col w-full py-20 px-15 bg-gradient-to-t from-black/90 via-black/65 to-transparent duration-700 transform-all ${
          hovered ? "lg:opacity-100" : "lg:opacity-0"
        }`}
      >
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-[Climate_Crisis] text-white w-2/3">
          {title.toUpperCase()}
        </h1>
        <p className="mt-2 text-neutral-300">{paragraph.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Card;
