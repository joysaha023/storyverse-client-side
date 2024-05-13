import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const BlogSingleCard = ({ item }) => {
  const { user } = useAuth();
  const { _id, title, image_url, category, short_description } = item;

  const handlewish = () => {
    const blogid = _id;
    const titlee = title;
    const image = image_url;
    const shortdescription = short_description;
    const cateegory = category;
    const useremail = user?.email;
    const wishData = { blogid, useremail, titlee, image, shortdescription, cateegory };
    console.log(wishData);

    fetch("http://localhost:5000/wishlistpost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Added to wishlist")
        console.log(data);
      });
  };

  return (
    <div>
      <motion.div
        animate={{ x: 0, scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ delay: 0.5, type: "spring", bounce: 30 }}
        className="card w-full h-full bg-[#ECF0F1] "
      >
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <span>{category}</span>
          <p>{short_description}</p>
          <div className="card-actions items-center justify-between">
            <button
              onClick={handlewish}
              className="btn bg-[#2C3E50] text-white hover:text-black btn-sm md:btn-md rounded-full"
            >
              WishList
            </button>
            <Link
              to={`/BlogDetails/${_id}`}
              className="btn bg-[#3498DB] text-white hover:text-black btn-sm md:btn-md rounded-full"
            >
              Read More
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSingleCard;
