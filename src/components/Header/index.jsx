import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { Link } from "react-router-dom";
import avatar from "../../assest/img/avatar.jpeg";
import { useStateValue } from "../../conntext/StateProvider";
import { actionType } from "../../conntext/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [menu, setMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setMenu(!menu);
    }
  };
  const logout = () => {
    setMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-screen bg-primary-12 p-3 px-4 md:p-6 md:px-16">
      {/* desktop and tab */}
      <div className="hidden md:flex w-full  h-full items-center justify-between">
        <Link to="/" className="flex items-center justify-center">
          <span className="text-[24px] font-bold text-primary-8">
            Ifeanyi Restaurant App
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
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
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <HiShoppingCart className=" w-[30px] h-[30px] cursor-pointer" />
            <div className="w-5 h-5 absolute -right-2 -top-2 rounded-full bg-accent-3 flex items-center justify-center">
              <p className="text-sm text-white font-semibold">4</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              onClick={login}
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="w-10 rounded-full m-w-[40px] h-5 min-h-[40px] drop-shadow-xl cursor-pointer"
              alt="profile"
            />
            {menu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-1 shadow-xl rounded-lg absolute flex flex-col top-12 right-0"
              >
                {user && user.email === "ifeanyi.osi.okeke@gmail.com" && (
                  <Link to="/createItem">
                    <p
                      onClick={() => setMenu(false)}
                      className="px-4 py-2  flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-primary-8 text-base"
                    >
                      New Item <IoMdAdd />
                    </p>
                  </Link>
                )}

                <p className="px-4 py-2  flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-primary-8 text-base">
                  Log Out <IoLogOutOutline />{" "}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=" md:hidden flex  justify-between items-center h-full">
        <div className="relative flex items-center justify-center">
          <HiShoppingCart className=" w-[30px] h-[30px] cursor-pointer" />
          <div className="w-5 h-5 absolute -right-2 -top-2 rounded-full bg-accent-3 flex items-center justify-center">
            <p className="text-sm text-white font-semibold">4</p>
          </div>
        </div>
        <Link to="/" className="flex items-center justify-center">
          <span className="text-[16px] font-bold text-primary-8">
            Ifeanyi Resturant App
          </span>
        </Link>
        <div className="relative">
          <motion.img
            onClick={login}
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="w-10 rounded-full m-w-[40px] h-5 min-h-[40px] drop-shadow-xl cursor-pointer"
            alt="profile"
          />
          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-1 shadow-xl rounded-lg absolute flex flex-col top-12 right-0"
            >
              {user && user.email === "ifeanyi.osi.okeke@gmail.com" && (
                <Link to="/createItem">
                  <p
                    className="px-4 py-2  flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-primary-8 text-base "
                    onClick={() => setMenu(false)}
                  >
                    New Item <IoMdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col  ">
                <li
                  onClick={() => setMenu(false)}
                  className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2"
                >
                  Home
                </li>
                <li
                  onClick={() => setMenu(false)}
                  className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2"
                >
                  Menu
                </li>
                <li
                  onClick={() => setMenu(false)}
                  className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2"
                >
                  About Us
                </li>
                <li
                  onClick={() => setMenu(false)}
                  className="text-[16px] text-primary-9 cursor-pointer hover:text-primary-7 duration-100 transition-all ease-in-out hover:bg-slate-200 px-4 py-2"
                >
                  Service
                </li>
              </ul>

              <p
                onClick={logout}
                className="px-4 py-2 m-2 p-2 rounded-md shadow-md  justify-center bg-gray-300 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-primary-8 text-base"
              >
                Log Out <IoLogOutOutline />{" "}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
