import { useState } from "react";
import movieList from "../data/movieList";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { apiKey } from "../globals/globals";

function MovieCards() {
  const [activeCategory, setActiveCategory] = useState("top_rated"); //default value is top_rated movies.

  //.filter() is a built-in JavaScript array method. It creates a new array containing only the items that pass a provided test.
  const filteredMovies = movieList.filter(
    (movie) => movie.category === activeCategory,
  );

  return (
    <>
      <Filter onChange={setActiveCategory} />

      <div className="movie-cards-container">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            release_date={movie.release_date}
            overview={movie.overview}
            details_link={movie.details_link}
            is_favourite={movie.is_favourite}
          />
        ))}
      </div>
    </>
  );
}

export default MovieCards;
