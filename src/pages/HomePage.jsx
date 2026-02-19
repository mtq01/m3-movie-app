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
    <>
      <Carousel />
      {/* passed skip to content directly into movie cards component (had to update MovieCards.jsx as well) */}
      <MovieCards id="main-content" tabIndex="-1" />
    </>
  );
};

export default HomePage;
