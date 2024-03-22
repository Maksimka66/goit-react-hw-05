import { useEffect, useState } from "react";
import { Discuss } from "react-loader-spinner";

import { filmSearch } from "../../films";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSearch = async (inputValue) => {
    if (inputValue.trim() === "") {
      return;
    }
    setQuery(inputValue);
  };

  useEffect(() => {
    const response = async () => {
      if (!query) {
        return;
      }

      try {
        setLoader(true);
        const request = await filmSearch();
        setQuery(request);
        console.log(request);
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
          wrapperStyle={{}}
          wrapperClass="discuss-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      )}
      <form
        className={css.submitForm}
        onSubmit={(e) => handleSearch(e.target.value.trim())}
      >
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
