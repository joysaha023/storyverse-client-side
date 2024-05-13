import React from "react";

const Newslatter = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" px-2">
        <h1 className=" font-bold text-4xl ">
          Subscribe to our <span className="">Newsletter</span>
        </h1>
        <p className=" mx-auto text-sm md:text-base font-normal mt-3 md:mt-5 ">
          For Latest news you can subscribe our news latter section. and get a
          latest and special new estate news. Please write your email and and
          get a subscription.
        </p>
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
    </div>
  );
};

export default Newslatter;
