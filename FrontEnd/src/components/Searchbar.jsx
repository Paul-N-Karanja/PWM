import React, { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../context/AuctionContext.jsx";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(AuctionContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("marketplace")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className={"border-t border-b bg-[#f3f4ff] text-center"}>
      <div
        className={
          "inline-flex items-center justify-center border-1 border-[#9f0012] px-5 py-2 my-5 mx-3 rounded-full w-3/4"
        }
      >
        <input
          value={search}
          type={"text"}
          placeholder={"Search"}
          className={"flex-1 outline-none bg-inherit text-sm"}
          onChange={e => setSearch(e.target.value)}
        />
        <IoIosSearch className={"text-xl"} />
      </div>
      <RxCross1
        className={"text-xl inline cursor-pointer"}
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};
export default Searchbar;
