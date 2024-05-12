import React from "react";
import Hashtag from "../Hashtag/Hashtag";

const SingleMovie = ({ item }) => {
  const { title, image, rating, category, year } = item;
  return (
    <div>
      <div className="card h-full md:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className=" md:h-[102px] md:w-[68px] m-4 rounded-md"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex flex-col md:flex-row md:gap-4">
          <h2 className="">Category:</h2>
            {
              category.map(item => <Hashtag key={item.id} item={item}></Hashtag>)
            }
          </div>
          <p>{rating}</p>
          <p>{year}</p>
          
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
