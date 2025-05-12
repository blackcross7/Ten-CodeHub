import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import ExploreCard from '../components/ExploreCard';
import OtherCards from '../components/OtherCards';
import InfoCard from '../components/OtherCards';

const Home = () => {

  const placeholders = [
    "CodeHub Courses",
    "Data Structures & Algorithms",
    "Web Development",
    "Complete Interview Preparation",
    "Must Do Coding Questions",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = placeholders[currentPlaceholderIndex];

    if (charIndex < currentText.length) {
      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearInterval(typingInterval);
    } else {
      const nextTextTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
      }, 1000);

      return () => clearTimeout(nextTextTimeout);
    }
  }, [charIndex, currentPlaceholderIndex, placeholders]);




  const courses = [
    {
      title: 'DSA to Development: A Complete Guide',
      level: 'Beginner to Advance',
      interested: '558K+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/504/Mobile/Other/Course_DSA_to_Dev_1720846081.webp',
      link: '#'
    },
    {
      title: 'JAVA Backend Development - Live',
      level: 'Intermediate and Advance',
      interested: '304K+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/227/Mobile/Other/Course_Backend_1720846992.webp',
      link: '#'
    },
    {
      title: 'Tech Interview 101 -From DSA to System Design',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/458/Mobile/Other/Course_Tech_Int_1720846791.webp',
      link: '#'
    },
    {
      title: 'Full Stack Development with React & Node JS - Live',
      level: 'Beginner to Advance',
      interested: '345k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152.webp',
      link: '#'

    },
    {
      title: 'Java Programming Online Course [Complete Beginner to Advanced]',
      level: 'Beginner to Advance',
      interested: '291k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/CourseJavaProgrammin_1716371938.webp',
      link: '#'

    },
    {
      title: 'C++ Programming Course Online - Complete Beginner to Advanced',
      level: 'Beginner to Advance',
      interested: '425k+',
      img: 'https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1723009538.webp',
      link: '#'

    },

    // Add more courses here
  ];

  const exploreItems = [
    { title: 'Data Structures and Algorithms', color: 'bg-[linear-gradient(#4caf97,_#51c6ab)] ' },
    { title: 'Practice DSA', color: 'bg-[linear-gradient(rgb(90,_94,_183),_rgb(112,_117,_234))]' },
    { title: 'Web Development', color: ' bg-[linear-gradient(rgb(175,_97,_96),_rgb(202,_138,_137))] ' },
    { title: 'Python', color: 'bg-[linear-gradient(rgb(103,_74,_152),_rgb(165,_148,_195))] ' },
    { title: 'AI ML & Data Science', color: ' bg-[linear-gradient(rgb(37,_135,_156),_rgb(84,_195,_219))]' },
    { title: 'Machine Learning', color: 'bg-[linear-gradient(rgb(69,_114,182),_rgb(120,_158,_218))] ' },
    { title: 'System Design', color: 'bg-[linear-gradient(rgb(204,_115,_62),_rgb(234,_163,_120))]  ' },
    { title: 'DevOps', color: 'bg-[linear-gradient(rgb(241,99,124),_rgb(227,_153,_166))] ' }
  ];


  const infoItems = [
    { title: 'Job for You', color: 'bg-[#ae84d1]' },
    { title: 'Hire With Us', color: 'bg-[#ae84d1]' },
    { title: 'Advertisement Required', color: 'bg-[#ae84d1]' },
    { title: 'Placement Time', color: 'bg-[#ae84d1]' }
  ];

  return (
    <div className="font-sans bg-[linear-gradient(to_bottom,_#bbf7d0_0%,_#ecfccb_10vh,_#fefce8_40vh,_#ffffff_60vh)] pt-36 ">

      {/* Hero Section */}
      <section className=" py-24 px-4 text-center ">
        <h1 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-gray-800">
          Hello, What Do You Want To Learn?
        </h1>

        <div className="max-w-[60vw] p-4 mx-auto mb-6 relative">
          <input
            type="text"
            placeholder={displayedText}
            className="w-full border border-gray-300 px-4 py-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c4ecc5] font-semibold text-lg"
            onFocus={(e) => e.target.placeholder = ''}
          />
          <img src="/assets/image/search-icon.gif" alt="Search" 
          className='absolute top-1/2 right-10 transform -translate-y-1/2 w-8 h-8'
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Full Stack Live Classes',
            'DSA: Basic To Advanced Course',
            'Master DS & ML',
          ].map((label, idx) => (
            <Link
              to="#"
              key={idx}
              className="bg-white text-black  border-2 border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-500 transition duration-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>



      {/* Courses Section */}
      <section className="py-12 px-4 w-[80vw] flex flex-col items-center mx-auto">
        <div className='flex justify-between items-center w-full '>
          <h2 className="text-2xl font-bold text-center mb-10">Courses</h2>

          <Link to='/course' className='border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300'>View All</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </section>

      {/* Must Explore */}
      <section className="py-10 px-4 w-[80vw] flex flex-col  mx-auto">
        <h2 className="text-2xl font-bold  mb-6">Must Explore</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {infoItems.map((item, idx) => (
            <InfoCard key={idx} title={item.title} color={item.color} />
          ))}
        </div>
      </section>

      {/* Explore Categories */}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <h2 className="text-2xl font-bold mb-6">Explore</h2>
        <div className="flex flex-wrap gap-10 p-4 justify-center">
          {exploreItems.map((item, idx) => (
            <ExploreCard key={idx} title={item.title} color={item.color} />
          ))}
        </div>
      </section>

      {/* Web Dev Section */}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Web Devlopement</h2>
          <Link to='/course' className='border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300'>View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'HTML',
            'CSS',
            'ReactJS',
            'Node.js',
            'Django',
            'Frontend Development',
            'Backend Development',
            'Fullstack Projects'
          ].map((item, idx) => (
            <OtherCards key={idx} title={item} color="bg-[#5486bd]" />
          ))}
        </div>
      </section>

      {/* AI Section */}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">AI ML & Data Science</h2>
          <Link to='/course' className='border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300'>View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Machine Learning',
            'Data Science',
            'Data Analysis',
            'Data Visualization',
            'Deep Learning',
            'Natural Language Processing'
          ].map((item, idx) => (
            <OtherCards key={idx} title={item} color="bg-[#ae84d1]" />
          ))}
        </div>
      </section>

      {/*Programing Languages*/}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Programming Languages</h2>
          <Link
            to="/course"
            className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 ">
          {[
            'Python',
            'Java',
            'C++',
            'C',
            'R',
            'PHP',
            'Flutter',
            'Golang'
          ].map((item, idx) => (
            <div key={idx} className="w-[240px]">
              <OtherCards title={item} color="bg-[#d5a05a]" />
            </div>
          ))}
        </div>
      </section>

      {/*Interview Preparation*/}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Interview Preparation</h2>
          <Link
            to="/course"
            className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 ">
          {[
            'Company Preparation',
            'SDE Sheet',
            'Puzzles',
            'Aptitude',
            'Mock Interviews',
            'Problem of the day',
            'Interview Experiences',
            'Interview Questions',

          ].map((item, idx) => (
            <div key={idx} className="w-[240px]">
              <OtherCards title={item} color="bg-[#cc8f8e]" />
            </div>
          ))}
        </div>
      </section>

      {/*CS subjects*/}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">CS Subjects</h2>
          <Link
            to="/course"
            className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 ">
          {[
            'Operating System',
            'DBMS',
            'Computer Networks',
            'Computer Architecture',
            'Software Engineering',
            'Compiler Design',
            'Theory of Computation',
            'Digital Logic Design'
          ].map((item, idx) => (
            <div key={idx} className="w-[240px]">
              <OtherCards title={item} color="bg-[#79abb6]" />
            </div>
          ))}
        </div>
      </section>

      {/*Database*/}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Databases</h2>
          <Link
            to="/course"
            className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 ">
          {[
            'SQL',
            'MongoDB',
            'MySQL',
            'PostgreSQL',
            'Oracle',
            'SQLite',
            'Redis',
            'Cassandra'
          ].map((item, idx) => (
            <div key={idx} className="w-[240px]">
              <OtherCards title={item} color="bg-[#8591cc]" />
            </div>
          ))}
        </div>
      </section>

      {/*Devops*/}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">DevOps</h2>
          <Link
            to="/course"
            className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 ">
          {[
            'Docker',
            'Kubernetes',
            'Jenkins',
            'Ansible',
            'Terraform',
            'AWS',
            'Azure',
            'GCP'
          ].map((item, idx) => (
            <div key={idx} className="w-[240px]">
              <OtherCards title={item} color="bg-[#a0b783]" />
            </div>
          ))}
        </div>
      </section>

      {/*Tutorials*/}
      <section className="py-10 px-4 w-[80vw] flex flex-col mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Tutorials</h2>
          <Link
            to="/course"
            className="border border-black px-4 py-2 rounded-full font-semibold hover:scale-105 hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2 ">
          {[
            'System Design',
            'Android',
            'Linux',
            'Design Pattern',
            'Software Testing',
            'Product Management',
            'Excel',
            'Cloud Computing',
          ].map((item, idx) => (
            <div key={idx} className="w-[240px]">
              <OtherCards title={item} color="bg-[#6a93b1]" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
