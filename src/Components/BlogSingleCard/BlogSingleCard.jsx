import React from "react";

const BlogSingleCard = ({item}) => {
    const {_id, title, image_url, category, short_description} = item

  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <span>{category}</span>
          <p>{short_description}</p>
          <div className="card-actions items-center justify-between">
            <button className="btn btn-accent btn-sm rounded-2xl">WishList</button>
            <button className="btn btn-primary btn-sm rounded-2xl">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingleCard;
