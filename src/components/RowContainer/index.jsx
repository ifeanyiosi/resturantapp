import React, { useEffect, useRef } from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../../conntext/StateProvider";

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  // const [{ foodItems }, dispatch] = useStateValue();
  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-[300px] flex items-center flex-col justify-between p-2 h-[200px] min-w-[300px] md:min-w-[340px] my-12 md:w-[340px]  bg-cardOverlay rounded-lg backdrop-blur-lg hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                className="w-44 -mt-8 drop-shadow-2xl object-cover"
                src={item?.imageURL}
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
                {item?.title}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-lg text-primary-8 font-semibold">
                  <span className="text-xs text-red-600">₦ </span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
