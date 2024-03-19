import { NavLink, useParams } from "react-router-dom";

export default function MovieDetailsPage({ filmsArr }) {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      {/* <button type="button">Go back</button> */}
      <ul>
        {filmsArr.map((film) => (
          <li key={film.id}>
            {<NavLink to="/movies/:movieId/cast">{film.title}</NavLink>}
          </li>
        ))}
      </ul>
    </div>
  );
}
