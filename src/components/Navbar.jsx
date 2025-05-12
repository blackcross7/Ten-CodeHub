import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"></Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles, tutorials, courses..."
          className="search-input"
        />
        <button className="search-btn">
          <i className="fas fa-magnifying-glass"></i>
        </button>
      </div>
      <ul className="nav-links">
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/articles" className="active"><i className="fas fa-newspaper"></i> Articles</Link></li>
        <li><Link to="/profile"><i className="fas fa-user"></i> Profile</Link></li>
        <li><Link to="/Course"><i className="fas fa-user"></i> Courses</Link></li>
        <li><Link to="/practice"><i className="fas fa-user"></i> Practice</Link></li>
        <li><Link to="/login"><i className="fas fa-user"></i> LogIn</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
