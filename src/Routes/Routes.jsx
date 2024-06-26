import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import WishList from "../Pages/WishList/WishList";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import MyBlog from "../Pages/MyBlog/MyBlog";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import MovieData from "../Pages/MovieData/MovieData";
import AllReviews from "../Pages/AllReviews/AllReviews";
import WriteReview from "../Pages/WriteReview/WriteReview";
import Community from "../Pages/Community/Community";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/allblogs",
          element: <AllBlogs></AllBlogs>
        },
        {
          path: "/addblogs",
          element: <PrivateRoutes><AddBlogs></AddBlogs></PrivateRoutes>
        },
        {
          path: "/featuredblogs",
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: "/wishlist",
          element: <PrivateRoutes><WishList></WishList></PrivateRoutes>
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/BlogDetails/:id",
          element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>
        },
        {
          path: "/myblog",
          element: <PrivateRoutes><MyBlog></MyBlog></PrivateRoutes>
        },
        {
          path: "/updateblog/:id",
          element: <UpdateBlog></UpdateBlog>
        },
        {
          path: "/moviedata/:category",
          element: <MovieData></MovieData>
        },
        {
          path: "/allreviews",
          element: <AllReviews></AllReviews>
        },
        {
          path: "/writereview",
          element: <PrivateRoutes><WriteReview></WriteReview></PrivateRoutes>
        },
        {
          path: "/community",
          element: <PrivateRoutes><Community></Community></PrivateRoutes>
        }
    ]
  },
]);

export default router;
