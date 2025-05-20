import React, { useState } from 'react';
import '../styles/CourseList.css';
import { Link } from 'react-router-dom';

function CourseList() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className=''>
      <div className="promo-banner flex flex-col items-center">
        <div className="sale-info text-center mb-4">
          <h1>CodeHub Courses</h1>
          <p>Interactive LIVE & Self-Paced Courses</p>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">
            <img src="/assets/image/search-icon.gif" alt="Search" className="search-icon" />
          </button>
        </div>
      </div>

      <PopularNow />
    </div>
  );
}

function PopularNow() {
  const categories = [
    { name: "All", className: "all" },
    { name: "Certification Courses", className: "certification" },
    { name: "DSA / Placements", className: "dsa" },
    { name: "Development / Testing", className: "development" },
    { name: "Machine Learning / Data Science", className: "ml" },
    { name: "Programming Languages", className: "programming" },
    { name: "Cloud / DevOps", className: "cloud" },
    { name: "GATE", className: "gate" },
  ];

  const sections = [
    { title: 'Popular Now', dataKey: 'courses' },
    { title: 'Classroom Courses', dataKey: 'classroomCourses' },
    { title: 'Live Courses', dataKey: 'liveCourses' },
    { title: 'Self-Paced Courses', dataKey: 'selfPacedCourses' },
    { title: 'Foundation Courses', dataKey: 'foundationCourses' },
    { title: 'Free Courses', dataKey: 'freeCourses' },
  ];

  const allCourses = {
    courses: [
      { title: "DSA to Development", titleIcon: "/assets/image/dsa-icon.png", interested: "556k+ interested learners", rating: "⭐4.4", title1: "DSA to Development: A Complete Guide", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/dsa-to-development" },
      { title: "Backend Development", titleIcon: "/assets/image/backend-icon.png", interested: "304k+ interested learners", rating: "⭐4.7", title1: "JAVA Backend Development - Live", level: "Intermediate and Advance", seats: "2 seats left", buttonText: "Explore", link: "/backend-development" },
      { title: "ML & DS", titleIcon: "/assets/image/ml-icon.png", title1: "Complete Machine Learning & Data Science Program", interested: "422k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "6 seats left", buttonText: "Explore", link: "/ml-and-ds" },
      { title: "Data Structure and Algorithm with C++/Java", titleIcon: "/assets/image/dsa-icon.png", title1: "Data Structures and Algorithms - Self Paced [Online Course]", interested: "1369k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/data-structures-and-algorithms" },
    ],
    classroomCourses: [
      { title: "Complete Data Analytics", titleIcon: "/assets/image/completedata-icon.png", title1: "Complete Data Analytics Program", interested: "49k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/complete-data-analytics" },
      { title: "DSA Interview", titleIcon: "/assets/image/interview-icon.png", title1: "DSA for Interview Preparation", interested: "87k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "3 seats left", buttonText: "Explore", link: "/dsa-interview" },
      { title: "FULL STACK", titleIcon: "/assets/image/mern-icon.png", title1: "MERN Full Stack Web Development", interested: "94k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/mern-full-stack" },
    ],
    liveCourses: [
      { title: "TECH INTERVIEW", titleIcon: "/assets/image/tech-icon.png", title1: "Tech Interview 101 - From DSA to System Design for Working Professionals", interested: "333k+ interested learners", rating: "⭐4.9", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/tech-interview" },
      { title: "FSRNL", titleIcon: "/assets/image/fsrnl-icon.png", title1: "Full Stack Development with React & Node JS - Live", interested: "354k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore", link: "/full-stack-development" },
      { title: "DEVOPS Engineering", titleIcon: "/assets/image/devops-icon.png", title1: "DevOps Engineering - Planning to Production", interested: "106k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "3 seats left", buttonText: "Explore", link: "/devops-engineering" },
      { title: "Data Analytics Training program", titleIcon: "/assets/image/datatraining-icon.png", title1: "Data Analytics Training using Excel, SQL, Python & PowerBI", interested: "38k+ interested learners", rating: "⭐4.5", level: "Beginner to Advance", seats: "4 seats left", buttonText: "Explore", link: "/data-analytics-training" },
    ],
    selfPacedCourses: [
      { title: "INTERVIEW Preparation", titleIcon: "/assets/image/interview-icon.png", title1: "Complete Interview Preparation", interested: "200k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/interview-preparation" },
      { title: "Python Programming", titleIcon: "/assets/image/python-icon.png", title1: "Python Programming - From Zero to Hero", interested: "425k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/python-programming" },
      { title: "Data Structures & Algorithms with Python", titleIcon: "/assets/image/python-icon.png", title1: "Data Structures & Algorithms in Python-Self Paced", interested: "325k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/data-structures-and-algorithms-with-python" },
      { title: "SYSTEM Design", titleIcon: "/assets/image/system-icon.png", title1: "Mastering System Design:From Low-Level to High-Level Solutions", interested: "180k+ interested learners", rating: "⭐4.6", level: "Intermediate & Advanced", seats: "2 seats left", buttonText: "Explore", link: "/system-design" },
    ],
    foundationCourses: [
      { title: "JAVA Programming", titleIcon: "/assets/image/java-icon.png", title1: "Java Programming Online Course [complete Beginner to Advanced]", interested: "450k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/java-programming" },
      { title: "C++ Beginner to Advanced", titleIcon: "/assets/image/c++-icon.png", title1: "C++ Programming Course Online - Complete Beginner to Advanced", interested: "375k+ interested learners", rating: "⭐4.7", level: "Beginner", seats: "2 seats left", buttonText: "Explore", link: "/c++-programming" },
      { title: "JavaScript Basic to Advanced", titleIcon: "/assets/image/javascript-icon.png", title1: "JavaScript Full Course Online | Learn JavaScript with Certification", interested: "295k+ interested learners", rating: "⭐4.6", level: "Beginner & Intermediate", seats: "2 seats left", buttonText: "Explore", link: "/javascript-full-course" },
      { title: "Master C with Data Structures", titleIcon: "/assets/image/c-icon.png", title1: "C Programming Course Online - Learn C with Data Structures", interested: "180k+ interested learners", rating: "⭐4.5", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/c-programming" },
    ],
    freeCourses: [
      { title: "Cybersecurity Essentials", titleIcon: "/assets/image/cyber-icon.png", title1: "Become a Cybersecurity Expert", interested: "964k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/cybersecurity-essentials" },
      { title: "BOOTCAMP Data Science", titleIcon: "/assets/image/bootcampdata-icon.png", title1: "Data Science BootCamp - From Analysing Data To Creating ML Models", interested: "328k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore", link: "/data-science-bootcamp" },
      { title: "FULL STACK Bootcamp", titleIcon: "/assets/image/bootcamp-icon.png", title1: "Full Stack Developer Bootcamp - Master Frontend to Backend", interested: "152k+ interested learners", rating: "⭐4.6", level: "Beginner to Advanced", seats: "3 seats left", buttonText: "Explore", link: "/full-stack-developer-bootcamp" },
      { title: "IOS Development", titleIcon: "/assets/image/ios-icon.png", title1: "iOS Development for Beginners: Master Swift & App Building for Free", interested: "290k+ interested learners", rating: "⭐4.6", level: "Beginner to Advanced", seats: "", buttonText: "Explore", link: "/ios-development" },
    ]
  };

  return (
    <div className="popular-now">
      {sections.map((section, idx) => (
        <div key={idx} className="course-section">
          <div className="section-header">
            <h3>{section.title}</h3>
            <button className="view-all-btn">
              View All
              <img src="/assets/image/arrow-icon.png" alt="Arrow" className="arrow-icon" />
            </button>
          </div>
          <div className="courses-container">
            {allCourses[section.dataKey].map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-title-section">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-title-icon">
                    <img src={course.titleIcon} alt={`${course.title} Icon`} />
                  </div>
                </div>
                <div className="course-details">
                  <div className="course-interested-rating">
                    <p className="course-interested">
                      <img src="/assets/image/interested-icon.png" alt="Interested Icon" className="interested-icon" />
                      {course.interested}
                    </p>
                    <p className="course-rating">{course.rating}</p>
                  </div>
                  <p className="course-title1">{course.title1}</p>
                  <p className="course-level">
                    <img src="/assets/image/level-icon.png" alt="Level" className="level-icon" />
                    {course.level}
                  </p>
                  {course.seats && <p className="course-seats">{course.seats}</p>}
                </div>
                <Link to={course.link || "#"} className="explore-btn">{course.buttonText}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="course-categories">
        <h3>Course Categories</h3>
        <div className="category-container">
          {categories.map((category, index) => (
            <div key={index} className={`category ${category.className}`}>
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseList;
