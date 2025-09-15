import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/Yazz Club.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 w-full border-b-0 shadow-none z-10 bg-gradient-to-b from-gray-500 to-black h-20 px-6 flex items-center justify-between">
     
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="h-14 w-14 object-cover rounded-full"
        />
      </div>

        
      <div className="hidden md:flex gap-10">
        <a href="#" className="text-white text-lg font-semibold hover:text-gray-300 transition">
          Home
        </a>
        <a href="#work" className="text-white text-lg font-semibold hover:text-gray-300 transition">
          How it works
        </a>
        <a href="#plans" className="text-white text-lg font-semibold hover:text-gray-300 transition">
          Pricing
        </a>
        <a href="#footer" className="text-white text-lg font-semibold hover:text-gray-300 transition">
          Contact
        </a>
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <a href="#" className="text-white text-lg font-semibold hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="text-white text-lg font-semibold hover:text-gray-300 transition">
            How it works
          </a>
          <a href="#" className="text-white text-lg font-semibold hover:text-gray-300 transition">
            Pricing
          </a>
          <a href="#" className="text-white text-lg font-semibold hover:text-gray-300 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
