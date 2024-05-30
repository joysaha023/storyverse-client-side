import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import PostCard from "../PostCard/PostCard";

const Community = () => {
    const {user} = useAuth();
    const [inputText, setInputText] = useState('');
    const [post, setPost] = useState([]);

    function commentSubmit() {}

    useEffect(() => {
        fetch(`https://storyverse-website-server-side.vercel.app/community`)
          .then((res) => res.json())
          .then((data) => {
            setPost(data);
          });
      }, []);
      console.log(post)

    function handlePostchanged(e) {
        setInputText(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        commentSubmit();
        const form = e.target;
        const coment = inputText;
        const userName = user?.displayName;
        const userimg = user?.photoURL;
        const commentData = { coment,  userName, userimg };
        console.log(commentData)
        setInputText('')

        fetch("https://storyverse-website-server-side.vercel.app/communitypost", {
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
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <title>StoryVerse - Community</title>
      </Helmet>
      <h2 className="text-xl md:text-3xl text-center my-1 md:my-4 font-bold">Users Community</h2>
      <div className="max-w-3xl mx-auto">
      <div className="">
        <h2 className="text-xl font-semibold">Write Post here: </h2>
        <form onSubmit={handleSubmit}>
          <label className="flex flex-col md:flex-row  mt-8 w-full md:w-full  gap-2">
            <textarea
              name="comment"
              onChange={handlePostchanged}
              value={inputText}
              className="textarea w-full textarea-bordered"
              placeholder="Write your Post here!"
            ></textarea>
            <button
              
              className="btn rounded-md text-white hover:text-black bg-[#0077be]"
            >
              Post
            </button>
          </label>
        </form>
      </div>
      <div>
            {
                post.map((post) => <PostCard></PostCard>)
            }
      </div>
      </div>
    </div>
  );
};

export default Community;
