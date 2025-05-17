// src/components/BackendPage.jsx
import React, { useState } from 'react';
import '../styles/JavaPage.css';
import { Link } from 'react-router-dom';

const BackendPage = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    
    <div className="backend-page">
      <div className="backend-container">
        <div className="course-header">
  <Link to="/home">
    <p className="breadcrumb">All Courses &gt; Live</p>
    <h1 className="course-title">JAVA Backend Development - Live</h1>
  </Link> 
</div>

        <p className="course-meta">
          Live Course <span className="stars">⭐⭐⭐⭐⭐</span>{' '}
          <a href="#">4.7/5 ratings</a>
        </p>
        
        <div className="course-card-java">
            {/* Left side image */}
          <img
            src="/assets/image/backend2-icon.png"
            alt="Backend Course"
            className="thumbnail-image"
          />
          <div className="course-details-java">
            <p className="interested">
                <img src="/assets/image/interested-icon.png" alt="Interested" className="stat-icon" /> 
                 307k+ interested Coders</p>
            <p className="description">
              The <strong>JAVA Backend Development - Live course</strong> is designed to teach you how to build powerful and efficient backend systems using Java. This extensive Java Backend Development course is a <strong>12-week guided program</strong> to equip you with the right skills and make you interview-ready. Get hands-on experience in building apps like e-wallets, movie ticket booking, etc.
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
          <span className="info-pill">Capstone Projects</span>
          <span className="info-pill">Industry Experts</span>
          <span className="info-pill">Doubt Solving</span>
          <span className="info-pill">Internship Certificate</span>
        </div>

        {/* Early Bird Alert */}
<div className="early-bird-alert">
  <div className="alert-icon">i</div>
  <div className="alert-text">
    <p><strong>Early Bird Alert -</strong> Grab your seats <span className="highlight-red">NOW</span> &amp; save <span className="highlight-red">FLAT 25%OFF</span></p>
    <p>USE CODE : <strong className="highlight-red">GET25OFF</strong></p>
    <p>For further queries reach us via Call/WhatsApp on: <span className="whatsapp-number">+91-8130806629</span></p>
  </div>
</div>
<div className="course-overview-section">
      <h2 className="section-heading">Course Overview</h2>

      <h3 className="overview-title">JAVA Backend Development Course - Overview</h3>
      <p className="overview-description">
        This <strong>12-week live course</strong> is designed to equip you with the essential skills required for
        <strong> Java backend development</strong> and <strong>job interviews</strong>. You will gain hands-on experience by
        building <strong>real-world applications</strong>, including an <strong>e-wallet</strong> and a
        <strong> movie ticket booking system</strong>. The course includes <strong>20+ hours</strong> of recorded content,
        <strong> 100+ practice problems</strong>, and <strong>one-on-one doubt assistance</strong> available
        <strong> 24/7 for six months</strong>. Key topics covered include <strong>Spring Boot, Hibernate, REST APIs,
        Microservices</strong>, and <strong>more</strong>, guided by industry <strong>experts</strong>.
      </p>

      <h3 className="overview-title">JAVA Backend Development Course - Key Highlights:</h3>
      <ul className="course-highlights">
        <li><span className="highlight-bullet">•</span> <strong>20+ hours</strong> of recorded content.</li>
        <li><span className="highlight-bullet">•</span> <strong>100+</strong> Practice Problems</li>
        <li><span className="highlight-bullet">•</span> Project <strong>Training/Internship</strong> Certificate.</li>
        <li><span className="highlight-bullet">•</span> Weekday <strong>Doubt Solving</strong> Sessions</li>
        <li><span className="highlight-bullet">•</span> Skill Assessment Contests</li>
        <li><span className="highlight-bullet">•</span> 6 Months of 24/7 <strong>One-on-One</strong> Doubt Assistance</li>
        <li><span className="highlight-bullet">•</span> Live Project Building:
          <ul>
            <li>Minor Project: <strong>Digital Library</strong></li>
            <li>Major Project: <strong>E-Wallet App (e.g., Paytm)</strong></li>
          </ul>
        </li>
        <li><span className="highlight-bullet">•</span> Additional Recorded Projects:
          <ul>
            <li><strong>Movie Review System</strong></li>
            <li><strong>Movie Ticket Booking System</strong></li>
          </ul>
        </li>
        <li><span className="highlight-bullet">•</span> Supporting Notes/Documentation for every lecture.</li>
        <li><span className="highlight-bullet">•</span> <strong>Note:</strong> Students who complete the project within
          <strong> 15 days of course completion</strong> and <strong>upload it to the GitHub repository link</strong> provided
          on the noticeboard will be <strong>eligible for an internship certificate upon evaluation</strong>.
        </li>
      </ul>

      {showMore && (
        <>
          <h3 className="overview-title">Java Backend Development - Course Coverage</h3>
          <ul className="course-highlights">
            <li><span className="highlight-bullet">•</span> Advanced Java</li>
            <li><span className="highlight-bullet">•</span> Spring/Spring Boot</li>
            <li><span className="highlight-bullet">•</span> Hibernate</li>
            <li><span className="highlight-bullet">•</span> RESTful APIs</li>
            <li><span className="highlight-bullet">•</span> Spring Security</li>
            <li><span className="highlight-bullet">•</span> Redis & Apache Kafka</li>
            <li><span className="highlight-bullet">•</span> Microservices Architecture</li>
          </ul>

          <h3 className="overview-title">Learning Benefits:</h3>
          <ul className="course-highlights">
            <li><span className="highlight-bullet">•</span> Guidance from Industry Experts</li>
            <li><span className="highlight-bullet">•</span> Real-World Projects</li>
          </ul>

          <p className="enroll-note"><em>Enroll now to accelerate your Java backend developer career!</em></p>
        </>
      )}

      <div className="read-more-toggle">
        <button onClick={() => setShowMore(!showMore)} className="read-more-btn">
          {showMore ? 'Read less' : 'Read more'}
        </button>
        </div>
