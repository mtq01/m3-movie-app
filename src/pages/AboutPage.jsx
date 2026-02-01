// Page - About
import { useEffect } from "react";
import { appTitle } from "../globals/globals";

// dynamic page title
const AboutPage = () => {
  useEffect(() => {
    document.title = `About | ${appTitle}`;
  }, []);

  return (
    <section>
      {/* Page Specific Components*/}

      {/* Placeholders - <h2> <p> and <section> can be deleted */}
      <h2>About Page</h2>
      <p>About page content...</p>
    </section>
  );
};

export default AboutPage;
