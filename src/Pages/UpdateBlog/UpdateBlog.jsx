import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
    const { email } = useParams();
    const [update, setUpdate] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myblog/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
      });
  }, [email]);

  console.log(update)

  return (
    <div>
      <h2>Update blog</h2>
    </div>
  );
};

export default UpdateBlog;
