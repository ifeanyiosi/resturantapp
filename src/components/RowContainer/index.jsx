import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { TbCurrencyNaira } from "react-icons/tb";
import { useStateValue } from "../../conntext/StateProvider";

const RowContainer = ({ flag, data }) => {
  console.log(data);
  const [{ foodItems }, dispatch] = useStateValue();
  return (
    <div
      className={`w-full my-12  ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-[300px] my-12 md:w-[340px] bg-cardOverlay rounded-lg h-auto backdrop-blur-lg hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                className="w-44 -mt-8 drop-shadow-2xl"
                src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-572a5.appspot.com/o/Images%2F1673094566432-r4.png?alt=media&token=f677654a-2f0a-40d6-bbfe-2d4a759e8a51"
                alt=""
              />
              <motion.div
                wh
                className="w-8 h-8 rounded-full bg-pink-700 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingCart className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-primary-8 font-semibold text-base md:text-lg">
                Fried Rice
              </p>
              <div className="flex items-center gap-4">
                <p className="text-lg text-primary-8 font-semibold">
                  <span className="text-xs text-red-600">₦ </span>5000
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
