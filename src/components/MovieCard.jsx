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
  rating,
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
    rating,
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
        <img src={poster} alt={ `${title} poster`}/>
        {/*toFixed() is a JavaScript number method that rounds a number, keeps 1 digit after the decimal point if you choose 1 for example as an argument and returns the result as a string */}
        <p className="movie-rating">
          <span className="sr-only">Rating: </span>
          {rating?.toFixed(1)}
          <span className="sr-only">out of 10</span></p>
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
        {/* aria-label is added bcuz without it screen readers will read "Learn More" for every movie, but the user won't know which movie it's referring to */}
        <NavLink to={details_link} className="learn-more" aria-label={`Learn more about ${title}`}>
          Learn more
        </NavLink>
      </div>
    </article>
  );
}

export default MovieCard;
