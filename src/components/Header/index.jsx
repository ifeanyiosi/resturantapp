import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { motion } from "framer-motion";
import avatar from "../../assest/img/avatar.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen bg-primary-12 p-6 px-16">
      {/* desktop and tab */}
      <div className="hidden md:flex w-full  h-full items-center justify-between">
        <Link to="/" className="flex items-center justify-center">
          <span className="text-[24px] font-bold text-primary-8">
            Ifeanyi Resturant App
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              Home
            </li>
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              Menu
            </li>
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              About Us
            </li>
            <li className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out ">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <HiShoppingCart className=" w-[30px] h-[30px] cursor-pointer" />
            <div className="w-5 h-5 absolute -right-2 -top-2 rounded-full bg-accent-3 flex items-center justify-center">
              <p className="text-sm text-white font-semibold">4</p>
            </div>
          </div>

          <motion.img
            whileTap={{ scale: 0.6 }}
            src={avatar}
            className="w-10 rounded-full m-w-[40px] h-5 min-h-[40px] drop-shadow-xl cursor-pointer"
            alt="profile"
          />
        </div>
      </div>

      {/* mobile */}
      <div className=" md:hidden flex bg-blue-600 h-full">no</div>
    </header>
  );
};

export default Header;
