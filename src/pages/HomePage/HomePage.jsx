import { useEffect, useState } from "react";
import filmsRequest from "../../films";

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await filmsRequest();
        console.log(movies.results);
        setFilms(movies.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
    </div>
  );
}
