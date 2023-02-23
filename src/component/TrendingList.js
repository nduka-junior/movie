import React from "react";
import "../styles/trending.css";
import { Link } from "react-router-dom";

function TrendingList({ trending }) {
  return (
    <>
      {trending.title && (
        <div className="trendlist">
          <img
            src={`https://image.tmdb.org/t/p/original/${trending.backdrop_path}`}
            alt={trending.title}
            className="trend-img"
          />
          <div className="trendlist_text">
            <h4>Title: {trending.title}</h4>
            <Link to={`/movies/${trending.id}`}> Overview</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default TrendingList;
