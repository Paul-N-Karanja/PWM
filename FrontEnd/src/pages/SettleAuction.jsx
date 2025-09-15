import React, { useContext } from "react";
import { AuctionContext } from "../context/AuctionContext.jsx";
import Title from "../components/Title.jsx";

const SettleAuction = () => {
  const { stocks, currency } = useContext(AuctionContext);

  const dateToday = new Date();
  const formatDate = date => {
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <div className={"border-t pt-16 px-20"}>
      <div className={"text-2xl"}>
        <Title text1={"Settled"} text2={"Items"} />
      </div>

      <div>
        {stocks.slice(1, 4).map((stock, index) => (
          <div
            key={index}
            className="py-4 border-t border-b flex justify-between items-center gap-4"
          >
            {/* Column 1 */}
            <div className="flex items-start gap-4 flex-1">
              <img src={stock.image[0]} alt="" className="w-20 h-20" />
              <div>
                <p className="font-medium">{stock.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base">
                  <p>
                    Starting Bid Price:
                    <span className="border-b border-[#9f0012]">
                      {" "}
                      {currency}
                      {stock.openingBid}
                    </span>
                  </p>
                  <p>
                    Final Bid Price:
                    <span className="border-b border-[#9f0012]">
                      {" "}
                      {currency}
                      {stock.currentBid}
                    </span>
                  </p>
                </div>
                <p>
                  Date: <span>{formatDate(dateToday)}</span>
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex items-center gap-2 text-sm whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <p>Ready for delivery</p>
            </div>

            {/* Column 3 */}
            <button className="bg-[#0A1460] text-white px-6 py-2 rounded hover:bg-[#071041] text-sm whitespace-nowrap">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SettleAuction;
