
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComments from "../../Components/CardComments/CardComments";
import useAuth from "../../Hooks/useAuth";

const BlogDetails = () => {
  const {user} = useAuth();
  const [item, setItems] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/blogdetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, [id]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coment = form.comment.value;
    const blogid = item._id;
    const userName = user?.displayName;
    const userimg = user?.photoURL;
    const commentData = {coment, blogid, userName, userimg}
   

    fetch("http://localhost:5000/commentpost", {
      method: "POST",
      headers: {
          "content-type" : "application/json",
      },
      body: JSON.stringify(commentData)
  })
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
  })
  }
  
  

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
          <h2 className="text-xl font-semibold">Comments:</h2>
          <div>
            {
              comments.map((data) => <CardComments key={data._id} data={data}></CardComments>)
            }
          </div>
      </div>
      <div className="">
        <h2 className="text-xl font-semibold">Write Comment here: </h2>
      <form onSubmit={handleSubmit}>
      <label className="flex flex-col md:flex-row  mt-8 w-full md:w-3/5  gap-2">
      <textarea name="comment" className="textarea w-full textarea-bordered" placeholder={user.email === item.email ? "Can not comment on own blog" : "Write Comment"}></textarea>
          <button disabled={user.email === item.email} className="btn rounded-md text-white hover:text-black bg-[#0077be]">
            Comment
          </button>
        </label>
      </form>
      </div>
    </div>
  );
};

export default BlogDetails;
