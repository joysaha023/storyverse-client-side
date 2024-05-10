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
          element: <AddBlogs></AddBlogs>
        },
        {
          path: "/featuredblogs",
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path: "/wishlist",
          element: <WishList></WishList>
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
    ]
  },
]);

export default router;
