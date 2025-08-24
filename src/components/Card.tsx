import { useState } from "react";
import type { CardProps } from "../types/types";

const Card = ({ bg, title, paragraph, onClick }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-end bg-cover bg-bottom h-screen cursor-pointer transition-transform duration-700 ease-in-out lg:hover:scale-105"
      style={{ backgroundImage: `url(${bg})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div
        className={`flex flex-col w-full py-20 bg-gradient-to-t from-black/80 via-black/55 to-transparent transition-opacity duration-700 ${
          hovered ? "lg:opacity-100" : "lg:opacity-0"
        }`}
      >
        <div className="overflow-hidden w-full">
          <h1 className="text-4xl 2xl:text-6xl font-[Climate_Crisis] text-white pl-5 lg:pl-10">
            {title.toUpperCase()}
          </h1>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <p className="animate-slide inline-block tracking-[5px] mt-2 text-neutral-300">
            {paragraph.toUpperCase()}
            {paragraph.toUpperCase()}
            {paragraph.toUpperCase()}
            {paragraph.toUpperCase()}
            {paragraph.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
