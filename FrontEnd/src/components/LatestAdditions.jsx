import React, { useContext, useEffect, useState } from "react";
import { AuctionContext } from "../context/AuctionContext.jsx";
import Title from "./Title.jsx";
import StockItem from "./StockItem.jsx";

const LatestAdditions = () => {
  const { products } = useContext(AuctionContext);
  const [latestStocks, setLatestStocks] = useState([]);

  useEffect(() => {
    const sorted = [...products].reverse();
    setLatestStocks(sorted.slice(0, 4));
  }, [products]);

  return (
    <div className={"my-10"}>
      <div className={"text-center py-8 text-3xl"}>
        <Title text1={"LATEST"} text2={"ADDITIONS"} />
        <p className={"w-3/4 m-auto text-xs"}>
          Grey Plate Set, Tile Set, Samsung S25 Ultra, Lenovo P520 Workstation
        </p>
      </div>

      {/*    Rendering Products*/}
      <div className={"grid grid-cols-2 gap-4 gap-y-6"}>
        {latestStocks.map((stock, index) => (
          <StockItem
            key={index}
            id={stock._id}
            image={stock.image}
            name={stock.name}
            openingBid={stock.openingBid}
            currentBid={stock.currentBid}
          />
        ))}
      </div>
    </div>
  );
};
export default LatestAdditions;
