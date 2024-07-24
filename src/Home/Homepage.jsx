import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { BASE_URL } from '../BASE_URL';
import { TbHorse } from 'react-icons/tb';
import { Navigate } from 'react-router-dom';
import { FaEye, FaEyeDropper, FaEyeSlash } from 'react-icons/fa';




const Homepage = () => {

  const navigate=useNavigate()

  const handlelogin=()=>{
    navigate("/")
  }
  return (
    <>
<div className='min-h-[screen]'>
    <div className='flex justify-between p-3 h-[75px] items-center text-white bg-black fixed top-0 left-0 w-full z-10'>
        <div className="flex text-2xl justify-center text-[25px] items-center rounded-tl-lg rounded-tr-lg ml-[40px]">
            <strong className='mr-1'>CargoConnect</strong>
            <span>
                <img width={65} className='flex items-center justify-center' src="/logo.gif" />
            </span>
        </div>
        <ul className='flex justify-center items-center list-none gap-20 mr-[40px] font-[600]'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
                <button onClick={handlelogin} className="flex justify-center items-center w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Login
                </button>
            </li>
        </ul>
    </div>
    <div className='relative pt-[75px]'> 
        <img className='opacity-70' src="/truck.jpg" />
        <div className='absolute text-[40px] text-black right-[80px] top-[45%]'>
            <div>
                <div className="flex text-2xl justify-center text-[60px] items-center rounded-tl-lg rounded-tr-lg ml-[40px]">
                    <strong className='mr-1'>CargoConnect</strong>
                    <span>
                        <img width={65} className='flex items-center justify-center' src="/logo.gif" />
                    </span>
                </div>
                <div className='flex items-center justify-center text-[20px] mt-1'>
                    <strong>Send Your Cargo Across The Globe</strong>
                </div>
            </div>
        </div>
    </div>
</div>
</>

  )
}

export default Homepage
