import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
import { categories } from "../../utils/data";
import RowContainer from "../RowContainer";
import { useStateValue } from "../../conntext/StateProvider";

const MainContainer = () => {
  const [filter, setFilter] = useState("soups");

  useEffect(() => {}, [filter]);

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center ">
        <p className="text-2xl font-semibold text-primary-8 uppercase relative before:absolute before:rounded-lg before:content before:w-[170px] before:h-1 before:bottom-0 before:left-9 before:bg-orange-500 transition-all ease-in-out mr-auto">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                onClick={() => setFilter(category.urlParamName)}
                key={category.id}
                className={`group  w-24 ${
                  filter === category.urlParamName ? "bg-red-500" : "bg-white"
                } hover:bg-red-500 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center `}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg  ${
                    filter === category.urlParamName ? "bg-white" : "bg-red-500"
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <IoFastFood
                    className={` ${
                      filter === category.urlParamName
                        ? "text-primary-8"
                        : "text-white"
                    } group-hover:text-gray-6`}
                  />
                </div>
                <p
                  className={`text-sm text-primary-8 ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-primary-8"
                  } group-hover:text-card`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
