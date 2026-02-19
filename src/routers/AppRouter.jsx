import { BrowserRouter, Routes, Route } from "react-router-dom";

// import nav & footer component
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

// import pages
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";
import DetailsPage from "../pages/DetailsPage.jsx";

//Provider wraps entire application so the redux store is available to every component
function AppRouter() {
  return (
    <BrowserRouter>
      {/* jump to content - screen reader*/}
      <a id="screen-reader-text" href="#main-content">
        Skip to content
      </a>

      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
