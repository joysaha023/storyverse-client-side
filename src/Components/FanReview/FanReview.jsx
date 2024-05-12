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
      <div className="my-10">
        <h2 className="text-4xl font-bold"> Fan Review</h2>
        <p>
          This is where you can get a recent blog which is added by recently
          from our users. and these blogs are most popular movies data. you can
          enjoy read blog
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.slice(0, 3).map((item) => (
          <SeeAllReview key={item._id} item={item}></SeeAllReview>
        ))}
      </div>
      <div className="my-6 text-right">
        <Link to={"/allreviews"} className="btn btn-accent">
          See All Review
        </Link>
      </div>
    </div>
  );
};

export default FanReview;
