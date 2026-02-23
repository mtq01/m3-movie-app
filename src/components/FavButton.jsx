// FavButton component controls whether a movie is added or removed from favorites. And controls the UI of the FavButton
function FavButton({ movieObj, remove = false, handleFavClick }) {
  // Triggers when user clicks fav icon button
  // true = add and then stores the movie object
  function handleAddFav() {
    handleFavClick(true, movieObj);
  }

  // Triggers when user clicks fav icon button again
  // flase = removes movie object
  function handleRemoveFav() {
    handleFavClick(false, movieObj);
  }

  /* create dynamic label based on the state 
      - the SR will announce the appropriate label based on its state
  */
  let label = "";
  if (remove === true) {
    label = `Remove ${movieObj.title} from favorites`;
  } else {
    label = `Add ${movieObj.title} to favorites`;
  }

  return (
    <>
      {/* Boolean for true or false. The button state change is controlled in MovieCards.css */}
      {remove === false ? (
        <button 
          className="fav-btn add"
          aria-label={label}
          aria-pressed="false" // not favorited
          onClick={handleAddFav}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
          </svg>
        </button>
      ) : (
        <button 
          className="fav-btn remove" 
          aria-label={label}
          aria-pressed="true" // favorited
          onClick={handleRemoveFav}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
          </svg>
        </button>
      )}
    </>
  );
}

export default FavButton;
