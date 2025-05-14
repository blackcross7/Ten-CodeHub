import React, { useState } from 'react';
import '../styles/CourseList.css';

function CourseList() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='pt-28'>
      <div className="promo-banner">
        <div className="sale-info">
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
      { title: "DSA to Development", titleIcon: "/assets/image/dsa-icon.png", interested: "556k+ interested learners", rating: "⭐4.4", title1: "DSA to Development: A Complete Guide", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore" },
      { title: "Backend Development", titleIcon: "/assets/image/backend-icon.png", interested: "304k+ interested learners", rating: "⭐4.7", title1: "JAVA Backend Development - Live", level: "Intermediate and Advance", seats: "2 seats left", buttonText: "Explore" },
      { title: "ML & DS", titleIcon: "/assets/image/ml-icon.png", title1: "Complete Machine Learning & Data Science Program", interested: "422k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "6 seats left", buttonText: "Explore" },
      { title: "Data Structure and Algorithm with C++/Java", titleIcon: "/assets/image/dsa-icon.png", title1: "Data Structures and Algorithms - Self Paced [Online Course]", interested: "1369k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore" },
    ],
    classroomCourses: [
      { title: "Complete Data Analytics", titleIcon: "/assets/image/completedata-icon.png", title1: "Complete Data Analytics Program", interested: "49k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore" },
      { title: "DSA Interview", titleIcon: "/assets/image/interview-icon.png", title1: "DSA for Interview Preparation", interested: "87k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "3 seats left", buttonText: "Explore" },
      { title: "FULL STACK", titleIcon: "/assets/image/mern-icon.png", title1: "MERN Full Stack Web Development", interested: "94k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore" },
    ],
    liveCourses: [
      { title: "TECH INTERVIEW", titleIcon: "/assets/image/tech-icon.png", title1: "Tech Interview 101 - From DSA to System Design for Working Professionals", interested: "333k+ interested learners", rating: "⭐4.9", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore" },
      { title: "FSRNL", titleIcon: "/assets/image/fsrnl-icon.png", title1: "Full Stack Development with React & Node JS - Live", interested: "354k+ interested learners", rating: "⭐4.7", level: "Beginner to Advance", seats: "2 seats left", buttonText: "Explore" },
      { title: "DEVOPS Engineering", titleIcon: "/assets/image/devops-icon.png", title1: "DevOps Engineering - Planning to Production", interested: "106k+ interested learners", rating: "⭐4.6", level: "Beginner to Advance", seats: "3 seats left", buttonText: "Explore" },
      { title: "Data Analytics Training program", titleIcon: "/assets/image/datatraining-icon.png", title1: "Data Analytics Training using Excel, SQL, Python & PowerBI", interested: "38k+ interested learners", rating: "⭐4.5", level: "Beginner to Advance", seats: "4 seats left", buttonText: "Explore" },
    ],
    selfPacedCourses: [
      { title: "INTERVIEW Preparation", titleIcon: "/assets/image/interview-icon.png", title1: "Complete Interview Preparation", interested: "200k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore" },
      { title: "Data Structures & Algorithms with Python", titleIcon: "/assets/image/python-icon.png", title1: "Data Structures & Algorithms in Python-Self Paced", interested: "325k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore" },
      { title: "SYSTEM Design", titleIcon: "/assets/image/system-icon.png", title1: "Mastering System Design:From Low-Level to High-Level Solutions", interested: "180k+ interested learners", rating: "⭐4.6", level: "Intermediate & Advanced", seats: "2 seats left", buttonText: "Explore" },
      { title: "JAVA Programming", titleIcon: "/assets/image/java-icon.png", title1: "Java Programming Online Course [complete Beginner to Advanced]", interested: "95k+ interested learners", rating: "⭐4.5", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore" },
    ],
    foundationCourses: [
      { title: "JAVA Programming", titleIcon: "/assets/image/java-icon.png", title1: "Java Programming Online Course [complete Beginner to Advanced]", interested: "450k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore" },
      { title: "C++ Beginner to Advanced", titleIcon: "/assets/image/c++-icon.png", title1: "C++ Programming Course Online - Complete Beginner to Advanced", interested: "375k+ interested learners", rating: "⭐4.7", level: "Beginner", seats: "2 seats left", buttonText: "Explore" },
      { title: "JavaScript Basic to Advanced", titleIcon: "/assets/image/javascript-icon.png", title1: "JavaScript Full Course Online | Learn JavaScript with Certification", interested: "295k+ interested learners", rating: "⭐4.6", level: "Beginner & Intermediate", seats: "2 seats left", buttonText: "Explore" },
      { title: "Master C with Data Structures", titleIcon: "/assets/image/c-icon.png", title1: "C Programming Course Online - Learn C with Data Structures", interested: "180k+ interested learners", rating: "⭐4.5", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore" },
    ],
    freeCourses: [
      { title: "Cybersecurity Essentials", titleIcon: "/assets/image/cyber-icon.png", title1: "Become a Cybersecurity Expert", interested: "964k+ interested learners", rating: "⭐4.8", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore" },
      { title: "BOOTCAMP Data Science", titleIcon: "/assets/image/bootcampdata-icon.png", title1: "Data Science BootCamp - From Analysing Data To Creating ML Models", interested: "328k+ interested learners", rating: "⭐4.7", level: "Beginner to Advanced", seats: "2 seats left", buttonText: "Explore" },
      { title: "FULL STACK Bootcamp", titleIcon: "/assets/image/bootcamp-icon.png", title1: "Full Stack Developer Bootcamp - Master Frontend to Backend", interested: "152k+ interested learners", rating: "⭐4.6", level: "Beginner to Advanced", seats: "3 seats left", buttonText: "Explore" },
      { title: "IOS Development", titleIcon: "/assets/image/ios-icon.png", title1: "iOS Development for Beginners: Master Swift & App Building for Free", interested: "290k+ interested learners", rating: "⭐4.6", level: "Beginner to Advanced", seats: "", buttonText: "Explore" },
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
                <button className="explore-btn">{course.buttonText}</button>
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
