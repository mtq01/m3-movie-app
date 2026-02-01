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
    <article className="movie-card">
      <div className="movie-poster">
        {/* Poster image (placeholder for now) */}
        <img src={poster} alt={title} />

        {/* Favourite button is visual only for now
            Logic/state will be added in a later step */}
        <button className="favourite" aria-label="Add to favourites">
          ☆
        </button>
      </div>

      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-date">{release_date}</p>
        <p className="movie-overview">{overview}</p>

        {/* Learn more link
            This will later become a router link */}
        <a href={details_link} className="learn-more">
          Learn more
        </a>
      </div>
    </article>
  );
}

export default MovieCard;
