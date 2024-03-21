import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

import { filmsRequest } from "../../films";

import css from "./HomePage.module.css";

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
    <div className={css.trendingContainer}>
      <h1 className={css.homeHeader}>Trending today</h1>
      <MovieList films={films} />
    </div>
  );
}
