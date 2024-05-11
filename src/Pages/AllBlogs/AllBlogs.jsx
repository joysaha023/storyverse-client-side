import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import BlogSingleCard from "../../Components/BlogSingleCard/BlogSingleCard";
import axios from "axios";

const AllBlogs = () => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//         const {item} = await axios(
//             `http://localhost:5000/filter-blog?filter=${filter}`
//         )
//         setData(item)
//     }
//     getData()
//   }, [filter])
// console.log(data)


  const { isPending, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/blogposts");
      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="text-center mt-20">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center items-center gap-6">
        <div>
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="border p-4 rounded-lg"
            value={filter}
            name="category"
            id="category"
          >
            <option value="">Select Category</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {users.map((item) => (
          <BlogSingleCard key={item._id} item={item}></BlogSingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
