import Card from "./components/Card";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <main className="h-[100vdh] w-[100vdw]">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Card
          bg="/media/1.webp"
          title="Roast Republic"
          paragraph="Learn More"
        />
        <Card bg="/media/2.webp" title="Menu" paragraph="Learn More" />
        <Card bg="/media/3.webp" title="Reviews" paragraph="Learn More" />
      </div>
    </main>
  );
};

export default Home;
