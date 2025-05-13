import React from 'react'
import '../styles/Practice.css';

function Practice() {
  return (
    <div>
      <main className="main-content">
      <section className="tiles-section">
        <h2>Challenges And Contests</h2>
        {/* Problem of the Day Section */}
        <div className="problem-of-the-day">
          <div className="article-card">
            <div className="card-image-set">
              <span>
                <h3><a href="#">Problem of the Day</a></h3>
                <p>🧩 5-Minute Fix or 50-Minute Fight? – You never know until you dive in!</p>
                <p>🏅 Earn Daily Streak Points! – Stay consistent and unlock badges as you go.</p>
                <p>🗓️ Every Day Counts! – One small problem a day keeps rusty logic away</p>
              </span>
              <span style={{ alignItems: 'end' }}>
                <img src="assets\image\Problem of the day.jpeg" alt="#" className="card-image" />
              </span>
            </div>
            <div className="article-meta">
              <span><i className="far fa-eye"></i></span>
              <span><i className="far fa-thumbs-up"></i></span>
              </div>
            <button className="participate-btn">Solve</button>
          </div>
        </div>
        {/* Weekly Contest Section */}
        <div className="articles-grid">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="article-card" key={index}>
              <div className="card-image-set">
                <span>
                  <h3><a href="#">{`Weekly Contest ${index + 1}`}</a></h3>
                  <p>1. 🏆Win Exciting Prizes</p>
                  <p>2. 📈 Boost Your Rank! – Earn points and climb the leaderboard to unlock special badges and perks.</p>
                  <p>3. 👥 Compete with the Best! – Join a growing community of creative thinkers and problem solvers.</p>
                </span>
                <span>
                  <img src="assets\image\Weekly_contest.jpeg" alt="#" className="card-image" />
                </span>
              </div>
              <div className="article-meta">
                <span><i className="far fa-eye"></i></span>
                <span><i className="far fa-thumbs-up"></i></span>
                </div>
              <button className="participate-btn">Participate</button>
            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
  )
}

export default Practice
