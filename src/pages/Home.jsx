import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";

const API_KEY = "853d6c433b59d29ab1768a053e895bee";
const BASE_URL = "https://api.themoviedb.org/3";

const useMoviesApi = (endpoint, params = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({ ...params, api_key: API_KEY });
        const response = await fetch(`${BASE_URL}/${endpoint}?${queryParams}`);
        const result = await response.json();
        setData(result.results?.slice(0, 4) || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint, JSON.stringify(params)]);

  const helloList = data.map((movie) => (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  ));

  return (
    <>
      {loading ? <Loader /> : <main>{helloList}</main>}
    </>
  );
};

export default useMoviesApi;
