import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { BASE_URL } from '../BASE_URL';
import { TbHorse } from 'react-icons/tb';

const LoginOwner = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    if (!email) {
      toast.error("Email is required", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }
    if (!password) {
      toast.error("Password is required", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/factoryOwner/ownerLogin`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      if (!response.status === 200) {
        throw new Error("Login failed");
      }
      localStorage.setItem("token", responseData.token);
      toast.success("Login Successful!", {
        position: "bottom-right",
        autoClose: 1000,
      });

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password!", {
        position: "bottom-right",
        autoClose: 1000,
      });
    }
  };

  const handleregnav=()=>{
    navigate("/registrationpage")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md space-y-3 rounded-lg bg-white shadow-md">
      <div className="flex w-full text-2xl justify-center mb-6 text-[25px] items-center text-white bg-purple-600 style rounded-tl-lg rounded-tr-lg">
          <strong className='mr-1'>CargoConnect</strong><span><img width={65} className='flex items-center justify-center' src="/logo.gif" /></span>
        </div>
        
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="space-y-4 p-8">
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
          <div className='flex items-center justify-between opacity-60 '>
            <span className='cursor-pointer'>Forgot Password?</span>
            <span className='cursor-pointer' onClick={handleregnav}>Register</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOwner;
