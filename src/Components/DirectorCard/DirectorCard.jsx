import React from "react";
import { Link } from "react-router-dom";

const DirectorCard = ({ item }) => {
 const { name, oscars_won, image} = item


  return (
    <div>
      <div className="card w-full h-full bg-[#ECF0F1] ">
        <figure className="p-4">
          <img className="rounded-md" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><span className="font-medium">Oscar Won:</span> {oscars_won}</p>
          <div className="card-actions items-center justify-end">
            <Link to={`/moviedata/${name}`} className="btn bg-[#3498DB] btn-sm md:btn-md text-white hover:text-black  rounded-full">
              View Movie List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
