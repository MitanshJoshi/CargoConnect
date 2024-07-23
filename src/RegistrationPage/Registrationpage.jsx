import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../BASE_URL";

const Registrationpage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      toast.error("Name is required", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }
    if (!email) {
      toast.error("Email is required", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }
    if (!phone) {
      toast.error("Phone number is required", {
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
    if (!country) {
      toast.error("Country is required", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }
    if (!state) {
      toast.error("State is required", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }
    if (!city) {
      toast.error("City is required", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/factoryOwner/addFactoryOwner`,
        {
          name: name,
          email: email,
          phoneNo: phone,
          password: password,
          country: country,
          state: state,
          city: city,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Registration failed");
      }
      localStorage.setItem("token", response.owner._id);
      toast.success("Registration Successful!", {
        position: "bottom-right",
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/addfactory",{state:{id:response.owner._id}});
      }, 2000);
    } catch (error) {
      toast.error("Registration failed", {
        position: "bottom-right",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md rounded-xl bg-white shadow-md">
      <div className="flex justify-center mb-2 text-2xl text-white items-center bg-purple-600 rounded-tl-lg rounded-tr-lg">
          <strong className='mr-1'>CargoConnect</strong><span><img width={65} className='flex items-center justify-center' src="/logo.gif" /></span>
        </div>
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <div className="space-y-3 p-8">
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-gray-600">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="country" className="block mb-1 text-gray-600">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-1 text-gray-600">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="city" className="block mb-1 text-gray-600">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-1 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registrationpage;
