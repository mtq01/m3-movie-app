// import component styles
import './Nav.css';

const Nav = () => {
  return (
    <nav id="main-nav" aria-label="Main Navigation" class="border-bottom">
        {/* <aligned left (always) */}
        <a class="cinemax-logo" href="#">
            <img id="logo" src="cinemax-logo.svg" alt="Cinemax" />
        </a>

        {/* shows on click of hamburger menu button (mobile) */}
        {/* on desktop its displayed inline */}
        <ul id="primary-nav-menu" class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">My List</a></li>
            <li class="align-right"> 
                <button id="account" aria-expanded="false" aria-label="Account Menu">
                    <span class="menu-text">Login</span>
                           <svg class="account-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" alt="Account Login"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                </button>
            </li>
        </ul>

         {/* aligned right (Mobile)  */}
        <button id="hamburger" aria-expanded="false" aria-label="Navigation Menu">
            <span class="menu-text">Menu</span>
            <svg class="account-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-693.33V-760h720v66.67H120ZM120-200v-66.67h720V-200H120Zm0-246.67v-66.66h720v66.66H120Z"/></svg>
        </button>
    </nav>
  )
}

export default Nav;