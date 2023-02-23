import React from "react";
import TrendingList from "./TrendingList";
import "../styles/trending.css";

function Trending({ trendings, loading }) {
  console.log(trendings +"uuuu");
  
  return (
    <>
      <h1>Trending</h1>
    
        <div className="single_trend">
          {trendings.map((trending, index) => {
            return <TrendingList trending={trending} key={index} />;
          })}
        </div>
    
    </>
  );
}

export default Trending;
