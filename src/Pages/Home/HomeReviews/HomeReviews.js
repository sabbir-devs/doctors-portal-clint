import React from "react";
import "./HomeReviews.css";

const HomeReviews = ({review}) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.discription}</p>
        <div className="flex items-center mt-4">
        <div className="avatar">
            <div className="w-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 mr-5">
                <img src={review.img} />
            </div>
        </div>
          <div>
              <p>{review.name}</p>
              <p>{review.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
