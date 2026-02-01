import movieList from "../data/movieList";
import MovieCard from "./MovieCard";

function MovieCards() {
  return (
    <div className="movie-cards-container">
      {/* loop through the movie list and generate one Movie Card per movie */}
      {movieList.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            release_date={movie.release_date}
            overview={movie.overview}
            details_link={movie.details_link}
            is_favourite={movie.is_favourite}
          />
        );
      })}
    </div>
  );
}

export default MovieCards;
