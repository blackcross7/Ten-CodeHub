import { useState } from 'react';
import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const courseData = [
  {
    week: "Week 1",
    topics: [
      "Python Basics: Introduction to Python, Variables, Data Types, Operators, and Basic Input/Output operations.",
      "Control Flow: Learn about if-else statements, loops (for and while), and control flow statements.",
      "Functions: Understanding function definition, parameters, return values, and scope of variables.",
    ],
  },
  {
    week: "Week 2",
    topics: [
      "Data Structures: Lists, Tuples, Sets, Dictionaries, and their operations.",
      "String Manipulation: String methods, formatting, and regular expressions.",
      "File Handling: Reading and writing files, working with different file formats.",
    ],
  },
  {
    week: "Week 3",
    topics: [
      "Object-Oriented Programming: Classes, Objects, Inheritance, Polymorphism, and Encapsulation.",
      "Modules and Packages: Creating and using modules, understanding Python package ecosystem.",
      "Exception Handling: Try-except blocks, custom exceptions, and error handling.",
    ],
  },
  {
    week: "Week 4",
    topics: [
      "Advanced Python: Decorators, Generators, Iterators, and Context Managers.",
      "Database Integration: Working with SQLite, MySQL, and MongoDB using Python.",
      "Web Development: Introduction to Flask and Django frameworks.",
    ],
  },
  {
    week: "Week 5",
    topics: [
      "Data Analysis: NumPy for numerical computing, Pandas for data manipulation.",
      "Data Visualization: Matplotlib and Seaborn for creating visualizations.",
      "Machine Learning Basics: Introduction to scikit-learn and basic ML algorithms.",
    ],
  },
  {
    week: "Week 6",
    topics: [
      "Web Scraping: BeautifulSoup and Requests for web scraping.",
      "API Development: Creating RESTful APIs using Flask and FastAPI.",
      "Testing: Unit testing with pytest and test-driven development.",
    ],
  },
  {
    week: "Week 7",
    topics: [
      "Automation: Scripting and automation using Python.",
      "GUI Development: Creating desktop applications with Tkinter and PyQt.",
      "Concurrency: Multithreading and multiprocessing in Python.",
    ],
  },
  {
    week: "Week 8",
    topics: [
      "DevOps with Python: Working with Docker, CI/CD pipelines.",
      "Cloud Integration: AWS, Azure, and Google Cloud with Python.",
      "Performance Optimization: Profiling and optimizing Python code.",
    ],
  },
  {
    week: "Projects",
    topics: [
      "Web Application Development",
      "Data Analysis Dashboard",
      "Machine Learning Model",
      "Automated Testing Framework",
      "API Development",
    ],
  },
];

