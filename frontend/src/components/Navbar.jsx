import React, { useContext, useState } from "react";

import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContent";
import { toast } from "react-toastify";

const navItems = [
  { title: "HOME", path: "/" },
  { title: "ALL DOCTORS", path: "/doctors" },
  { title: "ABOUT", path: "/about" },
  { title: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const {token,setToken,userData} = useContext(AppContext)

const logout=()=>{
  setToken(false)
  localStorage.removeItem('token')
  toast.success("Logout!!")
}

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400"
    >
      <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className="w-44 cursor-pointer" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {navItems.map((val) => (
          <NavLink key={val.title} to={val.path}>
            <li className="py-1 hover:text-blue-500">{val.title}</li>
            <hr className="border-none outlin-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative ml-16">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute right-0 top-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hidden md:block hover:bg-gray-200 hover:text-primary"
          >
            Create Account
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
