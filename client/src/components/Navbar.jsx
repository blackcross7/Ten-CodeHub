import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar">
        {/* Left Navigation Links */}
        <div className="navbar-left">
          <ul className="nav-links">
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/articles"><i className="fas fa-newspaper"></i> Articles</Link></li>
            <li><Link to="/course"><i className="fas fa-book"></i> Courses</Link></li>
            <li><Link to="/practice"><i className="fas fa-edit"></i> Practice</Link></li>
          </ul>
        </div>

        {/* Center Logo */}
        <div className="navbar-center">
          <Link to="/">
            <img
              src="/assets/image/logo.svg"
              alt="Ten CodeHub"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Right Side: Search & Profile */}
        <div className="navbar-right">
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-btn">
              <i className="fas fa-times clear-icon"></i>
            </button>
          </div>
          <div className="profile-wrapper">
            <Link to="/profile" className="profile-link">
              <i className="fas fa-user"></i> Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <div className="secondary-navbar">
        <button className="scroll-btn" onClick={() => scrollLeft()}>‹</button>
        <div className="secondary-links" id="scrollable-links">
          <Link to="/dsa">DSA</Link>
          <Link to="/problems">Practice Problems</Link>
          <Link to="/python">Python</Link>
          <Link to="/c">C</Link>
          <Link to="/cpp">C++</Link>
          <Link to="/java">Java</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/ml">Machine Learning</Link>
          <Link to="/devops">DevOps</Link>
          <Link to="/webdev">Web Development</Link>
          <Link to="/systemdesign">System Design</Link>
          <Link to="/aptitude">Aptitude</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <button className="scroll-btn" onClick={() => scrollRight()}>›</button>
      </div>
    </>
  );
};

export default Navbar;
