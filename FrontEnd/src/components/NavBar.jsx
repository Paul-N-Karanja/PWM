import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaGavel } from "react-icons/fa";
import { AuctionContext } from "../context/AuctionContext.jsx";

const NavBar = () => {
  const { setShowSearch, getAuctionCount } = useContext(AuctionContext);

  return (
    <div className={"flex flex-col"}>
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
        <div
          className={
            "flex items-center justify-center h-10 w-[40%] rounded-4xl"
          }
        >
          <form className={"w-[100%] h-full flex justify-between bg-white"}>
            <input
              type={"text"}
              placeholder={"Search PWM"}
              className={"w-[100%] border-[none] outline-none pl-3"}
            />
            <button
              type="submit"
              className={
                "bg-[#0A1460] text-white h-[100%] w-[20%] border-[none] outline-none hover:shadow-lg shadow-red-800/30 ring-red-800 cursor-pointer text-1xs"
              }
            >
              Search
            </button>
          </form>
        </div>

        <div className={"flex gap-5 justify-between"}>
          <IoIosSearch
            className={"text-4xl hover:text-[#9f0012] cursor-pointer"}
            onClick={() => setShowSearch(true)}
          />
          <div className={"group relative"}>
            <Link to={"/login"}>
              <IoPersonCircleOutline
                className={
                  "text-4xl text-black hover:text-[#9f0012] cursor-pointer"
                }
              />
            </Link>
            <div
              className={
                "group-hover:block hidden absolute dropdown-menu right-[-18px] pt-1"
              }
            >
              <div
                className={
                  "flex flex-col gap-2 w-36 py-3 px-5 bg-[#f3f4ff] text-black"
                }
              >
                <p className={"cursor-pointer hover:text-[#9f0012]"}>
                  My Profile
                </p>
                <p className={"cursor-pointer hover:text-[#9f0012]"}>
                  My Auctions
                </p>
                <p className={"cursor-pointer hover:text-[#9f0012]"}>Logout</p>
              </div>
            </div>
          </div>

          <Link to={"/auctions"} className={"relative"}>
            <FaGavel
              className={
                "text-4xl text-black hover:text-[#9f0012] cursor-pointer"
              }
            />
            <p
              className={
                "absolute right-[2px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px] hover:bg-[#9f0012]"
              }
            >
              {getAuctionCount()}
            </p>
          </Link>
        </div>
      </div>

      <hr className={"border-0 h-[0.5px] bg-black"} />

      <div
        className={
          "flex items-center justify-between py-5 px-5 font-medium bg-[#f3f4ff]"
        }
      >
        <ul
          className={
            "hidden sm:flex gap-5 justify-between w-full text-sm text-black "
          }
        >
          <NavLink
            className={
              "flex flex-col items-center gap-1 justify-between hover:text-[#9f0012] delay-200 ease-in-out cursor-pointer "
            }
            to={"/"}
          >
            <p>Home</p>
            <hr className={"border-[1.5px] rounded-md w-[95%] hidden"} />
          </NavLink>
          <NavLink
            className={
              "flex flex-col items-center gap-1 justify-between hover:text-[#9f0012] delay-200 ease-in-out cursor-pointer"
            }
            to={"/marketplace"}
          >
            <p>Marketplace</p>
            <hr className={"border-[1.5px] rounded-md w-[95%] hidden"} />
          </NavLink>
          <NavLink
            className={
              "flex flex-col items-center gap-1 justify-between hover:text-[#9f0012] delay-200 ease-in-out cursor-pointer"
            }
            to={"/about"}
          >
            <p>About</p>
            <hr className={"border-[1.5px] rounded-md w-[95%] hidden"} />
          </NavLink>
          <NavLink
            className={
              "flex flex-col items-center gap-1 justify-between hover:text-[#9f0012] delay-200 ease-in-out cursor-pointer"
            }
            to={"/contact"}
          >
            <p>Contact</p>
            <hr className={"border-[1.5px] rounded-md w-[95%] hidden"} />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
