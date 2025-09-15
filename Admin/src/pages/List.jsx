import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App.jsx";
import { toast } from "react-toastify";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList=async ()=>{
    try {
      const response=await axios.get(backendUrl+"/api/product/list");
      if(response.data.success){
        setList(response.data.products);
      }else {
        toast.error(response.data.message);
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }

  const removeProduct=async (id)=>{
    try {
      const response=await axios.post(backendUrl+"/api/product/remove", { id },{headers:{token}});

      if (response.data.success){
        toast.success(response.data.message);
        await fetchList();
      }else {
        toast.error(response.data.message);
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <>
      <p className={"mb-2"}>All Products List</p>
      <div className={"flex flex-col gap-2"}>
        {/*list table title*/}
        <div className="grid grid-cols-[1fr_3fr_2fr_1fr_1fr_0.5fr] items-center py-2 px-2 border bg-[#f3f4ff] text-sm font-medium">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Opening Bid</b>
          <b>Current Bid</b>
          <b className="text-center">Action</b>
        </div>

        {/*product list*/}
        {list.map((stock, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_2fr_1fr_1fr_0.5fr] items-center gap-2 py-2 px-2 border text-sm"
          >
            <img className="w-12 h-12 object-cover rounded" src={stock.image[0]} alt="product" />
            <p>{stock.name}</p>
            <p>{stock.category}</p>
            <p>{currency}{stock.openingBid}</p>
            <p>{currency}{stock.currentBid}</p>
            <p onClick={()=>removeProduct(stock._id)} className="text-center text-red-600 hover:text-red-800 cursor-pointer font-bold">X</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default List;
