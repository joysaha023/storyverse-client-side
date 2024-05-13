import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MyblogCard = ({data, handleDelete}) => {

    const {_id, title, image_url, email, category, short_description} = data


   


    return (
        <div>
      <div className="card w-full h-full bg-[#ECF0F1] shadow-xl">
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
            <Link to={`/updateblog/${_id}`} className="btn btn-primary btn-sm rounded-2xl">Update</Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm rounded-2xl">Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyblogCard;