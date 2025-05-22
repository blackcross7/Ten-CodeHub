import { useState } from 'react';
import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const courseData = [
  {
    week: "Week 1",
    topics: [
      "Introduction to C: History, Features, and Basic Structure",
      "Variables, Data Types, and Constants",
      "Input/Output Operations and Basic Operators",
    ],
  },
  {
    week: "Week 2",
    topics: [
      "Control Structures: if-else, switch-case",
      "Loops: for, while, do-while",
      "Arrays and Strings",
    ],
  },
  {
    week: "Week 3",
    topics: [
      "Functions: Definition, Declaration, and Types",
      "Pointers: Basics and Memory Management",
      "Structures and Unions",
    ],
  },
  {
    week: "Week 4",
    topics: [
      "File Handling: Reading and Writing Files",
      "Dynamic Memory Allocation",
      "Preprocessor Directives and Macros",
    ],
  },
  {
    week: "Week 5",
    topics: [
      "Advanced Pointers and Memory Management",
      "Data Structures: Linked Lists",
      "Stacks and Queues Implementation",
    ],
  },
  {
    week: "Week 6",
    topics: [
      "Advanced Data Structures: Trees and Graphs",
      "Sorting and Searching Algorithms",
      "Error Handling and Debugging",
    ],
  },
  {
    week: "Week 7",
    topics: [
      "System Programming Basics",
      "Process and Thread Management",
      "Network Programming Fundamentals",
    ],
  },
  {
    week: "Week 8",
    topics: [
      "Advanced C Concepts",
      "Performance Optimization",
      "Best Practices and Code Quality",
    ],
  },
  {
    week: "Projects",
    topics: [
      "File Management System",
      "Student Database Management",
      "Library Management System",
      "Simple Compiler Implementation",
      "Network Chat Application",
    ],
  },
];

const tools = [
    { 
        name: 'CMake', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cmake.svg/1200px-Cmake.svg.png'
    },
    { 
        name: 'Git', 
        logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
    },
    { 
        name: 'VS Code', 
        logo: 'https://code.visualstudio.com/assets/images/code-stable.png'
    },
    { 
        name: 'CLion', 
        logo: 'https://resources.jetbrains.com/storage/products/clion/img/meta/clion_1280x800.png'
    },
    { 
        name: 'Linux', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'
    },
];

const faqs = [
    {
      question: "Do I need any prior programming experience for this course?",
      answer:
        "No prior programming experience is required. This course starts from the basics and gradually progresses to advanced topics.",
    },
    {
      question: "What can I build after completing this course?",
      answer:
        "You'll be able to build system applications, file management systems, database applications, and even basic operating system components. The course includes hands-on projects to apply your learning.",
    },
    {
      question: "How long does it take to complete the course?",
      answer: "The course is designed to be completed in 8 weeks with regular practice. However, you can learn at your own pace.",
    },
    {
      question: "Is there any support available during the course?",
      answer: "Yes, you'll have access to our support team and community forums where you can ask questions and get help with your projects.",
    },
];

