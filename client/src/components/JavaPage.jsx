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
        <ul>
  <li><span className="highlight-bullet">•</span> <strong>20+ hours</strong> of on-demand video lessons.</li>
  <li><span className="highlight-bullet">•</span> Over <strong>100 practice questions</strong> to master core concepts.</li>
  <li><span className="highlight-bullet">•</span> Includes <strong>project-based training</strong> with an option for an <strong>internship certificate</strong>.</li>
  <li><span className="highlight-bullet">•</span> Regular <strong>weekday sessions</strong> for doubt clarification.</li>
  <li><span className="highlight-bullet">•</span> Participate in <strong>skill evaluation challenges</strong>.</li>
  <li><span className="highlight-bullet">•</span> Get <strong>24/7 personal doubt support</strong> for <strong>6 months</strong>.</li>
  <li><span className="highlight-bullet">•</span> Build real-world projects live:
    <ul>
      <li><strong>Minor Project:</strong> Digital Library System</li>
      <li><strong>Major Project:</strong> E-Wallet Platform (like Paytm)</li>
    </ul>
  </li>
  <li><span className="highlight-bullet">•</span> Explore extra recorded projects:
    <ul>
      <li><strong>Movie Review Application</strong></li>
      <li><strong>Online Movie Ticket Booking</strong></li>
    </ul>
  </li>
  <li><span className="highlight-bullet">•</span> Access <strong>lecture notes and documentation</strong> for each session.</li>
  <li><span className="highlight-bullet">•</span> <strong>Note:</strong> Students who finish their project within <strong>15 days post-course</strong> and <strong>submit via the GitHub link</strong> on the noticeboard will be <strong>considered for an internship certificate after review</strong>.</li>
</ul>
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
  Lead Backend Architect at TechVerse Labs | Ex CodeNation | IIT Indore | 9+ years of Exp
</p>
<p className="instructor-bio">
  With strong expertise in Java, Spring Boot, MongoDB, RabbitMQ, and PostgreSQL, Avishkar Deogharia stands out as a
  seasoned backend engineer. He completed his graduation from IIT Indore and brings over 9 years of experience
  in the software industry. Currently, he works as a Lead Backend Architect at TechVerse Labs. Previously, he was
  part of CodeNation as a Senior Software Engineer.
</p>
<p className="instructor-bio">
  Avishkar has also contributed to several high-impact projects during his time at companies like InstaShop and
  Zylotech. He has played a key role in building distributed systems, microservices, and scalable data pipelines.
  Alongside his engineering work, Avishkar has a passion for teaching and mentoring, helping students and working
  professionals build real-world development skills.
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
        <p className="value bold">JBDL 74</p>
      </div>
      <div className="info-block">
        <p className="label">MENTOR</p>
        <p className="value">Avishkar Deogharia</p>
      </div>
    </div>

    <div className="divider" />

    <div className="row">
      <div className="info-block">
        <p className="label">STARTING FROM</p>
        <p className="value">June 30, 2025</p>
      </div>
      <div className="info-block">
        <p className="label">TIMINGS</p>
        <p className="value bold">09:00 AM IST -Sat, Sun</p>
      </div>
    </div>

    <div className="bottom-row">
      <button className="signup-button">Sign Up Now</button>
      <div className="pricing">
        <p className="old-price">₹ 19789</p>
        <p className="new-price">₹ 8499</p>
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
