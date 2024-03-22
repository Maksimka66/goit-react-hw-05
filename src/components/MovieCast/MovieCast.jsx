import { useEffect, useState } from "react";
import { getActors } from "../../films";
import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const renderCast = async () => {
      try {
        const response = await getActors(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    };

    renderCast();
  }, [movieId]);

  return (
    <div>
      <ul className={css.actorList}>
        {cast.length !== 0 ? (
          cast.map((actor) => (
            <li key={actor.id} className={css.actorListItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                width={250}
              />
              <div className={css.actorInfo}>
                <h3 className={css.actorName}>{actor.name}</h3>
                <p className={css.filmActor}>{actor.character}</p>
              </div>
            </li>
          ))
        ) : (
          <p>We don`t have any casts for this movie</p>
        )}
      </ul>
    </div>
  );
}
