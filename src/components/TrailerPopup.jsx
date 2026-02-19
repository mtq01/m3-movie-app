/* 
+++++ createPortal is used to solve a Stacking Context issue +++++

- without it, the popup is stuck inside the carousels CSS rules. even when using a high z-index the navbar (which sits outside the carousel) stayed
on top.

- using createPortal decouples the popup from the carousels DOM hierarchy and renders it in the 'document.body' and then the popup can utilize the
z-index properly and sit on top of all other page elements. It's a weird workaround for this, but I couldn't get anything else to work.
*/
import { createPortal } from "react-dom";
import '../styles/TrailerPopup.css';

const TrailerPopup = ({ trailerKey, onClose }) => {
  // if no key, show nothing
  if (!trailerKey) return null;

  // portal solves issue where the popup was underneath the navbar
  return createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* &times; is better than typing X (my opnion) */}
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="video-responsive">
          <iframe
            title="Movie Trailer"
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