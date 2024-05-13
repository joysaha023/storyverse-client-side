import React from "react";
import { Link } from "react-router-dom";

const BlogSingleCard = ({item}) => {
    const {_id, title, image_url, category, short_description} = item

  return (
    <div>
      <div className="card w-full h-full bg-[#ECF0F1] ">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <span>{category}</span>
          <p>{short_description}</p>
          <div className="card-actions items-center justify-between">
            <button className="btn bg-[#2C3E50] text-white hover:text-black btn-md rounded-full">WishList</button>
            <Link to={`/BlogDetails/${_id}`} className="btn bg-[#3498DB] text-white hover:text-black btn-md rounded-full">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleCard;
