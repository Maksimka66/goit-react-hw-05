import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMxYTRmMTFjNTA1ZDZkOTA0ZGU4N2MxNzFmODljMSIsInN1YiI6IjY1ZjVmMmZhZTE5NGIwMDE3Y2JkNjQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oB-JsZl2dv50WKDARIyz4KKR7-F2eLui7b_iY4mgOw";

// Тренди дня
export async function filmsRequest() {
  const response = await axios.get("/trending/movie/day?language=en-US");
  return response.data;
}

// Деталі кожного фільму
export async function filmDetails(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

// Для інпуту
export async function filmSearch(query) {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data;
}

// Акторський склад
export async function getActors(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
}

// Для огляду на фільм
export async function getMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
}
