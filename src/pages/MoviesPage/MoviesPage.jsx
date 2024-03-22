import { useEffect, useState } from "react";
import { Discuss } from "react-loader-spinner";

import { filmSearch } from "../../films";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value.trim() === "") {
      return;
    }
    setQuery(value);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const response = async () => {
      setLoader(true);
      try {
        const request = await filmSearch(query);
        setQuery(request);
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
    </>
  );
}
