import React, { useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import axios from "axios";
import { backendUrl, currency } from "../App.jsx";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image1,setImage1] = useState(false);

  const [name,setName] = useState("");
  const [details, setDetails] = useState("");
  const [openingBid,setOpeningBid] = useState("");
  const [currentBid,setCurrentBid] = useState("");
  const [category,setCategory] = useState("Home, Kitchen and garden");
  const [subCategory,setSubCategory] = useState("Furniture");
  const [highestBid,setHighestBid] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("details", details);
      formData.append("openingBid", openingBid);
      formData.append("currentBid", currentBid);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("highestBid", highestBid);

      image1&&formData.append("image1", image1);

      const response = await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}});

      if (response.data.success) {
        toast.success(response.data.message);
        setName("")
        setDetails(response.data.data)
        setImage1(false);
        setOpeningBid("")
        setCurrentBid("")
      }else {
        toast.error(response.data.message);
      }
    }catch(error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className={"flex flex-col w-full items-start gap-3"}>
      <div>
        <p className={"mb-2"}>Upload Image</p>
        <div className={""}>
          <label htmlFor="image1">
            {!image1 ? (
              <MdOutlineCloudUpload className="text-7xl text-gray-500" />
            ) : (
              <img
                className="w-20 h-20 object-cover"
                src={URL.createObjectURL(image1)}
                alt="preview"
              />
            )}
            <input onChange={(e)=>setImage1(e.target.files[0])} type={"file"} id={"image1"} hidden/>
          </label>
        </div>
      </div>

      <div className={"w-full"}>
        <p className={"mb-2"}>Product name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className={"w-full max-w-[500px] px-3 py-2"} type={"text"} placeholder={"Type here..."}  required />
      </div>

      <div className={"w-full"}>
        <p className={"mb-2"}>Product details</p>
        <textarea onChange={(e)=>setDetails(e.target.value)} value={details} className={"w-full max-w-[500px] px-3 py-2"} type={"text"} placeholder={"Type here..."} required  />
      </div>

      <div className={"flex gap-2 w-full"}>
        <div>
          <p className={"mb-2"}>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className={"w-full px-3 py-2"}>
            <option value={"HomeKitchenGarden"}>Home, Kitchen and Garden</option>
            <option value={"JewelryWatches"}>Jewelry & Watches</option>
            <option value={"Electronics"}>Electronics</option>
          </select>
        </div>

        <div>
          <p className={"mb-2"}>Product Sub-Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className={"w-full px-3 py-2"}>
            <option value={"Furniture"}>Furniture</option>
            <option value={"Appliances"}>Appliances</option>
            <option value={"Rings"}>Rings</option>
            <option value={"LaptopsDesktops"}>Laptops and Desktops</option>
            <option value={"FurnitureSet"}>Furniture set</option>
            <option value={"Cutlery"}>Cutlery</option>
          </select>
        </div>
      </div>

      <div className={"flex gap-2 w-full"}>
        <div>
          <p className={"mb-2"}>Product Opening Bid</p>
          <input onChange={(e)=>setOpeningBid(e.target.value)} value={openingBid} type={"Number"} placeholder={"0.00"} className={"px-3 py-2 w-full h-9"} required/>
        </div>

        <div>
          <p className={"mb-2"}>Product Current Bid</p>
          <input onChange={(e)=>setCurrentBid(e.target.value)} value={currentBid} type={"Number"} placeholder={"0.00"} className={"px-3 py-2 w-full h-9"}/>
        </div>
      </div>

      <div className={"flex gap-2 mt-2"}>
        <input onChange={()=>setHighestBid(prev=>!prev)} checked={highestBid} type={"checkbox"} id={"highestBid"}/>
        <label className={"cursor-pointer"} htmlFor={"highestBid"}>Add to highest bid</label>
      </div>

      <button type={"submit"} className={"w-28 py-3 mt-4 bg-[#0A1460] text-white"}>Add</button>
    </form>
  );
};
export default Add;
