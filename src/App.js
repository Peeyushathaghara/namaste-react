import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Error from "./components/Error";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <Applayout />,
    errorElement: <Error />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/contact",
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
