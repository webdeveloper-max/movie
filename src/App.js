import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      
      <Row title="Trending NOW" fetchURL={requests.fetchTrending} />
      
      
    </div>
  );
}

export default App;
