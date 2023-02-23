import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchapi } from "../fetchapi";
import Reviews from "./Reviews";
function SingleMovies() {
  // https://api.themoviedb.org/3/movie/667216?api_key=8a2208e5a0ce32e0e5044f64bc78c38d&language=en-US
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const apifetch = async () => {
    console.log(movies + "fgggg");
    const moviesData = await fetchapi(
      `https://api.themoviedb.org/3/movie/${id}?`
    );
    setMovies(moviesData);
    const reviewsData = await fetchapi(
      `https://api.themoviedb.org/3/movie/${id}/reviews?`
    );
    setReviews(reviewsData.results);
  };
  useEffect(() => {
    apifetch();
  }, []);
  return (
    <>
      <div className="singlemovie">
        <img
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
          alt={movies.title}
          className="trend-img"
        />
        <h3>Title :{movies.title}</h3>
        <h3>Release Date: {movies.release_date}</h3>
        <h3>Duration : {movies.runtime}mins</h3>
        <h3>Status :{movies.status}</h3>
        <h4>{movies.overview}</h4>
      </div>{" "}
      <Reviews reviews={reviews}></Reviews>
    </>
  );
}

export default SingleMovies;
