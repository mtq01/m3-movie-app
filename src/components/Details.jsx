import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../features/favs/favsSlice";
import FavButton from "./FavButton";
import TrailerPopup from "../components/TrailerPopup";
import isFav from "../utility/isFav";
import "../styles/Details.css";

function Details({ movie, id, tabIndex }) {
  const [showTrailer, setShowTrailer] = useState(false); // control trailer popup visibility

  // dispatch actions for Redux
  const dispatch = useDispatch();
  // Pulls favorites array from the redux store
  const favMovies = useSelector((state) => state.favs.favMovies);

  if (!movie) return null;

  // Format release date
  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Check if this movie already exists in favorites
  const detailsIsFav = isFav(favMovies, movie.id);

  // movie object for the details page - needed to define paths to match what favorite's page is expecting for the Movie Card rendering.
  const movieObj = {
    id: movie.id,
    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "/placeholder.jpg",
    title: movie.title,
    release_date: releaseDate,
    overview: movie.over,
    details_link: `/details?id=${movie.id}`,
    rating: movie.vote_average,
  };

  //This function runs when fav button is clicked.
  //addToFav is a boolean (true = add and false = remove)
  function handleFavClick(addToFav) {
    if (addToFav) {
      dispatch(addFav(movieObj));
    } else {
      dispatch(removeFav(movieObj));
    }
  }

  return (
    <section className="details-page">
      {/* Poster */}
      {/* We wrote this line because in DetailsPage.jsx we fetch the basic movie data by ID, and the poster is included in that response.
      However, TMDB returns something like: poster_path: "/abc123.jpg" which is only a partial path.
      So we need this line to convert that partial path into a full image URL. */}
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/placeholder.jpg"
        }
        alt={movie.title}
        className="details-poster"
      />

      <div id={id} tabIndex={tabIndex} className="details-info">
        {/* Title */}
        <p className="title"> {movie.title}</p>

        {/* Release Date */}
        <p className="date">{releaseDate}</p>

        {/* Rating */}
        <p>
          <strong>Rating:</strong> {movie.vote_average?.toFixed(1)}
        </p>

        {/* Overview */}
        <p>{movie.overview}</p>

        {/* Cast */}
        {movie.cast?.length > 0 && (
          <p>
            <strong>Starring:</strong> {movie.cast.join(", ")}
          </p>
        )}

        {/* Directors */}
        {movie.directors?.length > 0 && (
          <p>
            <strong>Directed by:</strong> {movie.directors.join(", ")}
          </p>
        )}

        {/* Writers */}
        {movie.writers?.length > 0 && (
          <p>
            <strong>Written by:</strong> {movie.writers.join(", ")}
          </p>
        )}
      </div>

      {/* Watch Trailer Button */}
      {movie.trailerKey && (
        <button
          className="play-trailer-btn"
          onClick={() => setShowTrailer(true)}
        >
          Watch Trailer
        </button>
      )}

      <div>
        <FavButton
          movieObj={movie}
          remove={detailsIsFav}
          handleFavClick={handleFavClick}
        />
      </div>

      {/* Trailer Popup */}
      {showTrailer && (
        <TrailerPopup
          trailerKey={movie.trailerKey} // pass the key
          onClose={() => setShowTrailer(false)} // allow closing
        />
      )}
    </section>
  );
}

export default Details;
