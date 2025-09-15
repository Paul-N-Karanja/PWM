import React from "react";
import { NavLink } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

export const Sidebar = () => {
  return (
    <div className={"w-[18%] min-h-screen border-r-2 border-[#9f0012]"}>
      <div className={"flex flex-col pt-6 pl-[20%] text-[15px] gap-4"}>
      <NavLink className={"flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l"} to="/add">
        <IoAddCircleOutline className="text-3xl text-[#9f0012]" />
        <p className={"hidden md:block"}>Add Items</p>
      </NavLink>

        <NavLink className={"flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l"} to="/list">
          <FaList className="text-3xl text-[#9f0012]" />
          <p className={"hidden md:block"}>List Items</p>
        </NavLink>

        <NavLink className={"flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l"} to="/orders">
          <IoMdCheckboxOutline className="text-3xl text-[#9f0012]" />
          <p className={"hidden md:block"}>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};
