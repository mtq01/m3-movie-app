import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../features/favs/favsSlice";
import "../styles/MovieCards.css";

function MovieCard({
  id,
  poster,
  title,
  release_date,
  overview,
  details_link,
}) {
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFav(obj));
    } else {
      dispatch(removeFav(obj));
    }
  }

  return (
    //Keep in mind that {poster}, {title}, and other properties will receive their values later from the TMDB JSON response in MovieCards.jsx
    <article className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt={title} />
      </div>

      <div className="movie-content">
        <span className="movie-card-row-1">
          <h3 className="movie-title">{title}</h3>
          {/* Favourite button is visual only for now */}
          <button
            className="fav-btn"
            aria-label="Add to favourites"
            onClick={() => {
              handleFavClick(true, {
                id,
                title,
                poster,
                release_date,
                overview,
              });
            }}
          >
            FAV
          </button>
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
