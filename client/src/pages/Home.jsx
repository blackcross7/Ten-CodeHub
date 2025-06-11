import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import CourseCard from '../components/CourseCard';
import OtherCards from '../components/OtherCards';
import Typewriter from 'typewriter-effect';

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
      link: "/dsa"
    },
    {
      title: 'JAVA Backend Development - Live',
      level: 'Intermediate and Advance',
      interested: '304K+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/227/Mobile/Other/Course_Backend_1720846992.webp',
      link: "/java"
    },
    {
      title: 'Tech Interview 101 -From DSA to System Design',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/458/Mobile/Other/Course_Tech_Int_1720846791.webp',
      link: "/practice"
    },
    {
      title: 'Full Stack Development with React & Node JS - Live',
      level: 'Beginner to Advance',
      interested: '345k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152.webp',
      link: "/java"
    },
    {
      title: 'Java Programming Online Course [Complete Beginner to Advanced]',
      level: 'Beginner to Advance',
      interested: '291k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/CourseJavaProgrammin_1716371938.webp',
      link: "/java"
    },
    {
      title: 'C++ Programming Course Online - Complete Beginner to Advanced',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1723009538.webp',
      link: "/cpp"
    },
  ];

  const exploreItems = [
    {
      title: 'Data Structures and Algorithms',
      color: 'bg-[linear-gradient(#4caf97,#51c6ab)]',
      img: '/assets/image/DSA.png',
      link: '/dsa'
    },
    {
      title: 'Practice DSA',
      color: 'bg-[linear-gradient(rgb(90,94,183),rgb(112,117,234))]',
      img: '/assets/image/Practice dsa.png',
      link: '/practice'
    },
    {
      title: 'Web Development',
      color: 'bg-[linear-gradient(rgb(175,97,96),rgb(202,138,137))]',
      img: '/assets/image/Webdev.png',
      link: '/webdev'
    },
    {
      title: 'Python',
      color: 'bg-[linear-gradient(rgb(103,74,152),rgb(165,148,195))]',
      img: '/assets/image/Python.png',
      link: '/python'
    },
    {
      title: 'AI ML & Data Science',
      color: 'bg-[linear-gradient(rgb(37,135,156),rgb(84,195,219))]',
      img: '/assets/image/AIML.png',
      link: '/ml'
    },
    {
      title: 'Machine Learning',
      color: 'bg-[linear-gradient(rgb(69,114,182),rgb(120,158,218))]',
      img: '/assets/image/ML.png',
      link: '/ml'
    },
    {
      title: 'System Design',
      color: 'bg-[linear-gradient(rgb(204,115,62),rgb(234,163,120))]',
      img: '/assets/image/system.png',
      link: '/systemdesign'
    },
    {
      title: 'DevOps',
      color: 'bg-[linear-gradient(rgb(241,99,124),rgb(227,153,166))]',
      img: '/assets/image/devops.png',
      link: '/devops'
    },
  ];

  const infoItems = [
    { title: 'Job for You', color: 'bg-[#ae84d1]' },
    { title: 'Hire With Us', color: 'bg-[#ae84d1]' },
    { title: 'Advertisement Required', color: 'bg-[#ae84d1]' },
    { title: 'Placement Time', color: 'bg-[#ae84d1]' },
  ];

  return (
    <div className="font-sans min-h-screen py-24" style={{ background: "#000000", height: "100%" }}>
      {/* Hero Section */}
      <motion.section
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image/Herobg4.jpeg')" }}
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 text-white">
            <Typewriter
              options={{
                strings: ["Hello, What Do You Want To Learn?"],
                autoStart: true,
                loop: true,
              }}
            />
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

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm sm:text-base"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >  {[
    { label: "Full Stack Live Classes", link: "/java" },
    { label: "DSA: Basic To Advanced Course", link: "/dsa" },
    { label: "Master DS & ML", link: "/ml" }
  ].map((item, idx) => (
    <Link
      to={item.link}
      key={idx}
      className="bg-white text-black border-2 border-gray-300 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-500 transition duration-300"
    >
      {item.label}
    </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section
        className="pt-4 px-4 md:pt-10 md:px-10 mb-20 w-full max-w-[78vw] flex flex-col items-center mx-auto border-2 border-red-600 rounded-3xl shadow-xl"
        style={{
          maxWidth: "1200px",
          background: "#000000",
          marginTop: "2rem"
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-center w-full  lg:max-w-[65vw] px-2 sm:px-4 md:px-6 mx-auto gap-4">
          <h2 className="text-xl my-2 sm:text-2xl font-bold text-white">Courses</h2>
          <Link to="/course" className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300 hover:text-black text-white">
            View All
          </Link>
        </div>

        <div className="flex xl:hidden overflow-x-auto snap-x snap-mandatory w-full mt-10 py-8 scrollbar-hide">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="snap-start shrink-0  px-4"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        <div className="hidden xl:grid gap-6 grid-cols-3 mt-10 p-6">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full"
            >
              <CourseCard key={idx} course={course} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Must Explore */}
      <motion.section
        className="pt-2 pb-5 px-4 w-full max-w-[85vw] md:max-w-[80vw] xl:max-w-[75vw] flex flex-col mx-auto"
        style={{ background: "#000000" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg sm:text-2xl text-center font-bold mb-4 text-white">Must Explore</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {infoItems.map((items, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <OtherCards title={items.title} color={items.color} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Explore Categories */}
      <motion.section
        className="pt-2 px-6 md:pt-10 md:px-10 mb-24 w-[90vw] md:w-[90vw] xl:w-[85vw] flex flex-col space-y-0 mx-auto border-2 border-red-600 rounded-3xl shadow-xl pb-10"
        style={{ maxWidth: "1200px", margin: "0.5rem auto", background: "#000000" }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
          {exploreItems.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              <Link
                to={item.link}
                className={`p-6 rounded-xl ${item.color} relative overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105`}
                style={{ width: "250px", height: "260px" }}
              >
                <div className="w-full h-[150px] bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <h3 className="text-white font-bold mt-2 text-center">{item.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