</div>
<div className="instructor-section">
  <h2 className="instructor-heading">Course Instructor</h2>

  <div className="instructor-container">
    <img
      src="/assets/image/instructor-icon.jpg"
      alt="Instructor Avishkar Deogharia"
      className="instructor-image"
    />

    <div className="instructor-details">
      <h3 className="instructor-name">Avishkar Deogharia</h3>
      <p className="instructor-title">
        Senior Member Of Technical Staff at Salesforce | Ex Naukri.com | NIT Surat | 8+ years of Exp
      </p>
      <p className="instructor-bio">
        With a deep understanding of Java, Springboot, Redis, Kafka, & MySQL, Shashikant is a master of his craft.
        He has completed his graduation from NIT, Surat. He has an overall experience of 7+ years & is currently
        working as a Senior MTS at Salesforce. Previously he was associated with Naukri as a Lead Engineer.
      </p>
      <p className="instructor-bio">
        He has also left his mark on the industry, having worked with esteemed companies like Paytm & Snapdeal. He
        has designed and developed multiple microservices and data processing pipelines in the existing distributed
        systems. His wealth of experience in teaching is matched only by his ability to mentor & guide both
        students & working professionals.
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
<div className="testimonial-review-section">
  {/* Left Side: Testimonial Card */}
  <div className="testimonial-card">
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
          <p className="review-placement">Placed at ValueMomentum</p>
          <p className="review-text">
            With the help of this course, First of all I got a proper Java Backend Syllabus Structure...
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at ValueMomentum</p>
          <p className="review-text">
            With the help of this course, First of all I got a proper Java Backend Syllabus Structure...
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at ValueMomentum</p>
          <p className="review-text">
            With the help of this course, First of all I got a proper Java Backend Syllabus Structure...
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at ValueMomentum</p>
          <p className="review-text">
            With the help of this course, First of all I got a proper Java Backend Syllabus Structure...
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at ValueMomentum</p>
          <p className="review-text">
            With the help of this course, First of all I got a proper Java Backend Syllabus Structure...
          </p>
        </div>
      </div>
      <div className="review-card">
        <img src="/assets/image/instructor-icon.jpg" alt="Reviewer" className="review-avatar" />
        <div className="review-details">
          <h4 className="review-name">Avishkar Deogharia</h4>
          <p className="review-placement">Placed at ValueMomentum</p>
          <p className="review-text">
            With the help of this course, First of all I got a proper Java Backend Syllabus Structure...
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
    <label htmlFor="faq1" className="faq-question">
      <span>01</span> How will these classes be conducted?
    </label>
    <div className="faq-answer">
      It will be an online live (Live Stream) class, so you can attend from any geographical location. It's interactive, and you can ask doubts in real-time.
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq2" />
    <label htmlFor="faq2" className="faq-question">
      <span>02</span> How does the admission process work for this course?
    </label>
    <div className="faq-answer">
      Initially, you need to signup for this course & make the payment.
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq3" />
    <label htmlFor="faq3" className="faq-question">
      <span>03</span> Is there any number to contact for query?
    </label>
    <div className="faq-answer">
      Call us at: <strong>(+91) (0)8069289001</strong> or email: <strong>courses@geeksforgeeks.org</strong>
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq4" />
    <label htmlFor="faq4" className="faq-question">
      <span>04</span> When can I access the recorded session of the class?
    </label>
    <div className="faq-answer">
      The session will be uploaded within 2 working days.
    </div>
  </div>

  <div className="faq-item">
    <input type="checkbox" id="faq5" />
    <label htmlFor="faq5" className="faq-question">
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

export default BackendPage;
