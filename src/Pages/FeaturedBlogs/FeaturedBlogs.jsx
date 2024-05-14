import { useQuery } from "@tanstack/react-query";
import React from "react";
import DataTable from "react-data-table-component";
import { Helmet } from "react-helmet";


const column = [
  {
    name: "No",
    cell: (row, index) => index + 1,
    sortable: true
  },
  {
    name: "Blog Title",
    selector: (row) => row.title,
    sortable: true
  },
  {
    name: "Blog Owner",
    selector: (row) => row.name,
    sortable: true
  },
  {
    name: "Owner Photo",
    selector: (row) => (
      <img
        className="rounded-full"
        width={50}
        height={50}
        src={row.profile_pic}
      />
    ),
  },
  //   {
  //     name: "Owner Photo",
  //     selector: (row) =>    <Link to={`/BlogDetails/${data._id}`} className="btn btn-primary btn-sm rounded-2xl">Read More</Link>,
  //   },
];

const FeaturedBlogs = () => {
  const { isPending, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://storyverse-website-server-side.vercel.app/featuredblog");
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
     <Helmet>
        <title>StoryVerse - Featured Blog</title>
      </Helmet>
    <h2 className="text-xl md:text-3xl text-center my-1 md:my-4 font-bold">Top 10 Blogs</h2>
     <div className="m-6 border-2 rounded-md">
      <DataTable columns={column} data={data}></DataTable>
    </div>
   </div>
  );
};

export default FeaturedBlogs;
