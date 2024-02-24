import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import LoggedInUser from "../utils/LoggedInUser";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const {user} = useContext(LoggedInUser)
  // console.log(user)
  return (
    <div className="flex justify-between items-center bg-gray-200 border-radius rounded-lg m-2 mb-2">
      <div className="logo-container">
        <Link to="/">
          <img className="w-[200px]" src={LOGO_URL} />
        </Link>
      </div>
      <div className="">
        <ul className="flex p-4 m-4 font-bold">
          <li className=" p-2 m-2">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className=" p-2 m-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-2 m-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" p-2 m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" p-2 m-2">Cart</li>
          <li className=" p-2 m-2"> 
            <button
              className="loginBtn"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li className=" p-2 m-2">
            {user}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
