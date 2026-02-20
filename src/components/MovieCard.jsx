import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../features/favs/favsSlice";
import FavButton from "./FavButton";
import "../styles/MovieCards.css";

function MovieCard({
  id,
  poster,
  title,
  release_date,
  overview,
  details_link,
  isFav,
}) {
  //useDispatch lets this component send actions to redux store
  // We use dispatch to tell redux when to add or remove a movie, these actions are imported in from favsSlice
  const dispatch = useDispatch();

  //This function runs when fav button is clicked.
  //addToFav is a boolean (true = add and false = remove)

  function handleFavClick(addToFav) {
    if (addToFav) {
      dispatch(addFav(movieObj));
    } else {
      dispatch(removeFav(movieObj));
    }
  }

  // object for movies and what gets stored inside of redux
  const movieObj = {
    id,
    poster,
    title,
    release_date,
    overview,
    details_link,
  };

  return (
    //Keep in mind that {poster}, {title}, and other properties will receive their values later from the TMDB JSON response in MovieCards.jsx
    <article className="movie-card">
      {/* FavButton recieved the movie data (movieObj), remove = boolean controled by isFav.js and handleFavClick dispatches the redux actions */}
      <div className="favorite-btn desktop-fav">
        <FavButton
          movieObj={movieObj}
          remove={isFav}
          handleFavClick={handleFavClick}
        />
      </div>
      <div className="movie-poster">
        <p className="movie-rating">97</p>
        <img src={poster} alt={title} />
      </div>

      <div className="movie-content">
        <span className="movie-card-row-1">
          <h3 className="movie-title">{title}</h3>
          {/* FavButton recieved the movie data (movieObj), remove = boolean controled by isFav.js and handleFavClick dispatches the redux actions */}
          <div className="favorite-btn mobile-fav">
            <FavButton
              movieObj={movieObj}
              remove={isFav}
              handleFavClick={handleFavClick}
            />
          </div>
        </span>
        <p className="movie-date">{release_date}</p>
        <p className="movie-overview">{overview}</p>
        {/* We want to use react router to navigate us to details page, so need to use NavLink */}
        <NavLink to={details_link} className="learn-more">
          Learn more
        </NavLink>
      </div>
    </article>
  );
}

export default MovieCard;
