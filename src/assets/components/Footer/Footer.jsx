import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/films">Films</Link></li>
          <li><Link to="/series">Séries</Link></li>
          <li><Link to="/populaires">Populaires</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;