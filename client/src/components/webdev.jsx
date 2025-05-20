// src/components/BackendPage.jsx
import React, { useState } from 'react';
import '../styles/webdev.css';
import { Link } from 'react-router-dom';
const Webdev = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    
    <div className="webdev-page">
      <div className="webdev-container">
        <div className="course-header">
        <Link to="/home">
    <p className="breadcrumb">All Courses &gt; Live</p>
  </Link> 
  </div>
        <h1 className="webdevcourse-title">Complete Frontend & Backend Web Development Course</h1>
        <p className="webdevcourse-meta">
          Live Course <span className="stars">⭐⭐⭐⭐⭐</span>{' '}
          <a href="#">4.7/5 ratings</a>
        </p>
        
        <div className="course-card-webdev">
            {/* Left side image */}
          <img
            src="/assets/image/web-icon.jpg"
            alt="ml Course"
            className="thumbnail-image"
          />
          <div className="webdevcourse-details">
            <p className="interested">
                <img src="/assets/image/interested-icon.png" alt="Interested" className="stat-icon" /> 
                 304k+ interested Coders</p>
            <p className="description">
  The <strong>Complete Frontend & Backend Web Development Course</strong> is a comprehensive live program crafted to take you from a beginner to a professional full-stack web developer. This in-depth course delivers a <strong>360-degree hands-on learning experience</strong> for aspiring developers who want to master both frontend and backend technologies. Guided by industry professionals, you’ll build dynamic web applications, understand core web architectures, and gain real-world development skills essential for modern tech careers.
</p>


            <ul className="course-stats">
  <li>
    <img src="/assets/image/interested-icon.png" alt="Interested" className="stat-icon" />
    304k+ interested Coders
  </li>
  <li>
    <img src="/assets/image/level-icon.png" alt="Level" className="stat-icon" />
    Intermediate and Advance
  </li>
  <li>
    <img src="/assets/image/time-icon.png" alt="Duration" className="stat-icon" />
    14 Weeks
  </li>
</ul>

            <div className="button-group">
    <button className="signup-button">Sign up now</button>
   <div className="access-demo-button">
  <img src="/assets/image/play-icon.gif" alt="Play" className="play-icon" />
  <div className="demo-text">
    <span className="demo-subtitle">Access</span>
    <span className="demo-title">Demo</span>
  </div>
</div>

  </div>
          </div>
        </div>
        {/* Bottom pill text links */}
        <div className="bottom-info-bar">
          <span className="webdevinfo-pill">Capstone Projects</span>
          <span className="webdevinfo-pill">Industry Experts</span>
          <span className="webdevinfo-pill">Doubt Solving</span>
          <span className="webdevinfo-pill">Internship Certificate</span>
        </div>

        {/* Early Bird Alert */}
<div className="early-bird-alert">
  <div className="alert-icon">i</div>
  <div className="alert-text">
    <p><strong>Master Frontend &amp; Backend Web Development</strong> at just <span className="highlight-red">INR 3949</span> and earn valuable certifications!</p>
<p>Limited Time Offer – <span className="highlight-red">Enroll Now</span> to launch your Full-Stack Web Development career!</p>
<p>For further queries, reach us via Call/WhatsApp on: <span className="whatsapp-number">+91-9315257461</span></p>

  </div>
</div>
<div className="course-overview-section">
      <h2 className="webdevsection-heading">Course Overview</h2>

    <h3 className="webdevoverview-title">Full-Stack Web Development Live Course - Overview</h3>
<p className="overview-description">
  This <strong>6-month live course</strong> by Codehub is crafted to transform beginners into professional <strong>Full-Stack Web Developers</strong>. Whether you're a student, coding enthusiast, or working professional, this course provides <strong>hands-on training</strong> in modern frontend and backend technologies. You'll master <strong>HTML, CSS, JavaScript, React.js</strong> for frontend development and <strong>Node.js, Express.js, MongoDB</strong> for the backend. Build powerful, scalable web applications from scratch, guided by <strong>industry mentors</strong>. With <strong>40+ real-world projects</strong>, <strong>weekly live mentor sessions</strong>, and <strong>career-ready training</strong>, this course equips you to thrive as a full-stack developer.
</p>

<h3 className="webdevoverview-title">Frontend & Backend Web Development Course - Key Highlights:</h3>
<ul className="course-highlights">
  <li><span className="highlight-bullet">•</span> <strong>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB</strong></li>
  <li><span className="highlight-bullet">•</span> <strong>40+ Hands-on Projects</strong> including e-commerce, dashboard, portfolio, and more</li>
  <li><span className="highlight-bullet">•</span> Weekly <strong>Live Sessions with Industry Experts</strong></li>
  <li><span className="highlight-bullet">•</span> Regular <strong>Live Doubt Solving Sessions</strong></li>
  <li><span className="highlight-bullet">•</span> <strong>Soft Skills & Interview Preparation Program</strong></li>
  <li><span className="highlight-bullet">•</span> Perfect for <strong>Students, Graduates, and Working Professionals</strong></li>
  <li><span className="highlight-bullet">•</span> <strong>1-on-1 Career Guidance Sessions</strong></li>
  <li><span className="highlight-bullet">•</span> <strong>6 Months</strong> of <strong>24/7 Doubt Resolution Support</strong></li>
  <li><span className="highlight-bullet">•</span> Supplementary Study Paths for <strong>Google, Meta, Microsoft</strong> Certifications</li>
  <li><span className="highlight-bullet">•</span> Live Project Building:
    <ul>
      <li>Project: <strong>Blog Website with Admin Dashboard (MERN Stack)</strong></li>
      <li>Project: <strong>Responsive E-Commerce Store with Cart and Authentication</strong></li>
    </ul>
  </li>
