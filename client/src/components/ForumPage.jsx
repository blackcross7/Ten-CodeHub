import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ForumPage.css';

const ForumPage = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [views, setViews] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && topic && views) {
      setStatusMessage('Forum submitted successfully!');
      setName('');
      setTopic('');
      setViews('');

      setTimeout(() => {
        setStatusMessage('');
      }, 3000);
    } else {
      setStatusMessage('Please fill in all fields.');
    }
  };

  const goToDiscussions = () => {
    navigate('/discussions');
  };

  return (
    <div className="forum-wrapper">
      {/* Side image container */}
      <div className="image-container">
        <img src="/assets/images/discussion.png" alt="Discussion" />
      </div>

      {/* Main forum content */}
      <div className="forum-container">
        <h1 className="forum-title">Discussion Forum</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">
              <img src="/assets/images/user-icon.png" alt="User" className="icon-img" /> Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="topic">
              <img src="/assets/images/topic-icon.png" alt="Topic" className="icon-img" /> Discussion Topic:
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="views">
              <img src="/assets/images/views-icon.png" alt="Views" className="icon-img" /> Your Views:
            </label>
            <textarea
              id="views"
              name="views"
              value={views}
              onChange={(e) => setViews(e.target.value)}
            ></textarea>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="submit">Submit</button>
          </div>
        </form>

        {statusMessage && (
          <p className={`status-message ${statusMessage.includes('successfully') ? 'success' : 'error'}`}>
            {statusMessage}
          </p>
        )}

        <div style={{ textAlign: 'center' }}>
          <button className="view-discussions-btn" onClick={goToDiscussions}>
            View Discussions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
