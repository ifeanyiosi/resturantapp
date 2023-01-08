import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { parse } from "postcss";
import { useStateValue } from "../../conntext/StateProvider";
import { actionType } from "../../conntext/reducer";
let items = [];

const CartItem = ({ item, flag, setFlag }) => {
  const [qty, setQty] = useState(1);
  const [{ cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

   useEffect(() => {
     items = cartItems;
   }, [qty, items]);
  
  return (
    <div className="w-full p-1 px-2 rounded-lg bg-primary-cartItem flex items-center gap-2">
      <img
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        src={item?.imageURL}
        alt=""
      />
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          ₦{parseFloat(item?.price) * qty}
        </p>
      </div>
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          onClick={() => updateQty("remove", item?.id)}
          whileTap={{ scale: 0.75 }}
        >
          <AiOutlineMinus className="text-gray-5" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-primary-8 text-gray-50 flex items-center justify-center">
          {qty}
        </p>
        <motion.div
          onClick={() => updateQty("add", item?.id)}
          whileTap={{ scale: 0.75 }}
        >
          <AiOutlinePlus className="text-gray-5" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
