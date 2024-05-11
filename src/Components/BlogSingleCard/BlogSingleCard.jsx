import React from "react";
import { Link } from "react-router-dom";

const BlogSingleCard = ({item}) => {
    const {_id, title, image_url, category, short_description} = item

  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
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
            <button className="btn btn-accent btn-sm rounded-2xl">WishList</button>
            <Link to={`/BlogDetails/${_id}`} className="btn btn-primary btn-sm rounded-2xl">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleCard;
