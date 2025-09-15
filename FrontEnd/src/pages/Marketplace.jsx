import React, { useContext, useEffect, useState } from "react";
import auctionContext, { AuctionContext } from "../context/AuctionContext.jsx";
import Title from "../components/Title.jsx";
import StockItem from "../components/StockItem.jsx";

const Marketplace = () => {
  const { products, search, showSearch } = useContext(AuctionContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterStocks, setFilterStocks] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("recent");

  const toggleCategory = e => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(stocks => stocks !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = e => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(stocks => stocks !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let stocksCopy = products.slice();

    if (showSearch && search) {
      stocksCopy = stocksCopy.filter(stocks =>
        stocks.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length > 0) {
      stocksCopy = stocksCopy.filter(stocks =>
        category.includes(stocks.category),
      );
    }

    if (subCategory.length > 0) {
      stocksCopy = stocksCopy.filter(stocks =>
        subCategory.includes(stocks.subCategory),
      );
    }

    setFilterStocks(stocksCopy);
  };

  // original problematic code
  // const sortsStock = () => {
  //   let fsCopy = filterStocks.slice();
  //
  //   switch (sortType) {
  //     case "low-high":
  //       setFilterStocks(
  //         fsCopy.sort((a, b) => {
  //           return a.currentBid - b.currentBid;
  //         }),
  //       );
  //       break;
  //     case "high-low":
  //       setFilterStocks(
  //         fsCopy.sort((a, b) => {
  //           return b.currentBid - a.currentBid;
  //         }),
  //       );
  //       break;
  //     default:
  //       applyFilter();
  //       break;
  //   }
  // };
  //
  // useEffect(() => {
  //   setFilterStocks(products);
  // }, []);
  //
  // useEffect(() => {
  //   applyFilter();
  // }, [category, subCategory, search, showSearch]);
  //
  // useEffect(() => {
  //   sortsStock();
  // }, [sortType, filterStocks]);

  useEffect(() => {
    setFilterStocks(products);
  }, [products]);

  // Apply filter when category/subCategory/search changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch,products]);

  // Apply sort when sortType changes
  useEffect(() => {
    let fsCopy = filterStocks.slice();

    switch (sortType) {
      case "low-high":
        setFilterStocks(fsCopy.sort((a, b) => a.currentBid - b.currentBid));
        break;
      case "high-low":
        setFilterStocks(fsCopy.sort((a, b) => b.currentBid - a.currentBid));
        break;
      default:
        // No sorting needed for "recent"
        break;
    }
  }, [sortType]);

  return (
    <div className={"flex gap-20 pt-10 border-t px-20"}>
      {/*  filter options*/}
      <div className={"min-w-60 w-[25%]"}>
        <p className={"my-2 text-xl flex items-center cursor-pointer gap-2"}>
          Filters
        </p>

        {/*  category filter*/}
        <div
          className={`border border-[#9f0012] pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"}`}
        >
          <p className={"mb-3 text-sm font-medium"}>Categories</p>
          <div className={"flex flex-col gap-2 text-sm font-light"}>
            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Home, Kitchen and garden"}
                onChange={toggleCategory}
              />
              Home, Kitchen and garden
            </p>

            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Electronics"}
                onChange={toggleCategory}
              />
              Electronics
            </p>

            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Jewelry & Watches"}
                onChange={toggleCategory}
              />
              Jewelry & Watches
            </p>
          </div>
        </div>

        {/*  subcategory filter*/}
        <div
          className={`border border-[#9f0012] pl-5 py-3 my-5 ${showFilter ? "" : "hidden"}`}
        >
          <p className={"mb-3 text-sm font-medium"}>Type</p>
          <div className={"flex flex-col gap-2 text-sm font-light"}>
            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Furniture"}
                onChange={toggleSubCategory}
              />
              Furniture
            </p>

            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Appliances"}
                onChange={toggleSubCategory}
              />
              Appliances
            </p>

            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Rings"}
                onChange={toggleSubCategory}
              />
              Rings
            </p>

            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Laptops and Desktops"}
                onChange={toggleSubCategory}
              />
              Laptops and Desktops
            </p>

            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Furniture set"}
                onChange={toggleSubCategory}
              />
              Furniture set
            </p>

            <p className={"flex gap-2"}>
              <input
                className={"w-3"}
                type={"checkbox"}
                value={"Cutlery"}
                onChange={toggleSubCategory}
              />
              Cutlery
            </p>
          </div>
        </div>
      </div>

      {/*right side*/}
      <div className={"flex-1"}>
        <div className={"flex justify-between text-base sm:text-2xl mb-4"}>
          <Title text1={"All"} text2={"Items"} />

          {/*  product sorting*/}
          <select
            onChange={e => setSortType(e.target.value)}
            className={"border-2 border-[#9f0012] text-sm px-2"}
          >
            <option value="recent">Sort by: Recent</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/*map products*/}
        <div className={"grid grid-cols-2 gap-4 gap-y-6"}>
          {filterStocks.map((stock, index) => (
            <StockItem
              key={stock._id}
              id={stock._id}
              image={stock.image}
              name={stock.name}
              openingBid={stock.openingBid}
              currentBid={stock.currentBid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Marketplace;
