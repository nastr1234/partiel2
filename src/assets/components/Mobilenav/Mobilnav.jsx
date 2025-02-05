import React from 'react';
import '../../css/style.css';

const Mobilnav = () => {
  return (
    <nav className="nav-list-mobile" id="mobileNav">
      <a href="index.html"><i className="fas fa-film"></i></a>
      <div id="barr">
        <div className="tt">
          <div id="top-nav" className="bar"></div>
          <div id="middle-nav" className="bar"></div>
          <div id="bottom-nav" className="bar"></div>
        </div>
      </div>
      <div className="mobile-nav-content" id="menu-nav">
        <ul>
          <li><a href="#">Films</a></li>
          <li><a href="#">Séries</a></li>
          <li><a href="#">Populaires</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Mobilnav;