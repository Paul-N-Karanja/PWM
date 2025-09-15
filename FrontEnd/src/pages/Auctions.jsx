import React, { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../context/AuctionContext.jsx";
import stock from "./Stock.jsx";
import Title from "../components/Title.jsx";
import { RiDeleteBin6Line } from "react-icons/ri";
import AuctionTotal from "../components/AuctionTotal.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const Auctions = () => {
  const {
    products,
    auctionItems,
    currency,
    placeBid,
    removeFromAuction,
    navigate,
  } = useContext(AuctionContext);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [auctionData, setAuctionData] = useState([]);
  const [bidValues, setBidValues] = useState({});

  useEffect(() => {
    const tempData = [];

    for (const stockId in auctionItems) {
      if (auctionItems[stockId] > 0) {
        tempData.push({
          id: stockId,
          quantity: auctionItems[stockId],
        });
      }
    }

    setAuctionData(tempData);
  }, [auctionItems]);

  return (
    <div className={"border-t pt-14 px-20"}>
      <div className={"text-2xl mb-3"}>
        <Title text1={"YOUR"} text2={"AUCTIONS"} />
      </div>

      <div>
        {/*original problematic code*/}
        {/*{auctionData.map((stock, index) => {*/}
        {/*  const stockData = products.find(stock => stock.id === stock.id);*/}

        {auctionData.map((item, index) => {
          const stockData = products.find(s => {
            if (!s?._id || !item?.id) return false;
            return s._id.toString() === item.id.toString();
          });

          if (!stockData) return null; // if no stock found, skip

          return (
            <div
              key={index}
              className={
                "py-4 border-t border-b grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4"
              }
            >
              <div className={"flex items-start gap-6"}>
                <img src={stockData.image[0]} className={"w-16"} alt={""} />
                <div>
                  <p
                    className={
                      "text-xs font-medium border-b-2 border-[#9f0012]"
                    }
                  >
                    {stockData.name}
                  </p>

                  <div className={"flex items-center gap-5 mt-1"}>
                    <p className={"text-xs font-medium"}>
                      Opening Bid: {currency} {stockData.openingBid}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className={"text-sm font-medium text-nowrap mr-30"}>
                  Current Bid: {currency} {stockData.currentBid}
                </p>
              </div>
              <div className={"flex gap-3 items-center"}>
                <p className={"text-sm font-medium text-nowrap"}>Place bid:</p>
                <div className={"flex items-center gap-0.5"}>
                  <p className={"text-[16px]"}> {currency}</p>
                  <div className={"flex items-center"}>
                    <input
                      type={"number"}
                      className={"border px-1 max-w-50 py-1 text-[16px] h-[100%]"}
                      value={bidValues[stockData._id] || ""}
                      onChange={e =>
                        setBidValues(prev => ({
                          ...prev,
                          [stockData._id]: e.target.value,
                        }))
                      }
                    />
                    <button
                      type="submit"
                      className="bg-[#0A1460] text-white h-[100%] p-1 cursor-pointer text-[16px]"
                      onClick={async () => {
                        const bidAmount = Number(bidValues[stockData._id]);

                        if (isNaN(bidAmount) || bidAmount <= stockData.currentBid) {
                          toast.warning("Bid must be higher than the current bid.");
                          return;
                        }

                        try {
                          const response = await axios.put(`${backendUrl}/api/product/update-bid`, {
                            productId: stockData._id,
                            newBid: bidAmount,
                          });

                          if (response.data.success) {
                            placeBid(stockData._id, bidAmount);
                            toast.success("Bid placed successfully!");
                          } else {
                            toast.error(response.data.message);
                          }
                        } catch (error) {
                          console.error(error);
                          toast.error("Failed to submit bid. Please try again.");
                        }
                      }}

                    >
                      Submit
                    </button>
                  </div>
                </div>
                <RiDeleteBin6Line
                  className={"cursor-pointer text-3xl text-[#9f0012]"}
                  onClick={() => removeFromAuction(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={"flex justify-end my-20"}>
        <div className={"w-[50%]"}>
          <AuctionTotal />
          <div className={"w-full text-end"}>
            <button
              className={"bg-[#0A1460] text-white text-sm my-8 px-8 py-3"}
              onClick={() => navigate("/place-order")}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auctions;
