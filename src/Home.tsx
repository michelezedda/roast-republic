import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { IoIosClose } from "react-icons/io";
import { cards } from "./data/data";

const Home = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="h-[100dvh] w-full brightness-90 lg:overflow-hidden">
      <Navbar />
      <div className="flex w-full h-screen">
        {/* Cards */}
        <div
          className={`flex flex-col lg:flex-row transition-all duration-700 ${
            openId === null ? "w-full" : "w-0 lg:w-1/2"
          }`}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className={`transition-all duration-700 ease-in-out ${
                openId === null
                  ? "lg:w-1/3"
                  : openId === card.id
                  ? "lg:w-full"
                  : "lg:w-0 overflow-hidden"
              }`}
            >
              <Card
                {...card}
                onClick={() => setOpenId(openId === card.id ? null : card.id)}
              />
            </div>
          ))}
        </div>
        {/* Inner Card */}
        <div
          className={`transition-all delay-400 2xl:delay-500 duration-700 ease-in-out overflow-y-scroll ${
            openId === null ? "translate-x-[100%]" : "w-full translate-x-0"
          }`}
          style={{
            color: openId !== null ? cards[openId].innerText : "transparent",
            backgroundColor:
              openId !== null ? cards[openId].innerBg : "transparent",
          }}
        >
          {openId !== null && (
            <div className="mt-26 my-10 mx-4 lg:mx-10">
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
              <button
                className="absolute bottom-20 right-8 text-2xl cursor-pointer p-3 rounded-full bg-white/70 text-black"
                onClick={() => setOpenId(null)}
              >
                <IoIosClose size={35} />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
