import { BrowserRouter, Routes, Route } from "react-router-dom";

// import nav & footer component
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

// import pages
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import FavoritesPage from "../pages/FavoritesPage.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/favorites" exact element={<FavoritesPage />} />
      </Routes>
      {/* Footer Component Goes Here */}
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
