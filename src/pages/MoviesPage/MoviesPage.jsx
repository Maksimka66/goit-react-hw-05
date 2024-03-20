import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage({ subForm }) {
  return (
    <form onSubmit={subForm}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
}
