import { IoIosClose } from "react-icons/io";
import type { InnerCardProps } from "../types/types";

const InnerCard = ({ openId, setOpenId, cards }: InnerCardProps) => {
  return (
    <>
      <div
        className={`transition-all delay-400 2xl:delay-500 duration-700 ease-in-out overflow-y-auto ${
          openId === null ? "translate-x-[100%]" : "w-full translate-x-0"
        }`}
        style={{
          color: openId !== null ? cards[openId].innerText : "transparent",
          backgroundColor:
            openId !== null ? cards[openId].innerBg : "transparent",
        }}
      >
        {openId !== null && (
          <div className="my-30 mx-4 lg:mx-10">
            <h2 className="text-4xl lg:text-5xl mb-4 font-bold">
              {cards[openId].subtitle.toUpperCase()}
            </h2>
            <p
              className="text-xl lg:text-2xl mt-10 leading-9"
              style={{ whiteSpace: "pre-line" }}
            >
              {cards[openId].description}
            </p>
            {/* Drinks? */}
            {cards[openId].menu && (
              <h3 className="mt-10 mb-4 text-2xl lg:text-4xl font-medium">
                Drinks
              </h3>
            )}
            {cards[openId].menu?.map((menuItem) => (
              <div
                key={menuItem.id}
                className="flex justify-between text-xl lg:text-2xl"
              >
                <p>{menuItem.title}</p>
                <span>{menuItem.price}</span>
              </div>
            ))}
            {/* Syrups? */}
            {cards[openId].syrups && (
              <h3 className="mt-10 mb-4 text-2xl lg:text-4xl font-medium">
                Syrups
              </h3>
            )}
            {cards[openId].syrups?.map((menuItem) => (
              <div
                key={menuItem.id}
                className="flex justify-between text-xl lg:text-2xl"
              >
                <p>{menuItem.title}</p>
                <span>{menuItem.price}</span>
              </div>
            ))}
            {/* Pictures */}
            <div className="flex flex-col mt-10 justify-center items-center">
              {cards[openId].img.map((pic) => (
                <div key={pic.id} className="relative">
                  <img
                    src={pic.src}
                    alt={pic.alt}
                    loading="lazy"
                    className="mt-6"
                  />
                  <span className="absolute top-10 left-10 text-black backdrop-blur-xs p-2">
                    {pic.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Close Button */}
      {openId !== null && (
        <button
          className="fixed bottom-20 right-10 active:scale-98 text-2xl cursor-pointer p-3 rounded-full bg-white/70 text-black"
          onClick={() => setOpenId(null)}
        >
          <IoIosClose size={35} />
        </button>
      )}
    </>
  );
};

export default InnerCard;
