import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Used to read the ?id= query parameter from the URL
import { appTitle, apiKey } from "../globals/globals"; // App name and TMDb API key
import Details from "../components/Details"; // UI component to display the movie details

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
        // Fetch basic movie details
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );
        const movieData = await movieResponse.json();

        // Fetch movie credits (cast and crew)
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
        );
        const creditsData = await creditsResponse.json();

        // Extract directors, writers, and first 5 cast members
        const directors = creditsData.crew
          .filter((c) => c.job === "Director")
          .map((d) => d.name);
        const writers = creditsData.crew
          .filter((c) => ["Writer", "Screenplay", "Story"].includes(c.job))
          .map((w) => w.name);
        const cast = creditsData.cast.slice(0, 5).map((c) => c.name);

        // Fetch the movie trailer (YouTube only)
        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
        );
        const videoData = await videoResponse.json();
        const youtubeTrailer = videoData.results.find(
          (v) => v.site === "YouTube" && v.type === "Trailer"
        );
        const trailerUrl = youtubeTrailer
          ? `https://www.youtube.com/embed/${youtubeTrailer.key}?autoplay=1`
          : null;

        // Combine all data into a single object
        setMovie({
          ...movieData,
          directors,
          writers,
          cast,
          trailerUrl,
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
  if (loading) return <p>Loading movie details...</p>;
  // Show error message if movie not found
  if (!movie) return <p>Movie not found.</p>;

  // Render the Details component with the fetched movie data
  return <Details movie={movie} />;
};

export default DetailsPage;