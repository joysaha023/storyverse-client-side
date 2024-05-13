import React from 'react';
import { Link } from 'react-router-dom';

const WishlistCard = ({data, handleDelete}) => {
    const { _id, titlee, blogid, image, shortdescription, cateegory} = data


    return (
        <div>
           <div className="card w-full h-full bg-[#ECF0F1] ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titlee}</h2>
          <span>{cateegory}</span>
          <p>{shortdescription}</p>
          <div className="card-actions items-center justify-between">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error text-white  btn-sm md:btn-md rounded-full"
            >
              Remove
            </button>
            <Link
              to={`/BlogDetails/${blogid}`}
              className="btn bg-[#3498DB] text-white hover:text-black btn-sm md:btn-md rounded-full"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default WishlistCard;