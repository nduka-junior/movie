import React from "react";

function Review({ review }) {
  console.log(review);

  return (
    <div className="review">
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h300_face/${review.author_details.avatar_path}`}
        className="review_avatar"
      />
      <div className="review_text">
        <h2>{review.author}</h2>
        <br />
        <h4>{review.content}</h4>
        <br />
        <h5>{new Date(review.created_at).toDateString()}</h5>
      </div>
    </div>
  );
}

export default Review;
