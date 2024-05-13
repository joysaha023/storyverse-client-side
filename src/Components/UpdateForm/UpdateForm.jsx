import React from 'react';
import useAuth from '../../Hooks/useAuth';

const UpdateForm = ({item}) => {
const {user} = useAuth();
const { title, image_url,  category, long_description, short_description} = item




    return (
        <div>
            <div>
        <form  className="card-body border bg-[#ECF0F1] rounded-md">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              defaultValue={title}
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
              defaultValue={image_url}
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
                defaultValue={category}
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
            <textarea defaultValue={short_description} className="textarea textarea-bordered" name="sdescription" placeholder="Short Description"></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Long Description</span>
            </label>
            <textarea defaultValue={long_description} className="textarea textarea-bordered" name="ldescription" placeholder="Long Description"></textarea>
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
    );
};

export default UpdateForm;