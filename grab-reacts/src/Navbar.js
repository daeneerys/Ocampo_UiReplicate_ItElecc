import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <img
        src="assets/logo-grabfood-white2.svg"
        alt=""
        className="nav_logo"
      ></img>
      <div className="btn_container">
      <button className="cartbtn">
        <FaShoppingBag size={20} style={{ color: "gray" }} />
      </button>
      <button className ="loginbtn">
        Login/SignUp
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
