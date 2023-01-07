import React from "react";
import { motion } from "framer-motion";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import HomeContainer from "../HomeContainer";
import RowContainer from "../RowContainer";
import { useStateValue } from "../../conntext/StateProvider";

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  return (
    <div className="gw-full h-auto flex flex-col items-center justify-center overflow-x-hidden">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold text-primary-8 uppercase relative before:absolute before:rounded-lg before:content before:w-[170px] before:h-1 before:bottom-0 before:left-0 before:bg-orange-500 transition-all ease-in-out">
            Our Fresh & Healthy Fruits
          </p>
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <AiOutlineLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            >
              <AiOutlineRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} data={foodItems?.filter(n => n.category === 'fruits')} />
      </section>
    </div>
  );
};

export default MainContainer;
