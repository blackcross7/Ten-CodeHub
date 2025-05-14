import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import ExploreCard from '../components/ExploreCard';
import OtherCards from '../components/OtherCards';
import InfoCard from '../components/OtherCards';
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
      link: '#'
    },
    {
      title: 'JAVA Backend Development - Live',
      level: 'Intermediate and Advance',
      interested: '304K+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/227/Mobile/Other/Course_Backend_1720846992.webp',
      link: '#'
    },
    {
      title: 'Tech Interview 101 -From DSA to System Design',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/458/Mobile/Other/Course_Tech_Int_1720846791.webp',
      link: '#'
    },
    {
      title: 'Full Stack Development with React & Node JS - Live',
      level: 'Beginner to Advance',
      interested: '345k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152.webp',
      link: '#'

    },
    {
      title: 'Java Programming Online Course [Complete Beginner to Advanced]',
      level: 'Beginner to Advance',
      interested: '291k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/CourseJavaProgrammin_1716371938.webp',
      link: '#'

    },
    {
      title: 'C++ Programming Course Online - Complete Beginner to Advanced',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1723009538.webp',
      link: '#'

    },

    // Add more courses here
  ];

  const exploreItems = [
    { title: 'Data Structures and Algorithms', color: 'bg-[linear-gradient(#4caf97,_#51c6ab)] ', img: '/assets/image/DSA.png' },
    { title: 'Practice DSA', color: 'bg-[linear-gradient(rgb(90,_94,_183),_rgb(112,_117,_234))]', img: '/assets/image/Practice dsa.png' },
    { title: 'Web Development', color: ' bg-[linear-gradient(rgb(175,_97,_96),_rgb(202,_138,_137))] ', img: '/assets/image/Webdev.png' },
    { title: 'Python', color: 'bg-[linear-gradient(rgb(103,_74,_152),_rgb(165,_148,_195))] ', img: '/assets/image/Python.png' },
    { title: 'AI ML & Data Science', color: ' bg-[linear-gradient(rgb(37,_135,_156),_rgb(84,_195,_219))]', img: '/assets/image/AIML.png' },
    { title: 'Machine Learning', color: 'bg-[linear-gradient(rgb(69,_114,182),_rgb(120,_158,_218))] ', img: '/assets/image/ML.png' },
    { title: 'System Design', color: 'bg-[linear-gradient(rgb(204,_115,_62),_rgb(234,_163,_120))]  ', img: '/assets/image/system.png' },
    { title: 'DevOps', color: 'bg-[linear-gradient(rgb(241,99,124),_rgb(227,_153,_166))] ', img: '/assets/image/devops.png' }
  ];


  const infoItems = [
    { title: 'Job for You', color: 'bg-[#ae84d1]' },
    { title: 'Hire With Us', color: 'bg-[#ae84d1]' },
    { title: 'Advertisement Required', color: 'bg-[#ae84d1]' },
    { title: 'Placement Time', color: 'bg-[#ae84d1]' }
  ];

  return (
    <div className="font-sans py-44 bg-[linear-gradient(to_bottom,#bbf7d0_0%,#ecfccb_10vh,#fefce8_40vh,#ffffff_60vh)] ">

      {/* Hero Section */}
      <motion.section
        className=" px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 text-gray-800">
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
  <div className="flex xl:hidden overflow-x-auto gap-6 w-[100%]  mt-10 pb-4 scrollbar-hide">
    {courses.map((course, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="min-w-[280px] flex-shrink-0"
      >
        <CourseCard course={course} />
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
        <CourseCard course={course} />
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
              <InfoCard title={item.title} color={item.color} />
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
              <ExploreCard title={item.title} color={item.color} image={item.img} />
            </motion.div>
          ))}
        </div>
      </motion.section>




    </div>
  );
};

export default Home;