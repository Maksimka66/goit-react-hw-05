import { useEffect, useState } from "react";
import { Discuss } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";

import { filmSearch } from "../../films";

import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const query = searchParams.get("query");

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value.trim() === "") {
      return;
    }
    setSearchParams({ query: value });
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
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

    fetchData();
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
