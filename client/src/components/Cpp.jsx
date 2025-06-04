import { useState } from 'react';
import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
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

const whileHoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const courseData = [
  {
    week: "Week 1",
    topics: [
      "C++ Basics: Introduction to C++, Variables, Data Types, Operators, and Basic Input/Output using cin and cout.",
      "Control Flow: Learn about if-else statements, loops (for, while, do-while), switch-case, and break/continue.",
      "Functions:Understanding function declaration/definition, return values, parameters, and scope of variables.",
    ],
  },
  {
    week: "Week 2",
    topics: [
      "Arrays and Strings: 1D and 2D arrays, basic operations, C-style strings and std::string, string methods.",
      "Pointers: Introduction to pointers, pointer arithmetic, pointers and arrays, nullptr.",
      "File Handling: Reading and writing files using ifstream, ofstream, and fstream.",
    ],
  },
  {
    week: "Week 3",
    topics: [
      "Object-Oriented Programming: Classes, Objects, Inheritance, Polymorphism (compile-time and run-time), Encapsulation.",
      "Constructors and Destructors: Default, Parameterized, Copy constructors, and destructor behavior.",
      "Function Overloading and Operator Overloading: Basics and examples in C++.",
    ],
  },
  {
    week: "Week 4",
    topics: [
      "Dynamic Memory Allocation: Using new, delete, malloc, free, and avoiding memory leaks.",
      "Pointers to Objects & Functions: Pointer with classes, function pointers.",
      "Namespaces & Preprocessors: Understanding namespace, #define, #include, #ifdef.",
    ],
  },
  {
    week: "Week 5",
    topics: [
      "Inheritance Deep Dive: Single, Multilevel, Multiple, Hierarchical, Hybrid.",
      "Virtual Functions & Abstract Classes: Pure virtual functions and runtime polymorphism.",
      "Templates: Function templates, Class templates, and generic programming.",
    ],
  },
  {
    week: "Week 6",
    topics: [
      "STL (Standard Template Library): Learn about core STL containers like vector, list, set, map, stack, and queue.",
      "Iterators and Algorithms: Understand iterators, and practice using STL algorithms like sort(), find(), count(), reverse(), etc.",
      "Exception Handling: Learn how to use try, catch, throw for safe error handling and custom exceptions.",
    ],
  },
  {
    week: "Week 7",
    topics: [
      "Smart Pointers and Lambda Functions: Learn unique_ptr, shared_ptr, and use lambda expressions in STL algorithms.",
      "Type Casting in C++: Understand static_cast, dynamic_cast, reinterpret_cast, and const_cast.",
      "Bit Manipulation: Practice bitwise operations and solve problems using AND, OR, XOR, and shifting operators.",
    ],
  },
  {
    week: "Week 8",
    topics: [
      "Mini Projects: Build hands-on C++ projects like Tic Tac Toe, Student Report Card System, and Bank Management System.",
      "Final Practice & Quiz: Attempt revision quizzes and solve practical coding problems in C++.",
      "Interview Preparation: Practice C++-based interview questions and review key language concepts.",
    ],
  },
  {
    week: "Projects",
    topics: [
      "Tic Tac Toe Game using OOP",
      "Student Report Card System with File Handling",
      "Bank Management System using Classes and Templates",
      "Library Management System with Menu-Driven Interface",
      "Hospital Management System using Inheritance and Polymorphism"
    ],
  },
];

const tools = [
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'VS Code', logo: '/assets/image/vscode-logo.png' },
  { name: 'CLion', logo: '/assets/image/Clion.svg.png' },
  { name: 'Leetcode', logo: '/assets/image/LeetCode_logo.png' },
  { name: 'GitHub', logo: '/assets/image/github-logo-png_seeklogo-304612.png' },

];

const faqs = [
  {
    question: "Do I need to know any other programming language before learning C++?",
    answer:
      "No prior programming knowledge is necessary. This course starts with the basics of C++ from scratch, making it perfect for beginners.",
  },
  {
    question: "Is this course suitable for beginners or only for advanced learners?",
    answer: "You'll be able to build web applications, data analysis tools, automation scripts, and even basic machine learning models. The course includes hands-on projects to apply your learning.",
  },
  {
    question: "Can I access the course materials after completion?",
    answer: "Absolutely! Once enrolled, you will have lifetime access to all course materials, including videos, notes, and project files, so you can revisit the content anytime.",
  },
  {
    question: "What development environment or tools will I need to follow this course?",
    answer: "You will need a C++ compiler and an Integrated Development Environment (IDE) to write and run your code. Popular choices include GCC or Clang compilers and IDEs like Visual Studio Code, Code::Blocks, or Microsoft Visual Studio. The course will guide you on how to set up these tools step-by-step.",
  },
  {
    question: "Will this course cover debugging and best coding practices in C++?",
    answer: "Yes, the course includes lessons on how to effectively debug your C++ programs and teaches best coding practices to write clean, efficient, and maintainable code.",
  },
];

