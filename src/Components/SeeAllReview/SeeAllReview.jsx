import React from "react";

const SeeAllReview = ({ item }) => {
  const { name, image, review, rating } = item;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={image} />
            </div>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{review}</p>
          <div className="flex items-center justify-center gap-1">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="text-lg font-semibold">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllReview;
