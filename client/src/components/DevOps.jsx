import { useState } from 'react';
import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

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
    week: "Module 1: Introduction to DevOps & Version Control",
    topics: [
      "Understanding DevOps: Principles, culture, and benefits.",
      "Version Control with Git: Basics, branching, merging, and remote repositories.",
      "GitHub/GitLab Essentials: Collaborative workflows and best practices.",
    ],
  },
  {
    week: "Module 2: Linux Fundamentals & Scripting",
    topics: [
      "Linux Command Line Interface: Essential commands and navigation.",
      "Shell Scripting: Automating tasks with Bash scripts.",
      "User and Process Management: Permissions, processes, and basic troubleshooting.",
    ],
  },
  {
    week: "Module 3: CI/CD with Jenkins & GitLab CI",
    topics: [
      "Introduction to Continuous Integration (CI): Concepts and tools.",
      "Jenkins Fundamentals: Installation, jobs, pipelines, and plugins.",
      "GitLab CI/CD: .gitlab-ci.yml, stages, and runners.",
    ],
  },
  {
    week: "Module 4: Containerization with Docker",
    topics: [
      "Docker Basics: Images, containers, Dockerfile, and Docker Hub.",
      "Container Orchestration: Introduction to Docker Compose.",
    ],
  },
  {
    week: "Module 5: Container Orchestration with Kubernetes",
    topics: [
      "Kubernetes Architecture: Pods, deployments, services, and namespaces.",
      "Deploying Applications on Kubernetes: kubectl commands and YAML configurations.",
      "Scaling and Rolling Updates: Managing application lifecycles.",
    ],
  },
  {
    week: "Module 6: Configuration Management with Ansible",
    topics: [
      "Ansible Introduction: Playbooks, inventories, and modules.",
      "Automating Infrastructure: Managing servers and applications.",
    ],
  },
  {
    week: "Module 7: Monitoring & Logging",
    topics: [
      "Introduction to Monitoring: Prometheus and Grafana for metrics and visualization.",
      "Logging with ELK Stack: Elasticsearch, Logstash, and Kibana.",
    ],
  },
  {
    week: "Module 8: Cloud Platforms & Advanced Concepts",
    topics: [
      "Introduction to Cloud (AWS/Azure/GCP): Core services relevant to DevOps.",
      "Infrastructure as Code (IaC): Terraform basics.",
      "Security in DevOps (DevSecOps): Best practices and tools.",
    ],
  },
  {
    week: "Projects",
    topics: [
      "CI/CD Pipeline for a Web Application",
      "Containerizing and Deploying a Microservice",
      "Automating Infrastructure with Ansible",
      "Monitoring and Alerting Setup",
    ],
  },
];