function C() {
  const [showAll, setShowAll] = useState(false);
  const displayedContent = showAll ? courseData : courseData.slice(0, 4);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-t from-gray-800 to-black pt-40 pb-32'>
      {/* Container */}
      <div className='text-white w-[90vw] max-w-7xl mx-auto rounded-xl text-start flex flex-col place-items-start px-6 lg:px-16 py-10'>
        {/* Breadcrumb */}
        <Link to="/home">
          <h2 className='text-sm flex gap-2 cursor-pointer'>
            <span className='text-slate-400'>All courses &gt;</span>
            <span className='text-white'>Live</span>
          </h2>
        </Link>

        {/* Hero Section */}
        <div className='flex flex-col-reverse lg:flex-row justify-between w-full lg:h-[50vh] py-12 gap-8'>
          {/* Left */}
          <div className='lg:w-[50%] flex flex-col justify-between'>
            <h1 className='text-3xl text-center md:text-left font-extrabold leading-snug mb-12 lg:mb-6 tracking-tight'>
              C Programming<br />Master the Fundamentals
            </h1>

            <div className='flex flex-col gap-4 text-lg'>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Comprehensive C Programming
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                System Programming Projects
              </div>
              <div className='text-green-400 font-medium'>
                Perfect for Beginners and Professionals
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-6'>
              <button className='bg-green-600 hover:bg-green-700 text-white w-52 py-2 rounded-md font-semibold transition'>
                Sign Up Now
              </button>
              <button className='border border-green-500 text-green-400 hover:bg-green-100 hover:text-green-700 w-52 py-2 rounded-md font-semibold transition flex items-center justify-center gap-2'>
                Download Brochure <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className='lg:w-[50%] flex items-center justify-center lg:justify-center'>
            <img
              className='w-full max-w-[160px]'
              src="/assets/image/c-icon.png"
              alt="C Programming Hero"
            />
          </div>
        </div>

        {/* Footer Text Box */}
        <div className="mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md">
          <FontAwesomeIcon className="text-green-400 text-xl mt-1" icon={faWarning} />
          <p className="text-slate-300 leading-relaxed">
            Master C programming from basics to advanced concepts. Learn system programming, memory management, and data structures - all in one comprehensive course designed to make you industry-ready.
          </p>
        </div>
      </div>

      {/* Course Description */}
      <div className='w-[90vw] max-w-7xl mx-auto py-8 p-4 rounded-xl flex flex-col lg:flex-row justify-center items-stretch gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-gray-800 to-black shadow-lg my-24'>
        <div>
          <h2 className="text-2xl lg:hidden font-semibold text-white mb-0">
            <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
          </h2>
        </div>
        <div className='w-full lg:w-[40%] flex items-center justify-center'>
          <img
            className='rounded-lg object-cover w-[150px] h-full max-h-[100px]'
            src="/assets/image/c-icon.png"
            alt="C Programming Preview"
          />
        </div>

        <div className='flex flex-col gap-4 lg:w-[60%] h-full justify-between'>
          <div>
            <h2 className="text-2xl hidden lg:block font-semibold text-white mb-2">
              <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
            </h2>
            <p className='text-sm text-slate-300 leading-relaxed'>
              This comprehensive C programming course takes you from absolute beginner to professional developer. Learn everything from basic syntax to advanced concepts like system programming, memory management, and data structures. Build real-world projects and gain hands-on experience with industry-standard tools and frameworks.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <img
                className='w-7 h-7 bg-[#3b8346] rounded-full p-1'
                src="/assets/image/interested-icon.png"
                alt="Icon"
              />
              <span className='text-slate-400'>Beginner to Advanced</span>
            </div>
            <button className='bg-green-600 hover:bg-green-700 text-white w-52 py-2 rounded-md font-semibold transition'>
              Sign Up Now
            </button>
          </div>
        </div>
      </div>

      {/* About The Course */}
      <div className='w-full bg-slate-800 py-16 my-24'>
        <div className='w-[90vw] max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
          {/* Text Content */}
          <div className='lg:w-[60%] text-white space-y-6'>
            <h2 className='text-3xl text-white font-bold border-b-2 border-green-300 inline-block pb-1'>
              About The Course
            </h2>
            <div className='lg:w-[40%] lg:hidden flex items-center justify-center'>
              <img
                src="/assets/image/c-icon.png"
                alt="About the course"
                className='w-[30%] h-[100px] object-cover rounded-lg shadow-md'
              />
            </div>
            <p className='text-slate-300 leading-relaxed'>
              This course is designed to make you a proficient C developer. You'll start with the fundamentals and progress through system programming, memory management, and data structures. Each module includes hands-on projects and real-world applications to ensure you gain practical experience.
            </p>
            <ul className='list-disc list-inside text-slate-400 space-y-1'>
              <li>Comprehensive coverage of C programming concepts</li>
              <li>Hands-on projects and real-world applications</li>
              <li>System programming and memory management</li>
              <li>Career-focused curriculum with practical skills</li>
              <li>Regular assessments and project-based learning</li>
            </ul>
          </div>

          {/* Image */}
          <div className='lg:w-[40%] hidden lg:flex items-center justify-center'>
            <img
              src="/assets/image/c-icon.png"
              alt="About the course"
              className='w-[150px] h-[100px] object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-8xl mx-auto w-full px-6 lg:px-20 my-24">
        <h1 className="text-3xl font-bold mb-8 border-b-2 border-green-300 inline-block pb-1">
          Course Content
        </h1>

        <div className="grid gap-6">
          {displayedContent.map((weekItem, index) => (
            <div
              key={index}
              className="bg-slate-900 text-gray-300 shadow-lg rounded-2xl p-6 border border-gray-200 cursor-text"
            >
              <h3 className="text-xl font-semibold text-zinc-500 mb-4">
                {weekItem.week}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {weekItem.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-zinc-200 p-2 px-4 rounded-full font-medium hover:underline"
          >
            {showAll ? "Read less" : "Read more"}
          </button>
        </div>
      </div>

      {/* Course Technologies */}
      <div className="w-full bg-gray-900 py-16">
        <div className="w-[90vw] max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-10 border-b-2 border-green-500 inline-block pb-1">
            Tools & Technologies
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl flex flex-col items-center shadow hover:scale-105 transition">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-10 h-10 md:w-16 md:h-16 object-contain mb-2"
                />
                <p className="text-white text-sm font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full mt-24">
        <div className="w-[90vw] max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-green-500 inline-block pb-2">
            FAQ's
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-950 rounded-lg shadow px-6 py-4 cursor-pointer transition-all"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-white transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-white text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default C; 