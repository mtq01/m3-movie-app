/* Import configureStore from Redux Toolkit. 
This function creates a Redux store and auto sets up defaults like Redux DevTools*/
import { configureStore } from "@reduxjs/toolkit";

//Imports the reducer from favsSlice
// This controls how specific "slices" of state change responds to the dispatch actions (addFave/removeFav)
import favsReducer from "../features/favs/favsSlice";

//Creates and exports the Redux store and where all fav states live
export const store = configureStore({
  reducer: {
    //Registers the favs slice key of "favs"
    favs: favsReducer,
  },
});