const tools = [
  { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
  { name: 'Jenkins', logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png' },
  { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
  { name: 'Kubernetes', logo: 'https://user-images.githubusercontent.com/19824574/41482054-47a3a702-70a2-11e8-9561-de51c5f71220.png' },
  { name: 'Ansible', logo: 'https://www.svgrepo.com/show/341603/ansible.svg' },
  { name: 'Prometheus', logo: 'https://images.seeklogo.com/logo-png/27/2/prometheus-logo-png_seeklogo-273822.png' },
  { name: 'Grafana', logo: 'https://www.stackhero.io/assets/src/images/servicesLogos/openGraphVersions/grafana.png?1ae0c39d' },
  { name: 'Terraform', logo: 'https://sretips.com.br/images/iac/IaC.png' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png' },
  { name: 'Linux', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png' },
  { name: 'Python', logo: 'https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png' },
  { name: 'Bash', logo: 'https://www.svgrepo.com/show/376359/bash.svg' },
  { name: 'ELK Stack', logo: 'https://www.javahotchocolate.com/notes/elk-images/elasticsearch-logo.png' },
  { name: 'GitLab', logo: 'https://cdn.freebiesupply.com/logos/large/2x/gitlab-logo-png-transparent.png' },
];

const faqs = [
  {
    question: "Is prior coding experience required for this DevOps course?",
    answer:
      "While some familiarity with basic programming concepts is helpful, this course is designed to accommodate learners from various backgrounds. We'll cover fundamental scripting and command-line usage.",
  },
  {
    question: "What kind of career opportunities can I pursue after completing this course?",
    answer:
      "This course prepares you for roles like DevOps Engineer, Site Reliability Engineer (SRE), Cloud Engineer, Release Engineer, and Automation Engineer.",
  },
  {
    question: "How much time should I dedicate to this course per week?",
    answer: "The course duration typically ranges from 8 to 12 weeks depending on your pace and how much time you can dedicate to hands-on labs and projects.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer: "Yes, upon successful completion of the course, you will receive a certificate of accomplishment.",
  },
];

function DevOps() {

  const [showAll, setShowAll] = useState(false);

  const displayedContent = showAll ? courseData : courseData.slice(0, 4);

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Wrap the entire component's main div with motion.div
    <motion.div
      className='min-h-screen w-full bg-gradient-to-t from-gray-800 to-black py-32'
      initial="hidden" // Initial state for the entire page
      animate="visible" // Animate to visible state on mount
      variants={fadeInUp} // Use the fadeInUp variant for the whole page
    >

      {/* Container */}
      <motion.div
        className='text-white w-[90vw] max-w-7xl mx-auto rounded-xl text-start flex flex-col place-items-start px-6 lg:px-16 py-10'
        variants={fadeInUp} // Apply fadeInUp to this container
      >

        {/* Breadcrumb */}
        <motion.div variants={fadeInUp} custom={0.5}> {/* Use custom prop for staggered animation */}
          <Link to="/course" >
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
            variants={fadeInUp} // Apply fadeInUp to the left hero section
            custom={1} // Stagger delay
          >
            <h1 className='text-3xl lg:text-4xl text-center lg:text-left font-extrabold leading-snug mb-12 lg:mb-6 tracking-tight'>
              Mastering DevOps: From Code to Cloud
            </h1>

            <div className='flex flex-col gap-4 text-lg'>
              <motion.div variants={fadeInUp} custom={1.2} className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                End-to-End DevOps Pipeline Implementation
              </motion.div>
              <motion.div variants={fadeInUp} custom={1.4} className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Hands-on with Industry-Leading Tools
              </motion.div>
              <motion.div variants={fadeInUp} custom={1.6} className='text-green-400 font-medium'>
                Recommended for Aspiring DevOps Engineers and IT Professionals
              </motion.div>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-4 mt-10 md:mt-6'>
              <motion.button
                className='bg-green-600 w-full hover:bg-green-700 text-white lg:w-52 py-2 rounded-md font-semibold transition'
                variants={fadeInUp}
                custom={1.8}
                whileHover={whileHoverScale} // Apply scale on hover
              >
                Sign Up Now
              </motion.button>
              <motion.button
                className='border border-green-500 text-green-400 hover:bg-green-100 hover:text-green-700 w-full lg:w-52 py-2 rounded-md font-semibold transition flex items-center justify-center gap-2'
                variants={fadeInUp}
                custom={2}
                whileHover={whileHoverScale} // Apply scale on hover
              >
                Download Brochure <FontAwesomeIcon icon={faDownload} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className='lg:w-[50%] flex items-center justify-center lg:justify-end'
            initial={{ opacity: 0, x: 50 }} // Slide in from right
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }} // Delayed animation for the image
          >
            <img
              className='w-full max-w-lg'
              src="https://www.suse.com/assets/img/devops-process.png"
              alt="DevOps Hero"
            />
          </motion.div>
        </div>

        {/* Footer Text Box */}
        <motion.div
          className="mt-8 lg:mt-28 xl:mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md "
          variants={fadeInUp}
          custom={2.2} // Stagger delay
        >
          <FontAwesomeIcon className="text-green-400 text-xl mt-1" icon={faWarning} />
          <p className="text-slate-300 leading-relaxed">
            Embark on a transformative journey into the world of DevOps. This program will equip you with the skills to streamline software development and deployment, making you an invaluable asset in any modern tech team.
          </p>
        </motion.div>
      </motion.div>

      {/* Course Description */}
      <motion.div
        className='w-[90vw] max-w-7xl mx-auto py-8 p-4 rounded-xl flex flex-col lg:flex-row justify-center items-stretch gap-10 bg-gradient-to-b lg:bg-gradient-to-r from-gray-800 to-black shadow-lg my-24'
        initial="hidden"
        whileInView="visible" // Animate when it enters the viewport
        viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% visible
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
            src="https://wallpapercave.com/wp/wp7848338.jpg"
            alt="DevOps Preview"
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
              This comprehensive DevOps course covers everything from foundational concepts like Git and Linux to advanced topics such as CI/CD pipelines with Jenkins and GitLab CI, containerization with Docker and Kubernetes, configuration management with Ansible, and monitoring with Prometheus and Grafana. You'll gain hands-on experience and build real-world projects to prepare for a successful career in DevOps.
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
                src="https://static.vecteezy.com/system/resources/previews/012/201/708/original/programmer-software-developer-coding-in-computer-office-flat-purple-illustration-design-concept-vector.jpg"
                alt="About the course"
                className='w-full h-auto max-h-[250px] object-contain rounded-lg shadow-md'
              />
            </motion.div>
            <p className='text-slate-300 leading-relaxed text-center lg:text-left'>
              This course is meticulously designed to transform you into a proficient DevOps engineer. You'll dive deep into continuous integration, continuous delivery, infrastructure as code, containerization, and monitoring. With a strong emphasis on practical application, you'll gain the skills to automate and optimize the software development lifecycle.
            </p>
            <ul className='list-disc list-inside text-slate-400 space-y-1 px-4'>
              <motion.li variants={fadeInUp} custom={0.9}>Mastery of core DevOps principles and practices</motion.li>
              <motion.li variants={fadeInUp} custom={1.1}>Hands-on experience with popular DevOps tools and technologies</motion.li>
              <motion.li variants={fadeInUp} custom={1.3}>Building robust and automated CI/CD pipelines</motion.li>
              <motion.li variants={fadeInUp} custom={1.5}>Understanding and implementing scalable containerized applications</motion.li>
              <motion.li variants={fadeInUp} custom={1.7}>Practical knowledge of cloud platforms for DevOps deployments</motion.li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className='lg:w-[40%] hidden lg:flex items-center justify-center'
            initial={{ opacity: 0, x: 50 }} // Slide in from right
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/201/708/original/programmer-software-developer-coding-in-computer-office-flat-purple-illustration-design-concept-vector.jpg"
              alt="About the course"
               className="w-[90%] h-auto object-contain rounded-lg shadow-md"
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
            <motion.div // Wrap each week item
              key={index}
              className="bg-slate-900 text-gray-300 shadow-lg rounded-2xl p-6 border border-gray-200 cursor-text"
              variants={fadeInUp}
              custom={index * 0.2} // Stagger effect for each week
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
                    className="" /* Adjust this value as needed */
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
            variants={fadeInUp} // Animate the button itself
            custom={displayedContent.length * 0.2 + 0.5} // Ensure it animates after the last card
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
              <motion.div // Wrap each tool card
                key={index}
                className="bg-gray-800 p-4 rounded-xl flex flex-col items-center shadow"
                variants={fadeInUp} // Apply fadeInUp to each tool card
                custom={index * 0.1} // Stagger effect for tools
                whileHover={whileHoverScale} // Apply scale on hover
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
              <motion.div // Wrap each FAQ item
                key={index}
                className="bg-slate-950 rounded-lg shadow px-6 py-4 cursor-pointer transition-all"
                onClick={() => toggle(index)}
                variants={fadeInUp} // Apply fadeInUp to each FAQ item
                custom={index * 0.1} // Stagger effect for FAQs
                whileHover={{ scale: 1.02 }} // Slight scale on hover
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <motion.div // Animate the chevron icon
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                   <ChevronDown className="h-5 w-5 text-white" />

                  </motion.div>
                </div>
                {/* Use AnimatePresence for exit animations on accordions */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="mt-3 text-white text-sm"
                      initial="hidden"
                      animate="visible"
                      exit="exit" // Important for exit animation
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

export default DevOps;