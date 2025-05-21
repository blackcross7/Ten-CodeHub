import { useState } from 'react';
import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const courseData = [
  {
    week: "Week 1",
    topics: [
      "Analysis of Algorithms: Learn about the Order of Growth, Best, Average, and Worst cases of various algorithms using Asymptotic Notations and much more.",
      "Mathematics: Build your maths foundation with problems like Factorial of a Number, HCF, LCM, and concepts like Sieve of Eratosthenes.",
      "Bit Magic: Aquire Knowledge of Bitwise Operators with the help of important example tutorials.",
    ],
  },
  {
    week: "Week 2",
    topics: [
      "Recursion: Gain understanding of Recursion, base cases, and Tail Recursion, and solve problems like Rope Cutting, Tower of Hanoi, and Josephus Problem.",
      "Arrays: Master Arrays from their Introduction and Operations to solving problems like Stock Buy and Sell, Trapping Rain Water, etc.",
      "Searching: Get familiar with Binary Seach Technique with its analysis and various associated problems tutorials.",
    ],
  },
  {
    week: "Week 3",
    topics: [
      "Sorting: Learn about Insertion sort, Quick sort, and Radix sort.",
      "Matrix: Solve problems like Matrix in a Snake Pattern, Spiral Matrix traversal, and more.",
      "Hashing: Introduction, Time complexity, Applications, and Direct Address Table.",
    ],
  },
  {
    week: "Week 4",
    topics: [
      "String: From basics to Rabin Karp, KMP algorithm, etc.",
      "Linked List: Singly, Doubly, and Circular, with problems like loop detection, intersection, and LRU Cache.",
    ],
  },
  {
    week: "Week 5",
    topics: [
      "Stack: Balanced Parentheses, Stock Span, Infix/Prefix/Postfix expressions.",
      "Queue: Reversing a Queue, Generate numbers with given digits, and more.",
      "Deque: Problems like Maximums of subarrays of size k, First Circular Tour, etc.",
      "Tree: Height, Level order traversal, Burn a Binary tree, Serialize/Deserialize, etc.",
    ],
  },
  {
    week: "Week 6",
    topics: [
      "Binary Search Tree: Search, insert, delete, Check for BST, Vertical Sum, etc.",
      "Heap: Min Heap, Max Heap, Priority Queue, and related problems.",
      "Graph: BFS, DFS, Prim's, Dijkstra, Kosaraju, etc.",
    ],
  },
  {
    week: "Week 7",
    topics: [
      "Greedy: Activity Selection, Fractional Knapsack, and more.",
      "Backtracking: Rat in a Maze, N Queen, Sudoku Problem, etc.",
      "Dynamic Programming: Memoization, Tabulation, LCS, LIS, Coin Change, Egg Dropping.",
    ],
  },
  {
    week: "Week 8",
    topics: [
      "Trie: Representation, search, insert, delete, and problems.",
      "Segment/BIT: Segment tree and Binary Indexed Tree examples.",
      "Disjoint Set: Union, Find, Rank, and Path Compression.",
    ],
  },
  {
    week: "Projects",
    topics: [
      "Sudoku Solver",
      "Shortest Path Finder",
      "Tic Tac Toe",
      "N Queen Visualizer",
      "Binary Tree Visualizer",
    ],
  },
];

