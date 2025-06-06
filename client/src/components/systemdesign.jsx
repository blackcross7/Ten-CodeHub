import { useState } from 'react';
import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define your animation variants
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

// Variants for scaling effect on hover
const whileHoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

// Variants for FAQ accordion content (slide down/up)
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
      "Introduction to System Design: Understand the basics of system design, including scalability, reliability, and maintainability.",
      "Designing Scalable Systems: Learn how to design systems that can handle increased load and traffic.",
      "Load Balancing: Explore different load balancing techniques and their applications.",
    ],
  },
  {
    week: "Week 2",
    topics: [
      "Database Design: Understand the principles of database design, normalization, and denormalization.",
      "Caching Strategies: Learn about caching mechanisms and how to implement them effectively.",
      "Microservices Architecture: Explore the benefits and challenges of microservices in system design.",
    ],
  },
  {
    week: "Week 3",
    topics: [
      "API Design: Learn how to design RESTful APIs and understand best practices.",
      "Message Queues: Understand the role of message queues in system design and how to implement them.",
      "Data Consistency: Explore strategies for maintaining data consistency across distributed systems.",
    ],
  },
  {
    week: "Week 4",
    topics: [
      "Monitoring and Logging: Learn about monitoring tools and logging best practices for system health.",
      "Security in System Design: Understand the importance of security and how to implement secure systems.",
    ],
  },
  {
    week: "Week 5",
    topics: [
      "Designing for Failure: Learn how to design systems that can gracefully handle failures.",
      "Scalability Patterns: Explore various patterns for scaling applications effectively.",
      "Real-world Case Studies: Analyze real-world systems and their design choices.",
    ],
  },
  {
    week: "Week 6",
    topics: [
      "Performance Optimization: Learn techniques for optimizing system performance.",
      "Cloud Services: Understand how to leverage cloud services for system design.",
      "Deployment Strategies: Explore different deployment strategies and their implications.",
    ],
  },
  {
    week: "Week 7",
    topics: [
      "System Design Interviews: Prepare for system design interviews with practical exercises.",
      "Hands-on Project: Work on a capstone project to apply your system design knowledge.",
    ],
  },
  {
    week: "Projects",
    topics: [
      "Design a URL Shortener",
      "Build a Chat Application",
      "Create a Social Media Feed",
      "Develop a Video Streaming Service",
      "Implement a Ride-Sharing System",
    ],
  },
];

