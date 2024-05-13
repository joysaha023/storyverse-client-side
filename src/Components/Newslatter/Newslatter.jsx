import React from "react";
import Swal from "sweetalert2";

const Newslatter = () => {


  const handleSub = () => {
    
    Swal.fire({
      title: "Thank You for Subscribe",
      text: "Your will get news on gmail.",
      icon: "success",
    });
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className=" px-2">
        <h1 className=" text-center font-bold text-4xl ">
          Subscribe to our <span className="">Newsletter</span>
        </h1>
        
        <label className="flex flex-col md:flex-row items-center mt-8 w-full md:w-2/5 mx-auto gap-2">
          <input
            type="email"
            placeholder="write email here"
            className="input input-bordered rounded-xl  w-full max-w-xs"
          />
          <button onClick={handleSub} className="btn rounded-xl text-white hover:text-black bg-[#3498DB]">
            Subscribe
          </button>
        </label>
      </div>
    </div>
  );
};

export default Newslatter;
