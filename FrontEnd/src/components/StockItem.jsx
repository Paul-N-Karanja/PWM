import React, { useContext } from "react";
import { AuctionContext } from "../context/AuctionContext.jsx";
import { Link } from "react-router-dom";

const StockItem = ({ id, image, name, openingBid, currentBid }) => {
  const { currency } = useContext(AuctionContext);
  return (
    <Link className={"cursor-pointer text-center"} to={`/stock/${id}`}>
      <div className={"overflow-hidden flex justify-center"}>
        <img
          className={
            "hover:scale-110 transition ease-in-out h-[180px] w-[300px]"
          }
          src={image[0]}
          alt={"Item Image"}
        />
      </div>
      <p className={"pt-3 pb-1 text-sm"}>{name}</p>
      <p className={"text-sm font-medium"}>
        Opening bid price: {currency} {openingBid}
      </p>
      <p className={"text-sm font-medium"}>
        Current bid price: {currency} {currentBid}
      </p>
    </Link>
  );
};
export default StockItem;
