import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div>
      <div className={"flex gap-20 my-10 mt-30 text-sm px-20"}>
        <div className={"flex flex-col text-center items-center w-[40%]"}>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p>
            Your reliable, transparent and secure online auction store. Feel
            free to look around and participate in whatever sale grabs your
            interest
          </p>
        </div>

        <div className={"w-[30%]"}>
          <p className={"text-xl font-medium mb-5"}>PWM Auctioneers</p>
          <ul className={"flex flex-col gap-1"}>
            <li>Home</li>
            <li>About</li>
            <li>Privacy policy</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={"w-[30%]"}>
          <p className={"text-xl font-medium mb-5"}>Get In Touch</p>
          <ul className={"flex flex-col gap-1"}>
            <li>+254742978239</li>
            <li>p.ndungu.kara@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className={"py-5 text-sm text-center"}>
          Copyright 2025 @ p.ndungu.kara@gmail.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
