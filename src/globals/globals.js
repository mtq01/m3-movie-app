// required for dynamic page title
export const appTitle = "Cinemax";

/* API Variables + Key */

// variables for the different movie genres
export const endPointPopular = "https://api.themoviedb.org/3/movie/popular";
export const endPointTopRated = "https://api.themoviedb.org/3/movie/top_rated";
export const endPointNowPlaying =
  "https://api.themoviedb.org/3/movie/now_playing";
export const endPointUpcoming = "https://api.themoviedb.org/3/movie/upcoming";

// Imported API Key from TMDB -> Stored in root ENV to protect from public
export const apiKey = import.meta.env.VITE_MOVIE_API;

/* Example of concacenating API with variables for API Call below
>>> const url = `${endPointNowPlaying}?api_key=${apiKey}`; <<< */
