import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const WriteReview = () => {
  const {user} = useAuth();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const image = user?.photoURL;
    const rating = form.rating.value;
    const review = form.sdescription.value;
    const writereview = { name, image, rating, review };
    // console.log(writereview);

    fetch("https://storyverse-website-server-side.vercel.app/writereview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(writereview),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Successfully Submitted",
          text: "Your review has been submitted.",
          icon: "success",
        });
        navigate("/allreviews")
        // console.log(data);
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
       <h2 className="text-xl md:text-3xl text-center my-1 md:my-4 font-bold">Write Review</h2>
      <form
        onSubmit={handleSubmit}
        className="card-body bg-[#ECF0F1]  border rounded-md"
      >
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
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">User Photo</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            className="input input-bordered"
            required
          />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <select
            id="subcategory_name"
            name="rating"
            className="mt-1 block w-full p-2 outline-none rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Write Review</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="sdescription"
            placeholder="Write Review"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#3498DB] text-white hover:text-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
