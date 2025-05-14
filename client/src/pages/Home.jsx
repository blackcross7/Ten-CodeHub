import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Home = () => {
  const placeholders = [
    "CodeHub Courses",
    "Data Structures & Algorithms",
    "Web Development",
    "Complete Interview Preparation",
    "Must Do Coding Questions",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = placeholders[currentPlaceholderIndex];

    if (charIndex < currentText.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      const nextTextTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      }, 1000);

      return () => clearTimeout(nextTextTimeout);
    }
  }, [charIndex, currentPlaceholderIndex, placeholders]);

  const courses = [
    {
      title: 'DSA to Development: A Complete Guide',
      level: 'Beginner to Advance',
      interested: '558K+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/504/Mobile/Other/Course_DSA_to_Dev_1720846081.webp',
    },
    {
      title: 'JAVA Backend Development - Live',
      level: 'Intermediate and Advance',
      interested: '304K+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/227/Mobile/Other/Course_Backend_1720846992.webp',
    },
    {
      title: 'Tech Interview 101 -From DSA to System Design',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/458/Mobile/Other/Course_Tech_Int_1720846791.webp',
    },
    {
      title: 'Full Stack Development with React & Node JS - Live',
      level: 'Beginner to Advance',
      interested: '345k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152.webp',
    },
    {
      title: 'Java Programming Online Course [Complete Beginner to Advanced]',
      level: 'Beginner to Advance',
      interested: '291k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/CourseJavaProgrammin_1716371938.webp',
    },
    {
      title: 'C++ Programming Course Online - Complete Beginner to Advanced',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1723009538.webp',
    },
  ];

  const exploreItems = [
    { title: 'Data Structures and Algorithms', color: 'bg-[linear-gradient(#4caf97,#51c6ab)]' },
    { title: 'Practice DSA', color: 'bg-[linear-gradient(rgb(90,94,183),rgb(112,117,234))]' },
    { title: 'Web Development', color: 'bg-[linear-gradient(rgb(175,97,96),rgb(202,138,137))]' },
    { title: 'Python', color: 'bg-[linear-gradient(rgb(103,74,152),rgb(165,148,195))]' },
    { title: 'AI ML & Data Science', color: 'bg-[linear-gradient(rgb(37,135,156),rgb(84,195,219))]' },
    { title: 'Machine Learning', color: 'bg-[linear-gradient(rgb(69,114,182),rgb(120,158,218))]' },
    { title: 'System Design', color: 'bg-[linear-gradient(rgb(204,115,62),rgb(234,163,120))]' },
    { title: 'DevOps', color: 'bg-[linear-gradient(rgb(241,99,124),rgb(227,153,166))]' },
  ];

  const infoItems = [
    { title: 'Job for You', color: 'bg-[#ae84d1]' },
    { title: 'Hire With Us', color: 'bg-[#ae84d1]' },
    { title: 'Advertisement Required', color: 'bg-[#ae84d1]' },
    { title: 'Placement Time', color: 'bg-[#ae84d1]' },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-[#bbf7d0] to-[#ecfccb] to-[#fefce8] to-white">
      {/* Hero Section */}
      <motion.section
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image/Herobg4.jpeg')" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 text-white">
  Hello, What Do You Want To Learn?
</h1>
          <div className="w-full max-w-[90vw] sm:max-w-[70vw] p-4 mx-auto mb-6 relative">
            <input
              type="text"
              placeholder={displayedText}
              className="w-full border border-gray-300 px-4 py-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c4ecc5] font-semibold text-base sm:text-lg"
              onFocus={(e) => (e.target.placeholder = "")}
            />
            <img
              src="/assets/image/search-icon.gif"
              alt="Search"
              className="absolute top-1/2 right-5 sm:right-10 transform -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {[
              "Full Stack Live Classes",
              "DSA: Basic To Advanced Course",
              "Master DS & ML",
            ].map((label, idx) => (
              <Link
                to="#"
                key={idx}
                className="bg-white text-black border-2 border-gray-300 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-500 transition duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section
        className="py-12 px-4 w-full max-w-[90vw] md:w-[90vw] xl:w-[80vw] flex flex-col items-center mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
          <h2 className="text-xl my-2 sm:text-2xl font-bold">Courses</h2>
          <Link
            to="/course"
            className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            View All
          </Link>
        </div>

        {/* Slider for smaller screens */}
        <div className="flex xl:hidden overflow-x-auto gap-6 w-[100%] mt-10 pb-4 scrollbar-hide">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="min-w-[280px] flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">{course.level}</p>
                  <p className="text-blue-600 font-semibold">{course.interested} interested</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid for large screens and up */}
        <div className="hidden xl:grid gap-6 grid-cols-3 mt-10">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img src={course.img} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">{course.level}</p>
                  <p className="text-blue-600 font-semibold">{course.interested} interested</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Must Explore */}
      <motion.section
        className="mb-10 py-20 px-4 w-full max-w-[90vw] md:w-[90vw] xl:w-[80vw] flex flex-col mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Must Explore</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {infoItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`p-6 rounded-xl text-center ${item.color} hover:shadow-lg transition duration-300`}>
                <h3 className="text-white font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Explore Categories */}
      <motion.section
        className="py-10 px-10 w-[90vw] md:w-[90vw] xl:w-[80vw] flex flex-col mx-auto border border-gray-300 rounded-3xl shadow-xl"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          {exploreItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className={`p-6 rounded-xl ${item.color} relative overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105`}>
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <h3 className="text-white font-bold absolute bottom-4 left-4">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
