// Page - About
import { useEffect } from "react";
import { appTitle } from "../globals/globals";
import "../styles/AboutPage.css";
import aboutHero from "../assets/images/cinemax-about-us-background.jpg";
import tmdbLogo from "../assets/images/tmdb-logo.svg";

// dynamic page title
const AboutPage = () => {
  useEffect(() => {
    document.title = `About | ${appTitle}`;
  }, []);

  return (
    <section className="about">
      <img
        className="about-hero-image"
        src={aboutHero}
      />
      <div id="main-content" tabIndex="-1" className="about-content-container">
        <h1>About Us</h1>
        <p className="about-content">
          <span className="cinemax-bolded">CineMAX</span> is a modern digital
          platform dedicated to celebrating the art of film. We curate and
          deliver rich movie data — from cast and crew details to trailers,
          ratings, and reviews — through an engaging, easy-to-navigate
          interface. Our mission is to help audiences explore cinema from every
          era and genre, connecting passionate movie lovers with the stories,
          creators, and moments that define them. At MovieCine, film discovery
          is more than a search — it’s an experience.
        </p>

        <div className="tmdb-attribute-container">
          <img className="tmdb-logo" src={tmdbLogo} alt="TMDB The Movie Database" />

          <p className="tmdb-attribute-text">
            “This product uses the TMDb API but is not endorsed or certified by
            TMDb”
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
