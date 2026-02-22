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
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffffdd"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.89h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" aria-label="Instagram">
            <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#ffffffdd"
            aria-hidden="true"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.8-33.5-74.8-74.8S182.8 181 224.1 181s74.8 33.5 74.8 74.8-33.5 74.8-74.8 74.8zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.1-54.7-44.5-99.1-99.2-99.2H102.6C47.9 64.1 3.5 108.5 3.4 163.2v186.5c.1 54.7 44.5 99.1 99.2 99.2h243.7c54.7-.1 99.1-44.5 99.2-99.2V163.2zm-48.7 186.5c0 27-22 49-49 49H102.6c-27 0-49-22-49-49V163.2c0-27 22-49 49-49h243.7c27 0 49 22 49 49v186.5z"/>
           </svg>
            </a>
          </li>
          <li>
            <a href="mailto:https://www.microsoft.com/en/microsoft-365/outlook/" aria-label="Email">
              <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffffdd"
              aria-hidden="true"
              >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
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