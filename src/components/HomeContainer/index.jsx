import React from "react";
import rider from "../../assest/img/rider.jpeg";
import heroBg from "../../assest/img/heroBg.png";
import chicken from "../../assest/img/chicken.avif";
import I1 from "../../assest/img/i1.png";
import salad from "../../assest/img/salad.avif";
import Button from "../Button";

const HomeContainer = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
    >
      <div className="py-2 gap-6 flex-1 flex flex-col items-start justify-center">
        <div className="flex items-center gap-2 px-4 py-1 rounded-full justify-center bg-orange-100">
          <p className="text-base font-semibold text-orange-500">
            Dispatch Delivery
          </p>
          <div className="w-8 h-8  bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              className="w-full h-full object-contain"
              src={rider}
              alt="rider"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.25rem] p-0 m-0 font-bold tracking-tight  text-primary-8 ">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-gray-5 text-center md:text-left md:w-[80%]">
          Food delivery. It's what's on your mind whether it's a weekday lunch
          at the office or Friday family night at home. You want something hot &
          fresh, delicious and fast, delivered to your doorstep. Lucky for you,
          Ifeanyi is a restaurant with delivery options galore!
        </p>
        <div className="w-full md:w-auto">
          <Button type="button" label="Order Now" size="sm" />
        </div>
      </div>
      <div className="py-2 relative flex-1">
        <img
          className="h-[370px] w-full lg:w-auto lg:h-[650px] ml-auto top-0 right-16 rounded-xl"
          src={heroBg}
          alt="hero"
        />
        <div className="h-full w-full absolute top-0 left-0 px-32 py-4 flex items-center justify-center ">
          <div className="w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center">
            <img className="w-40 -mt-20 rounded-2xl" src={I1} alt="" />
            <p className="text-xl font-semibold text-primary-8 mt-4">
              IceCream
            </p>
            <p className="text-sm mt-2 text-center  text-lighttextgray font-semibold">
              Chocolate & Vanilla Flavour
            </p>
            <p className="text-sm font-semibold text-primary-8">
              {" "}
              <span className="text-xs text-red-600">₦ </span>5,000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
