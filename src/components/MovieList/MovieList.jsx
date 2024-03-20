import { NavLink } from "react-router-dom";

export default function MovieList({ films }) {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          {<NavLink to={`/movies/${film.id}`}>{film.title}</NavLink>}
        </li>
      ))}
    </ul>
  );
}
