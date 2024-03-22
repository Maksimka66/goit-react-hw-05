import { useEffect, useState } from "react";
import { getActors } from "../../films";
import { useParams } from "react-router-dom";

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
      <ul>
        {cast.length !== 0 ? (
          cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              />
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any casts for this movie</p>
        )}
      </ul>
    </div>
  );
}
