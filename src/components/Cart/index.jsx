import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useStateValue } from "../../conntext/StateProvider";
import Button from "../Button";
import { actionType } from "../../conntext/reducer";
import emptycart from "../../assest/img/emptyCart.svg";
import CartItem from "../CartItem";

const Cart = () => {
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className=" fixed top-0 right-0 w-full md:w-[375px] h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div onClick={showCart} whileTap={{ scale: 0.75 }}>
          <BsArrowLeft className="text-primary-8 text-3xl" />
        </motion.div>
        <p className="text-primary-8 text-lg font-semibold">Cart</p>
        <motion.p
          onClick={clearCart}
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-primary-8 text-base"
        >
          Clear <IoRefreshCircleOutline />{" "}
        </motion.p>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-primary-8 rounded-t-[2rem] flex flex-col">
          <div className="w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* Cart Item */}
            {cartItems &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>
          {/* Cart Total */}
          <div className="w-full flex-1 bg-primary-8 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">₦{tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">₦1500</p>
            </div>
            {/* Divider */}
            <div className="w-full border-b border-gray-600 my-2"></div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold"> Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                ₦{tot + 2.5}
              </p>
            </div>
            {user ? (
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="w-full p-2 rounded-full"
              >
                <Button type="button" label="Check Out" />
              </motion.div>
            ) : (
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="w-full p-2 rounded-full"
              >
                <Button type="button" label="Login" />
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={emptycart} className="w-[300px]" alt="" />
          <p className="text-xl text-gray-5 font-semibold">
            Add Items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
