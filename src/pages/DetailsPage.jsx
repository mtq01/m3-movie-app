import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Used to read the ?id= query parameter from the URL
import { appTitle, apiKey } from "../globals/globals"; // App name and TMDb API key
import Details from "../components/Details"; // UI component to display the movie details
import { getTrailer } from "../utility/trailerPopupUtil";

const DetailsPage = () => {
  const [searchParams] = useSearchParams(); // Hook to access query parameters
  const movieId = searchParams.get("id"); // Get the movie ID from the URL

  // State to store movie data and loading status
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set a default page title when the page loads
  useEffect(() => {
    document.title = `Details | ${appTitle}`;
  }, []);

  // Fetch movie details whenever the movieId changes
  useEffect(() => {
    if (!movieId) return; // Do nothing if NO movie ID is provided

    const fetchMovieDetails = async () => {
      setLoading(true); // Show loading message

      try {
        // Fetch basic movie details (includes: poster, title, release date, rating and overview)
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
        );
        const movieData = await movieResponse.json();

        // Fetch movie credits (cast and crew). These data are new and only fetched on the Details page
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
        );
        const creditsData = await creditsResponse.json();

        // Extract first 5 cast members (Starring), directors and writers
        // cast contains actors and actresses only.
        // crew contains all other production roles, including :Director(s), Writer(s), Producer(s) and ...
        // c is short for a crew member in creditsData.crew, d is short for a director and w is short for a writer.
        const cast = creditsData.cast.slice(0, 5).map((c) => c.name); // first 5 starring
        const directors = creditsData.crew
          .filter((c) => c.job === "Director")
          .map((d) => d.name); // directors
        const writers = creditsData.crew
          .filter(
            (c) =>
              c.job === "Writer" || c.job === "Screenplay" || c.job === "Story",
          )
          .map((w) => w.name); // writers

        // Fetch trailer key (YouTube only) for the popup. getTrailer is a function that we imported from trailerPopupUtil.js
        const trailerKey = await getTrailer(movieId);

        // Combine all data into a single object
        setMovie({
          ...movieData, //movieData is an object we fetched from TMDB above.  ...movieData is the spread operator, which copies all properties from movieData into the new object.
          directors,
          writers,
          cast,
          trailerKey,
        });

        // Update page title dynamically to the movie's name
        document.title = `${movieData.title} | ${appTitle}`;
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setMovie(null); // Show error state if fetch fails
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  // Show loading message while fetching data
  if (loading) return <p aria-live="polite">Loading movie details...</p>;
  // Show error message if movie not found
  if (!movie) return <p role="alert" aria-live="assertive">Movie not found.</p>;

  // Render the Details component with the fetched movie data
  return <Details id="main-content" tabIndex="-1" movie={movie} />;
};

export default DetailsPage;
