import React from "react";

const Profile = () => {
  return (
    <main className="profile-container">
      {/* User Info Section */}
      <section className="user-info-section">
        <div className="user-header">
          <div className="user-avatar">
            <img src='\assets\image\Screenshot 2025-02-07 223101.png' alt="User" className="user-pic" />
            <button className="edit-avatar-btn">
              <i className="fas fa-camera"></i>
            </button>
          </div>
          <div className="user-details">
            <h1>Nikita Soni</h1>
            <p className="user-title">Frontend Developer</p>
            <p className="user-location">
              <i className="fas fa-map-marker-alt"></i> India
            </p>
            <div className="user-stats">
              <div className="stat-item">
                <span className="stat-number">120</span>
                <span className="stat-label">Problems Solved</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">35</span>
                <span className="stat-label">Articles Read</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15</span>
                <span className="stat-label">Courses Completed</span>
              </div>
            </div>
            <a href="/edit-profile" className="edit-profile-btn">
              <i className="fas fa-edit"></i> Edit Profile
            </a>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section">
        <h2>
          <i className="fas fa-chart-line"></i> Learning Progress
        </h2>
        <div className="progress-cards">
          {[
            {
              title: "Data Structures & Algorithms",
              percent: 75,
              completed: 15,
              total: 20,
            },
            {
              title: "Web Development",
              percent: 60,
              completed: 12,
              total: 20,
            },
            {
              title: "System Design",
              percent: 40,
              completed: 8,
              total: 20,
            },
          ].map((course, i) => (
            <div className="progress-card" key={i}>
              <h3>{course.title}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${course.percent}%` }}
                ></div>
              </div>
              <div className="progress-stats">
                <span>{course.percent}% Complete</span>
                <span>{course.completed}/{course.total} Topics</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Section */}
      <section className="activity-section">
        <h2>
          <i className="fas fa-history"></i> Recent Activity
        </h2>
        <div className="activity-timeline">
          {[
            {
              icon: "fas fa-check-circle",
              text: 'Solved "Two Sum" problem',
              time: "2 hours ago",
            },
            {
              icon: "fas fa-book-reader",
              text: 'Read "Understanding React Hooks"',
              time: "5 hours ago",
            },
            {
              icon: "fas fa-certificate",
              text: 'Completed "JavaScript Basics" course',
              time: "1 day ago",
            },
          ].map((activity, i) => (
            <div className="activity-item" key={i}>
              <div className="activity-icon">
                <i className={activity.icon}></i>
              </div>
              <div className="activity-content">
                <p>{activity.text}</p>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Saved Articles Section */}
      <section className="saved-articles-section">
        <h2>
          <i className="fas fa-bookmark"></i> Saved Articles
        </h2>
        <div className="saved-articles-grid">
          {[
            {
              title: "Understanding JavaScript Closures",
              desc: "Learn about JavaScript closures and their practical applications in web development.",
              href: "/article1",
            },
            {
              title: "Responsive Web Design Basics",
              desc: "Master the fundamentals of creating responsive websites that work on all devices.",
              href: "/article2",
            },
            {
              title: "CSS Grid vs Flexbox",
              desc: "Understand when to use CSS Grid and Flexbox in your web design projects.",
              href: "/article3",
            },
          ].map((article, i) => (
            <div className="saved-article-card" key={i}>
              <h3>
                <a href={article.href}>{article.title}</a>
              </h3>
              <p>{article.desc}</p>
              <div className="article-meta">
                <span>
                  <i className="far fa-eye"></i>
                </span>
                <span>
                  <i className="far fa-thumbs-up"></i>
                </span>
              </div>
              <button className="remove-saved-btn">
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Profile;
