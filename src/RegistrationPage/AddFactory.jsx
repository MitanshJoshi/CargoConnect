import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../BASE_URL';
import { CgLogIn } from 'react-icons/cg';

const AddFactory = () => {
  const [factoryOwnerId, setFactoryOwnerId] = useState('');
  const [factoryName, setFactoryName] = useState('');
  const [address, setAddress] = useState('');
  const [GST_no, setGST_no] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [factoryType, setFactoryType] = useState('');
  const [logo, setLogo] = useState(null);
  const location = useLocation();

  const {_id} = 231312313;
  // console.log(location.id);

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!factoryName || !address || !GST_no || !country || !state || !city || !factoryType || !logo) {
      toast.error('All fields are required', {
        position: 'bottom-right',
        autoClose: 1000,
      });
      return;
    }

    const formData = new FormData();
    formData.append('factoryOwnerId', _id);
    formData.append('factoryName', factoryName);
    formData.append('address', address);
    formData.append('GST_no', GST_no);
    formData.append('country', country);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('Logo', logo);
    formData.append('factoryType', factoryType);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/factory/addFactory`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to add factory');
      }

      toast.success('Factory added successfully!', {
        position: 'bottom-right',
        autoClose: 1000,
      });
    } catch (error) {
      toast.error('Failed to add factory', {
        position: 'bottom-right',
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-6">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex w-full text-2xl justify-center mb-6 text-[25px] items-center text-white bg-purple-600 style rounded-tl-lg rounded-tr-lg">
          <strong className='mr-1'>CargoConnect</strong><span><img width={65} className='flex items-center justify-center' src="/logo.gif" /></span>
        </div>
         <h1 className="text-2xl font-bold text-center">Add Factory</h1>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="factoryName" className="block text-gray-600 mb-1">Factory Name</label>
              <input
                type="text"
                id="factoryName"
                value={factoryName}
                onChange={(e) => setFactoryName(e.target.value)}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-600 mb-1">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="GST_no" className="block text-gray-600 mb-1">GST Number</label>
              <input
                type="text"
                id="GST_no"
                value={GST_no}
                onChange={(e) => setGST_no(e.target.value)}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-600 mb-1">Country</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-600 mb-1">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-600 mb-1">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="factoryType" className="block text-gray-600 mb-1">Factory Type</label>
              <input
                type="text"
                id="factoryType"
                value={factoryType}
                onChange={(e) => setFactoryType(e.target.value)}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="logo" className="block text-gray-600 mb-1">Logo</label>
              <input
                type="file"
                id="logo"
                onChange={handleLogoChange}
                className="w-full px-4 py-1 border rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-1 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Add Factory
            </button>
            <div className='flex justify-center items-center opacity-60'>
              You can add more factories after successful registration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFactory;
