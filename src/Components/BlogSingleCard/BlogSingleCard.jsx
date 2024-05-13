import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogSingleCard = ({item}) => {
    const {_id, title, image_url, category, short_description} = item

  return (
    <div>
      <motion.div animate={{ x: 0, scale: 1 }} initial={{scale:0}} transition={{delay: 0.5, type: "spring", bounce: 30}} className="card w-full h-full bg-[#ECF0F1] ">
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
            <button className="btn bg-[#2C3E50] text-white hover:text-black btn-sm md:btn-md rounded-full">WishList</button>
            <Link to={`/BlogDetails/${_id}`} className="btn bg-[#3498DB] text-white hover:text-black btn-sm md:btn-md rounded-full">Read More</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSingleCard;
