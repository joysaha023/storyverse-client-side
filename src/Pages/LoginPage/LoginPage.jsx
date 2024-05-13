import React, { useState } from "react";
import login from './login2.json';
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const LoginPage = () => {
    const {signIn, googleSignIn} = useAuth()
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const {email, password} = data;
   
    //sign in 
    signIn(email, password)
    .then(result => {
     console.log(result.user)
     toast.success("Login Successfully")
     navigate(location?.state ? location.state: '/');
    })
    .catch(error => {
      toast.warning("incorrect password")
    })
  };

  const handlegoogle = () => {
    googleSignIn()
    .then(result => {
        console.log(result.user)
        toast.success("Login Successfully")
        navigate(location?.state ? location.state: '/');
    })
    .catch()
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <div className="lg:w-[50%]"><Lottie animationData={login} /></div>
        <div className="flex flex-col lg:w-[35%] lg:flex-row items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body rounded-xl lg:w-[50%] border"
          >
            <h2 className="text-center text-2xl md:text-3xl font-bold">
              Login
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-xl"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered rounded-xl flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className=" "
                  {...register("password", { required: true })}
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
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#3498DB] text-white hover:text-black rounded-xl ">
                Login
              </button>
            </div>
            <h2 className="text-center mt-2 font-medium">
              Not a Member Yet?{" "}
              <Link to={"/register"} className="text-[#3498DB] underline">
                Sign Up
              </Link>
            </h2>
            <p className="text-center mt-2 font-medium">Or Login with</p>
            <div className="flex justify-center">
              <button
                  onClick={handlegoogle}
                className="flex items-center gap-1 text-[#3498DB] btn btn-sm rounded-none"
              >
                <FaGoogle />
                Google
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
