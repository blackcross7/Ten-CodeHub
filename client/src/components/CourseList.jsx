import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// Framer Motion variants for subtle entrance animations (already defined)
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

// Define fadeIn variants for the overall banner component (already defined)
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
};

function CourseList() {
  const [searchQuery, setSearchQuery] = useState('');

  // Zoom out animation variants
  const zoomOutVariants = {
    hidden: { scale: 1.2 }, // Start zoomed in (120%)
    visible: {
      scale: 1,
      transition: {
        duration: 2,      // duration of zoom out
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='overflow-x-hidden font-sans'>
      {/* Promo Banner - Background Image takes full height */}
      <motion.div
        className="relative z-0 flex flex-col items-center justify-center bg-cover bg-center text-white min-h-screen py-16 px-4 sm:px-8 md:px-16 w-full text-center"
        style={{ backgroundImage: "url('/assets/image/course_bg2.jpg')" }}
        initial="hidden"
        animate="visible"
        variants={zoomOutVariants}
      >
        {/* Dark overlay for better text readability and depth */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Sale Info & Search Container */}
<motion.div
  className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 w-full relative z-20 -mt-36"
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  <div className="w-full max-w-3xl p-4 mb-8 lg:mb-0 text-center lg:text-left">
    <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-3 drop-shadow-lg">
      CodeHub Courses
    </h1>
    <p className="text-lg sm:text-xl text-gray-200">
      Interactive LIVE & Self-Paced Courses
    </p>
  </div>

  {/* Search Container - Centered and prominent */}
<div className="w-[92%] max-w-[420px] flex flex-row justify-between items-center p-1.5 sm:p-3 rounded-lg bg-white shadow-xl gap-2">
    <input
      type="text"
      placeholder="What do you want to learn today?"
      className="flex-1 border-none outline-none text-sm text-gray-800 placeholder-gray-400"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button className="bg-transparent border-none cursor-pointer p-1">
      <img src="/assets/image/search-icon.gif" alt="Search" className="w-6 h-6 object-contain" />
    </button>
  </div>
</motion.div>
</motion.div>
      <PopularNow />
    </div>
  );
}


function PopularNow() {
  const categories = [
    { name: "All", className: "all", link:"/course"  },
    { name: "Certification Courses", className: "certification", link:"/course"},
    { name: "DSA / Placements", className: "dsa", link:"/dsa"},
    { name: "Development / Testing", className: "development", link:"/webdev" },
    { name: "Machine Learning / Data Science", className: "ml",link:"/ml" },
    { name: "Programming Languages", className: "programming",link:"/cpp"   },
    { name: "Cloud / DevOps", className: "cloud",link:"/devops" },
    { name: "GATE", className: "gate", link:"/aptitude" },
  ];

  const sections = [
    { title: 'Popular Now', dataKey: 'courses' },
    { title: 'Classroom Courses', dataKey: 'classroomCourses' },
    { title: 'Live Courses', dataKey: 'liveCourses' },
    { title: 'Self-Paced Courses', dataKey: 'selfPacedCourses' },
    { title: 'Foundation Courses', dataKey: 'foundationCourses' },
    { title: 'Free Courses', dataKey: 'freeCourses' },
  ];

  const allCourses = {
    courses: [
      { title: "DSA to Development", titleIcon: "/assets/image/dsa-icon.png", interested: "556k+ interested learners", rating: "⭐4.4", title1: "DSA to Development: A Complete Guide", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/dsa" },
      { title: "Backend Development", titleIcon: "/assets/image/backend-icon.png", interested: "304k+ interested learners", rating: "⭐4.7", title1: "JAVA Backend Development - Live", level: "Intermediate and Advance", seats: "2 seats left", buttonText: "Explore", link: "/java" },
      { title: "ML & DS", titleIcon: "/assets/image/ml-icon.png", title1: "Complete Machine Learning & Data Science Program", interested: "422k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "6 seats left", buttonText: "Explore", link: "/ml" },
      { title: "Data Structure and Algorithm with C++/Java", titleIcon: "/assets/image/dsa-icon.png", title1: "Data Structures and Algorithms - Self Paced [Online Course]", interested: "1369k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/dsa" },
    ],
    classroomCourses: [
      { title: "Complete Data Analytics", titleIcon: "/assets/image/completedata-icon.png", title1: "Complete Data Analytics Program", interested: "49k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/webdev" },
      { title: "DSA Interview", titleIcon: "/assets/image/interview-icon.png", title1: "DSA for Interview Preparation", interested: "87k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "3 seats left", buttonText: "Explore", link: "/dsa" },
      { title: "FULL STACK", titleIcon: "/assets/image/mern-icon.png", title1: "MERN Full Stack Web Development", interested: "94k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/java" },
    ],
    liveCourses: [
      { title: "TECH INTERVIEW", titleIcon: "/assets/image/tech-icon.png", title1: "Tech Interview 101 - From DSA to System Design for Working Professionals", interested: "333k+ interested learners", rating: "⭐4.9", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/practice" },
      { title: "FSRNL", titleIcon: "/assets/image/fsrnl-icon.png", title1: "Full Stack Development with React & Node JS - Live", interested: "354k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/java" },
      { title: "DEVOPS Engineering", titleIcon: "/assets/image/devops-icon.png", title1: "DevOps Engineering - Planning to Production", interested: "106k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "3 seats left", buttonText: "Explore", link: "/devops" },
      { title: "Data Analytics Training program", titleIcon: "/assets/image/datatraining-icon.png", title1: "Data Analytics Training using Excel, SQL, Python & PowerBI", interested: "38k+ interested learners", rating: "⭐4.5", level: "Beginner to Advance", seats: "4 seats left", buttonText: "Explore", link: "/webdev" },
    ],
    selfPacedCourses: [
      { title: "INTERVIEW Preparation", titleIcon: "/assets/image/interview-icon.png", title1: "Complete Interview Preparation", interested: "200k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/practice" },
      { title: "Python Programming", titleIcon: "/assets/image/python-icon.png", title1: "Python Programming - From Zero to Hero", interested: "425k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/python" },
      { title: "Data Structures & Algorithms with Python", titleIcon: "/assets/image/python-icon.png", title1: "Data Structures & Algorithms in Python-Self Paced", interested: "325k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/dsa" },
      { title: "SYSTEM Design", titleIcon: "/assets/image/system-icon.png", title1: "Mastering System Design:From Low-Level to High-Level Solutions", interested: "180k+ interested learners", rating: "⭐4.6", level: "Intermediate & Advanced", seats: "2 seats left", buttonText: "Explore", link: "/systemdesign" },
    ],
    foundationCourses: [
      { title: "JAVA Programming", titleIcon: "/assets/image/java-icon.png", title1: "Java Programming Online Course [complete Beginner to Advanced]", interested: "450k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/java" },
      { title: "C++ Beginner to Advanced", titleIcon: "/assets/image/c++-icon.png", title1: "C++ Programming Course Online - Complete Beginner to Advanced", interested: "375k+ interested learners", rating: "⭐4.7", level: "Beginner", seats: "2 seats left", buttonText: "Explore", link: "/cpp" },
      { title: "JavaScript Basic to Advanced", titleIcon: "/assets/image/javascript-icon.png", title1: "JavaScript Full Course Online | Learn JavaScript with Certification", interested: "295k+ interested learners", rating: "⭐4.6", level: "Beginner & Intermediate", seats: "2 seats left", buttonText: "Explore", link: "/javascript-full-course" },
      { title: "Master C with Data Structures", titleIcon: "/assets/image/c-icon.png", title1: "C Programming Course Online - Learn C with Data Structures", interested: "180k+ interested learners", rating: "⭐4.5", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/c" },
    ],
    freeCourses: [
      { title: "Cybersecurity Essentials", titleIcon: "/assets/image/cyber-icon.png", title1: "Become a Cybersecurity Expert", interested: "964k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/cybersecurity-essentials" },
      { title: "BOOTCAMP Data Science", titleIcon: "/assets/image/bootcampdata-icon.png", title1: "Data Science BootCamp - From Analysing Data To Creating ML Models", interested: "328k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/ml" },
      { title: "FULL STACK Bootcamp", titleIcon: "/assets/image/bootcamp-icon.png", title1: "Full Stack Developer Bootcamp - Master Frontend to Backend", interested: "152k+ interested learners", rating: "⭐4.6", level: "Beginner to Advanced", seats: "3 seats left", buttonText: "Explore", link: "/webdev" },
      { title: "IOS Development", titleIcon: "/assets/image/ios-icon.png", title1: "iOS Development for Beginners: Master Swift & App Building for Free", interested: "290k+ interested learners", rating: "⭐4.6", level: "Beginner to Advanced", seats: "4 seats left", buttonText: "Explore", link: "/ios-development" },
    ]
  };

  const getTitleSectionBackground = (cardIndex, sectionDataKey) => {
    // Define a set of consistent gradients for each section to cycle through
    const sectionGradients = {
      courses: [
        'linear-gradient(to right, #237259, #29a777)', // Emerald green shades
        'linear-gradient(to right, #560881, #7e2ba7)', // Purple shades
        'linear-gradient(to right, #036e698d, #4c9cac)', // Teal shades
        'linear-gradient(to right, #084d91, #106197)', // Blue shades
      ],
      classroomCourses: [
        'linear-gradient(to right, #ff7f50, #ff6347)', // Coral shades
        'linear-gradient(to right, #6a5acd, #836fff)', // Lavender shades
        'linear-gradient(to right, #20b2aa, #3cb371)', // Light teal shades
      ],
      liveCourses: [
        'linear-gradient(to right, #e63946, #c20000)', // Red shades
        'linear-gradient(to right, #2a9d8f, #264653)', // Dark Teal/Cyan
        'linear-gradient(to right, #f4a261, #e76f51)', // Orange/Terracotta
        'linear-gradient(to right, #8d99ae, #4a4e69)', // Grey/Blue-grey
      ],
      selfPacedCourses: [
        'linear-gradient(to right, #457b9d, #a8dadc)', // Muted Blue shades
        'linear-gradient(to right, #a7c957, #5c8b5e)', // Olive Green shades
        'linear-gradient(to right, #e76f51, #f4a261)', // Sunset Orange shades
        'linear-gradient(to right, #6d597a, #352a3b)', // Plum/Dark Purple
      ],
      foundationCourses: [
        'linear-gradient(to right, #0077b6, #0096c7)', // Deep Sky Blue
        'linear-gradient(to right, #ef233c, #bf0603)', // Strong Red
        'linear-gradient(to right, #fca311, #ffc300)', // Bright Orange/Gold
        'linear-gradient(to right, #1a759f, #168aad)', // Ocean Blue
      ],
      freeCourses: [
        'linear-gradient(to right, #c77dff, #8a4bff)', // Light Purple
        'linear-gradient(to right, #48cae4, #00b4d8)', // Light Blue/Cyan
        'linear-gradient(to right, #70e000, #38b000)', // Vibrant Green
        'linear-gradient(to right, #ffbe0b, #fb5607)', // Gold to Orange
      ],
    };

    // Get the gradients for the current section
    const currentSectionGradients = sectionGradients[sectionDataKey];

    if (currentSectionGradients && currentSectionGradients.length > 0) {
      // Cycle through the specific gradients for this section
      return currentSectionGradients[cardIndex % currentSectionGradients.length];
    }

    // Fallback if no specific gradients are defined for a section or it's empty
    return 'linear-gradient(to right, #237259, #29a777)'; // Default emerald green
  };

 return (
  <div className="bg-gradient-to-b from-slate-950 via-blue-900 to-slate-800 py-10">
    <motion.section
      className="relative px-3 md:pt-10 md:px-10 pb-10
                  w-[90vw] xl:w-[90vw] 2xl:w-[80vw] mx-auto
                  flex flex-col
                  border-2 border-slate-900 rounded-3xl shadow-2xl
                  bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
                  mt-[-40vh] py-8 "
      style={{ maxWidth: "1400px" }}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {sections.map((section, idx) => (
        <div key={idx} className={`mb-12 ${idx === sections.length - 1 ? 'lg:mb-0' : ''}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center pl-0 sm:pl-8 md:pl-0 mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0 text-center sm:text-left">
              {section.title}
            </h3>
            <button className="flex items-center text-sm sm:text-base border border-gray-300 bg-gray-100 text-gray-800 cursor-pointer whitespace-nowrap py-2 px-4 rounded-full shadow-md hover:bg-gray-200 hover:text-black transition-colors hover:scale-105 duration-200">
              View All
              <img src="/assets/image/arrow-icon.png" alt="Arrow" className="w-4 h-auto ml-2 object-contain" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 w-full py-10 outline outline-2 outline-blue-800 rounded-2xl p-4 bg-gradient-to-br from-[#050a30] to-[#0a1140] shadow-inner">
            {allCourses[section.dataKey].map((course, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                  mass: 1,
                }}
                className="group flex w-full md:w-[45%] lg:w-[40%] xl:w-[22%] flex-col justify-between bg-white rounded-xl transform transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div
                  className="p-5 rounded-t-xl text-left h-28 flex items-center justify-center gap-3 text-white relative overflow-hidden"
                  style={{ background: getTitleSectionBackground(index, section.dataKey) }}
                >
                  <h3 className="text-lg font-bold text-white z-10 text-center leading-tight">{course.title}</h3>
                  <div className="w-10 h-10 flex-shrink-0 z-10">
                    <img src={course.titleIcon} alt={`${course.title} Icon`} className="w-full h-full object-contain" />
                  </div>
                  <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zm1 5v1H5zM6 0H5v1z\'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")',
                    }}
                  ></div>
                </div>

                <div className="flex-grow bg-white p-4 text-left rounded-b-xl flex flex-col justify-between gap-2">
                  <div className="flex flex-col items-start gap-1">
                    <p className="flex items-center font-semibold text-left gap-1 text-sm text-gray-700">
                      <img src="/assets/image/interested-icon.png" alt="Interested Icon" className="w-4 h-4 object-contain mr-1" />
                      {course.interested}
                    </p>
                    <p className="border border-gray-300 bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
                      {course.rating}
                    </p>
                  </div>
                  <p className="text-base font-semibold text-gray-900 mt-2 line-clamp-2">{course.title1}</p>
                  <p className="inline-flex items-center text-sm text-gray-600 mt-1">
                    <img src="/assets/image/level-icon.png" alt="Level" className="w-4 h-4 object-contain mr-2" />
                    {course.level}
                  </p>
                  {course.seats && <p className="text-red-600 text-sm font-medium mt-1">{course.seats}</p>}
                </div>

                <Link
                  to={course.link || "#"}
                  className="block text-center border-2 border-black rounded-full bg-transparent text-black py-2.5 px-8 text-sm font-medium mt-4 mb-6 mx-auto cursor-pointer transition-all duration-300 w-fit group-hover:bg-black group-hover:text-white group-hover:scale-105 group-hover:shadow-lg"
                >
                  {course.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* --- */}

      {/* Course Categories Section - Enhanced UI */}
      <div className="mt-16 text-left p-6 max-w-[95%] mx-auto border-2 border-blue-700 rounded-xl shadow-lg bg-[#0a1140]">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white border-b-2 border-gray-700 pb-3">Course Categories</h3>
        <div className="flex flex-wrap justify-center gap-4">
  {categories.map((category, index) => (
    <Link to={category.link} key={index}>
      <div
        className={`text-sm sm:text-base font-bold text-white rounded-lg cursor-pointer py-2.5 px-5 min-w-[120px] text-center
                    transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    ${category.className === 'all' ? 'bg-[#f4a261]' : ''}
                    ${category.className === 'certification' ? 'bg-[#5e548e]' : ''}
                    ${category.className === 'dsa' ? 'bg-[#2a9d8f]' : ''}
                    ${category.className === 'development' ? 'bg-[#9d4edd]' : ''}
                    ${category.className === 'ml' ? 'bg-[#0b494b]' : ''}
                    ${category.className === 'programming' ? 'bg-[#457b9d]' : ''}
                    ${category.className === 'cloud' ? 'bg-[#1d3557]' : ''}
                    ${category.className === 'gate' ? 'bg-[#101011]' : ''}`}
      >
        {category.name}
      </div>
    </Link>
  ))}
</div>

      </div>
    </motion.section>
  </div>
);
}

export default CourseList;