import React, { useContext, useState } from "react";
import Title from "../components/Title.jsx";
import AuctionTotal from "../components/AuctionTotal.jsx";
import { assets } from "../assets/assets.js";
import { AuctionContext } from "../context/AuctionContext.jsx";

const PlaceOrder = () => {
  const [method, setMethod] = useState(["mpesa"]);
  const { navigate } = useContext(AuctionContext);

  return (
    <div className={"flex justify-between gap-100 pt-14 border-t px-20"}>
      {/*left side*/}
      <div className={"flex flex-col gap-4 w-[50%]"}>
        <div className={"text-xl my-3"}>
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className={"flex gap-3"}>
          <input
            type={"text"}
            placeholder={"First Name"}
            className={"border rounded py-1.5 px-3.5 w-full"}
          />
          <input
            type={"text"}
            placeholder={"Last Name"}
            className={"border  rounded py-1.5 px-3.5 w-full"}
          />
        </div>
        <input
          type={"email"}
          placeholder={"Email Address"}
          className={"border  rounded py-1.5 px-3.5 w-full"}
        />
        <input
          type={"text"}
          placeholder={"Street Address"}
          className={"border  rounded py-1.5 px-3.5 w-full"}
        />
        <div className={"flex gap-3"}>
          <input
            type={"text"}
            placeholder={"City"}
            className={"border rounded py-1.5 px-3.5 w-full"}
          />
          <input
            type={"text"}
            placeholder={"County"}
            className={"border  rounded py-1.5 px-3.5 w-full"}
          />
        </div>
        <div className={"flex gap-3"}>
          <input
            type={"number"}
            placeholder={"ZipCode"}
            className={"border rounded py-1.5 px-3.5 w-full"}
          />
          <input
            type={"text"}
            placeholder={"Country"}
            className={"border  rounded py-1.5 px-3.5 w-full"}
          />
        </div>
        <input
          type={"text"}
          placeholder={"Phone Number"}
          className={"border  rounded py-1.5 px-3.5 w-full"}
        />
      </div>

      {/*right side*/}
      <div className={"mt-8 w-[50%]"}>
        <div className={"mt-8 min-w-80"}>
          <AuctionTotal />
        </div>

        <div className={"mt-12"}>
          <Title text1={"Payment"} text2={"Methods"} />
          {/*payment method selection*/}
          <div className={"flex gap-3"}>
            <div
              onClick={() => setMethod("paystack")}
              className={
                "flex items-center gap-3 border p-2 px-3 cursor-pointer"
              }
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "paystack" ? "bg-green-400" : ""}`}
              ></p>
              <img
                src={assets.paystackLogo}
                alt={"Paystack Logo"}
                className={"h-5 mx-4"}
              />
            </div>

            <div
              onClick={() => setMethod("mpesa")}
              className={
                "flex items-center gap-3 border p-2 px-3 cursor-pointer"
              }
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "mpesa" ? "bg-green-400" : ""}`}
              ></p>
              <img
                src={assets.mpesaLogo}
                alt={"Mpesa Logo"}
                className={"h-5 mx-4"}
              />
            </div>
          </div>

          <div className={"w-full text-end mt-12"}>
            <button
              className={"bg-[#0A1460] text-white px-16 py-3 text-sm"}
              onClick={() => navigate("/settle-auction")}
            >
              Settle Auction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaceOrder;
