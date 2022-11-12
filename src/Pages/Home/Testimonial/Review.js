import React from "react";

const Review = ({ review }) => {
  const { name, img, location, review: userReview } = review;

  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>I{userReview}</p>
        <div className="card-actions flex items-center justify-start mt-5">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="ml-5">
            <h3>{name}</h3>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
