import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { stocks as intitialStocks } from "../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

export const AuctionContext = createContext();

const AuctionContextProvider = props => {
  const currency = "Ksh";
  const delivery_fee = 500;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [auctionItems, setAuctionItems] = useState({});
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  // original but buggy way of adding to and incrementing cart
  // const addToAuctions = async stockId => {
  //   let auctionData = structuredClone(auctionItems);
  //   if (auctionData[stockId]) {
  //     if (auctionData[stockId]) {
  //       auctionData[stockId] += 1;
  //     } else {
  //       auctionData[stockId] = 1;
  //     }
  //   } else {
  //     auctionData[stockId] = {};
  //     // auctionData[stockId] = 1;
  //   }
  //   setAuctionItems(auctionData);
  // };
  //
  // const getAuctionCount = () => {
  //   let totalCount = 0;
  //   for (const stocks in auctionItems) {
  //     for (const stock in auctionItems[stocks]) {
  //       try {
  //         if (auctionItems[stocks][stock] > 0) {
  //           totalCount += auctionItems[stocks][stock];
  //         }
  //       } catch (error) {}
  //     }
  //   }
  //   return totalCount;
  // };

  // working way of adding to and incrementing cart
  const addToAuctions = async stockId => {
    let auctionData = structuredClone(auctionItems);
    // Initialize count to 0 if it doesn't exist
    if (!auctionData[stockId]) {
      auctionData[stockId] = 0;
    }
    auctionData[stockId] += 1;
    setAuctionItems(auctionData);
  };

  const getAuctionCount = () => {
    return Object.keys(auctionItems).length;
  };

  const placeBid = (productId, newBid) => {
    setProducts(prev =>
      prev.map(product =>
        product._id === productId
          ? { ...product, currentBid: newBid }
          : product
      )
    );
  };


  const removeFromAuction = stockId => {
    setAuctionItems(prev => {
      const updated = { ...prev };
      delete updated[stockId];
      return updated;
    });
  };

  const getAuctionAmount = () => {
    let totalAmount = 0;

    for (const stockId in auctionItems) {
      const quantity = auctionItems[stockId];
      const stockInfo = products.find(stock => stock._id === stockId);

      if (stockInfo && stockInfo.currentBid) {
        const bidAmount = Number(
          stockInfo.currentBid.toString().replace(/,/g, "")
        );
        totalAmount += bidAmount * quantity;
      }
    }

    return totalAmount;
  };

  const getProductsData = async () => {
    try{
      const response=await axios.get(backendUrl+"/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
        setStocks(response.data.products);
      }else {
        toast.error(response.data.message);
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getProductsData();
  }, []);

  const value = {
    stocks,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    auctionItems,
    addToAuctions,
    getAuctionCount,
    placeBid,
    removeFromAuction,
    getAuctionAmount,
    navigate,
    backendUrl,
    products,
  };

  return (
    <AuctionContext.Provider value={value}>
      {props.children}
    </AuctionContext.Provider>
  );
};

export default AuctionContextProvider;
