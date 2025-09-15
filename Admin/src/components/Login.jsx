import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App.jsx";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const  onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response=await axios.post(backendUrl+"/api/user/admin",{email,password});
      if (response.data.success){
        setToken(response.data.token);
      }else {
        toast.error(response.data.message)
      }
    }catch(error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className={"min-h-screen flex items-center justify-center w-full"}>
      <div className={"shadow-md rounded-lg px-8 py-6 max-w-md bg-white"}>
        <h1 className={"text-2xl font-bold mb-4 text-center"}>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className={"mb-3 min-w-72"}>
            <p className={"text-sm font-medium mb-2 text-[#9f0012]"}>Email Address</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className={"rounded-md w-full px-3 py-2 border border-[#9f0012] outline-none"} type={"email"} placeholder={"p.ndungu.kara@gmail.com"} required/>
          </div>
          <div>
            <p className={"text-sm font-medium mb-2 text-[#9f0012]"}>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className={"rounded-md w-full px-3 py-2 border border-[#9f0012] outline-none"} type={"password"} placeholder={"adm!n"} required/>
          </div>
          <button type="submit" className={"mt-2 w-full py-2 px-4 rounded-md bg-[#0A1460] text-white"}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
