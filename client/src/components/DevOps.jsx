import { useState } from 'react';
import { faCheck, faDownload, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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
    <div className='min-h-screen w-full bg-gradient-to-t from-gray-800 to-black py-32'>

      {/* Container */}
      <div className='text-white w-[90vw] max-w-7xl mx-auto rounded-xl text-start flex flex-col place-items-start px-6 lg:px-16 py-10'>

        {/* Breadcrumb */}
        <Link to="/course">
          <h2 className='text-sm flex gap-2 cursor-pointer'>
            <span className='text-slate-400'>All courses &gt;</span>
            <span className='text-white'>Live</span>
          </h2>
        </Link>

        {/* Hero Section */}
        <div className='flex flex-col-reverse lg:flex-row justify-between w-full h-[95vh] lg:h-[50vh] py-12 gap-8'>
          {/* Left */}
          <div className='lg:w-[50%] flex flex-col justify-between'>
            <h1 className='text-3xl lg:text-4xl text-center lg:text-left font-extrabold leading-snug mb-12 lg:mb-6 tracking-tight'>
              Mastering DevOps: From Code to Cloud
            </h1>

            <div className='flex flex-col gap-4 text-lg'>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                End-to-End DevOps Pipeline Implementation
              </div>
              <div className='flex items-center'>
                <FontAwesomeIcon className='text-green-400 mr-2' icon={faCheck} />
                Hands-on with Industry-Leading Tools
              </div>
              <div className='text-green-400 font-medium'>
                Recommended for Aspiring DevOps Engineers and IT Professionals
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
              src="https://www.suse.com/assets/img/devops-process.png" // Changed image for DevOps
              alt="DevOps Hero"
            />
          </div>
        </div>

        {/* Footer Text Box */}
        <div className="mt-8 text-base w-full lg:w-[80%] mx-auto border-l-4 border-green-500 text-white p-6 rounded-md bg-gray-800 flex items-start gap-4 shadow-md ">
          
          <p className="text-slate-300 leading-relaxed">
            <FontAwesomeIcon className="text-green-400 text-xl mr-2 mt-1 " icon={faWarning} />
            Embark on a transformative journey into the world of DevOps. This program will equip you with the skills to streamline software development and deployment, making you an invaluable asset in any modern tech team.
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
            className='rounded-lg object-cover w-full h-full max-h-[300px]'
            src="https://wallpapercave.com/wp/wp7848338.jpg" // Changed image for DevOps
            alt="DevOps Preview"
          />
        </div>

        <div className='flex flex-col gap-4 lg:w-[60%] h-full justify-between'>
          <div>
            <h2 className="text-2xl hidden lg:block font-semibold text-white mb-2">
              <span className='border-b-2 border-green-500 pb-1'>Course Description</span>
            </h2>
            <p className='text-sm text-slate-300 leading-relaxed'>
              This comprehensive DevOps course covers everything from foundational concepts like Git and Linux to advanced topics such as CI/CD pipelines with Jenkins and GitLab CI, containerization with Docker and Kubernetes, configuration management with Ansible, and monitoring with Prometheus and Grafana. You'll gain hands-on experience and build real-world projects to prepare for a successful career in DevOps.
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
                src="https://static.vecteezy.com/system/resources/previews/012/201/708/original/programmer-software-developer-coding-in-computer-office-flat-purple-illustration-design-concept-vector.jpg" // Changed image for DevOps
                alt="About the course"
                className='w-full h-[300px] object-cover rounded-lg shadow-md'
              />
            </div>
            <p className='text-slate-300 leading-relaxed'>
              This course is meticulously designed to transform you into a proficient DevOps engineer. You'll dive deep into continuous integration, continuous delivery, infrastructure as code, containerization, and monitoring. With a strong emphasis on practical application, you'll gain the skills to automate and optimize the software development lifecycle.
            </p>
            <ul className='list-disc list-inside text-slate-400 space-y-1'>
              <li>Mastery of core DevOps principles and practices</li>
              <li>Hands-on experience with popular DevOps tools and technologies</li>
              <li>Building robust and automated CI/CD pipelines</li>
              <li>Understanding and implementing scalable containerized applications</li>
              <li>Practical knowledge of cloud platforms for DevOps deployments</li>
            </ul>
          </div>

          {/* Image */}
          <div className='lg:w-[40%] hidden lg:flex items-center justify-center'>
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/201/708/original/programmer-software-developer-coding-in-computer-office-flat-purple-illustration-design-concept-vector.jpg" // Changed image for DevOps
              alt="About the course"
              className='w-full h-[300px] object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>



      {/* Course Content */}
      <div className="max-w-8xl mx-auto w-full px-6 lg:px-20 my-24 ">
        <div className="w-full text-center lg:text-left">

          <h1 className="text-3xl font-bold mb-8 border-b-2 border-green-300 inline-block pb-1 ">
            Course Content</h1>
        </div>

        <div className="grid gap-6 ">
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

      {/* FAQ  */}
      <div className="w-full mt-24 ">
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

export default DevOps;