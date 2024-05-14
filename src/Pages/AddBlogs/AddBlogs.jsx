import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image_url = form.image.value;
        const category = form.subcategory_name.value;
        const short_description = form.sdescription.value;
        const long_description = form.ldescription.value;
        const email = form.email.value;
        const profile_pic = user?.photoURL;
        const name = form.name.value;
        const sendBlog = {title, image_url, category, profile_pic, short_description, long_description, email, name}


        fetch("https://storyverse-website-server-side.vercel.app/blogposts", {
            method: "POST",
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify(sendBlog)
        })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            title: "Successfully Added",
            text: "Your item has been added.",
            icon: "success",
          });
          navigate("/myblog")
            // console.log(data)
        })
    }


  return (
    <div className="max-w-6xl mx-auto">
       <h2 className="text-xl md:text-3xl text-center my-1 md:my-4 font-bold">Add Blog</h2>
      <div>
        <form onSubmit={handleSubmit} className="card-body bg-[#ECF0F1] border rounded-md">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="title"
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
              placeholder="Image URL"
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
            <textarea className="textarea textarea-bordered" name="sdescription" placeholder="Short Description"></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Long Description</span>
            </label>
            <textarea className="textarea textarea-bordered" name="ldescription" placeholder="Long Description"></textarea>
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Owner Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="ownerPhoto"
              className="input input-bordered"
              required
            />
          </div> */}
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
            <button className="btn bg-[#3498DB] text-white hover:text-black">Add Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
