import { useState } from "react";
import "../styles/MovieCards.css"; //needs to create its own stylesheet

function Details({ movie }) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  // Format release date
  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });


  return (
    <section className="details-page">
      {/* Poster */}
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.jpg"}
        alt={movie.title}
        className="details-poster"
      />

      {/* Release Date */}
      <p><strong>Release Date:</strong> {releaseDate}</p>

      {/* Overview */}
      <p><strong>Overview:</strong> {movie.overview}</p>

      {/* Cast */}
      {movie.cast?.length > 0 && (
        <p><strong>Starring:</strong> {movie.cast.join(", ")}</p>
      )}

      {/* Directors */}
      {movie.directors?.length > 0 && (
        <p><strong>Directed by:</strong> {movie.directors.join(", ")}</p>
      )}

      {/* Writers */}
      {movie.writers?.length > 0 && (
        <p><strong>Written by:</strong> {movie.writers.join(", ")}</p>
      )}

      {/* Play Trailer Button */}
      {movie.trailerUrl && (
        <button className="play-trailer-btn" onClick={() => setShowTrailer(true)}>
          Play Trailer
        </button>
      )}

      {/* Trailer */}
      {showTrailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-btn" onClick={() => setShowTrailer(false)}>X</button>
            <iframe
              width="100%"
              height="500"
              src={movie.trailerUrl}
              title={`${movie.title} Trailer`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default Details;