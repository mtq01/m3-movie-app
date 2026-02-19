import { NavLink } from "react-router-dom";
import "../styles/MovieCards.css";

function MovieCard({
  poster,
  title,
  release_date,
  overview,
  details_link,
  is_favourite, // not used yet, but we'll need this later for toggling favourites
}) {
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
          <button className="favourite" aria-label="Add to favourites">
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
