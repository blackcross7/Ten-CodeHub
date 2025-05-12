import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
 
  const toggleSearch = () => {
  setShowSearchInput((prev) => !prev);
};

  // Detect outside click
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
    <div className='nav-whole-container'>

      {/* Top Navbar */}
      <nav className="navbar">
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
          <i className="fas fa-bars"></i>
        </div>

        {/* Left Navigation Links (desktop) */}
        <div className="navbar-left">
          <ul className="nav-links">
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/articles"><i className="fas fa-newspaper"></i> Articles</Link></li>
            <li><Link to="/course"><i className="fas fa-book"></i> Courses</Link></li>
            <li><Link to="/practice"><i className="fas fa-edit"></i> Practice</Link></li>
            <li><Link to="/explore"><i className="fas fa-compass"></i> Explore</Link></li>
            <li><Link to="/explore"><i className="fas fa-comments"></i> Discussions</Link></li>
          </ul>
        </div>

        {/* Center Logo */}
        <div className="navbar-center">
          <Link to="/">
            <img src="/assets/image/logo.svg" alt="Ten CodeHub" className="logo-img" />
          </Link>
        </div>

{/* Right Side */}
<div className="navbar-right">
  {/* Full Search Input (Desktop) */}
  <div className={`search-container desktop-only`}>
    <i className="fas fa-search search-icon"></i>
    <input type="text" placeholder="Search" className="search-input" />
    <button className="search-btn">
      <i className="fas fa-times clear-icon"></i>
    </button>
  </div>

  {/* Search Icon (Mobile) */}
  <div className="mobile-search-icon mobile-only" onClick={toggleSearch}>
    <i className="fas fa-search"></i>
  </div>

  {/* Search Input Popup (Mobile) */}
  {showSearchInput && (
    <div className="mobile-search-popup">
      <input type="text" placeholder="Search..." className="search-input" />
      <button onClick={toggleSearch} className="search-btn">
        <i className="fas fa-times clear-icon"></i>
      </button>
    </div>
  )}

  <div className="profile-wrapper">
    <Link to="/profile" className="profile-link">
      <i title="Profile" className="fas fa-user"></i>
    </Link>
  </div>
</div>


      </nav>

      {/* Mobile Hamburger Menu (Overlay) */}
      {menuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}><i className="fas fa-home"></i> Home</Link></li>
            <li><Link to="/articles" onClick={toggleMenu}><i className="fas fa-newspaper"></i> Articles</Link></li>
            <li><Link to="/course" onClick={toggleMenu}><i className="fas fa-book"></i> Courses</Link></li>
            <li><Link to="/practice" onClick={toggleMenu}><i className="fas fa-edit"></i> Practice</Link></li>
            <li><Link to="/explore" onClick={toggleMenu}><i className="fas fa-compass"></i> Explore</Link></li>
            <li><Link to="/discussion" onClick={toggleMenu}><i className="fas fa-comments"></i> Discussions</Link></li>
          </ul>
        </div>
      )}

      {/* Secondary Navbar */}
      <div className='secondary-main-container'>

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
      </div>
       </div> 
    </>
  );
};

export default Navbar;
