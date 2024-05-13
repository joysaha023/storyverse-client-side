
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [item, setItems] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/blogdetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  
  

  return (
    <div className="max-w-6xl mx-auto">
      <div className="card my-5 w-full rounded-none bg-base-100 shadow-none  ">
        <figure>
          <img
            src={item.image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{item.title}</h2>
          <p><span className="font-semibold text-lg">Category:</span> {item.category}</p>
          <p className="flex items-center gap-1">{item.short_description}</p>
          <p>{item.long_description}</p>
        </div>
      </div>
      <div>

      </div>
      <div className="">
        <h2 className="text-2xl font-semibold">Write Comment here: </h2>
      <form action="">
      <label className="flex flex-col md:flex-row  mt-8 w-full md:w-3/5  gap-2">
      <textarea className="textarea w-full textarea-bordered" placeholder="Write Comment"></textarea>
          <button className="btn rounded-md text-white hover:text-black bg-[#0077be]">
            Comment
          </button>
        </label>
      </form>
      </div>
    </div>
  );
};

export default BlogDetails;
