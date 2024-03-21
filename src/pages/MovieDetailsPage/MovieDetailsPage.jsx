import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { filmDetails } from "../../films";

import { Discuss } from "react-loader-spinner";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getMovieById = async () => {
      try {
        setLoader(true);
        const film = await filmDetails(movieId);
        setMovie(film);
        console.log(film);
        const filmGenres = film.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ));
        setGenres(filmGenres);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    getMovieById();
  }, [movieId]);

  return (
    <>
      <div className={css.film}>
        <div className={css.photoContainer}>
          {loader && (
            <Discuss
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
            />
          )}
          <button className={css.backBtn} type="button">
            Go back
          </button>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>
        <div className={css.filmInfoContainer}>
          <h2 className={css.movieTitle}>{movie.title}</h2>
          <p className={css.score}>User score: </p>
          <h3 className={css.overviewHeaders}>Overview: </h3>
          <p className={css.filmOverview}>{movie.overview}</p>
          <h3 className={css.overviewHeaders}>Genres: </h3>
          <ul className={css.genresList}>{genres}</ul>
        </div>
      </div>
      <p className={css.moreInfo}>Additional information</p>
      <ul className={css.filmMoreInfoList}>
        <li>
          <NavLink to={`/movies/${movieId}/cast`} id={movieId}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" id={movieId}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
}
