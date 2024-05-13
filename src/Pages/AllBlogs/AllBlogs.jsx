import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import BlogSingleCard from "../../Components/BlogSingleCard/BlogSingleCard";
import axios from "axios";

const AllBlogs = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/filter-blog?filter=${filter}&search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [filter, search]);


  useEffect(() => {
    fetch(`http://localhost:5000/blogposts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleSearch = e => {
    e.preventDefault()
    
    setSearch(searchText)
    // setSearch(searchText)
  }

  const handleReset = () => {
    setFilter('')
    setSearch('')
    setSearchText('')
  }


  // const { isPending, data: users } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/blogposts");
  //     return res.json();
  //   },
  // });

  // if (isPending) {
  //   return (
  //     <div className="text-center mt-20">
  //       <span className="loading  loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-2 lg:gap-6">
        <div>
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="border p-4 rounded-lg"
            value={filter}
            name="category"
            id="category"
          >
            <option value=''>Select Category</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
        <div>
        <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Blog Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#3498DB] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
        </div>
        <button onClick={handleReset} className='btn bg-[#2C3E50] text-white hover:text-black'>
            Reset
          </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-5 mt-3 lg:mt-6">
        {data.map((item) => (
          <BlogSingleCard key={item._id} item={item}></BlogSingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
