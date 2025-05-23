import React, { useEffect } from 'react';
import '../styles/Practice.css';

function Practice() {
  useEffect(() => {
    const cards = document.querySelectorAll('.article-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, {
      threshold: 0.1,
    });

    cards.forEach((card, index) => {
      card.style.setProperty('--delay', `${0.1 * (index + 1)}s`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        {/* You can put any headline or leave blank */}
      </div>

      {/* Navy blue background wrapper */}
      <div className="after-hero-bg">
        <div className='main-div-practice'>
          <main className="main-content-practice">
            <section className="tiles-section">
              <h2>Challenges And Contests</h2>

              {/* Problem of the Day Section */}
              <div className="problem-of-the-day">
                <div className="article-card">
                  <div className="card-image-set">
                    <span>
                      <h3><a href="#">Problem of the Day</a></h3>
                      <p>🧩 5-Minute Fix or 50-Minute Fight?</p>
                      <p>🏅 Earn Daily Streak Points!</p>
                      <p>🗓 One small problem a day keeps rusty logic away</p>
                    </span>
                    <span>
                      <img src="assets/image/Problem of the day.jpeg" alt="#" className="card-image" />
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
                        <p>1. 🏆 Win Exciting Prizes</p>
                        <p>2. 📈 Boost Your Rank</p>
                        <p>3. 👥 Compete with the Best</p>
                      </span>
                      <span>
                        <img src="assets/image/Weekly_contest.jpeg" alt="#" className="card-image" />
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
      </div>
    </>
  );
}

export default Practice;
