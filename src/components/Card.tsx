import { useState } from "react";
import type { CardProps } from "../types/types";

const Card = ({ bg, title, paragraph, onClick }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-end bg-cover bg-bottom lg:bg-center h-[65dvh] lg:h-screen cursor-pointer transition-transform duration-700 ease-in-out lg:hover:scale-105"
      style={{ backgroundImage: `url(${bg})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div
        className={`flex flex-col w-full py-20 pl-5 lg:pl-10 bg-gradient-to-t from-black/90 via-black/65 to-transparent transition-opacity duration-700 ${
          hovered ? "lg:opacity-100" : "lg:opacity-0"
        }`}
      >
        <h1 className="text-4xl 2xl:text-6xl font-[Climate_Crisis] text-white w-2/3">
          {title.toUpperCase()}
        </h1>
        <p className="mt-2 text-neutral-300">{paragraph.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Card;
