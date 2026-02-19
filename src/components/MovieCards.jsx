import { useState, useEffect } from "react";
import MovieCard from "./MovieCard"; // Component to render individual movie cards
import Filter from "./Filter"; // Component for category Tabs
import {
  apiKey,
  endPointPopular,
  endPointTopRated,
  endPointNowPlaying,
  endPointUpcoming,
} from "../globals/globals"; // API endpoints and key (The actual key is in .env file for security reason - .env file must be in root directory)


// added id, tabIndex to MovieCards function for skip-to-content functionality 
function MovieCards({ id, tabIndex }) {
  // State variables
  // activeCategory stores which category tab is currently selected (default: "top_rated")
  const [activeCategory, setActiveCategory] = useState("top_rated"); 

  // movies stores the array of movie objects fetched from the API
  const [movies, setMovies] = useState([]); 

  // loading tracks whether the API fetch is in progress
  const [loading, setLoading] = useState(true);

  // Map category names to their corresponding API endpoints (category name -> endpoint value)
  // This allows us to easily switch API URLs based on the selected category
  const categoryEndpoints = { 
    popular: endPointPopular,
    top_rated: endPointTopRated,
    now_playing: endPointNowPlaying,
    upcoming: endPointUpcoming,
  };

  // useEffect: Fetch movies whenever activeCategory changes
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // start loading

      try {
        // Get the correct endpoint for the selected category
        const endpoint = categoryEndpoints[activeCategory];

        // Fetch data from TMDB API
        // `language=en-US` ensures English data
        // `page=1` fetches the first page of results
        const response = await fetch(`${endpoint}?api_key=${apiKey}&language=en-US&page=1`);

        // Parse JSON response
        const data = await response.json();

        // Store results in state
        // `data.results` is an array of movie objects from TMDb
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); // stop loading regardless of success or error
      }
    };

    fetchMovies();
  }, [activeCategory]); // rerun effect whenever the selected tab changes

  // Render UI
  return (
    // ++++++++++++++++++ changed <> & </> to <section> & added 'id={id} tabIndex={tabIndex}' for jump-to-content
    <section id={id} tabIndex={tabIndex}>
      {/* Filter tabs: Top Rated, Upcoming, Now Playing, Popular */}
      {/* onChange calls setActiveCategory to update state */}
      <Filter onChange={setActiveCategory} />

      {/* If loading is TRUE -> show "Loading movies..." (Show a loading message while API fetch is in progress)
      If loading is FALSE -> show the movie cards     */}
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movie-cards-container">
          {movies.map((movie) => (
            // Render a MovieCard for each movie
            <MovieCard
              key={movie.id} // unique key for React list rendering

              title={movie.title} // Movie title
              
              // Poster image:
              // TMDb returns only a partial path (movie.poster_path)
              // Prepend with base URL to get full image
              // If no poster exists, fallback to placeholder image
              poster={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"} 
                // Release date formatted like our design
                release_date={new Date(movie.release_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                })} 
              overview={movie.overview} // Movie overview text

              // Learn more link passes movie ID via query params for the details page (Query parameters in URLs in React/JS work just like query strings in PHP.)
              details_link={`/details?id=${movie.id}`} 

              // Favourite functionality not implemented yet
              is_favourite={false} 
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieCards;