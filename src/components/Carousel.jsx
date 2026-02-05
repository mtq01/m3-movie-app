import { useState, useEffect } from "react";
import "../styles/Carousel.css";
import angryBirds from "../assets/images/angry-birds-hero.jpg";
import mandolorian from "../assets/images/mando-hero.jpg";
import arkAardvark from "../assets/images/ark-aardvark-hero.jpg";

// array of slide objects (this will change once the API is used)
const slidesMapArray = [
  { src: angryBirds, alt: "angry birds" },
  { src: mandolorian, alt: "mandoloarian" },
  { src: arkAardvark, alt: "The Ark and the Aardvark" },
];

const Carousel = () => {
  // track index / initialize state
  const [currentIndex, setCurrentIndex] = useState(0);

  // --> next slide logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === slidesMapArray.length - 1) {
        return 0; // go back to the start
      } else {
        return prevIndex + 1; // go fwd
      }
    });
  };

  // <-- prev slide logic
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return slidesMapArray.length - 1; // go to the end
      } else {
        return prevIndex - 1; // go fwd
      }
    });
  };

  // change slides every 5sec
  useEffect(() => {
    // set thee interval
    const interval = setInterval(() => {
      nextSlide();
    }, 15000); // 15000ms = 15seconsd

    // stop timer if user leafs the page
    return () => clearInterval(interval);

    // reset timer everytime the slide changes
  }, [currentIndex]);

  return (
    <div id="hero">
      <div id="carousel-slides">
        {slidesMapArray.map((slide, index) => {
          // create var for the className
          let classNameValue = "slide";

          // conditional logic to check if its the active slide
          if (index === currentIndex) {
            classNameValue = "slide active";
          }
          return (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={classNameValue}
            />
          );
        })}
      </div>

      <div className="dots-container">
        {slidesMapArray.map((_, index) => {
          // is the dot the active slide?
          let dotClass = "dot";
          if (index === currentIndex) {
            dotClass = "dot active";
          }
          return (
            <span
              key={index}
              className={dotClass}
              onClick={() => setCurrentIndex(index)}
            ></span>
          );
        })}
      </div>

      <button id="btn-next" className="carousel-btn" onClick={nextSlide}>
        ❯
      </button>
      <button id="btn-prev" className="carousel-btn" onClick={prevSlide}>
        ❮
      </button>
    </div>
  );
};

export default Carousel;