const tools = [
  { name: 'Lucidchart', logo: 'https://e7.pngegg.com/pngimages/625/214/png-clipart-lucidchart-logo-thumbnail-tech-companies-thumbnail.png' },
  { name: 'Draw.io', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/2048px-Diagrams.net_Logo.svg.png' },
  { name: 'AWS', logo: 'https://www.pngmart.com/files/23/Aws-Logo-PNG-Image.png' },
  { name: 'Microsoft Visio', logo: 'https://seeklogo.com/images/M/microsoft-visio-logo-616F638EA1-seeklogo.com.png' },
  { name: 'Postman', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtT98yfidU8hGRVTgArB2jtr4hxWjvFYr4g&s' },
  { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
  { name: 'Kubernetes', logo: 'https://images.seeklogo.com/logo-png/27/1/kubernetes-logo-png_seeklogo-273594.png' },
  { name: 'Terraform', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3yP8N1mLoNDdo2gkMzRQfwMpw3ZjiGZeoQ&s' },
  { name: 'Prometheus', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDWOUUW8m3sTPB4OFNxDm3weHS1Y0ScE3cA&s' },
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

function SystemDesign() {

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
          <Link to="/course">
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
              System Design Course<br />A Complete Guide
            </h1>

            <div className='flex flex-col gap-4 text-lg'>
              <motion.div variants={fadeInUp} custom={1.2} className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Comprehensive Learning
              </motion.div>
              <motion.div variants={fadeInUp} custom={1.4} className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Industry Readiness
              </motion.div>
              <motion.div variants={fadeInUp} custom={1.6} className='text-green-400 font-medium'>
                Recommended for Students and Working Professionals
              </motion.div>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-4 mt-10 md:mt-6'>
              <motion.button
                className='bg-green-600 w-full hover:bg-green-700 text-white lg:w-52 py-2 rounded-md font-semibold transition'
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
            className='lg:w-[50%] flex items-center justify-center lg:justify-end'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <img
              className='w-full max-w-lg'
              src="/assets/image/systemdesign_page_hero.png"
              alt="System Design Hero"
            />
          </motion.div>
        </div>

        {/* Footer Text Box */}
        <motion.div
          className="mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md "
          variants={fadeInUp}
          custom={2.2}
        >
          <FontAwesomeIcon className="text-green-400 text-xl mt-1" icon={faWarning} />
          <p className="text-slate-300 leading-relaxed">
            Join thousands of learners mastering System Design and landing top tech roles. This structured program guides you from core concepts to building real-world applications — all in one streamlined journey.
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
            src="/assets/image/SystemDesign_image.jpg"
            alt="System Design Preview"
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
              This course is your roadmap from mastering System Design to becoming a confident, job-ready developer. Whether you're pursuing full-stack development or focusing on a niche tech stack, you'll gain the core skills to build real-world solutions from the ground up.
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

          {/* Text Content */}
          <motion.div className='lg:w-[60%] w-full text-white space-y-6' variants={fadeInUp} custom={0.5}>
            <div className="w-full text-center lg:text-left">
              <h3 className='text-2xl lg:text-3xl text-white font-bold border-b-2 border-green-300 inline-block pb-1'>
                About The Course
              </h3>
            </div>
            <motion.div className='lg:w-[40%] lg:hidden flex items-center justify-center' variants={fadeInUp} custom={0.7}>
              <img
                src="/assets/image/systemdesign_page_about.jpg"
                alt="About the course"
                className='w-full h-[300px] object-cover rounded-lg shadow-md'
              />
            </motion.div>
            <p className='text-slate-300 leading-relaxed text-center lg:text-left'>
              The course begins with a solid foundation in System Design — a must-have for any developer. As you progress, you'll build hands-on projects, explore popular frameworks, and develop a strong understanding of scalable code and system design. Whether you're a student or a professional, this course adapts to your goals and equips you for real-world tech challenges.
            </p>
            <ul className='list-disc list-inside text-slate-400 space-y-1 px-4'>
              <motion.li variants={fadeInUp} custom={0.9}>Foundational mastery of System Design concepts and techniques</motion.li>
              <motion.li variants={fadeInUp} custom={1.1}>Practical coding problems and industry-standard solutions</motion.li>
              <motion.li variants={fadeInUp} custom={1.3}>Progressive learning from beginner to advanced levels</motion.li>
              <motion.li variants={fadeInUp} custom={1.5}>Perfect for full-stack, backend, Android, or data science pathways</motion.li>
              <motion.li variants={fadeInUp} custom={1.7}>Project-based learning with real-world applications</motion.li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className='lg:w-[40%] hidden lg:flex items-center justify-center'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="/assets/image/systemdesign_page_about.jpg"
              alt="About the course"
              className='w-full h-[300px] object-cover rounded-lg shadow-md'
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Course Content */}
      <motion.div
        className="max-w-8xl mx-auto w-full px-6 lg:px-20 my-24 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="w-full text-center lg:text-center">
          <h1 className="text-3xl font-bold mb-8 border-b-2 border-green-300 inline-block pb-1 ">
            Course Content</h1>
        </div>

        <div className="grid gap-6 ">
          {displayedContent.map((weekItem, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 text-gray-300 shadow-lg rounded-2xl p-6 border border-gray-200 cursor-text"
              variants={fadeInUp}
              custom={index * 0.2}
            >
              <h3 className="text-xl font-semibold text-zinc-500 mb-4">
                {weekItem.week}
              </h3>
              <ul className="list-disc list-inside space-y-2">
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
            className=" bg-zinc-200 p-2 px-4 rounded-full font-medium hover:underline"
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
        <div className="w-[90vw] max-w-6xl mx-auto ">
          <div className="w-full text-center lg:text-center">
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
        className="w-full mt-24 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="w-[90vw] max-w-6xl mx-auto">
          <div className="w-full text-center lg:text-center">
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
                variants={fadeInUp}
                custom={index * 0.1}
                whileHover={{ scale: 1.02 }}
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
                <AnimatePresence>
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
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}

export default SystemDesign;