import React, { useState } from "react";
import ExploreCard from '../components/ExploreCard';
import { Link } from 'react-router-dom';
import OtherCards from '../components/OtherCards';
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

const Explore = () => {
  const exploreItems = [
    {
      title: 'Data Structures and Algorithms',
      color: 'bg-[linear-gradient(#4caf97,#51c6ab)]',
      img: '/assets/image/DSA.png',
      link: '/dsa'
    },
    {
      title: 'Practice DSA',
      color: 'bg-[linear-gradient(rgb(90,94,183),rgb(112,117,234))]',
      img: '/assets/image/Practice dsa.png',
      link: '/dsa'
    },
    {
      title: 'Web Development',
      color: 'bg-[linear-gradient(rgb(175,97,96),rgb(202,138,137))]',
      img: '/assets/image/Webdev.png',
      link: '/webdev'
    },
    {
      title: 'Python',
      color: 'bg-[linear-gradient(rgb(103,74,152),rgb(165,148,195))]',
      img: '/assets/image/Python.png',
      link: '/python'
    },
    {
      title: 'AI ML & Data Science',
      color: 'bg-[linear-gradient(rgb(37,135,156),rgb(84,195,219))]',
      img: '/assets/image/AIML.png',
      link: '/ml'
    },
    {
      title: 'Machine Learning',
      color: 'bg-[linear-gradient(rgb(69,114,182),rgb(120,158,218))]',
      img: '/assets/image/ML.png',
      link: '/ml'
    },
    {
      title: 'System Design',
      color: 'bg-[linear-gradient(rgb(204,115,62),rgb(234,163,120))]',
      img: '/assets/image/system.png',
      link: '/systemdesign'
    },
    {
      title: 'DevOps',
      color: 'bg-[linear-gradient(rgb(241,99,124),rgb(227,153,166))]',
      img: '/assets/image/devops.png',
      link: '/devops'
    },
  ];

  const sections = [
    {
      title: "Web Development",
      color: "bg-[#5486bd]",
      items: [
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'ReactJS' },
        { title: 'Node.js' },
        { title: 'Django' },
        { title: 'Frontend Development' },
        { title: 'Backend Development' },
        { title: 'Fullstack Projects' },
        { title: 'GraphQL' },
        { title: 'TypeScript' }
      ],
      flex: true
    },
    {
      title: "AI ML & Data Science",
      color: "bg-[#ae84d1]",
      items: [
        { title: 'Machine Learning', link: '/ml' },
        { title: 'Data Science' },
        { title: 'Data Analysis' },
        { title: 'Data Visualization' },
        { title: 'Deep Learning' },
        { title: 'Natural Language Processing' },
        { title: 'Computer Vision' }
      ],
      flex: true
    },
    {
      title: "Programming Languages",
      color: "bg-[#d5a05a]",
      items: [
        { title: 'Python', link: '/python' },
        { title: 'Java', link:'/java' },
        { title: 'C++' , link:'/cpp' },
        { title: 'C' , link:'/c' },
        { title: 'R' },
        { title: 'PHP' },
        { title: 'Flutter' },
        { title: 'Golang' },
        { title: 'JavaScript' },
        { title: 'Kotlin' }
      ],
      flex: true
    },
    {
      title: "Interview Preparation",
      color: "bg-[#cc8f8e]",
      items: [
        { title: 'Company Preparation' },
        { title: 'SDE Sheet' },
        { title: 'Puzzles' },
        { title: 'Aptitude' },
        { title: 'Mock Interviews' },
        { title: 'Problem of the day' },
        { title: 'Interview Experiences' },
        { title: 'Interview Questions' },
        { title: 'Resume Building' }
      ],
      flex: true
    },
    {
      title: "CS Subjects",
      color: "bg-[#79abb6]",
      items: [
        { title: 'Operating System' },
        { title: 'DBMS' },
        { title: 'Computer Networks' },
        { title: 'Computer Architecture' },
        { title: 'Software Engineering' },
        { title: 'Compiler Design' },
        { title: 'Theory of Computation' },
        { title: 'Digital Logic Design' }
      ],
      flex: true
    },
    {
      title: "Databases",
      color: "bg-[#8591cc]",
      items: [
        { title: 'SQL' },
        { title: 'MongoDB' },
        { title: 'MySQL' },
        { title: 'PostgreSQL' },
        { title: 'Oracle' },
        { title: 'SQLite' },
        { title: 'Redis' },
        { title: 'Cassandra' }
      ],
      flex: true
    },
    {
      title: "DevOps",
      color: "bg-[#a0b783]",
      items: [
        { title: 'Docker' },
        { title: 'Kubernetes' },
        { title: 'Jenkins' },
        { title: 'Ansible' },
        { title: 'Terraform' },
        { title: 'AWS' },
        { title: 'Azure' },
        { title: 'GCP' }
      ],
      flex: true
    },
    {
      title: "Tutorials",
      color: "bg-[#6a93b1]",
      items: [
        { title: 'System Design', link: '/systemdesign' },
        { title: 'Android' },
        { title: 'Linux' },
        { title: 'Design Pattern' },
        { title: 'Software Testing' },
        { title: 'Product Management' },
        { title: 'Excel' },
        { title: 'Cloud Computing' }
      ],
      flex: true
    }
  ];

  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpanded = (sectionTitle) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  return (
    <div className="font-sans">
      {/* Background Image Section */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="bg-[url(/assets/image/explore_bg.webp)] bg-no-repeat bg-cover bg-center min-h-screen pt-36 pb-20"
      ></motion.div>

      <div className="bg-gradient-to-b from-black via-blue-950 to-slate-950 py-10">
        <motion.section
          className="px-6 md:pt-10 md:px-10 pb-10 -mt-[85vh] md:-mt-[75vh] w-[90vw] md:w-[90vw] xl:w-[80vw] flex flex-col justify-around space-y-0 mx-auto border-2 border-slate-900 rounded-3xl shadow-2xl bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
          style={{ maxWidth: "1200px" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold my-4 text-center text-white">Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-2 place-items-center ">
            {exploreItems.map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex justify-center "
              >
                <Link to={item.link} className="w-full">
                  <div
                    className={`p-6 rounded-xl ${item.color} relative overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 h-[260px] w-[260px] md:w-[200px] xl:w-[250px] `}
                    // style={{ width: "200px", height: "260px" }}
                  >
                    <div className="w-full h-[150px] bg-white rounded-lg flex items-center justify-center p-4">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                    <h3 className="text-white font-bold mt-2 text-center">{item.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Category Sections */}
        {sections.map((section, i) => {
          const displayItems = expandedSections[section.title] ? section.items : section.items.slice(0, 4);
          const showViewAllButton = section.items.length > 4;

          return (
            <motion.section
              key={i}
              className="py-10 px-4 w-[90vw] md:w-[80vw] flex flex-col mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex justify-between items-center mb-6 gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-left my-2 text-white">{section.title}</h2>
                {showViewAllButton && (
                  <button
                    onClick={() => toggleExpanded(section.title)}
                    className="border border-white text-white px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:text-black hover:shadow-lg transition duration-300 flex-shrink-0 whitespace-nowrap"
                  >
                    {expandedSections[section.title] ? 'View Less' : 'View All'}
                  </button>
                )}
              </div>
              {section.flex ? (
                <div className="flex flex-wrap justify-center gap-4">
                  {displayItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="w-full sm:w-[240px]"
                      custom={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {item.link ? (
                        <Link to={item.link}><OtherCards title={item.title} color={section.color} /></Link>
                      ) : (
                        <OtherCards title={item.title} color={section.color} />
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : null}
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
