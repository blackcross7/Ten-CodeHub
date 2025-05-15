import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Profile.css'; // Ensure styles handle .sidebar, .open, .hamburger, etc.

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main className="main-content">
      {/* Hamburger and Sidebar */}
      <div className="wrapper">
        <button className="hamburger" onClick={toggleSidebar}>☰</button>
        <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><i className="fas fa-chart-line"></i><span>Contributions</span></li>
            <li><i className="fas fa-bookmark"></i><span>Saved Items</span></li>
            <li><i className="fas fa-university"></i><span>Colleges</span></li>
            <li><i className="fas fa-building"></i><span>Companies</span></li>
            <li><i className="fas fa-user-graduate"></i><span>Campus Ambassadors</span></li>
            <li><i className="fas fa-user-plus"></i><span>Invite</span></li>
            <li><Link to="/edit-profile"><i className="fas fa-edit"></i><span>Edit Profile</span></Link></li> {/* ✅ Added functional link */}
            <li><i className="fas fa-cog"></i><span>Account Settings</span></li>
            <li><i className="fas fa-sign-out-alt"></i><span>Logout</span></li>
          </ul>
        </nav>
      </div>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-total-block"></div>
        <div className="left-30">
          <div className="profile-pic-wrapper">
            <img src="/assets/image/profile_picture.jpg" alt="Profile Picture" />
            <div className="username">Madhuri</div>
            <div className="edit-icon">
              <i className="material-icons">edit</i>
            </div>
          </div>

          {/* Streak Block */}
          <div className="streak-section">
            <div className="streak-wrapper">
              <div className="streak-label">Current POTD Streak</div>
              <div className="circular-streak">
                <div className="streak-content">
                  <strong>STREAK</strong>
                  <small>00 / 1375 days</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-70">
          <div className="institution-info-row">
            <div className="institution-header">
              <h2 className="institute-heading">Institute</h2>
              <button className="edit-button"><Link to="/edit-profile">Edit</Link></button> {/* ✅ Added functional edit button */}
            </div>
            <div className="institution-info">
              <h3>Andhra Loyola Institute of Engineering & Technology</h3>
              <p>Department of CSE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section className="problem-solving">
        <div className="problem-solving-card card-wrapper">
          <div className="problem-image"></div>
          <div className="problem-details">
            <h3>Start solving a problem</h3>
            <p>To view your submission here, solve a problem and submit it.</p>
            <button className="solve-button">Solve Problems</button>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="learning">
        <div className="learning-card">
          <div className="learning-image"></div>
          <div className="learning-details">
            <h3>Learn from Industry Professionals</h3>
            <p>Enroll in courses taught by experts and gain real-world skills that make a difference.</p>
            <button className="explore-button">Explore Course</button>
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="points-system">
        <div className="main-block">
          <div className="badges-container">
            {["Contributor", "Proficient", "Scholar", "Master", "Ace"].map((badge, i) => (
              <div className="badge-item" key={i}>
                <p>{badge}</p>
                <img src={`/assets/image/img${i + 1}${i + 1}.png`} alt={badge} />
                <span>{["1", "100", "1k", "10k", "50k"][i]} Points</span>
              </div>
            ))}
          </div>
          <div className="badges-right">
            <div className="write-more-box">
              <div className="write-content">
                <div className="write-text">
                  <h4>Write More to Win More</h4>
                  <p>Share your thoughts and unlock badges as you progress.</p>
                  <div className="buttons-row">
                    <button className="start-btn">Start Writing</button>
                    <button className="badge-info-btn">How Badges Work</button>
                  </div>
                </div>
                <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/33953.png" alt="Write Illustration" className="write-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contest Promotion */}
      <section className="contest-promotion">
        <div className="contest-card">
          <div className="contest-image"></div>
          <div className="contest-details">
            <h3>Join the contest to boost your rating and win prizes!</h3>
            <p>Challenge yourself and rise to the top.</p>
            <button className="explore-button">Explore Course</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
