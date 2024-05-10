import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth'
import registration from './registration.json';
import Lottie from "lottie-react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const {createuser, logOut, updateuserProfile} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => {
        const { fullName, email, image, password } = data;
     
        setPasswordError("");
    
        if (password.length == "") {
          setPasswordError("Password field is required");
          return;
        } else if (password.length < 6) {
          setPasswordError("Password should be 6 character or longer ");
          return;
        } else if (!/[A-Z]/.test(password)) {
          setPasswordError("add at least one capital later");
          return;
        } else if (!/[!@#$%^&*]/.test(password)) {
          setPasswordError("add at least one special character");
          return;
        } else if (!/[0-9]/.test(password)){
            setPasswordError("add at least one numeric character");
            return;
        }
       
        
        // create user
        createuser(email, password)
          .then((result) => {
            updateuserProfile(fullName, image)
            .then(() => {
              logOut()
              console.log(result.user)
              navigate('/login')
            })
          })
          .catch((error) => {
            console.log(error)
          });
      };


  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="lg:w-[50%]"><Lottie animationData={registration} /></div>
        <div className="flex flex-col lg:w-[35%] lg:flex-row items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body lg:w-[30%] border rounded-md"
          >
            <h2 className="text-center text-2xl md:text-3xl font-bold">
              Sign Up
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered rounded-md"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">write your name</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered rounded-md"
                {...register("image")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered rounded-md flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  {...register("password")}
                />
                <span
                  className="relative lg:-right-20  text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </span>
              </label>

              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#38B2AC] text-white hover:text-black rounded-md ">
                Register
              </button>
            </div>
            <h2 className="text-center mt-2 font-medium">
              Already have an account?{" "}
              <Link to={"/login"} className="text-[#38B2AC] underline">
                Login
              </Link>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
