import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handlelogout = () => {
    logOut();
  };

  const navlink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#38B2AC] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allblogs"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#38B2AC] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          All Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/featuredblogs"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#38B2AC] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          Featured Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#38B2AC] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          Wishlist
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addblogs"}
          className={({ isActive }) =>
            isActive
              ? "bg-white hover:bg-white text-[#38B2AC] border-0 font-semibold underline"
              : "font-medium"
          }
        >
          Add Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost hover:bg-white text-xl">
          StoryVerse
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <button className="btn btn-ghost btn-circle">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  title={user?.displayName || "User"}
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt=""
                      src={user?.photoURL || "https://i.ibb.co/6JyZF0K/user.png"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                    {user?.displayName || "User"}
                    </a>
                  </li>
                  {/* <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li> */}
                </ul>
              </div>
            </button>
            <button onClick={handlelogout} className="btn btn-error">
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="btn btn-primary">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-accent">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

<div>
  <Link to={"/login"} className="btn btn-primary">
    Login
  </Link>
  <Link to={"/register"} className="btn btn-accent">
    Register
  </Link>
</div>;

// <button onClick={handlelogout} className="btn btn-error">Log Out</button>
