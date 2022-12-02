import React from "react";
import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img  className="w-[500px] mx-auto py-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            voluptates consequatur quas ipsam provident enim, earum magni
            accusamus delectus necessitatibus nam voluptatibus fuga, eos velit
            numquam dignissimos, veniam deserunt dolores.
          </p>
          <button className="bg-black rounded-lg font-medium text-[#00df9a] mx-auto py-3 my-6 w-[200px]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
