import Card from "./components/Card";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <main className="h-[100vdh] w-full">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Card
          bg="/media/our-story.webp"
          title="Roast Republic"
          paragraph="Learn More"
        />
        <Card bg="/media/menu.webp" title="Menu" paragraph="Learn More" />
        <Card bg="/media/reviews.webp" title="Reviews" paragraph="Learn More" />
      </div>
    </main>
  );
};

export default Home;
