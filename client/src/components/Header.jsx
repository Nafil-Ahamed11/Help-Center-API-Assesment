import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets.js";


const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/card-form');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black ">
      <div className="flex items-center md:ml-12">
        <img src={assets.Logo} alt="Abstract Logo" className="w-10 md:w-12 mr-4" />
        <h1 className=" md:text-2xl font-bold text-white">Help Center</h1>
      </div>
      <button 
        onClick={handleButtonClick} 
        className="px-4 py-2 bg-black text-white border border-white rounded-md mr-12 cursor-pointer"
      >
        Submit a request
      </button>
    </header>
  );
};

export default Header;
