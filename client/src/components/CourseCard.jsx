import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="group w-[200px] sm:w-[300px] lg:w-[320px] h-full bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer">
      {/* Image */}
      <img
        src={course.img}
        alt={course.title}
        className="rounded mb-3 h-[120px] w-full object-cover hidden md:block"
      />

      {/* Title and Level */}
      <div className='py-4 flex flex-col gap-4'>
        <h3 className="font-bold text-black text-lg leading-snug mb-1 min-h-[20px] line-clamp-5 md:line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600">{course.level}</p>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-4">
        {/* Left side: Interested text */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn3.iconfinder.com/data/icons/seo-marketing-19/32/SEO-21-1024.png"
            alt=""
            className="w-4 h-4"
          />
          <p className="text-sm text-gray-500">{course.interested} interested Geeks</p>
        </div>

        {/* Right side: Button */}
        <Link
          to={course.link}
          className="text-green-700 group-hover:bg-green-600 group-hover:text-white px-3 py-2 rounded text-center text-xs font-semibold transition duration-200 w-fit"
        >
          Explore now
        </Link>
      </div>

    </div>
  );
};

export default CourseCard;
