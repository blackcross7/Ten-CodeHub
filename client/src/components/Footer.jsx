import React from 'react';
import '../style.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-info-circle"></i> About Us</h3>
          <p>
            A Computer Science portal for students. It contains well written, well thought and well explained computer science and programming articles.
          </p>
        </div>
        <div className="footer-section">
          <h3><i className="fas fa-link"></i> Quick Links</h3>
          <ul>
            <li><a href="/articles"><i className="fas fa-newspaper"></i> Articles</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><i className="fas fa-envelope"></i> Contact Us</h3>
          <p><i className="fas fa-at"></i> Email: contact@Nikita</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p><i className="fas fa-copyright"></i> 2025 students. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
