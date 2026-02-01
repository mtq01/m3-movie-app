import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="site-footer" aria-label="Footer">  {/* aria-label is an invisible text label for screen readers. */}
      {/* footer content wrapper */}
      <div className="footer-content">
        
        {/* navigation links */}
        <ul className="footer-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        {/* social media icons */}
        <ul className="footer-icons">
          <li>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <img
                src="./src/assets/icons/facebook.svg"
                alt="Facebook Icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <img
                src="./src/assets/icons/instagram.svg"
                alt="Instagram Icons"
              />
            </a>
          </li>
          <li>
            <a href="https://www.microsoft.com/en/microsoft-365/outlook/" aria-label="Email">
              <img
                src="./src/assets/icons/email.svg"
                alt="Email Icons"
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