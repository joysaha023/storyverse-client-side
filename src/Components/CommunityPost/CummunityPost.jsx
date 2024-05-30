import React from "react";

const CummunityPost = ({data}) => {
    const { userName, userimg, coment } = data;

  return (
    <div className="">
      <div className="card h-full md:card-side bg-base-100 my-4 border">
        <figure>
          <img
            className=" w-[70px] h-[70px] m-4 rounded-full"
            src={userimg}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{userName}</h2>
          <p>{coment}</p>
        </div>
      </div>
    </div>
  );
};

export default CummunityPost;
