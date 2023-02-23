import React from 'react'

function SingleMovieText({ movies }) {
  return (
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
    </div>
  );
}

export default SingleMovieText