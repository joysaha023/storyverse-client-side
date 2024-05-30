import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const PostCard = ({ post }) => {
    const {user} = useAuth();
  const { userName, userimg, coment, _id } = post;
  const [inputText, setInputText] = useState('');
  const [ item, setItems] = useState([]);

  function commentSubmit() {}

  useEffect(() => {
    fetch(`https://storyverse-website-server-side.vercel.app/addReplay/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [_id]);

 

  function handleNewsClr(e) {
    setInputText(e.target.value)
  }

  const handleSub = (e) => {
    e.preventDefault();
    commentSubmit();
    const form = e.target;
    const coment = inputText;
    const blogid = _id;
    const userName = user?.displayName;
    const userimg = user?.photoURL;
    const commentData = { coment, blogid, userName, userimg };
    
    setInputText('')

    fetch("https://storyverse-website-server-side.vercel.app/addReplyPost", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);

      });
  }

  return (
    <div className="">
      <div className="card h-full md:card-side bg-base-100 my-4 border">
        <div className="">
          <figure>
            <img
              className=" w-[50px] h-[50px] m-4 rounded-full"
              src={userimg}
              alt="Movie"
            />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{userName}</h2>
          <p>{coment}</p>
          <div>
          <h2 className="text-xl mt-4 font-semibold">Add Reply: </h2>
            <label className="flex flex-col md:flex-row items-center mt-2 w-full md:w-full mx-auto gap-2">
              <input
                type="email"
                  onChange={handleNewsClr}
                  value={inputText}
                placeholder="write email here"
                className="input input-bordered rounded-xl  w-full max-w-xs"
              />
              <button
                  onClick={handleSub}
                className="btn rounded-3xl text-white hover:text-black bg-[#3498DB]"
              >
                <FaArrowRight />
              </button>
            </label>
            <div>
                {
                    item.map((data) => )
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
