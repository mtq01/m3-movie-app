// Is Fav

function isFav(arr, id) {
  if (arr.length === 0) {
    return false;
  }

  // Checks whether the object is favourited
  return arr.some((movie) => movie.id === id);
}

export default isFav;
