import { useState } from "react";

import filmsRequest from "./films";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Trending today</h1>
    </>
  );
}

export default App;
