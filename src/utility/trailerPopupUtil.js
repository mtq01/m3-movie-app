import { apiKey, endPointTrailer } from "../globals/globals.js";

/* 
+++++ getTrailer function. +++++
- [input] movieObj is the unque id for the movie from TMDB
- [output] returns the UT 'key' string if found, otherwise returns null
*/

export const getTrailer = async (movieObj) => {
    // grab the specific api URL for movies
    const movieUrl = `${endPointTrailer}${movieObj.id}/videos?api_key=${apiKey}`;

    try {
        const response = await fetch(movieUrl);
        const data = await response.json();

        // returns an array of videos
        // .find() grabs the 1st one that is a 'trailer' thats hosted on YT
        const video = data.results.find(
            (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        // if matching video found, return the key. otherwise return null.
        if (video) {
            return video.key;
        } else {
            // returns null so app dont crash if data not found
            return null;
        }

    } catch (error) {
        // log debugging error, returns null if fetch fails (prevents trying to render a broken video)
        // broken video = a file that wont play
        console.error("Error fetching trailer:", error);
        return null;
    }
};