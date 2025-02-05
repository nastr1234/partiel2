import React from 'react';
import 'C./css/style.css';

const Content = () => {
  return (
    <>
      <div className="search-container saveMe">
        <input type="text" placeholder="Rechercher un film" />
        <button type="submit"><i className="fas fa-search"></i></button>
      </div>

      <div className="wrapper">
        <div className="tendances-container container">
          {/* Ici les films tendances */}
          <div className="title-filter" id="title-tendances">
            <h2>Tendances</h2>
            <button className="active" id="day">Aujourd'hui</button>
            <button id="week">Cette semaine</button>
          </div>
          <div className="grid-tendances" id="tendances"></div>
        </div>
      </div>

      <div className="wrapper-pop">
        <div className="populaires-container container">
          {/* Ici les films/séries populaires */}
          <div className="title-filter saveMe" id="title-category">
            <h2>Séries TV</h2>
            <button className="active" id="top_rated">Mieux notées</button>
            <button id="popular">Populaires</button>
          </div>
          <div className="grid-tendances" id="populaires"></div>
        </div>
      </div>
    </>
  );
};

export default Content;