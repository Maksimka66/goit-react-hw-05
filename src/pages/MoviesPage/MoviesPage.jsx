import { useEffect, useState } from "react";
import { Discuss } from "react-loader-spinner";

import { filmSearch } from "../../films";

import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value.trim() === "") {
      return;
    }
    setQuery(value);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const response = async () => {
      setLoader(true);
      try {
        const request = await filmSearch(query);
        setMovies(request.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    response();
  }, [query]);

  return (
    <>
      {loader && (
        <Discuss
          visible={true}
          height="80"
          width="80"
          ariaLabel="discuss-loading"
          wrapperClass="discuss-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      )}

      <form className={css.submitForm} onSubmit={handleSearch}>
        <input
          className={css.movieSearch}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search movies"
        />
        <button className={css.submitBtn} type="submit">
          Search
        </button>
      </form>
      <MovieList films={movies} />
    </>
  );
}
