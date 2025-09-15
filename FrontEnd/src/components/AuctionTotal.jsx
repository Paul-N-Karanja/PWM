import React, { useContext, useEffect, useState } from "react";
import Title from "./Title.jsx";
import { AuctionContext } from "../context/AuctionContext.jsx";

const AuctionTotal = () => {
  const { currency, getAuctionAmount } = useContext(AuctionContext);
  return (
    <div className={"w-full"}>
      <div className={"text-2xl"}>
        <Title text1={"Auction"} text2={"Total"} />
      </div>
      <div className={"flex flex-col gap-2 text-sm"}>
        <div className={"flex justify-between"}>
          <b>Total</b>
          <b>
            {currency}{" "}
            {new Intl.NumberFormat("en-KE", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(getAuctionAmount())}
          </b>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default AuctionTotal;
