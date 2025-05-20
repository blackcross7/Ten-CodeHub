// src/components/BackendPage.jsx
import React, { useState } from 'react';
import '../styles/ml.css';
import { Link } from 'react-router-dom';
const Ml = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    
    <div className="ml-page">
      <div className="ml-container">
        <div className="course-header">
        <Link to="/home">
    <p className="breadcrumb">All Courses &gt; Live</p>
  </Link> 
  </div>
        <h1 className="mlcourse-title">Complete Machine Learning & Data Science Program</h1>
        <p className="mlcourse-meta">
          Live Course <span className="stars">⭐⭐⭐⭐⭐</span>{' '}
          <a href="#">4.7/5 ratings</a>
        </p>
        
        <div className="course-card-ml">
            {/* Left side image */}
          <img
            src="/assets/image/ml-icon.jpg"
            alt="ml Course"
            className="thumbnail-image"
          />
          <div className="mlcourse-details">
            <p className="interested">
                <img src="/assets/image/interested-icon.png" alt="Interested" className="stat-icon" /> 
                 307k+ interested Coders</p>
            <p className="description">
  The <strong>Complete Machine Learning & Data Science Program</strong> is a comprehensive live course designed to take you from beginner to expert in machine learning and data science. This extensive program offers a <strong>360-degree hands-on learning experience</strong> for coders who aspire to master Data Science and ML. Mentored by industry experts, you’ll learn to apply core DS methods, build analytical skills, and gain practical knowledge to become proficient in real-world scenarios.
</p>

            <ul className="course-stats">
  <li>
    <img src="/assets/image/interested-icon.png" alt="Interested" className="stat-icon" />
    307k+ interested Coders
  </li>
  <li>
    <img src="/assets/image/level-icon.png" alt="Level" className="stat-icon" />
    Intermediate and Advance
  </li>
  <li>
    <img src="/assets/image/time-icon.png" alt="Duration" className="stat-icon" />
    12 Weeks
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
          <span className="mlinfo-pill">Capstone Projects</span>
          <span className="mlinfo-pill">Industry Experts</span>
          <span className="mlinfo-pill">Doubt Solving</span>
          <span className="mlinfo-pill">Internship Certificate</span>
        </div>

        {/* Early Bird Alert */}
<div className="early-bird-alert">
  <div className="alert-icon">i</div>
  <div className="alert-text">
    <p><strong>Master Machine Learning &amp; Data Science</strong> at just <span className="highlight-red">INR 3949</span> and earn valuable certifications!</p>
<p>Limited Time Offer – <span className="highlight-red">Enroll Now</span> to kickstart your ML journey!</p>
<p>For further queries, reach us via Call/WhatsApp on: <span className="whatsapp-number">+91-9315257461</span></p>

  </div>
</div>
<div className="course-overview-section">
      <h2 className="mlsection-heading">Course Overview</h2>

    <h3 className="mloverview-title">ML and Data Science Live Course - Overview</h3>
<p className="overview-description">
  This <strong>6-month live course</strong> by Codehub is designed to take you from a beginner to an expert in 
  <strong> Data Science</strong> and <strong> Machine Learning</strong>. Whether you're a student, tech enthusiast, or working professional, 
  this course offers <strong>hands-on experience</strong> in real-world data science applications. Learn the fundamentals of 
  <strong> Python programming</strong>, essential libraries like <strong>Numpy</strong> and <strong>Pandas</strong>, and dive deep into 
  <strong>data analytics</strong>, <strong>machine learning algorithms</strong>, and <strong>AI concepts</strong>. You’ll also explore 
  specialized areas like <strong>deep learning, image processing, and NLP</strong>. With <strong>20+ programming tools</strong>, 
  <strong>40+ industry-relevant projects</strong>, and weekly sessions with industry mentors, this program delivers a 
  <strong>robust and practical learning experience</strong>.
</p>

<h3 className="mloverview-title">Machine Learning & Data Science Course - Key Highlights:</h3>
<ul className="course-highlights">
  <li><span className="highlight-bullet">•</span> <strong>20+ Programming Tools & Libraries</strong></li>
  <li><span className="highlight-bullet">•</span> <strong>40+ Industry Projects</strong></li>
  <li><span className="highlight-bullet">•</span> Weekly <strong>Live Sessions with Industry Mentors</strong></li>
  <li><span className="highlight-bullet">•</span> Regular <strong>Live Doubt Solving Sessions</strong> with Experts</li>
  <li><span className="highlight-bullet">•</span> <strong>Career Essential Soft Skills Program</strong></li>
  <li><span className="highlight-bullet">•</span> Suitable for both <strong>Students & Working Professionals</strong></li>
  <li><span className="highlight-bullet">•</span> <strong>Career Guidance Sessions</strong></li>
  <li><span className="highlight-bullet">•</span> <strong>6 Months</strong> of <strong>24/7 One-on-One Doubt Assistance</strong></li>
  <li><span className="highlight-bullet">•</span> Supplementary Certification Material for <strong>Google, AWS, IBM</strong> Certifications</li>
  <li><span className="highlight-bullet">•</span> Live Project Building:
    <ul>
      <li>Project: <strong>Black Friday Sales Data Analysis</strong></li>
      <li>Project: <strong>Data Visualization on Heart Disease Dataset</strong></li>
    </ul>
  </li>
