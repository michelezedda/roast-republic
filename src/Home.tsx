import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { cards } from "./data/data";
import InnerCard from "./components/InnerCard";

const Home = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="h-[100dvh] w-full brightness-90 lg:overflow-hidden">
      <Navbar />
      <div className="flex w-full h-full">
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
        <InnerCard openId={openId} setOpenId={setOpenId} cards={cards} />
      </div>
    </main>
  );
};

export default Home;
