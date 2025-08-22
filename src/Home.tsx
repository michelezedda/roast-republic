import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

const Home = () => {
  return (
    <main className="mx-auto max-w-screen-xl">
      <Navbar />
      <Hero />
      <Menu />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Home;
