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

    // This reducer runs when the user clicks the fav button again to remove a movie
    removeFav: (state, action) => {
      // filter() used  to create a new array from favMovies and keeps the movie ids that does not match the clicked movie
      const updatedFavs = state.favMovies.filter((movie) => {
        return movie.id !== action.payload.id;
      });
      // Save updated favorites into local storage
      localStorage.setItem(appStorageName, JSON.stringify(updatedFavs));
      //Updates redux store with the new array
      state.favMovies = updatedFavs;
    },
  },
});

//Exports addFav and removeFav action functions to fav button component
export const { addFav, removeFav } = favsSlice.actions;

//Exports reducer so it can be added to redux store (store.js)
export default favsSlice.reducer;
