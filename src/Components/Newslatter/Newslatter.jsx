import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Newslatter = () => {
  const [inputText, setInputText] = useState('');

  function handleNewsClr(e) {
    setInputText(e.target.value)
  }

  const handleSub = () => {
    setInputText('')
    toast.success("Thanks to subscribe us!")
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className=" px-2">
        <h1 className=" text-center font-bold text-xl md:text-4xl ">
          Subscribe to  <span className="text-[#3498DB]">Newsletter</span>
        </h1>
        
        <label className="flex flex-col md:flex-row items-center mt-8 w-full md:w-2/5 mx-auto gap-2">
          <input
            type="email"
            onChange={handleNewsClr}
            value={inputText}
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
