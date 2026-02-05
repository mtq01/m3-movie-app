import { useState, useEffect } from "react";
import "../styles/Carousel.css";
import angryBirds from "../assets/images/angry-birds-hero.jpg";
import mandolorian from "../assets/images/mando-hero.jpg";
import arkAardvark from "../assets/images/ark-aardvark-hero.jpg";

// +++++ array of slide objects (this will change once the API is used) +++++
const slidesMapArray = [
  { src: angryBirds, alt: "angry birds" },
  { src: mandolorian, alt: "mandoloarian" },
  { src: arkAardvark, alt: "The Ark and the Aardvark" },
];

const Carousel = () => {
  // +++++ track index / initialize state +++++
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

  // +++++ change slides every 5sec +++++
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
        {/* +++++ runs for each obj in the slidesMapArray, x3 total +++++ */}
        {slidesMapArray.map((slide, index) => {
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

          // +++++ the output +++++
            /* return the img tag with the class (determined by the logic above) 
            */
          return (
            <img
            // key={index} keeps track of which img is which
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={classNameValue}
            />
          );
        })}
      </div>

    {/* +++++ pagination dots +++++ */}
      <div className="dots-container">
        {/* loop thru the array & create one dot per slide obj
        the '_' means we arent using the slide data itself, just its index */}
        {slidesMapArray.map((_, index) => {

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

    {/* +++++ nav buttons +++++
     declare the click behaviour directly on the element instead of using 'addEventListener' bcuz its React and not Vanilla JS
     */}
      <button id="btn-next" className="carousel-btn" onClick={nextSlide}>❯</button>
      <button id="btn-prev" className="carousel-btn" onClick={prevSlide}>❮</button>
    </div>
  );
};

export default Carousel;
