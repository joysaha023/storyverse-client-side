import React from "react";
import error from "./error.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="max-2-6xl text-center mx-auto px-4">
       <Helmet>
        <title>StoryVerse - Error</title>
      </Helmet>
      <div className="w-full lg:w-[300px] mx-auto mt-3">
        <Lottie animationData={error} />
      </div>
      <h2 className="text-2xl mt-10 lg:text-7xl font-bold text-red-500">
        Page Not Found
      </h2>
      <p className="text-lg my-6 lg:text-3xl font-medium text-gray-400">
        Sorry, we couldn't find the page.
      </p>
      <Link to={"/"} className="btn bg-[#38B2AC] text-white hover:text-black">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
