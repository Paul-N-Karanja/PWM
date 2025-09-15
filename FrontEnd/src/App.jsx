import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Stock from "./pages/Stock.jsx";
import Login from "./pages/Login.jsx";
import CompletePayment from "./pages/CompletePayment.jsx";
import Auctions from "./pages/Auctions.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Searchbar from "./components/Searchbar.jsx";
import { ToastContainer } from "react-toastify";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import SettleAuction from "./pages/SettleAuction.jsx";

const App = () => {
  return (
    // <div className={"px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"}>
    <div className={""}>
      <ToastContainer />
      <NavBar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stock/:stockId" element={<Stock />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/settle-auction" element={<SettleAuction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/completepayment" element={<CompletePayment />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
