import React from "react";
import "./App.css";
import Rows from "./Row";
import Request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows
        title="Netflix Originals"
        fetchUrl={Request.fetchNetflixoriginals}
        isLargRow
      />
      <Rows title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Rows title="Top Related" fetchUrl={Request.fetchTopRated} />
      <Rows title="Netflix Originals" fetchUrl={Request.fetchActionMovies} />
      <Rows title="Trending Now" fetchUrl={Request.fetchComedyMovies} />
      <Rows title="Top Related" fetchUrl={Request.fetchHorrorMovies} />
      <Rows title="Netflix Originals" fetchUrl={Request.fetchRomanceMovies} />
      <Rows title="Trending Now" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
