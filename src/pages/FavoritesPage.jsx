// Page - Favorites
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { appTitle } from "../globals/globals";
import "../styles/FavoritesPage.css";

// dynamic page title
const Favorites = () => {
  useEffect(() => {
    document.title = `Favorites | ${appTitle}`;
  }, []);

  return (
    <section className="favorites">
      <div className="fav-container">
        <div className="fav-heading-container">
          <svg
            className="fav-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
          </svg>

          <h2>My List</h2>
        </div>
        <div className="fav-content-container">
          <div className="no-movie-msg-wrapper">
            <h3>Sorry!</h3>
            <p>
              You have no favorite movies, return to the{" "}
              <NavLink to="/">homepage</NavLink> to add a favourite movie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
