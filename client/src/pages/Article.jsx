import React from 'react';
import '../styles/Articles.css';

const Articles = () => {
  return (
    <main className="articles-container">

      {/* Featured Articles */}
      <section className="featured-articles">
        <h2><i className="fas fa-crown"></i> Featured Articles</h2>
        <div className="featured-grid">
          <article className="featured-card">
            <div className="article-image">
              <img src="/assets/image/Web_Dev_Article.png" alt="Article" />
              <span className="article-category"><i className="fas fa-code"></i> Web Development</span>
            </div>
            <div className="article-content">
              <h3>Understanding React Hooks: A Comprehensive Guide</h3>
              <p>Learn about React Hooks, their benefits, and how to use them effectively in your React applications.</p>
              <div className="article-meta">
                <span><i className="fas fa-clock"></i></span>
                <span><i className="fas fa-eye"></i></span>
              </div>
            </div>
          </article>

          <article className="featured-card">
            <div className="article-image">
              <img src="/assets/image/BST.jpeg" alt="Article" />
            </div>
            <div className="article-content">
              <h3>Mastering Binary Search Trees</h3>
              <p>Deep dive into Binary Search Trees, their operations, and real-world applications.</p>
              <div className="article-meta">
                <span><i className="fas fa-clock"></i></span>
                <span><i className="fas fa-eye"></i></span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2><i className="fas fa-folder-tree"></i> Categories</h2>
        <div className="categories-grid">
          {[
            { icon: 'laptop-code', name: 'Web Development', count: 125 },
            { icon: 'diagram-project', name: 'Data Structures', count: 98 },
            { icon: 'brain', name: 'Algorithms', count: 156 },
            { icon: 'mobile-screen-button', name: 'Mobile Development', count: 87 },
            { icon: 'shield-halved', name: 'Cyber Security', count: 64 },
            { icon: 'robot', name: 'Machine Learning', count: 112 }
          ].map((cat, idx) => (
            <a href="#" className="category-card" key={idx}>
              <i className={`fas fa-${cat.icon}`}></i>
              <h3>{cat.name}</h3>
              <span>{cat.count} Articles</span>
            </a>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="latest-articles">
        <h2><i className="fas fa-bolt"></i> Latest Articles</h2>
        <div className="articles-grid">
          {[
            {
              category: 'Web Development',
              icon: 'laptop-code',
              date: '2 days ago',
              title: 'Building Responsive Web Applications with CSS Grid',
              summary: 'Learn how to create modern, responsive layouts using CSS Grid and Flexbox.'
            },
            {
              category: 'Algorithms',
              icon: 'brain',
              date: '3 days ago',
              title: 'Understanding Time Complexity in Algorithms',
              summary: 'A comprehensive guide to analyzing and optimizing algorithm performance.'
            },
            {
              category: 'Data Science',
              icon: 'chart-line',
              date: '4 days ago',
              title: 'Introduction to Data Visualization with Python',
              summary: 'Learn how to create stunning visualizations using Python libraries.'
            }
          ].map((art, idx) => (
            <article className="article-card" key={idx}>
              <div className="article-header">
                <span className="article-category"><i className={`fas fa-${art.icon}`}></i> {art.category}</span>
                <span className="article-date"><i className="fas fa-calendar-days"></i> {art.date}</span>
              </div>
              <h3>{art.title}</h3>
              <p>{art.summary}</p>
              <div className="article-footer">
                <div className="author-info">
                  <img src="\assets\image\Screenshot 2025-02-07 223101.png" alt="Author" className="author-avatar" />
                  <span><i className="fas fa-user-pen"></i></span>
                </div>
                <div className="article-stats">
                  <span><i className="fas fa-heart"></i></span>
                  <span><i className="fas fa-comment"></i></span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button className="load-more-btn"><i className="fas fa-arrow-down"></i> Load More Articles</button>
      </section>

    </main>
  );
};

export default Articles;
