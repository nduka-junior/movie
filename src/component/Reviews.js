import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  console.log(reviews);
  return (
      <div className="reviews">
          <hr />
       
          <h1>Reviews</h1>
      {reviews.map((review) => {
       return <Review review={review} key={review.id} />
      })}
    </div>
  );
}

export default Reviews;