</ul>

{showMore && (
  <>
    <h3 className="webdevoverview-title">Web Development Course - Technologies & Modules Covered</h3>
    <ul className="webdevcourse-highlights">
      <li><span className="highlight-bullet">•</span> HTML5, CSS3, Bootstrap, Tailwind</li>
      <li><span className="highlight-bullet">•</span> JavaScript (ES6+), DOM Manipulation</li>
      <li><span className="highlight-bullet">•</span> React.js - Components, Hooks, Routing</li>
      <li><span className="highlight-bullet">•</span> Node.js & Express.js Server-Side Programming</li>
      <li><span className="highlight-bullet">•</span> MongoDB for Database Management</li>
      <li><span className="highlight-bullet">•</span> RESTful APIs & CRUD Operations</li>
      <li><span className="highlight-bullet">•</span> Authentication, Authorization (JWT, OAuth)</li>
    </ul>

    <h3 className="webdevoverview-title">Learning Benefits:</h3>
    <ul className="webdevcourse-highlights">
      <li><span className="highlight-bullet">•</span> Learn to Build and Deploy Full-Stack Apps</li>
      <li><span className="highlight-bullet">•</span> Portfolio-Ready Projects for Real-World Experience</li>
      <li><span className="highlight-bullet">•</span> Direct Mentorship from Working Developers</li>
    </ul>

    <p className="enroll-note"><em>Enroll now to become a job-ready Full-Stack Web Developer and build a career in tech!</em></p>
  </>
)}

      <div className="webdevread-more-toggle">
        <button onClick={() => setShowMore(!showMore)} className="webdevread-more-btn">
          {showMore ? 'Read less' : 'Read more'}
        </button>
        </div>
</div>
<div className="webdevinstructor-section">
  <h2 className="webdevinstructor-heading">Course Instructor</h2>

  <div className="webdevinstructor-container">
    <img
      src="/assets/image/instructor-icon.jpg"
      alt="Instructor Avishkar Deogharia"
      className="instructor-image"
    />

    <div className="instructor-details">
      <h3 className="webdevinstructor-name">Avishkar Deogharia</h3>
      <p className="webdevinstructor-title">
  Full-Stack Developer at Ten | Ex-Microsoft | M.Tech @ IIT | Web Technologies | Mentor
</p>
<p className="instructor-bio">
  Avishkar is a seasoned Full-Stack Developer and Mentor with extensive experience in building scalable web applications using
  modern technologies like React, Node.js, and MongoDB. He has led full-stack development teams at top tech companies and has mentored 
  hundreds of students at Codehub in building production-ready applications.
</p>
<p className="instructor-bio">
  He holds an M.Tech in Computer Science from IIT Hyderabad and has contributed to several open-source projects and tech communities.
  Aniket is passionate about frontend performance optimization, backend architecture, and developer best practices. He brings 
  deep industry insight and a practical teaching style that equips learners to succeed in real-world development environments.
</p>



      <div className="instructor-links">
        <a href="#" className="demo-video-link">Demo Video</a>
        <p className="associated-batches"><strong>Associated Batches:</strong> JBDL 85</p>
      </div>
    </div>
  </div>
</div>
<div className="upcoming-batches-wrapper">
  <h2 className="upcoming-batches-heading">Upcoming Batches</h2>

  <div className="upcoming-batches-content">
    <div className="row">
      <div className="info-block">
        <p className="label">BATCH</p>
        <p className="value bold">JBDL 85</p>
      </div>
      <div className="info-block">
        <p className="label">MENTOR</p>
        <p className="value">Shashikant Kushwaha</p>
      </div>
    </div>

    <div className="divider" />

    <div className="row">
      <div className="info-block">
        <p className="label">STARTING FROM</p>
        <p className="value">May 24, 2025</p>
      </div>
      <div className="info-block">
        <p className="label">TIMINGS</p>
        <p className="value bold">10:00 AM IST -Sat, Sun</p>
      </div>
    </div>

    <div className="bottom-row">
      <button className="signup-button">Sign Up Now</button>
      <div className="pricing">
        <p className="old-price">₹ 19999</p>
        <p className="new-price">₹ 8999</p>
      </div>
    </div>
  </div>
