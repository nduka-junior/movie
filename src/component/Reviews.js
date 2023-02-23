import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  console.log(reviews);
  return (
    <div className="reviews">
      <hr />

          <h1>Reviews({ reviews.length})</h1>
      {reviews.length == 0 ? (
        <h1 style={{textAlign:"center"}}>There are no reviews</h1>
      ) : (
        reviews.map((review) => {
          return <Review review={review} key={review.id} />;
        })
      )}
    </div>
  );
}

export default Reviews;