const tools = [
    { name: 'Python', logo: '/assets/image/python-icon.png' },
    { name: 'Django', logo: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg' },
    { name: 'Flask', logo: '/assets/image/backend-icon.png' },
    { name: 'NumPy', logo: 'https://numpy.org/images/logo.svg' },
    { name: 'Pandas', logo: 'https://pandas.pydata.org/static/img/pandas_mark.svg' },
    { name: 'Scikit-learn', logo: '/assets/image/tech-icon.png' },
    { name: 'TensorFlow', logo: '/assets/image/AIML.png' },
    { name: 'PyTorch', logo: '/assets/image/ML.png' },
    { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png' },
    { name: 'VS Code', logo: 'https://code.visualstudio.com/assets/images/code-stable.png' },
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
        "You'll be able to build web applications, data analysis tools, automation scripts, and even basic machine learning models. The course includes hands-on projects to apply your learning.",
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

function Python() {
  const [showAll, setShowAll] = useState(false);
  const displayedContent = showAll ? courseData : courseData.slice(0, 4);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-t from-gray-800 to-black py-32'>
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
            <h1 className='text-3xl lg:text-4xl text-center md:text-left font-extrabold leading-snug mb-12 lg:mb-6 tracking-tight'>
              Python Programming<br />From Zero to Hero
            </h1>

            <div className='flex flex-col gap-4 text-lg'>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Comprehensive Python Learning
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Industry-Standard Projects
              </div>
              <div className='text-green-400 font-medium'>
                Perfect for Beginners and Professionals
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-6'>
              <button className='bg-green-600 hover:bg-green-700 text-white w-full lg:w-52 py-2 rounded-md font-semibold transition'>
                Sign Up Now
              </button>
              <button className='border border-green-500 text-green-400 hover:bg-green-100 hover:text-green-700 w-full lg:w-52 py-2 rounded-md font-semibold transition flex items-center justify-center gap-2'>
                Download Brochure <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className='lg:w-[50%] flex items-center justify-center lg:justify-center'>
            <img
              className='w-full max-w-[160px]'
              src="/assets/image/Python.png"
              alt="Python Hero"
            />
          </div>
        </div>

        {/* Footer Text Box */}
        <div className="mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md">
          <FontAwesomeIcon className="text-green-400 text-xl mt-1" icon={faWarning} />
          <p className="text-slate-300 leading-relaxed">
            Master Python programming from basics to advanced concepts. Learn web development, data science, and automation - all in one comprehensive course designed to make you industry-ready.
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
            src="/assets/image/Python.png"
            alt="Python Preview"
          />
        </div>

        <div className='flex flex-col gap-4 lg:w-[60%] h-full justify-between'>
          <div>
            <h2 className="text-2xl hidden lg:block font-semibold text-white mb-2">
              <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
            </h2>
            <p className='text-sm text-slate-300 leading-relaxed'>
              This comprehensive Python course takes you from absolute beginner to professional developer. Learn everything from basic syntax to advanced concepts like web development, data science, and automation. Build real-world projects and gain hands-on experience with industry-standard tools and frameworks.
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
            <button className='bg-green-600 hover:bg-green-700 text-white w-full lg:w-52 py-2 rounded-md font-semibold transition'>
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
           <div className="w-full text-center lg:text-left">
              <h3 className='text-2xl lg:text-3xl text-white font-bold border-b-2 border-green-300 inline-block pb-1'>
                About The Course
              </h3>
            </div>
            <div className='lg:w-[40%] lg:hidden flex items-center justify-center'>
              <img
                src="/assets/image/python-icon.png"
                alt="About the course"
                className='w-[30%] h-[100px] object-cover rounded-lg shadow-md'
              />
            </div>
            <p className='text-slate-300 leading-relaxed'>
              This course is designed to make you a proficient Python developer. You'll start with the fundamentals and progress through web development, data science, and automation. Each module includes hands-on projects and real-world applications to ensure you gain practical experience.
            </p>
            <ul className='list-disc list-inside text-slate-400 space-y-1'>
              <li>Comprehensive coverage of Python programming concepts</li>
              <li>Hands-on projects and real-world applications</li>
              <li>Industry-standard tools and frameworks</li>
              <li>Career-focused curriculum with practical skills</li>
              <li>Regular assessments and project-based learning</li>
            </ul>
          </div>

          {/* Image */}
          <div className='lg:w-[40%] hidden lg:flex items-center justify-center'>
            <img
              src="/assets/image/Python.png"
              alt="About the course"
              className='w-[150px] h-[100px] object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-8xl mx-auto w-full px-6 lg:px-20 my-24">
       <div className="w-full text-center lg:text-left">

          <h1 className="text-3xl  font-bold mb-8 border-b-2 border-green-300 inline-block pb-1 ">
            Course Content</h1>
        </div>
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
          <div className="w-full text-center lg:text-left">

            <h1 className="text-3xl font-bold text-white mb-10 border-b-2 border-green-500 inline-block pb-1">
              Tools & Technologies
            </h1>
          </div>
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
            <div className="w-full text-center lg:text-left">

          <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-green-500 inline-block pb-2">
            FAQ's
          </h2>
            </div>
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
export default Python;
