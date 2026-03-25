import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, X } from 'lucide-react'; 
import { TbCircleTriangle } from "react-icons/tb";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-5 shadow-sm sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="flex items-center justify-center gap-2"><TbCircleTriangle className="text-orange-600 text-3xl md:text-4xl" />
      <h1 className="text-2xl md:text-3xl font-bold text-orange-600 tracking-tight">
        mavonorm
      </h1>
      </div>

      <div className="hidden md:flex gap-10 items-center">
        <button onClick={() => navigate("/")} className="text-gray-600 hover:text-orange-600 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer">Home</button>
        <button onClick={() => navigate("/services")} className="text-gray-600 hover:text-orange-600 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer">Services</button>
        <button onClick={() => navigate("/portfolio")} className="text-gray-600 hover:text-orange-600 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer">Portfolio</button>
        <button onClick={() => navigate("/about")} className="text-gray-600 hover:text-orange-600 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer">About</button>
        <button onClick={() => navigate("/contact")} className="text-gray-600 hover:text-orange-600 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer">Contact</button>
        <button className="bg-orange-600 text-sm font-bold uppercase tracking-wider text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors shadow-sm cursor-pointer"
        onClick={() => navigate('/contact')}>
          Get Quote
        </button>
      </div>
      
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-gray-900 hover:text-orange-600 transition-colors">
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-6 md:hidden z-50">
          <button onClick={() => { setIsOpen(false); navigate("/") }} className="text-gray-900 font-semibold text-lg hover:text-orange-600 transition-colors">Home</button>
          <button onClick={() => { setIsOpen(false); navigate("/services") }} className="text-gray-900 font-semibold text-lg hover:text-orange-600 transition-colors">Services</button>
          <button onClick={() => { setIsOpen(false); navigate("/portfolio") }} className="text-gray-900 font-semibold text-lg hover:text-orange-600 transition-colors">Portfolio</button>
          <button onClick={() => { setIsOpen(false); navigate("/about") }} className="text-gray-900 font-semibold text-lg hover:text-orange-600 transition-colors">About</button>
          <button onClick={() => { setIsOpen(false); navigate("/contact") }} className="text-gray-900 font-semibold text-lg hover:text-orange-600 transition-colors">Contact</button>
          <button onClick={() => { setIsOpen(false); navigate("/contact") }} className="bg-orange-600 font-bold uppercase tracking-wider text-white px-6 py-4 rounded-md hover:bg-gray-900 transition-colors w-full text-center mt-2">Get Quote</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
