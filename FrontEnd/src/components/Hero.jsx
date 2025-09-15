import React from "react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <div className={"px-20"}>
      <div className={"flex flex-col border border-[#caccd9] border-t-0"}>
        <div className={"flex h-80"}>
          {/*    hero left side*/}
          <div
            className={
              "w-[60%] flex items-center justify-center py-10 bg-[#f3f4ff]"
            }
          >
            <div className={"text-black"}>
              <div className={"flex items-center gap-2"}>
                <p className={"w-10 h-[2px] bg-[#9f0012]"}></p>
                <p className={"font-medium text-sm"}>Highest bids</p>
              </div>
              <h1 className={"text-4xl leading-relaxed radley-regular"}>
                Trade Of The Day
              </h1>
              <div className={"flex items-center gap-2"}>
                <p className={"font-semibold text-sm"}>View Now</p>
                <p className={"w-10 h-[1px] bg-[#9f0012]"}></p>
              </div>
            </div>
          </div>

          {/*    hero right side*/}
          <img
            src={assets.vintageCabinet}
            alt="Vintage Cabinet"
            className={"w-[40%] h-full"}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
