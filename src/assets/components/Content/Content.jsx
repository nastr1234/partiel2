import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Content.scss";

const API_KEY = "7c51ce5f51b2a0e2bb3bf45b2afaa9ae";

const Content = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
        const data = await response.json();
        setTrendingMovies(data.results.slice(0, 4));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPopularTvShows = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=fr-FR&page=1`);
        const data = await response.json();
        setPopularTvShows(data.results.slice(0, 4));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
    fetchPopularTvShows();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="wrapper">
        <div className="tendances-container container">
          <div className="title-filter" id="title-tendances">
            <h2>Tendances</h2>
            <button className="active" id="day">Aujourd'hui</button>
            <button id="week">Cette semaine</button>
          </div>
          <div className="grid-tendances" id="tendances">
            {trendingMovies.map(movie => (
              <article
                key={movie.id}
                className="movie"
                onClick={(e) => {
                  e.currentTarget.setAttribute("data-reverse", !e.currentTarget.getAttribute("data-reverse"));
                }}
              >
                <div className="cardInner">
                  <figure className="cardFront">
                    <picture>
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} title={movie.title} />
                    </picture>
                    <figcaption>
                      <span className="types">{movie.vote_count === 0 ? "N/A" : `${parseInt(movie.vote_average * 10)}%`}</span>
                      <h2>{movie.title}</h2>
                      <p>{new Date(movie.release_date).toLocaleDateString("fr")}</p>
                    </figcaption>
                  </figure>
                  <div className="cardBack">
                    <Link to={`/focus/${movie.id}`}>Voir plus</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper-pop">
        <div className="populaires-container container">
          <div className="title-filter saveMe" id="title-category">
            <h2>Séries TV</h2>
            <button className="active" id="top_rated">Mieux notées</button>
            <button id="popular">Populaires</button>
          </div>
          <div className="grid-tendances" id="populaires">
            {popularTvShows.map(show => (
              <article
                key={show.id}
                className="movie"
                onClick={(e) => {
                  e.currentTarget.setAttribute("data-reverse", !e.currentTarget.getAttribute("data-reverse"));
                }}
              >
                <div className="cardInner">
                  <figure className="cardFront">
                    <picture>
                      <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} title={show.name} />
                    </picture>
                    <figcaption>
                      <span className="types">{show.vote_count === 0 ? "N/A" : `${parseInt(show.vote_average * 10)}%`}</span>
                      <h2>{show.name}</h2>
                      <p>{new Date(show.first_air_date).toLocaleDateString("fr")}</p>
                    </figcaption>
                  </figure>
                  <div className="cardBack">
                    <Link to={`/focus/${show.id}`}>Voir plus</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;