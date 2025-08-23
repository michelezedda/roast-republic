import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const Home = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cards = [
    {
      bg: "/media/our-story.webp",
      title: "Roast Republic",
      paragraph: "Since 1998",
      innerBg: "#b1b1b1",
      innerText: "#000",
      subtitle: "",
      description: "",
    },
    {
      bg: "/media/menu.webp",
      title: "Menu",
      paragraph: "Take a Look",
      innerBg: "dbd6cc",
      innerText: "#000",
      subtitle: "",
      description: "",
    },
    {
      bg: "/media/reviews.webp",
      title: "Reviews",
      paragraph: "Loved by Many",
      innerBg: "#141414",
      innerText: "#fff",
      subtitle: "",
      description: "",
    },
  ];

  return (
    <main className="h-[100dvh] w-full brightness-85">
      <Navbar />
      <div className="flex w-full h-screen lg:overflow-hidden">
        {/* Cards */}
        <div
          className={`flex flex-col lg:flex-row transition-all duration-700 ${
            openIndex === null ? "w-full" : "w-0 lg:w-1/2"
          }`}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transition-all duration-700 lg:overflow-hidden ease-in-out ${
                openIndex === null
                  ? "lg:w-1/3 lg:opacity-100"
                  : openIndex === index
                  ? "lg:w-full lg:opacity-100"
                  : "lg:w-0 lg:opacity-0"
              }`}
            >
              <Card
                {...card}
                open={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>
        {/* Inner Card */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            openIndex === null ? "w-0 p-0" : "w-full lg:w-1/2 p-10"
          }`}
          style={{
            color:
              openIndex !== null ? cards[openIndex].innerText : "transparent",
            backgroundColor:
              openIndex !== null ? cards[openIndex].innerBg : "transparent",
          }}
        >
          {openIndex !== null && (
            <div className="my-12 mx-4">
              <h2 className="text-4xl mb-4">{cards[openIndex].title}</h2>
              <p>Details about {cards[openIndex].title} go here...</p>
              <button
                className="absolute bottom-15 right-15 text-2xl cursor-pointer px-6 py-4 rounded-full bg-white text-black"
                onClick={() => setOpenIndex(null)}
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
