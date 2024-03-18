export default function MoviesPage({ subForm }) {
  return (
    <form onSubmit={subForm}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search movies, which you like"
      />
      <button type="submit">Search</button>
    </form>
  );
}
