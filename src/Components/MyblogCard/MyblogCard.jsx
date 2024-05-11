import React from 'react';
import { Link } from 'react-router-dom';

const MyblogCard = ({data}) => {
    const {_id, title, image_url, email, category, short_description} = data

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
            <Link to={`/updateblog/${email}`} className="btn btn-primary btn-sm rounded-2xl">Update</Link>
            <button  className="btn btn-error btn-sm rounded-2xl">Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyblogCard;