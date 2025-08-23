import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { IoIosClose } from "react-icons/io";
import { cards } from "./data/data";

const Home = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="h-[100dvh] w-full brightness-90">
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
              className={`transition-all duration-700 lg:overflow-hidden ease-in-out ${
                openId === null
                  ? "lg:w-1/3 lg:opacity-100"
                  : openId === card.id
                  ? "lg:w-full lg:opacity-100"
                  : "lg:w-0 lg:opacity-0"
              }`}
            >
              <Card
                {...card}
                open={openId === card.id}
                onClick={() => setOpenId(openId === card.id ? null : card.id)}
              />
            </div>
          ))}
        </div>
        {/* Inner Card */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-y-scroll ${
            openId === null ? "w-0 p-0" : "w-full lg:w-1/2 p-10"
          }`}
          style={{
            color: openId !== null ? cards[openId].innerText : "transparent",
            backgroundColor:
              openId !== null ? cards[openId].innerBg : "transparent",
          }}
        >
          {openId !== null && (
            <div className="my-20 mx-4 lg:mx-10">
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
