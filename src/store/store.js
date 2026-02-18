/* Import configureStore from Redux Toolkit. 
This function creates a Redux store and auto sets up defaults like Redux DevTools*/
import { configureStore } from "@reduxjs/toolkit";

// A reducer that controls a specific "slice"(our fav button) state changes (addFave and removeFav)
import favsReducer from "../features/favs/favsSlice";

//Creates and exports the Redux store and where all fav states live
export const store = configureStore({
  reducer: {
    //Registers the favs slice key of "favs"
    favs: favsReducer,
  },
});
