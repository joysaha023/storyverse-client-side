import React from "react";

const DirectorCard = ({ item }) => {
 const { name, oscars_won, image} = item


  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          
          <p>Oscar Won: {oscars_won}</p>
          <div className="card-actions items-center justify-end">
            <button className="btn btn-accent btn-sm rounded-2xl">
              View Movie List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
