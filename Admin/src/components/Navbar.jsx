import React from "react";
import { assets } from "../assets/assets.js";
import { NavLink } from "react-router-dom";

const Navbar = ({setToken}) => {
  return (
      <div
        className={
          "flex items-center justify-between py-5 px-20 font-medium bg-[#f3f4ff]"
        }
      >
        <NavLink to={"/"}>
          <img
            src={assets.logo}
            alt="PWM logo"
            className={"h-15 w-auto cursor-pointer"}
          />
        </NavLink>

        <button onClick={() => setToken("")}
          type="submit"
          className={
            "bg-[#0A1460] text-white px-5 py-2 border-[none] outline-none cursor-pointer text-1xs"
          }
        >
          Logout
        </button>
      </div>
  );
};

export default Navbar;