import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import EachRestaurant from "./components/EachRestaurant";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createHashRouter,
} from "react-router-dom";

const Grocery = lazy(() => {import("./components/Grocery")})
const About = lazy(() => {import("./components/About")})

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// const AppRouter = createHashRouter([
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        // element: <About />,
        element:<Suspense fallback={ <h1>Wait...</h1> }><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={ <h1>Wait...</h1> }><Grocery /></Suspense>
        // element : <React.Suspense fallback={<h3>Loading...</h3>}><Grocery /></React.Suspense>
        
        
      },
      {
        path: "/restaurant/:resId",
        element: <EachRestaurant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
