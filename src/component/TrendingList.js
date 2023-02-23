import React from "react";
import "../styles/trending.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
function TrendingList({ trending }) {
  console.log(trending)
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
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"10px"

        
          }}>
        
            <Rating
              name="read-only"
              value={trending.vote_average / 2}
              precision={0.01}
              readOnly
            />{" "}
            <h4>{trending.vote_average}</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default TrendingList;
