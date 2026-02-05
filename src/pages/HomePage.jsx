// Page - Home
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
import MovieCards from "../components/MovieCards";
import Carousel from "../components/Carousel";

// dynamic page title
const HomePage = () => {
  useEffect(() => {
    document.title = `Home | ${appTitle}`;
  }, []);

  return (
    <section>
      <Carousel />
      <MovieCards />
    </section>
  );
};

export default HomePage;
