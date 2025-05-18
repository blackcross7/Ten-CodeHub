import React from "react";
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
},

 {
    title: 'Practice DSA',
    color: 'bg-[linear-gradient(rgb(90,94,183),rgb(112,117,234))]',
    img: '/assets/image/Practice dsa.png',
  },
  {
    title: 'Web Development',
    color: 'bg-[linear-gradient(rgb(175,97,96),rgb(202,138,137))]',
    img: '/assets/image/Webdev.png',
  },
  {
    title: 'Python',
    color: 'bg-[linear-gradient(rgb(103,74,152),rgb(165,148,195))]',
    img: '/assets/image/Python.png',
  },
  {
    title: 'AI ML & Data Science',
    color: 'bg-[linear-gradient(rgb(37,135,156),rgb(84,195,219))]',
    img: '/assets/image/AIML.png',
  },
  {
    title: 'Machine Learning',
    color: 'bg-[linear-gradient(rgb(69,114,182),rgb(120,158,218))]',
    img: '/assets/image/ML.png',
  },
  {
    title: 'System Design',
    color: 'bg-[linear-gradient(rgb(204,115,62),rgb(234,163,120))]',
    img: '/assets/image/system.png',
  },
  {
    title: 'DevOps',
    color: 'bg-[linear-gradient(rgb(241,99,124),rgb(227,153,166))]',
    img: '/assets/image/devops.png',
  },
];

    const sections = [
        {
            title: "Web Development",
            color: "bg-[#5486bd]",
            items: ['HTML', 'CSS', 'ReactJS', 'Node.js', 'Django', 'Frontend Development', 'Backend Development', 'Fullstack Projects'],
            cols: 'grid-cols-2 md:grid-cols-4'
        },
        {
            title: "AI ML & Data Science",
            color: "bg-[#ae84d1]",
            items: ['Machine Learning', 'Data Science', 'Data Analysis', 'Data Visualization', 'Deep Learning', 'Natural Language Processing'],
            cols: 'grid-cols-2 md:grid-cols-3'
        },
        {
            title: "Programming Languages",
            color: "bg-[#d5a05a]",
            items: ['Python', 'Java', 'C++', 'C', 'R', 'PHP', 'Flutter', 'Golang'],
            flex: true
        },
        {
            title: "Interview Preparation",
            color: "bg-[#cc8f8e]",
            items: ['Company Preparation', 'SDE Sheet', 'Puzzles', 'Aptitude', 'Mock Interviews', 'Problem of the day', 'Interview Experiences', 'Interview Questions'],
            flex: true
        },
        {
            title: "CS Subjects",
            color: "bg-[#79abb6]",
            items: ['Operating System', 'DBMS', 'Computer Networks', 'Computer Architecture', 'Software Engineering', 'Compiler Design', 'Theory of Computation', 'Digital Logic Design'],
            flex: true
        },
        {
            title: "Databases",
            color: "bg-[#8591cc]",
            items: ['SQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'SQLite', 'Redis', 'Cassandra'],
            flex: true
        },
        {
            title: "DevOps",
            color: "bg-[#a0b783]",
            items: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'Terraform', 'AWS', 'Azure', 'GCP'],
            flex: true
        },
        {
            title: "Tutorials",
            color: "bg-[#6a93b1]",
            items: ['System Design', 'Android', 'Linux', 'Design Pattern', 'Software Testing', 'Product Management', 'Excel', 'Cloud Computing'],
            flex: true
        },
    ];

    return (
        <div className="font-sans pt-36 bg-[linear-gradient(to_bottom,#bbf7d0_0%,#ecfccb_20vh,#fefce8_40vh,#ffffff_100vh)]">
           <motion.section
             className="pt-2 px-6 md:pt-10 md:px-10 pb-10 mb-0 min-h-[80vh] w-[90vw] md:w-[90vw] xl:w-[80vw] flex flex-col  justify-around space-y-0 mx-auto border-2 border-gray-300  rounded-3xl shadow-transparent shadow-2xl"
             style={{
               maxWidth: "1200px",
               margin: "0.5rem auto 0.5rem",
               
             }}
             initial="hidden"
             animate="visible"
             variants={fadeInUp}
           >
             <h2 className="text-2xl font-bold mb-4 text-center text-black">Explore</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
               {exploreItems.map((item, idx) => (
                 <motion.div
                   key={idx}
                   custom={idx}
                   variants={fadeInUp}
                   initial="hidden"
                   animate="visible"
                   className="flex justify-center"
           
                 >
                   <div className={`p-6 rounded-xl ${item.color} relative overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105`}
                   style={{ width: "250px", height: "260px" }} // fixed card size
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
                 </motion.div>
               ))}
             </div>
           </motion.section>
            {sections.map((section, i) => (
                <motion.section 
                    key={i} 
                    className="py-10 px-4 w-[90vw] md:w-[80vw] flex flex-col mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <h2 className="text-2xl font-bold text-center md:text-left my-2 text-black">{section.title}</h2>
                        <Link to='/course' className='border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300'>View All</Link>
                    </div>
                    {section.flex ? (
                        <div className="flex flex-wrap justify-center gap-4">
                            {section.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="w-full sm:w-[240px]"
                                    custom={idx}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <OtherCards title={item} color={section.color} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className={`grid ${section.cols} gap-4`}>
                            {section.items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    custom={idx}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <OtherCards title={item} color={section.color} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.section>
            ))}
        </div>
    );
};

export default Explore;
