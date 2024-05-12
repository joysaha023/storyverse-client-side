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
import BlogSingleCard from "../Components/BlogSingleCard/BlogSingleCard";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import MyBlog from "../Pages/MyBlog/MyBlog";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";

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
          element: <BlogDetails></BlogDetails>
        },
        {
          path: "/myblog",
          element: <PrivateRoutes><MyBlog></MyBlog></PrivateRoutes>
        },
        {
          path: "/updateblog/:id",
          element: <UpdateBlog></UpdateBlog>
        }
    ]
  },
]);

export default router;