</ul>

{showMore && (
  <>
    <h3 className="mloverview-title">Machine Learning & Data Science - Course Coverage</h3>
    <ul className="mlcourse-highlights">
      <li><span className="highlight-bullet">•</span> Python Programming Fundamentals</li>
      <li><span className="highlight-bullet">•</span> Numpy, Pandas, Matplotlib, Seaborn</li>
      <li><span className="highlight-bullet">•</span> Data Analytics & Visualization</li>
      <li><span className="highlight-bullet">•</span> Supervised & Unsupervised ML Algorithms</li>
      <li><span className="highlight-bullet">•</span> Deep Learning & Neural Networks</li>
      <li><span className="highlight-bullet">•</span> Image Processing with OpenCV</li>
      <li><span className="highlight-bullet">•</span> Natural Language Processing (NLP)</li>
    </ul>

    <h3 className="mloverview-title">Learning Benefits:</h3>
    <ul className="mlcourse-highlights">
      <li><span className="highlight-bullet">•</span> Mentorship from Industry Experts</li>
      <li><span className="highlight-bullet">•</span> Real-World Projects & Tools Exposure</li>
    </ul>

    <p className="enroll-note"><em>Enroll now to kickstart your Data Science and Machine Learning journey with confidence!</em></p>
  </>
)}

      <div className="mlread-more-toggle">
        <button onClick={() => setShowMore(!showMore)} className="mlread-more-btn">
          {showMore ? 'Read less' : 'Read more'}
        </button>
        </div>
</div>
<div className="mlinstructor-section">
  <h2 className="mlinstructor-heading">Course Instructor</h2>

  <div className="mlinstructor-container">
    <img
      src="/assets/image/instructor-icon.jpg"
      alt="Instructor Avishkar Deogharia"
      className="instructor-image"
    />

    <div className="instructor-details">
      <h3 className="mlinstructor-name">Avishkar Deogharia</h3>
      <p className="mlinstructor-title">
        Senior Member Of Technical Staff at Salesforce | M.Tech @ IIT | Data Science | Mentor
      </p>
      <p className="instructor-bio">
  Avishkar is an experienced AI Researcher, Software Engineer, and Mentor with hands-on expertise in Biomedical Imaging,
  Natural Language Processing, Deep Learning, and Computer Vision.He has served as a Mentor at Codehub and has 
  contributed to the implementation of multiple cutting-edge projects in these domains.
</p>
<p className="instructor-bio">
  He holds an M.Tech in Artificial Intelligence from IIT Mumbai and was selected as one of the top 25 postgraduate 
  scholars under the Reliance Foundation Scholarship in Artificial Intelligence and Computer Science for the academic year 
  2022–23, recognized for academic excellence among premier institutes.
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
<div className="mltestimonial-review-section">
  {/* Left Side: Testimonial Card */}
  <div className="mltestimonial-card">
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
            In this course I was able to understand all the concepts clearly and also I did projects which helped me to get hands on practice on language and tools.
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at Ten</p>
          <p className="review-text">
            In this course I was able to understand all the concepts clearly and also I did projects which helped me to get hands on practice on language and tools.
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at Ten</p>
          <p className="review-text">
            In this course I was able to understand all the concepts clearly and also I did projects which helped me to get hands on practice on language and tools.
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at Ten</p>
          <p className="review-text">
           In this course I was able to understand all the concepts clearly and also I did projects which helped me to get hands on practice on language and tools.
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at Ten</p>
          <p className="review-text">
            In this course I was able to understand all the concepts clearly and also I did projects which helped me to get hands on practice on language and tools.
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at Ten</p>
          <p className="review-text">
            In this course I was able to understand all the concepts clearly and also I did projects which helped me to get hands on practice on language and tools.
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
    <label htmlFor="faq1" className="mlfaq-question">
      <span>01</span> How will these classes be conducted?
    </label>
    <div className="faq-answer">
      It will be an online live (Live Stream) class, so you can attend from any geographical location. It's interactive, and you can ask doubts in real-time.
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq2" />
    <label htmlFor="faq2" className="mlfaq-question">
      <span>02</span> How does the admission process work for this course?
    </label>
    <div className="faq-answer">
      Initially, you need to signup for this course & make the payment.
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq3" />
    <label htmlFor="faq3" className="mlfaq-question">
      <span>03</span> Is there any number to contact for query?
    </label>
    <div className="faq-answer">
      Call us at: <strong>(+91) (0)8069289001</strong> or email: <strong>courses@geeksforgeeks.org</strong>
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq4" />
    <label htmlFor="faq4" className="mlfaq-question">
      <span>04</span> What are the benefits of a machine learning and data science program?
    </label>
    <div className="faq-answer">
      A machine learning and data science program can provide valuable skills in data analysis, statistical modeling, and programming, which are in high demand in today's job market.
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq5" />
    <label htmlFor="faq5" className="mlfaq-question">
      <span>05</span> Is this a certification course?
    </label>
    <div className="faq-answer">
      Yes, a certificate will be provided upon completion.
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default Ml;
