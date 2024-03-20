import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { filmDetails } from "../../films";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getMovieById = async () => {
      try {
        const film = await filmDetails(movieId);
        setMovie(film);
        console.log(film);
        const filmGenres = film.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ));
        setGenres(filmGenres);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, [movieId]);

  return (
    <div>
      <button type="button">Go back</button>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h2>{movie.title}</h2>
      <p>User score: </p>
      <p>{movie.overview}</p>
      <div>
        <p>Genres</p>
        <div>{genres}</div>
      </div>
      <ul>
        <li>
          <NavLink to={"/movies/:movieId/cast"}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={"/movies/:movieId/reviews"} id={movieId}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
