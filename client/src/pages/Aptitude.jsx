import { useState } from 'react';
import { faCheck, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const courseData = [
  {
    week: "Week 1: Introduction to Aptitude",
    topics: [
      "Understanding Aptitude Tests",
      "Types of Aptitude Tests",
      "Importance of Aptitude in Competitive Exams",
      "Basic Mathematical Concepts",
    ],
  },
  {
    week: "Week 2: Quantitative Aptitude - Numbers",
    topics: [
      "Number Systems",
      "LCM and HCF",
      "Factors and Multiples",
      "Divisibility Rules",
      "Rounding Numbers",
    ],
  },
  {
    week: "Week 3: Quantitative Aptitude - Algebra",
    topics: [
      "Algebraic Expressions",
      "Linear Equations",
      "Quadratic Equations",
      "Inequalities",
      "Functions and Graphs",
    ],
  },
  {
    week: "Week 4: Quantitative Aptitude - Percentages and Ratios",
    topics: [
      "Understanding Percentages",
      "Calculating Percentages",
      "Ratio and Proportion",
      "Partnership Problems",
      "Applications of Percentages and Ratios",
    ],
  },
  {
    week: "Week 5: Quantitative Aptitude - Averages and Mixtures",
    topics: [
      "Calculating Averages",
      "Weighted Averages",
      "Mixture Problems",
      "Alligation Method",
      "Applications of Averages and Mixtures",
    ],
  },
  {
    week: "Week 6: Quantitative Aptitude - Time, Speed, and Distance",
    topics: [
      "Basic Concepts of Speed and Distance",
      "Relative Speed",
      "Problems on Trains",
      "Problems on Boats and Streams",
      "Time and Work Problems",
    ],
  },
  {
    week: "Week 7: Quantitative Aptitude - Geometry and Mensuration",
    topics: [
      "Basic Geometric Shapes",
      "Area and Perimeter",
      "Volume and Surface Area",
      "Triangles, Circles, and Quadrilaterals",
      "Coordinate Geometry Basics",
    ],
  },
  {
    week: "Week 8: Logical Reasoning - Introduction",
    topics: [
      "Understanding Logical Reasoning",
      "Types of Logical Reasoning Questions",
      "Syllogisms",
      "Blood Relations",
      "Direction Sense Test",
    ],
  },
  {
    week: "Week 9: Logical Reasoning - Analytical Reasoning",
    topics: [
      "Seating Arrangements",
      "Puzzles",
      "Data Sufficiency",
      "Statement and Assumptions",
      "Statement and Conclusions",
    ],
  },
  {
    week: "Week 10: Verbal Ability - Basics",
    topics: [
      "Understanding Verbal Ability",
      "Parts of Speech",
      "Sentence Structure",
      "Common Errors in English",
      "Vocabulary Building",
    ],
  },
  {
    week: "Week 11: Verbal Ability - Advanced Topics",
    topics: [
      "Synonyms and Antonyms",
      "Idioms and Phrases",
      "Reading Comprehension",
      "Cloze Test",
      "Sentence Completion",
    ],
  },
  {
    week: "Week 12: Revision and Mock Tests",
    topics: [
      "Revision of Key Concepts",
      "Practice Mock Tests",
      "Time Management Strategies",
      "Analyzing Mock Test Results",
      "Final Tips for Exam Preparation",
    ],
  },
];

const faqs = [
  {
    question: "What is Quantitative Aptitude?",
    answer: "Quantitative Aptitude refers to the ability to handle numbers and solve mathematical problems. It is a crucial skill for various competitive exams.",
  },
  {
    question: "How can I improve my aptitude skills?",
    answer: "Regular practice through mock tests, solving previous years' question papers, and understanding the concepts thoroughly can help improve your aptitude skills.",
  },
  {
    question: "What types of questions are asked in aptitude tests?",
    answer: "Aptitude tests typically include questions on numerical ability, logical reasoning, and verbal ability, covering a wide range of topics.",
  },
  {
    question: "Are there any specific strategies for solving aptitude questions?",
    answer: "Yes, practicing shortcuts, understanding the underlying concepts, and managing time effectively during tests are key strategies for success.",
  },
];

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

function Aptitude() {
  const [showAll, setShowAll] = useState(false);
  const displayedContent = showAll ? courseData : courseData.slice(0, 4);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-t from-gray-800 to-black py-10'>
      <div className='text-white w-[100vw] max-w-7xl mx-auto rounded-xl text-start flex flex-col place-items-start px-6 lg:px-16 py-10 mt-20'>
        <Link to="/home">
          <motion.h2
            className='text-sm flex gap-2 cursor-pointer'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <span className='text-slate-400'>All courses &gt;</span>
            <span className='text-white'>Aptitude</span>
          </motion.h2>
        </Link>

        <motion.div 
          className='flex flex-col-reverse lg:flex-row justify-between w-full lg:h-[50vh] py-12 gap-8'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <div className='lg:w-[50%] flex flex-col justify-between'>
            <motion.h1
              className='text-3xl lg:text-4xl text-center md:text-left font-extrabold leading-snug mb-12 lg:mb-6 tracking-tight'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={2}
            >
              Aptitude<br />Master the Essentials
            </motion.h1>

            <motion.div
              className='flex flex-col gap-4 text-lg'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={3}
            >
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Comprehensive Aptitude Preparation
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Practice with Real Exam Questions
              </div>
              <div className='text-green-400 font-medium'>
                Perfect for Students and Professionals
              </div>
            </motion.div>

            <motion.div
              className='flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-6'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={4}
            >
              <button className='bg-green-600 hover:bg-green-700 text-white w-52 py-2 rounded-md font-semibold transition'>
                Start Learning Now
              </button>
              <button className='border border-green-500 text-green-400 hover:bg-green-100 hover:text-green-700 w-52 py-2 rounded-md font-semibold transition flex items-center justify-center gap-2'>
                Download Resources <FontAwesomeIcon icon={faDownload} />
              </button>
            </motion.div>
          </div>

          <motion.div
            className='lg:w-[70%] flex items-center justify-center lg:justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={5}
          >
            <img
              className='w-full max-w-[220px]'
              src="/assets/image/Aptitude.png"
              alt="Aptitude Preparation"
            />
          </motion.div>
        </motion.div>

        {/* Course Overview Section */}
        <motion.section
          className='w-full max-w-7xl mx-auto py-8 p-4 rounded-xl flex flex-col lg:flex-row justify-center items-center gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-gray-800 to-black shadow-lg my-24'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={6}
        >
          <div>
            <h2 className="text-2xl lg:hidden font-semibold text-white mb-0">
              <span className='border-b-2 border-green-500 pb-1'>Course Overview</span>
            </h2>
          </div>
          <motion.div
            className='w-full lg:w-[40%] flex items-center justify-center'
            variants={fadeInUp}
            custom={0.5}
          >
            <img
              className='rounded-lg object-cover w-full h-full max-h-[250px]'
              src="/assets/image/Aptitude.png"
              alt="Aptitude Overview"
            />
          </motion.div>

          <motion.div
            className='flex flex-col gap-4 lg:w-[60%] h-full justify-between'
            variants={fadeInUp}
            custom={0.7}
          >
            <div>
              <h2 className="text-2xl hidden lg:block font-semibold text-white mb-2">
                <span className='border-b-2 border-green-500 pb-1'>Course Overview</span>
              </h2>
              <p className='text-sm text-center lg:text-left text-slate-300 leading-relaxed'>
                This comprehensive aptitude course covers essential topics in Quantitative Aptitude, Logical Reasoning, and Verbal Ability. Prepare effectively for competitive exams with a focus on practical problem-solving skills.
              </p>
            </div>

            <motion.div
              className='flex flex-col gap-4'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={9}
            >
              <div className='flex items-center gap-2 justify-center lg:justify-start'>
                <img
                  className='w-7 h-7 bg-[#3b8346] rounded-full p-1'
                  src="/assets/image/interested-icon.png"
                  alt="Icon"
                />
                <span className='text-slate-400'>Comprehensive Learning</span>
              </div>
              <button className='bg-green-600 hover:bg-green-700 text-white w-52 py-2 rounded-md font-semibold transition mx-auto lg:mx-0'>
                Start Learning Now
              </button>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="max-w-8xl mx-auto w-full px-6 lg:px-30 my-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={10}
        >
          <div className="w-full text-center lg:text-center">
          <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-green-500 inline-block pb-2">
            Course Content
          </h2>
          </div>

          <div className="grid gap-6">
            {displayedContent.map((weekItem, index) => (
              <motion.div
                key={index}
                className="bg-slate-900 text-gray-300 shadow-lg rounded-2xl p-6 border border-gray-200 cursor-text"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <h3 className="text-xl font-semibold text-zinc-500 mb-4">
                  {weekItem.week}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {weekItem.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-zinc-200 text-black p-2 px-4 rounded-full font-medium hover:underline"
            >
              {showAll ? "Read less" : "Read more"}
            </button>
          </div>
        </motion.section>

        <motion.section
  className="w-full"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInUp}
>
  <div className="w-full text-center">
    <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-green-500 inline-block pb-2">
      FAQ's
    </h2>
  </div>

  <div className="space-y-4 flex flex-col items-center"> {/* Centering the cards */}
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        className="bg-slate-950 rounded-lg shadow px-6 py-4 cursor-pointer transition-all w-full max-w-4xl" // Increased max-w to 3xl for larger screens
        onClick={() => toggle(index)}
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
        custom={index}
      >
        <div className="flex justify-between gap-2 items-center">
          <h3 className="text-md font-medium w-[80vw] text-white">{faq.question}</h3>
          <ChevronDown
            className={`h-5 w-5 text-white transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : ""
            }`}
          />
        </div>
        {openIndex === index && (
          <p className="mt-3 text-white text-sm">{faq.answer}</p>
        )}
      </motion.div>
    ))}
  </div>
</motion.section>

      </div>
    </div>
  );
}

export default Aptitude;
