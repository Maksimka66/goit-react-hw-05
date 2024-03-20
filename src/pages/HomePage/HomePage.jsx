import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

import { filmsRequest } from "../../films";

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await filmsRequest();
        setFilms(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList films={films} />
    </div>
  );
}
