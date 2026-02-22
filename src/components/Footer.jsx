import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="site-footer">  
      {/* footer content wrapper */}
      <div className="footer-content">
        
        {/* navigation links */}
        <nav aria-label="Footer Navigation">
        <ul className="footer-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        </nav>

        {/* social media icons */}
        <ul className="footer-icons">
          <li>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <img
                src="./src/assets/icons/facebook.svg"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <img
                src="./src/assets/icons/instagram.svg"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="mailto:https://www.microsoft.com/en/microsoft-365/outlook/" aria-label="Email">
              <img
                src="./src/assets/icons/email.svg"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
       </div>
       
        {/* footer text */}
        <p className="footer-copy">
          @ CINEMAX 2026.
        </p>
    </footer>
  );
};

export default Footer;