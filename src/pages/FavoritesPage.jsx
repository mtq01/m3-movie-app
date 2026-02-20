import { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { NavLink } from "react-router-dom";
import { appTitle } from "../globals/globals";
import "../styles/FavoritesPage.css";

const Favorites = () => {
  useEffect(() => {
    document.title = `Favorites | ${appTitle}`;
  }, []);

  // Lets you connect to the favs array from the redux store
  //favMovies is the array inside favsSlice
  const favs = useSelector((state) => state.favs.favMovies);

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
          {/* Below the conditional rendering shows the no movie msg if there are no favorites and if there are favorites it will display the movie grid */}
          {favs.length < 1 ? (
            <div className="no-movie-msg-wrapper">
              <h3>Sorry!</h3>
              <p>
                You have no favorite movies. Return to the{" "}
                {/* Link back to homepage */}
                <NavLink to="/">homepage</NavLink> to add a favourite movie.
              </p>
            </div>
          ) : (
            <div className="fav-movie-grid">
              {/* Loops through the favorites array and renders one MovieCard */}
              {favs.map((singleMovie) => (
                <MovieCard
                  key={singleMovie.id}
                  id={singleMovie.id}
                  title={singleMovie.title}
                  poster={singleMovie.poster}
                  release_date={singleMovie.release_date}
                  overview={singleMovie.overview}
                  details_link={`/details?id=${singleMovie.id}`}
                  isFav={true}
                  rating={singleMovie.rating}      
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
