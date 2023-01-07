import React from 'react'

const MainContainer = () => {
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center ">
        <p className="text-2xl font-semibold text-primary-8 uppercase relative before:absolute before:rounded-lg before:content before:w-[170px] before:h-1 before:bottom-0 before:left-9 before:bg-orange-500 transition-all ease-in-out mr-auto">
          Our Hot Dishes
        </p>
      </div>
    </section>
  );
}

export default MainContainer