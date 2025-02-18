import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold space-x-4">
        <Link to="/dashboard" className={`text-white hover:underline ${location.pathname === "/dashboard" ? "active" : ""}`}>
          Dashboard
        </Link>
        <Link to="/manager" className={`text-white hover:underline ${location.pathname === "/manager" ? "active" : ""}`}>
          Manager
        </Link>
        <Link to="/analysis" className={`text-white hover:underline ${location.pathname === "/analysis" ? "active" : ""}`}>
          Analysis
        </Link>
        <Link to="/3-d" className={`text-white hover:underline ${location.pathname === "/3-d" ? "active" : ""}`}>
          Custom 3D
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/settings" className={`text-white hover:underline ${location.pathname === "/settings" ? "active" : ""}`}>
          Settings
        </Link>
        <Link to="/logout" className="text-red-400 hover:text-red-600">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
