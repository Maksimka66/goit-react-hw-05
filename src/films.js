import axios from "axios";
import { Discuss } from "react-loader-spinner";

const config = {
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMxYTRmMTFjNTA1ZDZkOTA0ZGU4N2MxNzFmODljMSIsInN1YiI6IjY1ZjVmMmZhZTE5NGIwMDE3Y2JkNjQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oB-JsZl2dv50WKDARIyz4KKR7-F2eLui7b_iY4mgOw",
  },
};

const instance = axios.create(config);

// Тренди дня
export async function filmsRequest() {
  const response = await instance.get("/trending/movie/day?language=en-US");
  return response.data;
}

// Деталі кожного фільму
export async function filmDetails(id) {
  const response = await instance.get(`/movie/${id}`);
  return response.data;
}

// Для інпуту
export async function filmSearch(value) {
  const response = await instance.get(`/search/movie?query=${value}&page=1`);
  return response.data;
}

// Акторський склад
export async function getActors(id) {
  const response = await instance.get(`/movie/${id}/credits`);
  console.log(response);
  return response;
}

// Для огляду на фільм
export async function getMovieReviews(id) {
  const response = await instance.get(`/movie/${id}/reviews`);
  console.log(response);
  return response.data;
}

// // Лоадер
// export function onLoad() {
//   return (
//     <Discuss
//       visible={true}
//       height="80"
//       width="80"
//       ariaLabel="discuss-loading"
//       wrapperStyle={{}}
//       wrapperClass="discuss-wrapper"
//       color="#fff"
//       backgroundColor="#F4442E"
//     />
//   );
// }
