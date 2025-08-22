import type { CardProps } from "../types/types";

const Card = ({ bg, title, paragraph }: CardProps) => {
  return (
    <div
      className={`flex justify-start items-end bg-[url(${bg})] bg-cover brightness-80 lg:w-1/3 h-200 lg:h-screen bg-center lg:hover:w-3/3 duration-700 ease-in-out cursor-pointer`}
    >
      <div className="flex flex-col w-full py-20 px-15 bg-gradient-to-t from-black/90 via-black/65 to-transparent">
        <h1 className="text-4xl font-[Climate_Crisis] text-white">
          {title.toUpperCase()}
        </h1>
        <p className="mt-2 text-neutral-300">{paragraph.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Card;