const tools = [
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'Python', logo: 'https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png' },
  { name: 'HTML', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  { name: 'MongoDB', logo: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Express', logo: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png' },
  { name: 'Spring', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg' },
  { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
  { name: 'Tableau', logo: 'https://www.edureka.co/blog/wp-content/uploads/2018/01/tableau-icon-what-is-tableau-blog-edureka.png' },
  { name: 'Colab', logo: 'https://colab.research.google.com/img/colab_favicon_256px.png' },
  { name: 'Jupyter', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg' },
  { name: 'Excel', logo: 'https://static.vecteezy.com/system/resources/previews/022/101/030/original/microsoft-excel-logo-transparent-free-png.png' },
];

const faqs = [
  {
    question: "I'm from a non-CS background. Will this course be a good fit for me?",
    answer:
      "Absolutely! This course is designed to be beginner-friendly and is suitable for learners from all backgrounds.",
  },
  {
    question: "Is doubt support available in this program?",
    answer:
      "Yes, doubt support is provided through various channels like live sessions, forums, or direct mentorship (depending on the course).",
  },
  {
    question: "What is the duration of this course?",
    answer: "The course duration typically ranges from 8 to 12 weeks depending on your pace.",
  },
  {
    question: "Is there any Phone number for query regarding this course?",
    answer: "Yes, you can contact our support team at +91-9876543210 during working hours.",
  },
];

function Dsa() {

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
        <Link to="/course" >
          <h2 className='text-sm flex gap-2 cursor-pointer'>
            <span className='text-slate-400'>All courses &gt;</span>
            <span className='text-white'>Live</span>
          </h2>
        </Link>

        {/* Hero Section */}
        <div className='flex flex-col-reverse lg:flex-row justify-between w-full lg:h-[50vh] py-12 gap-8'>
          {/* Left */}
          <div className='lg:w-[50%] flex flex-col justify-between'>
            <h1 className='text-3xl lg:text-4xl text-center lg:text-left font-extrabold leading-snug mb-12 lg:mb-6 tracking-tight'>
              DSA to Development<br />A Complete Guide
            </h1> 

            <div className='flex flex-col gap-4 text-lg'>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Comprehensive Learning
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Industry Readiness
              </div>
              <div className='text-green-400 font-medium'>
                Recommended for Students and Working Professionals
              </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-4 mt-10 md:mt-6'>
              <button className='bg-green-600 w-full hover:bg-green-700 text-white lg:w-52 py-2 rounded-md font-semibold transition'>
                Sign Up Now
              </button>
              <button className='border border-green-500 text-green-400 hover:bg-green-100 hover:text-green-700 w-full lg:w-52 py-2 rounded-md font-semibold transition flex items-center justify-center gap-2'>
                Download Brochure <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className='lg:w-[50%] flex items-center justify-center lg:justify-end'>
            <img
              className='w-full max-w-lg'
              src="/assets/image/dsa_page_hero.png"
              alt="DSA Hero"
            />
          </div>
        </div>

        {/* Footer Text Box */}
        <div className="mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md ">
          <FontAwesomeIcon className="text-green-400 text-xl mt-1" icon={faWarning} />
          <p className="text-slate-300 leading-relaxed">
            Join thousands of learners mastering DSA and landing top tech roles. This structured program guides you from core concepts to building real-world applications — all in one streamlined journey.
          </p>
        </div>
      </div>

      {/* Course Description */}
      <div className='w-[90vw] max-w-7xl mx-auto  py-8 p-4 rounded-xl flex flex-col lg:flex-row justify-center items-stretch gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-gray-800 to-black shadow-lg my-24'>
        <div>
          <h2 className="text-2xl  lg:hidden font-semibold text-white mb-0">
            <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
          </h2>
        </div>
        <div className='w-full lg:w-[40%] flex items-center justify-center'>
          <img
            className='rounded-lg object-cover w-full h-full max-h-[300px]'
            src="/assets/image/ds_img.jpg"
            alt="DSA Preview"
          />
        </div>

        <div className='flex flex-col gap-4 lg:w-[60%] h-full justify-between'>
          <div>
            <h2 className="text-2xl hidden lg:block font-semibold text-white mb-2">
              <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
            </h2>
            <p className='text-sm text-slate-300 leading-relaxed'>
              This course is your roadmap from mastering Data Structures and Algorithms to becoming a confident, job-ready developer. Whether you're pursuing full-stack development or focusing on a niche tech stack, you'll gain the core skills to build real-world solutions from the ground up.
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
          <div className='lg:w-[60%] w-full text-white space-y-6'>
            <div className="w-full text-center lg:text-left">
              <h3 className='text-2xl lg:text-3xl text-white font-bold border-b-2 border-green-300 inline-block pb-1'>
                About The Course
              </h3>
            </div>
            <div className='lg:w-[40%] lg:hidden flex items-center justify-center'>
              <img
                src="/assets/image/dsa_page_about.jpg"
                alt="About the course"
                className='w-full h-[300px] object-cover rounded-lg shadow-md'
              />
            </div>
            <p className='text-slate-300 leading-relaxed'>
              The course begins with a solid foundation in DSA — a must-have for any developer. As you progress, you'll build hands-on projects, explore popular frameworks, and develop a strong understanding of scalable code and system design. Whether you're a student or a professional, this course adapts to your goals and equips you for real-world tech challenges.
            </p>
            <ul className='list-disc list-inside text-slate-400 space-y-1'>
              <li>Foundational mastery of DSA concepts and techniques</li>
              <li>Practical coding problems and industry-standard solutions</li>
              <li>Progressive learning from beginner to advanced levels</li>
              <li>Perfect for full-stack, backend, Android, or data science pathways</li>
              <li>Project-based learning with real-world applications</li>
            </ul>
          </div>

          {/* Image */}
          <div className='lg:w-[40%] hidden lg:flex items-center justify-center'>
            <img
              src="/assets/image/dsa_page_about.jpg"
              alt="About the course"
              className='w-full h-[300px] object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>



      {/* Course Content */}
      <div className="max-w-8xl mx-auto w-full px-6 lg:px-20 my-24 ">
        <div className="w-full text-center lg:text-left">

          <h1 className="text-3xl  font-bold mb-8 border-b-2 border-green-300 inline-block pb-1 ">
            Course Content</h1>
        </div>

        <div className="grid gap-6 ">
          {displayedContent.map((weekItem, index) => (
            <div
              key={index}
              className="bg-slate-900 text-gray-300  shadow-lg rounded-2xl p-6 border border-gray-200 cursor-text"
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
            className=" bg-zinc-200 p-2 px-4 rounded-full font-medium hover:underline"
          >
            {showAll ? "Read less" : "Read more"}
          </button>
        </div>
      </div>


      {/* Course Technoogies */}
      <div className="w-full bg-gray-900 py-16">
        <div className="w-[90vw] max-w-6xl mx-auto ">
          <div className="w-full text-center lg:text-left">

            <h1 className="text-3xl font-bold text-white mb-10 border-b-2 border-green-500 inline-block pb-1">
              Tools & Technologies
            </h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl flex flex-col  items-center shadow hover:scale-105 transition">
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

      {/* FAQ  */}
      <div className="w-full  mt-24 ">
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
                className="bg-slate-950  rounded-lg shadow px-6 py-4 cursor-pointer transition-all"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-white transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
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

export default Dsa;
