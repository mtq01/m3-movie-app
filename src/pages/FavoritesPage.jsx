// Page - Favorites
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
import "../styles/FavoritesPage.css";

// dynamic page title
const Favorites = () => {
  useEffect(() => {
    document.title = `Favorites | ${appTitle}`;
  }, []);

  return (
    <section>
      <div className="heading-container">
        <svg
          className="fav-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
        </svg>

        <h2>My List</h2>
      </div>
      <div className="fav-content-container">
        <p>
          You have no favorite movies, return to the <a>homepage</a> to add a
          favourite movie
        </p>
      </div>
    </section>
  );
};

export default Favorites;
