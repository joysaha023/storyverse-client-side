import React from "react";

const WriteComment = () => {
  return (
    <div>
      <label className="flex flex-col md:flex-row items-center mt-8 w-full md:w-2/5 mx-auto gap-2">
        <input
          type="text"
          placeholder="write email here"
          className="input input-bordered rounded-md  w-full max-w-xs"
        />
        <button className="btn rounded-md text-white hover:text-black bg-[#0077be]">
          Subscribe
        </button>
      </label>
    </div>
  );
};

export default WriteComment;
