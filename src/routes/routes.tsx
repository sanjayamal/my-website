import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout/Layout"));
const ErrorPage = lazy(() => import("../components/ErrorPage/ErrorPage"));
const Home = lazy(() => import("../components/Home/Home"));
const About = lazy(() => import("../components/About/About"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Blogs = lazy(() => import("../components/Blogs/Blogs"));
const Projects = lazy(() => import("../components/Projects/Projects"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
