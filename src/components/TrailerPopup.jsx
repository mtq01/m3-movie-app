/* 
+++++ createPortal is used to solve a Stacking Context issue +++++

- without it, the popup is stuck inside the carousels CSS rules. even when using a high z-index the navbar (which sits outside the carousel) stayed
on top.

- using createPortal decouples the popup from the carousels DOM hierarchy and renders it in the 'document.body' and then the popup can utilize the
z-index properly and sit on top of all other page elements. It's a weird workaround for this, but I couldn't get anything else to work.
*/
import { useEffect } from "react";
import { createPortal } from "react-dom";
import '../styles/TrailerPopup.css';

const TrailerPopup = ({ trailerKey, onClose, movieTitle }) => {

  // close popup if ESC key is pressed
  // listen for ESC key
  useEffect(() => {
    const escKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // add listener only IF the popup isopen
    if (trailerKey) {
      window.addEventListener("keydown", escKeyDown);
    }

    // remove listener after popup closes
    return () => {
      window.removeEventListener("keydown", escKeyDown);
    };
  }, [trailerKey, onClose]);

  // if no key, show nothing
  if (!trailerKey) return null;

  // portal solves issue where the popup was underneath the navbar
  return createPortal(
    <div 
    className="popup-overlay" 
    onClick={onClose}
    role="dialog" // means its a popup
    aria-modal="true" // locks focus to modal when open (screenreader)
    aria-labelledby="trailer-modal-title"
    >
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2 id="trailer-modal-title" className="sr-only">
          {/* if movieTitle has a value, announce it. otherwise say "Movie Trailer". (screen readers) */}
          {movieTitle ? `${movieTitle} Trailer` : "Movie Trailer"}
          </h2>

        {/* &times; is better than typing X (my opnion) */}
        <button 
          className="close-btn" 
          onClick={onClose}
          aria-label={movieTitle ? `Close ${movieTitle} trailer` : "Close trailer"} // SR says 'close trailer' instead of &times;
        >
          &times;
        </button>

        <div className="video-responsive">
          <iframe
            title={movieTitle ? `${movieTitle} Trailer` : "Movie Trailer"}
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            allow="autoplay; encrypted-media;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>,
    document.body // part of the portal (and the ',' on above line)
  );
};

export default TrailerPopup;