</div>
<div className="webdevtestimonial-review-section">
  {/* Left Side: Testimonial Card */}
  <div className="webdevtestimonial-card">
    <img src="/assets/image/instructor-icon.jpg" alt="Thamim K" className="testimonial-image" />
    <h3 className="testimonial-name">Avishkar Deogharia</h3>
    <p className="testimonial-placement">Placed at Ten</p>
    <p className="testimonial-text">
      I am very happy to share this with you. When I first started, I had many doubts and was completely new to application development.
      Before joining this course, I attended a Zoho interview with low confidence... (you can trim or scroll if needed)
    </p>
  </div>

  {/* Right Side: Scrollable Reviews */}
  <div className="review-section">
    <h2 className="review-heading">Reviews and Ratings</h2>
    <div className="review-scroll-container">
      {/* Repeatable Review Item */}
    <div className="review-card">
  <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
  <div className="review-details">
    <h4 className="review-name">Avishkar Deogharia</h4>
    <p className="review-placement">Placed at Ten</p>
    <p className="review-text">
      The course helped me become confident in both frontend and backend development. Live sessions and projects gave me a strong understanding of how real web apps work.
    </p>
  </div>
</div>

<div className="review-card">
  <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
  <div className="review-details">
    <h4 className="review-name">Avishkar Deogharia</h4>
    <p className="review-placement">Placed at Ten</p>
    <p className="review-text">
      The Full Stack course was very well-structured. I learned React, Node.js, Express, and MongoDB through hands-on projects that strengthened my portfolio.
    </p>
  </div>
</div>

<div className="review-card">
  <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
  <div className="review-details">
    <h4 className="review-name">Avishkar Deogharia</h4>
    <p className="review-placement">Interned at Ten</p>
    <p className="review-text">
      This course gave me the confidence to build complete web applications from scratch. The mentors were super helpful in resolving doubts and reviewing our code.
    </p>
  </div>
</div>

<div className="review-card">
  <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
  <div className="review-details">
    <h4 className="review-name">Avishkar Deogharia</h4>
    <p className="review-placement">Placed at Ten</p>
    <p className="review-text">
      Learning frontend frameworks like React and backend tools like Express.js made me job-ready. The projects and mock interviews boosted my confidence.
    </p>
  </div>
</div>

<div className="review-card">
  <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
  <div className="review-details">
    <h4 className="review-name">Avishkar Deogharia</h4>
    <p className="review-placement">Freelance Web Developer</p>
    <p className="review-text">
      I joined as a complete beginner and now I’m able to take freelance projects confidently. This course covers everything from HTML/CSS to APIs and database integration.
    </p>
  </div>
</div>

<div className="review-card">
  <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
  <div className="review-details">
    <h4 className="review-name">Avishkar Deogharia</h4>
    <p className="review-placement">Placed at Ten</p>
    <p className="review-text">
      The complete frontend and backend coverage was amazing. It felt like a real-world bootcamp with live sessions, coding challenges, and continuous mentor feedback.
    </p>
  </div>
</div>


      {/* Add more review-card items here... */}
    </div>
    
  </div>
</div>
<div className="faq-section">
  <h2 className="faq-title">Frequently Asked Questions</h2>

  <div className="faq-item">
  <input type="checkbox" id="faq1" />
  <label htmlFor="faq1" className="webdevfaq-question">
    <span>01</span> How will the Web Development classes be conducted?
  </label>
  <div className="faq-answer">
    The classes will be conducted online in a live, interactive format. You’ll be able to attend from anywhere and ask questions in real-time during the sessions.
  </div>
</div>

<div className="faq-item">
  <input type="checkbox" id="faq2" />
  <label htmlFor="faq2" className="webdevfaq-question">
    <span>02</span> What topics are covered in this Web Development course?
  </label>
  <div className="faq-answer">
    The course covers HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, API development, version control with Git, and deployment on cloud platforms.
  </div>
</div>

<div className="faq-item">
  <input type="checkbox" id="faq3" />
  <label htmlFor="faq3" className="webdevfaq-question">
    <span>03</span> Are there any prerequisites to join this course?
  </label>
  <div className="faq-answer">
    No prior experience is required. This course is designed for beginners as well as those with some coding background who want to build full-stack web applications.
  </div>
</div>

<div className="faq-item">
  <input type="checkbox" id="faq4" />
  <label htmlFor="faq4" className="webdevfaq-question">
    <span>04</span> Will I get a certificate after completing the course?
  </label>
  <div className="faq-answer">
    Yes, you will receive an industry-recognized certificate upon successful completion of the course and projects.
  </div>
</div>

<div className="faq-item">
  <input type="checkbox" id="faq5" />
  <label htmlFor="faq5" className="webdevfaq-question">
    <span>05</span> Who can I contact if I have any queries?
  </label>
  <div className="faq-answer">
    Feel free to reach out to us via Call/WhatsApp at: <strong>+91-9315257461</strong> or email: <strong>courses@codehub.com</strong>
  </div>
</div>

</div>


      </div>
    </div>
  );
};

export default Webdev;