function Cpp() {
  const [showAll, setShowAll] = useState(false);
  const displayedContent = showAll ? courseData : courseData.slice(0, 4);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className='min-h-screen w-full bg-gradient-to-t from-gray-800 to-black py-32'
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Container */}
      <motion.div
        className='text-white w-[90vw] max-w-7xl mx-auto rounded-xl text-start flex flex-col place-items-start px-6 lg:px-16 py-10'
        variants={fadeInUp}
      >
        {/* Breadcrumb */}
        <motion.div variants={fadeInUp} custom={0.5}>
          <Link to="/home">
            <h2 className='text-sm flex gap-2 cursor-pointer'>
              <span className='text-slate-400'>All courses &gt;</span>
              <span className='text-white'>Live</span>
            </h2>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className='flex flex-col-reverse lg:flex-row justify-between w-full lg:h-[50vh] py-12 gap-8'>
          {/* Left */}
          <motion.div
            className='lg:w-[50%] flex flex-col justify-between'
            variants={fadeInUp}
            custom={1}
          >
            <h1 className='text-3xl lg:text-4xl text-center lg:text-left font-extrabold leading-snug mb-12 lg:mb-6 tracking-tight'>
              C++ Programming Language<br />Master From Basics to Advanced
            </h1>

            <div className='flex flex-col gap-4 text-lg'>
              <motion.div variants={fadeInUp} custom={1.2} className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Comprehensive Learning
              </motion.div>
              <motion.div variants={fadeInUp} custom={1.4} className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Industry-Standard Projects
              </motion.div>
              <motion.div variants={fadeInUp} custom={1.6} className='text-green-400 font-medium'>
                Upgrade Your Skills
              </motion.div>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-4 mt-10 md:mt-6'>
              <motion.button
                className='bg-green-600 hover:bg-green-700 text-white w-full lg:w-52 py-2 rounded-md font-semibold transition'
                variants={fadeInUp}
                custom={1.8}
                whileHover={whileHoverScale}
              >
                Sign Up Now
              </motion.button>
              <motion.button
                className='border border-green-500 text-green-400 hover:bg-green-100 hover:text-green-700 w-full lg:w-52 py-2 rounded-md font-semibold transition flex items-center justify-center gap-2'
                variants={fadeInUp}
                custom={2}
                whileHover={whileHoverScale}
              >
                Download Brochure <FontAwesomeIcon icon={faDownload} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className='lg:w-[50%] flex items-center justify-center lg:justify-end mb-8 lg:mb-0'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              className="w-[200px] h-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <img
                src="/assets/image/c++-icon.png"
                alt="Cpp Hero"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Text Box */}
        <motion.div
          className="mt-8 lg:mt-28 xl:mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md"
          variants={fadeInUp}
          custom={2.2}
        >
          <FontAwesomeIcon className="text-green-400 text-xl mt-1" icon={faWarning} />
          <p className="text-slate-300 leading-relaxed">
            Master C++ From Syntax to System-Level Programming.
            Learn everything from basics to advanced concepts in a structured, beginner-friendly course – perfect for students and professionals alike.
          </p>
        </motion.div>
      </motion.div>

      {/* Course Description */}
      <motion.div
        className='w-[90vw] max-w-7xl mx-auto py-8 p-4 rounded-xl flex flex-col lg:flex-row justify-center items-stretch gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-gray-800 to-black shadow-lg my-24'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-2xl lg:hidden font-semibold text-white mb-0">
            <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
          </h2>
        </div>
        <motion.div
          className='w-full lg:w-[40%] flex items-center justify-center'
          variants={fadeInUp}
          custom={0.5}
        >
          <img
            className='rounded-lg object-cover w-full h-full max-h-[300px]'
            src="/assets/image/c++Image11.jpg"
            alt="Cpp Preview"
          />
        </motion.div>

        <motion.div
          className='flex flex-col gap-4 lg:w-[60%] h-full justify-between'
          variants={fadeInUp}
          custom={0.7}
        >
          <div>
            <h2 className="text-2xl hidden lg:block font-semibold text-white mb-2">
              <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
            </h2>
            <p className='text-sm text-center lg:text-left text-slate-300 leading-relaxed'>
              This all-in-one C++ programming course guides you from a complete beginner to a skilled developer. You'll start with the essentials of C++ syntax and gradually move into object-oriented programming, templates, memory management, and the Standard Template Library (STL). Through real-world projects, you’ll gain hands-on experience and learn to use industry-relevant tools and workflows.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <motion.div variants={fadeInUp} custom={0.9} className='flex items-center gap-2'>
              <img
                className='w-7 h-7 bg-[#3b8346] rounded-full p-1'
                src="/assets/image/interested-icon.png"
                alt="Icon"
              />
              <span className='text-slate-400'>Beginner to Advanced</span>
            </motion.div>
            <motion.button
              className='bg-green-600 hover:bg-green-700 text-white w-full lg:w-52 py-2 rounded-md font-semibold transition'
              variants={fadeInUp}
              custom={1.1}
              whileHover={whileHoverScale}
            >
              Sign Up Now
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* About The Course */}
      <motion.div
        className='w-full bg-slate-800 py-16 my-24'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className='w-[90vw] max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
          <motion.div className='lg:w-[60%] w-full text-white space-y-6' variants={fadeInUp} custom={0.5}>
            <div className="w-full text-center lg:text-left">
              <h2 className='text-3xl text-white font-bold border-b-2 border-green-300 inline-block pb-1'>
                About The Course
              </h2>
            </div>
            <motion.div className='lg:w-[40%] lg:hidden flex items-center justify-center' variants={fadeInUp} custom={0.7}>
              <img
                src="/assets/image/c++Image22.jpg"
                alt="About the course"
                className='w-full h-[300px] object-cover rounded-lg shadow-md'
              />
            </motion.div>
            <p className='text-slate-300 leading-relaxed text-center lg:text-left'>
              Master C++ from the ground up with this industry-aligned course. Starting with the fundamentals, you'll explore object-oriented programming, advanced C++ features, and real-time application development. From building efficient algorithms to mastering templates and the Standard Template Library (STL), this course equips you with the skills required for modern software development.
            </p>
            <ul className='list-disc list-outside text-slate-400 space-y-1 pl-4'>
              <motion.li variants={fadeInUp} custom={0.9}>In-depth understanding of C++ syntax, logic, and paradigms</motion.li>
              <motion.li variants={fadeInUp} custom={1.1}>Real-world projects including game logic, file systems, and simulations</motion.li>
              <motion.li variants={fadeInUp} custom={1.3}>Deep dive into OOP, templates, STL, and exception handling</motion.li>
              <motion.li variants={fadeInUp} custom={1.5}>Focus on performance optimization and debugging techniques</motion.li>
            </ul>
          </motion.div>

          <motion.div
            className='lg:w-[40%] hidden lg:flex items-center justify-center'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="/assets/image/c++Image22.jpg"
              alt="About the course"
              className='w-full h-[300px] object-cover rounded-lg shadow-md'
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Course Content */}
      <motion.div
        className="max-w-8xl mx-auto w-full px-6 lg:px-20 my-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="w-full text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-8 border-b-2 border-green-300 inline-block pb-1">
            Course Content
          </h1>
        </div>

        <div className="grid gap-6">
          {displayedContent.map((weekItem, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 text-gray-300 shadow-lg rounded-2xl p-6 border border-gray-200 cursor-text"
              variants={fadeInUp}
              custom={index * 0.2}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-zinc-500 mb-4">
                {weekItem.week}
              </h3>
              <ul className="list-disc list-outside space-y-2 pl-4">
                {weekItem.topics.map((topic, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeInUp}
                    custom={index * 0.2 + idx * 0.05}
                  >
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="bg-zinc-200 p-2 px-4 rounded-full font-medium hover:underline"
            whileHover={whileHoverScale}
            variants={fadeInUp}
            custom={displayedContent.length * 0.2 + 0.5}
          >
            {showAll ? "Read less" : "Read more"}
          </motion.button>
        </div>
      </motion.div>

      {/* Course Technologies */}
      <motion.div
        className="w-full bg-gray-900 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="w-[90vw] max-w-6xl mx-auto">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white mb-10 border-b-2 border-green-500 inline-block pb-1">
              Tools & Technologies
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-xl flex flex-col items-center shadow"
                variants={fadeInUp}
                custom={index * 0.1}
                whileHover={whileHoverScale}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-10 h-10 md:w-16 md:h-16 object-contain mb-2"
                />
                <p className="text-white text-sm font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        className="w-full mt-24"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-[90vw] max-w-6xl mx-auto">
          <div className="w-full text-center lg:text-left">
            <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-green-500 inline-block pb-2">
              FAQ's
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-slate-950 rounded-lg shadow px-6 py-4 cursor-pointer transition-all"
                onClick={() => toggle(index)}
                whileHover={{ scale: 1.01 }}
                variants={fadeInUp}
                custom={index * 0.1}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`h-5 w-5 text-white`}
                    />
                  </motion.div>
                </div>
                {openIndex === index && (
                  <motion.p
                    className="mt-3 text-white text-sm"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accordionVariants}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Cpp;