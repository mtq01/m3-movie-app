import { useState, useEffect } from "react";
import "../styles/Carousel.css";
import "../globals/globals.js";
import {
  apiKey,
  endPointPopular,
  imageBaseURL,
} from "../globals/globals.js";
import TrailerPopup from "../components/TrailerPopup.jsx";
import { getTrailer } from "../utility/trailerPopupUtil.js";

const Carousel = () => {
  // +++++ track index / initialize state +++++
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  // --> next slide logic (required for useEffect timer to work)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === movies.length - 1) {
        return 0; // go back to the start
      } else {
        return prevIndex + 1; // go fwd
      }
    });
  };

  // +++++ fetch movie trailer +++++
const watchTrailer = async (movieId) => {
  const key = await getTrailer(movieId); // Calls your new utility

  if (key) {
    setTrailerKey(key);
    setIsPopupOpen(true);
  } else {
    alert("No Trailer Found!");
  }
};

  // +++++ fetch movies (banner img) from TMDB +++++
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = `${endPointPopular}?api_key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        if (data.results) {
          // content filter: set # of images to cycle thru
          // 0 = starting index
          // 5 = endpoint
          setMovies(data.results.slice(0, 5));
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  // +++++ [timer] change slides every 5sec +++++
  useEffect(() => {
    // set thee interval
    const interval = setInterval(() => {
      nextSlide();
    }, 15000); // 15000ms = 15seconsd

    // stop timer if user leafs the page
    return () => clearInterval(interval);

    // [next slide] reset timer everytime the slide changes
  }, [currentIndex, movies]);

  // +++++ renders "loading" if 'movies' is empty on page load. +++++
  if (movies.length === 0) return <div className="loading">Loading...</div>;

  // +++++ OUTPUT [Carousel Slides & Info] +++++
  return (
    <div id="hero">
      <div id="carousel-slides">
        {/* +++++ runs for each obj in the movies array, x3 total +++++ */}
        {movies.map((slide, index) => {
          // create var for the className so each slide gets the .slide css styling
          let classNameValue = "slide";

          // +++++ conditional logic to check if its the active slide +++++
          /* index: refers to where we are in the loop (0,1,2)
               currentIndex: is what lives in the react state
               if they match, redefine the var to include both classes
            */
          if (index === currentIndex) {
            classNameValue = "slide active";
          }

          // movie description text (adjusted for mobile in css)
          let shortDescription = slide.overview;
          if (slide.overview.length > 250) {
            shortDescription = slide.overview.slice(0, 250) + "...";
          }

          // return the img tag with the class (determined by the logic above)
          return (
            // key={slide.id} TMDB unique ID
            <div key={slide.id} className={classNameValue}>
              <img
                // backdrop_path asks for horizontal landscape img (large banners/carouselss)
                src={`${imageBaseURL}${slide.backdrop_path}`}
                // .title is the movie name
                alt={slide.title}
                className={classNameValue}
              />

              <div className="movie-info">
                <h2>{slide.title}</h2>
                <p>{shortDescription}</p>
                <button
                  className="trailer-btn"
                  onClick={() => watchTrailer(slide.id)}
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* +++++ TrailerPopup component +++++ */}
      <TrailerPopup
        isOpen={isPopupOpen}
        trailerKey={trailerKey}
        onClose={() => {
          setIsPopupOpen(false);
          setTrailerKey("");
        }}
      />

      {/* +++++ pagination dots +++++ */}
      <div className="pill-container">
        <div className="dots-container">
          {/* loop thru the array & create one dot per slide obj
        the '_' means we arent using the slide data itself, just its index */}
          {movies.map((_, index) => {
            // is the dot the active slide? (same as above logic for 'slide active')
            let dotClass = "dot";
            if (index === currentIndex) {
              dotClass = "dot active";
            }
            return (
              <span
                // key={index} unique key that hepls react render the list
                key={index}
                className={dotClass}
                /* 
            this arrow function prevents 'setCurrentIndex' from running immediately on page load. 
            basically: "wait for a click, then change the state to the specific index"
            otherwise you get a weird error "too many re-renders" which happened to me. 
            if you want to see what i mean remove: '() =>' and refresh the browser
            */
                onClick={() => setCurrentIndex(index)}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
