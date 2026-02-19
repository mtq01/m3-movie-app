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
  // addToFav is a boolean (true = add and false = remove)

  function handleFavClick(addToFav) {
    if (addToFav) {
      dispatch(addFav(movieObj));
    } else {
      dispatch(removeFav(movieObj));
    }
  }

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
      <div className="movie-poster">
        <img src={poster} alt={title} />
      </div>

      <div className="movie-content">
        <span className="movie-card-row-1">
          <h3 className="movie-title">{title}</h3>
          {/* When fav button is clicked it sends movie object to handleFavClick with a true, telling redux to add movie to favMovies array in the store*/}
          <div className="favorite-btn">
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
