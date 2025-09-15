import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const onSubmitHandler = async event => {
    event.preventDefault();

    try {
      if (currentState === "Login") {
        // login
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (response.data.success) {
          toast.success("Login successful");
          localStorage.setItem("token", response.data.token);
          navigate("/auctions");
        } else {
          toast.error(response.data.message);
        }
      } else {
        // register
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (response.data.success) {
          toast.success("Registration successful");
          localStorage.setItem("token", response.data.token);
          setCurrentState("Login"); // optionally switch to login
          navigate("/auctions");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={
        "flex flex-col items-center w-[50%] m-auto border border-[#caccd9] border-t-0 bg-[#f3f4ff] gap-4 px-20 pb-10"
      }
    >
      <div className={"inline-flex items-center gap-2 mb-2 mt-10"}>
        <p className={"text-4xl radley-regular"}>{currentState}</p>
        <hr className={"border-none h-[1.5px] w-8 bg-[#9f0012]"} />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          required
          type={"text"}
          value={name}
          onChange={e => setName(e.target.value)}
          className={"w-[50%] px-3 py-2 border border-[#9f0012]"}
          placeholder={"Name"}
        />
      )}
      <input
        required
        type={"email"}
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={"w-[50%] px-3 py-2 border border-[#9f0012]"}
        placeholder={"Email"}
      />
      <input
        required
        type={"password"}
        value={password}
        onChange={e => setPassword(e.target.value)}
        className={"w-[50%] px-3 py-2 border border-[#9f0012]"}
        placeholder={"Password"}
      />
      <div className={"w-full flex justify-between text-sm mt-[-8px]"}>
        <p className={"cursor-pointer ml-[25%]"}>Forgot Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className={"cursor-pointer mr-[25%]"}
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className={"cursor-pointer mr-[25%]"}
          >
            Login Here
          </p>
        )}
      </div>
      <button className={"bg-[#0A1460] text-white font-light px-8 py-2 mt-4"}>
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};
export default Login;
