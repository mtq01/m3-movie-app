// Page - Favorites
import { useEffect } from "react";
import { appTitle } from "../globals/globals";

// dynamic page title
const Favorites = () => {
  useEffect(() => {
    document.title = `Favorites | ${appTitle}`;
  }, []);

  return (
    <section>
      {/* Page Specific Components*/}

      {/* Placeholders - <h2> <p> and <section> can be deleted */}
      <h2>My List - Favorites</h2>
      <p>List of favorites goes here</p>
    </section>
  );
};

export default Favorites;
