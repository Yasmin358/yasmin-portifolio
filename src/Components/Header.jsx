import React, {useState} from 'react';
import '../styles/headerHome.css';
import menu from '../images/icons/menu.png';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <header className="header-container">
      <nav className="navegation">
         <button 
          className="hamburger-btn"
          onClick={() => { setIsNavExpanded(!isNavExpanded)}}
        >
          <img src={menu} alt="menu"/>
        </button>
          <ul className={
            isNavExpanded ? "menu-container expanded" : "menu-container"
          }>
            <li>
              <a href="./" className="menu-link" onClick={() => { setIsNavExpanded(false)}}>
              Home
              </a>
            </li>
            <li>
              <a href="./#about-me" className="menu-link" onClick={() => { setIsNavExpanded(false)}}>
              Sobre Mim
              </a>
            </li>
            <li>
              <a href="./#projects" className="menu-link" onClick={() => { setIsNavExpanded(false)}}>
              Projetos
              </a>
            </li>
            <li>
              <a href="./#contact" className="menu-link" onClick={() => { setIsNavExpanded(false)}}>
              Contato
              </a>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
