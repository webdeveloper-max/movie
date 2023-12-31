import React, { useState, useEffect } from "react";
import { IoIosPlay } from "react-icons/io";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests?.fetchTrending);
      //   console.log("Banner Request\n");
      //   console.log(req.data.results);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ... " : str;
  }

  return (
    // This banner will have a background image
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        //
        backgroundImage: `url(
            "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
       
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        
        {/* description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {/* two buttons */}
      <div className="banner__buttons">
          <button className="banner__button" ><IoIosPlay />Play</button>
          <button className="banner__button">More info</button>
        </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
