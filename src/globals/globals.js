// required for dynamic page title
export const appTitle = "Cinemax";

/* API Variables + Key */

// variables for the different movie categories
export const endPointPopular = "https://api.themoviedb.org/3/movie/popular";
export const endPointTopRated = "https://api.themoviedb.org/3/movie/top_rated";
export const endPointNowPlaying =
  "https://api.themoviedb.org/3/movie/now_playing";
export const endPointUpcoming = "https://api.themoviedb.org/3/movie/upcoming";
export const endPointTrailer = "https://api.themoviedb.org/3/movie/";

// API Key imported from .env
export const apiKey = import.meta.env.VITE_MOVIE_API;

// image based url (required)
export const imageBaseURL = "https://image.tmdb.org/t/p/w1280";

/* Example of API Call with the set variables
>>> const url = `${endPointNowPlaying}?api_key=${apiKey}`; <<< */

