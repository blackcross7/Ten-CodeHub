import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faHome, faNewspaper, faComments, faBook, faEdit, faCompass } from '@fortawesome/free-solid-svg-icons';
import useAuthStore from '../store/authStore';

const Navbar = () => {
  const { user, checkAuth } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSearchSmall, setShowSearchSmall] = useState(false);


  // Ref for the scrollable secondary links container
  const scrollContainerRef = useRef(null);
  const location = useLocation();


  const toggleSearch = () => {
    setShowSearchSmall(prev => !prev);
  };

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      // Close menu if window is resized to desktop view
      if (window.innerWidth >= 1025) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // Implement scrollLeft function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; // Scroll left by 200px
    }
  }

  // Implement scrollRight function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; // Scroll right by 200px
    }
  }

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className='nav-whole-container'>
      <nav className="navbar">
        {/* Hamburger Menu for mobile */}
        <div className="hamburger-nav" onClick={toggleMenu} ref={hamburgerRef}>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
        </div>

        {/* Left Navbar Items */}
        <div className="navbar-left desktop-only">
          <ul className="nav-links">
            <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link to="/articles"><FontAwesomeIcon icon={faNewspaper} /> Articles</Link></li>
            <li><Link to="/forum"><FontAwesomeIcon icon={faComments} /> Discussion</Link></li>
            <li><Link to="/course"><FontAwesomeIcon icon={faBook} /> Courses</Link></li>
            <li><Link to="/practice"><FontAwesomeIcon icon={faEdit} /> Practice</Link></li>
            <li><Link to="/explore"><FontAwesomeIcon icon={faCompass} /> Explore</Link></li>
          </ul>
        </div>

        {/* Logo Center */}
        <div className="navbar-center">
          <Link to="/" className="logo-svg">
            <img src="/assets/image/logo.svg" alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Right Navbar Items */}
        <div className="navbar-right">
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-input" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>

          {/* Small screen search icon */}
          <div className='search-box-small'>
            <FontAwesomeIcon
              icon={faSearch}
              className="search-icon-small"
              onClick={toggleSearch}
            />
            {/* Conditionally render input on small screens when icon clicked */}
            {showSearchSmall && (
              <input
                type="text"
                placeholder="Search"
                className="search-input-small"
                autoFocus
              />
            )}
          </div>
          {user ? (
            <div className="profile-icon">
              <Link to="/profile">
                <img src="assets/image/user-icon.png" alt="Profile" className="user-avatar" />
              </Link>
            </div>
          ) : (
            <div className="auth-section">
              <Link to="/loginModal">
                <button className="signin-btn">Sign In</button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {windowWidth < 1025 && (
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} ref={menuRef}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link to="/articles" onClick={toggleMenu}><FontAwesomeIcon icon={faNewspaper} /> Articles</Link></li>
            <li><Link to="/forum" onClick={toggleMenu}><FontAwesomeIcon icon={faComments} /> Discussion</Link></li>
            <li><Link to="/course" onClick={toggleMenu}><FontAwesomeIcon icon={faBook} /> Courses</Link></li>
            <li><Link to="/practice" onClick={toggleMenu}><FontAwesomeIcon icon={faEdit} /> Practice</Link></li>
            <li><Link to="/explore" onClick={toggleMenu}><FontAwesomeIcon icon={faCompass} /> Explore</Link></li>
          </ul>
        </div>
      )}

      {/* Secondary Navbar */}
      <div className="secondary-navbar">
        <button className="scroll-btn" onClick={scrollLeft}>&lt;</button> {/* Changed to HTML entity for less confusion */}
        <div className="secondary-links" id="scrollable-links" ref={scrollContainerRef}>

          <Link to="/dsa" className={`secondary-link ${location.pathname === "/dsa" ? "active" : ""}`}>DSA</Link>
          <Link to="/practice" className={`secondary-link ${location.pathname === "/practice" ? "active" : ""}`}>Practice Problems</Link>
          <Link to="/python" className={`secondary-link ${location.pathname === "/python" ? "active" : ""}`}>Python</Link>
          <Link to="/c" className={`secondary-link ${location.pathname === "/c" ? "active" : ""}`}>C</Link>
          <Link to="/cpp" className={`secondary-link ${location.pathname === "/cpp" ? "active" : ""}`}>C++</Link>
          <Link to="/java" className={`secondary-link ${location.pathname === "/java" ? "active" : ""}`}>Java</Link>
          <Link to="/course" className={`secondary-link ${location.pathname === "/course" ? "active" : ""}`}>Courses</Link>
          <Link to="/ml" className={`secondary-link ${location.pathname === "/ml" ? "active" : ""}`}>Machine Learning</Link>
          <Link to="/devops" className={`secondary-link ${location.pathname === "/devops" ? "active" : ""}`}>DevOps</Link>
          <Link to="/webdev" className={`secondary-link ${location.pathname === "/webdev" ? "active" : ""}`}>Web Development</Link>
          <Link to="/systemdesign" className={`secondary-link ${location.pathname === "/systemdesign" ? "active" : ""}`}>System Design</Link>
          <Link to="/aptitude" className={`secondary-link ${location.pathname === "/aptitude" ? "active" : ""}`}>Aptitude</Link>

        </div>
        <button className="scroll-btn" onClick={scrollRight}>&gt;</button> {/* Changed to HTML entity */}
      </div>
    </div>
  );
};

export default Navbar;