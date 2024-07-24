import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../BASE_URL";
import { TbHorse } from "react-icons/tb";
import { FaEye, FaEyeDropper, FaEyeSlash, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
      <div className="min-h-[screen]">
        <div className="flex justify-between p-3 h-[75px] items-center text-white bg-gray-800 fixed top-0 left-0 w-full z-10">
          <div className="flex text-2xl justify-center text-[25px] items-center rounded-tl-lg rounded-tr-lg ml-[40px]">
            <strong className="mr-1 cursor-pointer">CargoConnect</strong>
            <span>
              <img width={65} className="flex items-center justify-center" src="/logo.gif" />
            </span>
          </div>
          <ul className="flex justify-center items-center list-none gap-20 mr-[40px] font-[600]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li>
              <button
                onClick={handleLogin}
                className="flex justify-center items-center w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Login
              </button>
            </li>
          </ul>
        </div>

        <div className="relative pt-[75px]">
          <img className="opacity-70 w-full h-screen object-cover" src="/truck.jpg" />
          <div className="absolute text-[40px] text-black right-[80px] top-[45%]">
            <div>
              <div className="flex text-2xl justify-center text-[60px] items-center rounded-tl-lg rounded-tr-lg ml-[40px]">
                <strong className="mr-1">CargoConnect</strong>
                <span>
                  <img width={65} className="flex items-center justify-center" src="/logo.gif" />
                </span>
              </div>
              <div className="flex items-center justify-center text-[20px] mt-1">
                <strong>Send Your Cargo Across The Globe</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />



      <div className="min-h-[screen] bg-black text-white">
        <div className="flex flex-col text-4xl ml-[40px] pt-10 pb-10">
        <span><strong>The Service</strong></span>
        <span>That Looks Ahead For You</span>
        </div>
        <div className="flex items-center pb-16 pt-5 w-[96%] justify-around gap-28 mx-auto">
        <div className="w-1/3">
            <img className="w-full h-[250px] rounded-lg" src="/facilities1.jpg"></img>
            <p className="text-3xl my-3">Reliability</p>
           <p className="text-xl font-[600] opacity-80">Speedy, effective, and reliable services designed to suit the specific needs of your business.</p> 
        </div>
        <div className="w-1/3">
            <img className="w-full h-[250px] rounded-lg" src="/parts.jpg"></img>
            <p className="text-3xl my-3">Geniune Parts</p>
            <p  className="text-xl font-[600] opacity-80">Certified parts engineered with precision to provide you with enhanced and unmatched performance.</p>
        </div>
        <div className="w-1/3">
            <img className=" h-[250px] rounded-lg" src="/connect.jpg"></img>
            <p className="text-3xl my-3">Connevtivity</p>
            <p  className="text-xl font-[600] opacity-80">We, at CargoConnect, believe that ‘Knowing is Everything’ when it comes to the growth of a business.</p>
        </div>
        </div>
      </div>
      <hr/>



      <div className="min-h-[screen] flex items-center bg-black text-black relative">
        <div className="w-[50%] my-5">
          <div className="flex gap-3 items-center justify-center ">
            <img className="w-[350px] h-[250px] rounded-lg" src="/cargo9.webp"></img>
            <img className="w-[350px] h-[250px] rounded-lg" src="/cargo5.jpg"></img>
          </div>
          <div className="flex gap-3 mt-3 items-center justify-center">
            <img className="w-[350px] h-[250px] rounded-lg" src="/cargo8.jpg"></img>
            <img className="w-[350px] h-[250px] rounded-lg" src="/cargo4.webp"></img>
          </div>
        </div>
        <div className="text-white w-[50%] flex flex-col justify-center items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">About CargoConnect</h2>
          </div>
          <div className="text-xl font-[600] p-5">
            CargoConnect is your one-stop solution for all your cargo transportation needs. We connect truck agencies with factories requiring transportation, ensuring efficient and reliable service across the globe.
            <div className="mt-3">
              At CargoConnect, we understand the complexities and challenges involved in cargo transportation. Our platform simplifies the process by providing a seamless interface for factories and truck agencies to connect and collaborate.
            </div>
          </div>
        </div>
      </div>
      <hr />

    

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">CargoConnect</h3>
            <p>Your reliable partner for all cargo transportation needs.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p>123 Cargo Street, City, Country</p>
            <p>Email: info@cargoconnect.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-indigo-600"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-indigo-600"><FaTwitter size={24} /></a>
              <a href="#" className="text-white hover:text-indigo-600"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
