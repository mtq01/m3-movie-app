// import component styles
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <img id="logo" src="./src/assets/logos/cinemax-logo.svg" alt="Cinemax" srcset="" />

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">My List</a></li>
      </ul>
      
    </nav>
  )
}

export default Nav;