import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SeeAllReview from "../SeeAllReview/SeeAllReview";
import { Link } from "react-router-dom";

const FanReview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // const {isPending, data: users} = useQuery({
  //     queryKey: ['users'],
  //     queryFn: async () => {
  //         const res = await fetch('http://localhost:5000/review');
  //         return res.json();
  //     }
  // })

  // if(isPending){
  //     return(<div className="text-center mt-20">
  //     <span className="loading  loading-spinner loading-lg"></span>
  //   </div>)
  // }

  return (
    <div className="max-w-6xl mx-auto">
      <div className=" my-4 md:my-10">
        <h2 className="text-2xl md:text-4xl p-2 font-bold">Our Fan <span className='text-[#3498DB]'>Reviews</span> </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-3 gap-5">
        {data.slice(0, 3).map((item) => (
          <SeeAllReview key={item._id} item={item}></SeeAllReview>
        ))}
      </div>
      <div className="my-6 flex justify-end gap-3">
        <Link
          to={"/writereview"}
          className="btn btn-sm md:btn-md rounded-xl bg-[#2C3E50] text-white hover:text-black"
        >
          Write Review
        </Link>
        <Link
          to={"/allreviews"}
          className="btn btn-sm md:btn-md rounded-xl bg-[#3498DB] text-white hover:text-black"
        >
          See All Review
        </Link>
      </div>
    </div>
  );
};

export default FanReview;
