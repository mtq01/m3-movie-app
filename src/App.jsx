// import { useState } from 'react';
import "./styles/index.css";
import "./styles/normalize.css";
import Nav from "./components/Nav.jsx";
import MovieCards from "./components/MovieCards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <h1>M3 - Movie App</h1>
      <MovieCards />
      <Footer />
    </>
  );
}

export default App;
