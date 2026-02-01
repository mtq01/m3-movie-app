// Page - Home
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
import MovieCards from "../components/MovieCards";

// dynamic page title
const HomePage = () => {
  useEffect(() => {
    document.title = `Home | ${appTitle}`;
  }, []);

  return (
    <section>
      {/* Page Specific Components*/}
      <MovieCards />
      {/* Placeholders - <h2> <p> and <section> can be deleted */}
      <h2>Home Page</h2>
      <p>Add page specific components</p>
    </section>
  );
};

export default HomePage;
