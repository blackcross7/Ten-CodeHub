import React from 'react';
import { Link } from 'react-router-dom';

const ExploreCard = ({ title, color, image }) => {
  return (
    <div
      className={`group p-4 shadow-md border w-[500px] h-[241px] flex flex-col justify-center items-center transition duration-300 ease-in-out hover:shadow-lg rounded-xl hover:scale-105 cursor-pointer ${color}`}
    >
      <h3 className="font-semibold text-xl text-white">{title}</h3>
      <img src={image} alt="Img Not Found" />
      <Link
        to="#"
        className="text-white text-sm border border-white px-4 py-2 rounded-full mt-4 transition duration-300 group-hover:text-slate-900 group-hover:bg-white"
      >
        View more ➜
      </Link>
    </div>
  );
};

export default ExploreCard;
