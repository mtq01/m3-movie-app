import { createSlice } from "@reduxjs/toolkit";
import { appStorageName } from "../../globals/globals";

// This function checks the local storage to see if there are any saved favorite movies.
/* Local storage is built into browser and saves data on the client browser. We use it here to reload saved favorite movies when the app starts */
function getFavsFromLocalStorage() {
  const favs = localStorage.getItem(appStorageName);
  if (favs !== null) {
    return {
      favMovies: JSON.parse(favs), // this converts saved string back into an array
    };
  }
  // if nothing exist than empty array is returned
  return {
    favMovies: [],
  };
}

// This variable receieves any saved favourites into the local storage
const favsFromLocalStorage = getFavsFromLocalStorage();

// Defines the starting state of this slice.
const initialState = {
  favMovies: favsFromLocalStorage.favMovies,
};

// This helper function finds the index of movieToRemove inside of the favMovies array by loop through the movie ids until it finds a match.
function getMovieIndex(movieToRemove, favMovies) {
  return favMovies.findIndex((movie) => movie.id === movieToRemove.id);
}

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    // Reducer runs when user clicks the favs button and adds selected movie to the favMovies array and saves the updated array into local storeage.
    addFav: (state, action) => {
      //Creats a new array with the added movie and existing favorites
      //action.payload stores the movie user clicks on
      const newFavs = [...state.favMovies, action.payload];
      // Saves updated favorites into local storage
      localStorage.setItem(appStorageName, JSON.stringify(newFavs));
      //Updates redux store
      state.favMovies = newFavs;
    },

    // This reducer runs when user clicks on the fav button again to remove it from favorites
    // Movie gets removed from favMovies and updates the local storage
    removeFav: (state, action) => {
      // Makes copy of the current favorites array
      const favsCopy = [...state.favMovies];
      //Remove the clicked movie from index
      //Splice(index, 1) removes ONE movie from index
      favsCopy.splice(getMovieIndex(action.payload, state.favMovies), 1);
      // Save updated favorites into local storage
      localStorage.setItem(appStorageName, JSON.stringify(favsCopy));
      //Updates redux store
      state.favMovies = favsCopy;
    },
  },
});

//Exports addFav and removeFav action functions to fav button component
export const { addFav, removeFav } = favsSlice.actions;

//Exports reducer so it can be added to redux store (store.js)
export default favsSlice.reducer;
