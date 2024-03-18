import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default async function filmsRequest() {
  const options = new URLSearchParams({
    api_key: "d731a4f11c505d6d904de87c171f89c1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzMxYTRmMTFjNTA1ZDZkOTA0ZGU4N2MxNzFmODljMSIsInN1YiI6IjY1ZjVmMmZhZTE5NGIwMDE3Y2JkNjQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oB-JsZl2dv50WKDARIyz4KKR7-F2eLui7b_iY4mgOw",
    },
  });

  const response = await axios.get(`/trending/movie/day?${options}`);
  console.log(response.data);
  return response.data;
}
