import React from "react";

const AddReply = ({ data }) => {
  const { userName, userimg, coment } = data;

  return (
    <div className=" mt-4">
      <div className="card h-full md:card-side bg-base-100 border">
        <div className="w-[70px]">
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
        </div>
      </div>
    </div>
  );
};

export default AddReply;
