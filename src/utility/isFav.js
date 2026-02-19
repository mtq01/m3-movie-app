// isFav,js is a utility function that checks whether a specific movie already exist inside the favorites array

function isFav(arr, id) {
  //if favorites array is empty, there is nothing to check so return false
  if (arr.length === 0) {
    return false;
  }

  // some() loops through the array and returns true if one movie object exist that matches the movie id we are checking against
  // if no match found, it returns false
  return arr.some((movie) => movie.id === id);
}

export default isFav;
