import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { AuctionContext } from "../context/AuctionContext.jsx";
import { assets, stocks } from "../assets/assets.js";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Stock = () => {
  const { stockId } = useParams();
  const { products, addToAuctions, currency } = useContext(AuctionContext);
  const [stockData, setStockData] = useState(false);
  const [image, setImage] = useState("");

  const fetchStockData = async () => {
    products.map(item => {
      if (item._id === stockId) {
        setStockData(item);
        // console.log(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchStockData();
  }, [stockId, products]);

  return stockData ? (
    <div
      className={
        "border-t-1 pt-10 transition-opacity ease-in duration-500 opacity-100 px-20"
      }
    >
      {/*products data*/}
      <div className={"flex gap-12 flex-col"}></div>

      <div className={"flex"}>
        {/*products images*/}
        <div className={"w-[50%]"}>
          <img src={image} alt="image" className={"w-full h-auto"} />
        </div>

        {/*product info*/}
        <div className={"flex-1"}>
          <h1 className={"font-medium text-2xl mt-2"}>{stockData.name}</h1>
          <div className={"flex items-center gap-1 mt-2"}>
            <FaStar className={"text-[#FF9529] text-1lg"} />
            <FaStar className={"text-[#FF9529] text-1lg"} />
            <FaStar className={"text-[#FF9529] text-1lg"} />
            <FaStarHalfAlt className={"text-[#FF9529] text-1lg"} />
            <FaRegStar className={"text-[#FF9529] text-1lg"} />
            <p className={"pl-2.5"}>(12)</p>
          </div>
          <div className={"flex gap-10 mt-10"}>
            <p className={"text-3l font-medium"}>
              <span className={"bg-[#0A1460] p-2 text-white"}>
                Opening Bid:
              </span>
              {currency} {stockData.openingBid}
              {/*<hr className={"bg-[#9f0012] border-0 h-0.5"} />*/}
            </p>
            <p className={"text-3l font-medium"}>
              <span className={"bg-[#0A1460] p-2 text-white"}>
                Current Bid:
              </span>
              {currency} {stockData.currentBid}
              {/*<hr className={"bg-[#9f0012] border-0 h-0.5"} />*/}
            </p>
          </div>
          <p className={"mt-10 text-3l font-medium "}>{stockData.details}</p>

          <div className={"flex gap-10 mt-10"}>
            {/*<button*/}
            {/*  className={*/}
            {/*    "bg-[#0A1460] text-white px-8 py-3 text-1l active:bg-[#0e1b81]"*/}
            {/*  }*/}
            {/*>*/}
            {/*  Enter Auction*/}
            {/*</button>*/}
            <button
              onClick={() => addToAuctions(stockData._id)}
              className={
                "bg-[#0A1460] text-white px-8 py-3 text-1l active:bg-[#0e1b81]"
              }
            >
              Add To Auctions
            </button>
          </div>
          <hr className="mt-10 text-[#9f0012]" />
          <div className={"text-sm flex flex-col gap-1 mt-10"}>
            <p>Reviewed by our Quality Assurance team</p>
            <p>Cash on delivery is available</p>
            <p>No return policy unless the item doesn't come as posted</p>
          </div>
        </div>
      </div>

      {/*  description and review section*/}
      <div className={"mt-20"}>
        <div className={"flex"}>
          <b className={"border px-5 py-3 text-sm"}>Description</b>
          <p className={"border px-5 py-3 text-sm"}>Reviews (12)</p>
        </div>
        <div className={"flex flex-col gap-4 border px-6 py-6 text-sm"}>
          <p>
            This is a versatile and high-quality item designed to meet a variety
            of needs
          </p>
          <p>
            It ensures reliable and lasting value while also giving you
            convenience, and style
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={"opacity-0"}></div>
  );
};
export default Stock;
