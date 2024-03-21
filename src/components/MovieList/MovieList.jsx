import { NavLink } from "react-router-dom";

import css from "./MovieList.module.css";

export default function MovieList({ films }) {
  return (
    <ul className={css.movieList}>
      {films.map((film) => (
        <li key={film.id}>
          {
            <NavLink className={css.movieListItem} to={`/movies/${film.id}`}>
              {film.title}
            </NavLink>
          }
        </li>
      ))}
    </ul>
  );
}
