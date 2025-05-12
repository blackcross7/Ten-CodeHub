import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="group rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition duration-300 hover:scale-105 flex flex-col justify-between cursor-pointer ">
      <img src={course.img} alt={course.title} className="rounded mb-4" />
      <h3 className="font-bold text-lg">{course.title}</h3>
      <p>{course.level}</p>
      <div className="flex justify-between items-center mt-4 mb-4">
        <div className="flex items-center gap-2">
          <img src="https://cdn3.iconfinder.com/data/icons/seo-marketing-19/32/SEO-21-1024.png" alt=""
          className='w-4 h-4'
          />
        <p className="text-sm text-gray-500">{course.interested} interested Geeks</p>
        </div>
        
        <Link
          to={course.link}
          className="text-green-700 mt-2 inline-block group-hover:bg-green-600 group-hover:text-white px-4 py-2 rounded transition duration-200"
        >
          Explore now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
