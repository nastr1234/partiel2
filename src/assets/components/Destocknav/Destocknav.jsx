import React from 'react';
import '../../css/style.css';

const Destocknav = () => {
  return (
    <nav className="desktop-nav">
      <a href="index.html"><i className="fas fa-film"></i></a>
      <ul>
        <li><a href="#">Films</a></li>
        <li><a href="#">Séries</a></li>
        <li><a href="#">Populaires</a></li>
      </ul>
    </nav>
  );
};

export default Destocknav;