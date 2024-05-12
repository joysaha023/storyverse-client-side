import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";

const UpdateBlog = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [update, setUpdate] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/updateblog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image_url = form.image.value;
    const category = form.subcategory_name.value;
    const short_description = form.sdescription.value;
    const long_description = form.ldescription.value;
    const email = form.email.value;
    const name = form.name.value;
    const updateBlog = {
      title,
      image_url,
      category,
      short_description,
      long_description,
      email,
      name,
    };
    console.log(updateBlog);

    fetch(`http://localhost:5000/updateChanges/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json"},
        body:JSON.stringify(updateBlog)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2>Update blog</h2>
      <div>
        <div>
          <form onSubmit={handleUpdate} className="card-body border rounded-md">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                defaultValue={update.title}
                name="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                defaultValue={update.image_url}
                name="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                id="subcategory_name"
                defaultValue={update.category}
                name="subcategory_name"
                className="mt-1 block w-full p-2 outline-none rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select Category</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                defaultValue={update.short_description}
                className="textarea textarea-bordered"
                name="sdescription"
                placeholder="Short Description"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <textarea
                defaultValue={update.long_description}
                className="textarea textarea-bordered"
                name="ldescription"
                placeholder="Long Description"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;