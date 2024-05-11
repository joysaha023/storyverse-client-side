import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [item, setItems] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/blogdetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  
  

  return (
    <div>
      <h2>{item.title}</h2>
    </div>
  );
};

export default BlogDetails;
