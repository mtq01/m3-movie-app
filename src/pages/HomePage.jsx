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
    <main>
      {/* Hidden H1 for the homepage. Since we have a carousel... it doesnt make sense to have 5 h1's for each movie title, but we need an h1 for the page. This way, the page still has a name for accessibility */}
      <h1 className="sr-only">CineMAX | Discover Your Next Favorite Movie</h1>
      <Carousel />
      {/* passed skip to content directly into movie cards component (had to update MovieCards.jsx as well) */}
      <MovieCards id="main-content" tabIndex="-1" />
    </main>
  );
};

export default HomePage;
