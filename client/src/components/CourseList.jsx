import React, { useState } from 'react';
import '../CourseList.css';

function CourseList() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {/* Promo Banner Section */}
      <div className="promo-banner">
        <div className="sale-info">
          <h1>CodeHub Courses</h1>
          <p>Interactive LIVE & Self-Paced Courses</p>
        </div>

        {/* Search Bar Only */}
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

      {/* Popular Now Section (Classroom Courses Now Inside) */}
      <PopularNow />
    </div>
  );
}

// Define PopularNow component with Course Categories & Classroom Courses Inside
function PopularNow() {
  const courses = [
    {
      title: "DSA to Development",
      title1: "DSA to Development: A Complete Guide",
      interested: "556k+ interested Geeks",
      rating: "4.4 stars",
      level: "Beginner to Advance",
      seats: "2 seats left",
      buttonText: "Explore",
    },
    {
      title: "Backend Development",
      title1: "JAVA Backend Development - Live",
      interested: "304k+ interested Geeks",
      rating: "4.7 stars",
      level: "Intermediate and Advance",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "ML & DS",
      title1: "Complete Machine Learning & Data Science Program",
      interested: "422k+ interested Geeks",
      rating: "4.7 stars",
      level: "Beginner to Advance",
      seats: "6 seats left",
      buttonText: "Explore",
    },
    {
      title: "Data Structure and Algorithm with C++/Java",
      title1: "Data Structures and Algorithms - Self Paced [Online Course]",
      interested: "1369k+ interested Geeks",
      rating: "4.7 stars",
      level: "Beginner to Advance",
      seats: "",
      buttonText: "Explore",
    },
  ];

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

  const classroomCourses = [
    {
      title:"Complete Data Analytics",
      title1: "Complete Data Analytics Program",
      interested: "49k+ interested learners",
      rating: "4.6 stars",
      level: "Beginner to Advance",
      seats: "2 seats left",
      partner: "IBM",
      buttonText: "Explore",
    },
    {
      title:"DSA Interview",
      title1: "DSA for Interview Preparation",
      interested: "87k+ interested learners",
      rating: "4.6 stars",
      level: "Beginner to Advance",
      seats: "3 seats left",
      buttonText: "Explore",
    },
    {
      title:"FULL STACK",
      title1: "MERN Full Stack Web Development",
      interested: "94k+ interested learners",
      rating: "4.6 stars",
      level: "Beginner to Advance",
      seats: "2 seats left",
      buttonText: "Explore",
    },
  ];
  
  const liveCourses = [
    {
      title:"TECH INTERVIEW",
      title1: "Tech Interview 101 - From DSA to System Design for Working Professionals",
      interested: "333k+ interested Geeks",
      rating: "4.9 stars",
      level: "Beginner to Advance",
      seats: "2 seats left",
      buttonText: "Explore",
    },
    {
      title:"FSRNL",
      title1: "Full Stack Development with React & Node JS - Live",
      interested: "354k+ interested Geeks",
      rating: "4.7 stars",
      level: "Beginner to Advance",
      seats: "",
      buttonText: "Explore",
    },
    {
      title:"DEVOPS Engineering",
      title1: "DevOps Engineering - Planning to Production",
      interested: "106k+ interested Geeks",
      rating: "4.6 stars",
      level: "Beginner to Advance",
      seats: "3 seats left",
      buttonText: "Explore",
    },
    {
      title:"Data Analytics Training program",
      title1: "Data Analytics Training using Excel, SQL, Python & PowerBI",
      interested: "38k+ interested Geeks",
      rating: "4.5 stars",
      level: "Beginner to Advance",
      seats: "4 seats left",
      buttonText: "Explore",
    },
  ];
  const selfPacedCourses = [
    {
      title: "Python Programming - Self-Paced",
      title1: "Master Python with Hands-On Projects",
      interested: "200k+ interested learners",
      rating: "4.8 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "Web Development Bootcamp - Self-Paced",
      title1: "Learn HTML, CSS, JavaScript & React",
      interested: "325k+ interested learners",
      rating: "4.7 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "Data Science & AI - Self-Paced",
      title1: "Learn Data Analysis, Machine Learning & AI",
      interested: "180k+ interested learners",
      rating: "4.6 stars",
      level: "Intermediate & Advanced",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "Cybersecurity Essentials - Self-Paced",
      title1: "Become a Cybersecurity Expert",
      interested: "95k+ interested learners",
      rating: "4.5 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
  ];
  const foundationCourses = [
    {
      title: "Master Data Structures & Algorithms",
      title1: "Fundamental DSA concepts for coding interviews",
      interested: "450k+ interested learners",
      rating: "4.8 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "Basic Programming with Python & Java",
      title1: "Learn Python & Java from scratch",
      interested: "375k+ interested learners",
      rating: "4.7 stars",
      level: "Beginner",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "Mathematical Thinking for Coding",
      title1: "Learn problem-solving techniques used in programming",
      interested: "295k+ interested learners",
      rating: "4.6 stars",
      level: "Beginner & Intermediate",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "Operating System & Computer Networks",
      title1: "Get a strong foundation in OS & CN concepts",
      interested: "180k+ interested learners",
      rating: "4.5 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
  ];
  const freeCourses = [
    {
      title: "Complete Interview Preparation",
      title1: "Master DSA, System Design & Problem Solving",
      interested: "964k+ interested learners",
      rating: "4.8 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "Data Structures & Algorithms in Python",
      title1: "Self-Paced DSA with Python",
      interested: "328k+ interested learners",
      rating: "4.7 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
    {
      title: "System Design",
      title1: "Master System Design: From Low-Level to High-Level Solutions",
      interested: "152k+ interested learners",
      rating: "4.6 stars",
      level: "Beginner to Advanced",
      seats: "3 seats left",
      buttonText: "Explore",
    },
    {
      title: "Java Programming",
      title1: "Complete Java Programming Course (Beginner to Advanced)",
      interested: "290k+ interested learners",
      rating: "4.6 stars",
      level: "Beginner to Advanced",
      seats: "",
      buttonText: "Explore",
    },
  ];
  
  

  return (
    <div className="popular-now">
      <div className="popular-header">
        <h2>Popular Now</h2>
        <button className="view-all-btn">
          View All
          <img src="/assets/image/arrow-icon.png" alt="Arrow" className="arrow-icon" />
        </button>
      </div>

      {/* Courses Section */}
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-title-section">
              <h3 className="course-title">{course.title}</h3>
            </div>
            <div className="course-details">
              <p className="course-title1">{course.title1}</p>
              <p className="course-interested">{course.interested}</p>
              <p className="course-rating">{course.rating}</p>
              <p className="course-level">{course.level}</p>
              {course.seats && <p className="course-seats">{course.seats}</p>}
            </div>
            <button className="explore-btn">{course.buttonText}</button>
          </div>
        ))}
      </div>

      {/* Course Categories Section */}
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

      {/* Classroom Courses Now Inside Popular Now */}
      <div className="classroom-courses">
        <div className="classroom-header">
          <h3>Classroom Courses Near You</h3>
          <button className="view-all-btn">
            View All
            <img src="/assets/image/arrow-icon.png" alt="Arrow" className="arrow-icon" />
          </button>
        </div>
        
        <div className="classroom-container">
          {classroomCourses.map((course, index) => (
            <div key={index} className="classroom-card">
              <div className="classroom-title-section">
                <h4 className="classroom-title">{course.title}</h4>
              </div>
              <div className="classroom-details">
                <p className="classroom-title1">{course.title1}</p>
                <br></br>
                <p className="classroom-interested">{course.interested}</p>
                <p className="classroom-rating">{course.rating}</p>
                <p className="classroom-level">{course.level}</p>
                {course.seats && <p className="classroom-seats">{course.seats}</p>}
                {course.partner && <p className="classroom-partner">Partner: {course.partner}</p>}
                <button className="explore-btn">{course.buttonText}</button>
              </div>
            </div>

          ))}
        </div>
{/* ⭐ Live Courses Inside Popular Now ⭐ */}
<div className="live-courses">
  <div className="live-header">
    <h3>Live Courses</h3>
    <button className="view-all-btn">
      View All
      <img src="assets/image/arrow-icon.png" alt="Arrow" className="arrow-icon" />
    </button>
  </div>
  <div className="courses-container">
    {liveCourses.map((course, index) => (
      <div key={index} className="course-card">
        <div className="course-title-section">
          <h3 className="course-title">{course.title}</h3>
        </div>
        <div className="course-details">
          <p className="course-title1">{course.title1}</p>
          <p className="course-interested">{course.interested}</p>
          <p className="course-rating">{course.rating}</p>
          <p className="course-level">{course.level}</p>
          {course.seats && <p className="course-seats">{course.seats}</p>}
        </div>
        <button className="explore-btn">{course.buttonText}</button>
      </div>
    ))}
  </div>
</div>
{/* ⭐ Self-Paced Courses Section (Below Live Courses) ⭐ */}
<div className="self-paced-courses">
  <div className="self-paced-header">
    <h3>Self-Paced Courses</h3>
    <button className="view-all-btn">
      View All
      <img src="/assets/image/arrow-icon.png" alt="Arrow" className="arrow-icon" />
    </button>
  </div>
  <div className="courses-container">
    {selfPacedCourses.map((course, index) => (
      <div key={index} className="course-card">
        <div className="course-title-section">
          <h3 className="course-title">{course.title}</h3>
        </div>
        <div className="course-details">
          <p className="course-title1">{course.title1}</p>
          <p className="course-interested">{course.interested}</p>
          <p className="course-rating">{course.rating}</p>
          <p className="course-level">{course.level}</p>
          {course.seats && <p className="course-seats">{course.seats}</p>}
        </div>
        <button className="explore-btn">{course.buttonText}</button>
      </div>
    ))}
  </div>
</div>
{/* Build Your Foundation Section */}
<div className="build-foundation">
  <div className="foundation-header">
    <h3>Build Your Foundation</h3>
    <button className="view-all-btn">
      View All
      <img src="/assets/image/arrow-icon.png" alt="Arrow" className="arrow-icon" />
    </button>
  </div>
  <div className="courses-container">
    {foundationCourses.map((course, index) => (
      <div key={index} className="course-card">
        <div className="course-title-section">
          <h3 className="course-title">{course.title}</h3>
        </div>
        <div className="course-details">
          <p className="course-title1">{course.title1}</p>
          <p className="course-interested">{course.interested}</p>
          <p className="course-rating">{course.rating}</p>
          <p className="course-level">{course.level}</p>
          {course.seats && <p className="course-seats">{course.seats}</p>}
        </div>
        <button className="explore-btn">{course.buttonText}</button>
      </div>
    ))}
  </div>
</div>
{/* ⭐ Free Courses Section (Below Build Your Foundation) ⭐ */}
<div className="free-courses">
  <div className="free-header">
    <h3>Free Courses</h3>
    <button className="view-all-btn">
      View All
      <img src="/assets/image/arrow-icon.png" alt="Arrow" className="arrow-icon" />
    </button>
  </div>
  <div className="courses-container">
    {freeCourses.map((course, index) => (
      <div key={index} className="course-card">
        <div className="course-title-section">
          <h3 className="course-title">{course.title}</h3>
        </div>
        <div className="course-details">
          <p className="course-title1">{course.title1}</p>
          <p className="course-interested">{course.interested}</p>
          <p className="course-rating">{course.rating}</p>
          <p className="course-level">{course.level}</p>
          {course.seats && <p className="course-seats">{course.seats}</p>}
        </div>
        <button className="explore-btn">{course.buttonText}</button>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  );
}

export default CourseList;
