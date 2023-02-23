import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchapi } from "../fetchapi";
import Reviews from "./Reviews";
import SingleMovieText from "./SingleMovieText";
import Videos from "./Videos";
function SingleMovies() {
  // https://api.themoviedb.org/3/movie/667216?api_key=8a2208e5a0ce32e0e5044f64bc78c38d&language=en-US
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [videos, setvideos] = useState([]);
  const apifetch = async () => {
    console.log(movies + "fgggg");
    //  movies fetch
    const moviesData = await fetchapi(
      `https://api.themoviedb.org/3/movie/${id}?`
    );
    setMovies(moviesData);
    // videos fetch

    const videosData = await fetchapi(
      `https://api.themoviedb.org/3/movie/${id}/videos?`
    );
    console.log(videosData)
    setvideos(videosData.results);
    // reviews fetch
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
      <SingleMovieText movies={movies} />
      <Videos videos={videos} />
      <Reviews reviews={reviews}></Reviews>
    </>
  );
}

export default SingleMovies;
