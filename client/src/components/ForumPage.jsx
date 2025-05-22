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
    navigate('/discussion'); // Ensure the route matches your `routes.jsx` definition
  };

  return (
    <div className="forum-wrapper bg-[url('/assets/image/HeroBg3.jpeg')] bg-cover bg-center text-white">
      {/* Side image container */}
      <div className="image-container">
        <img src="/assets/image/discussion.png" alt="Discussion" />
      </div>

      {/* Main forum content */}
      <div className="forum-container bg-white text-white-800">
        <h1 className="forum-title text-white">Discussion Forum</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name" className="text-gray-800">
              <img src="/assets/image/user-icon.png" alt="User" className="icon-img" /> Name:
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
            <label htmlFor="topic" className="text-white">
              <img src="/assets/image/topic-icon.png" alt="Topic" className="icon-img" /> Discussion Topic:
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="text-white"
            />
          </div>

          <div className="input-group">
            <label htmlFor="views" className="text-white">
              <img src="/assets/image/views-icon.png" alt="Views" className="icon-img" /> Your Views:
            </label>
            <textarea
              id="views"
              name="views"
              value={views}
              onChange={(e) => setViews(e.target.value)}
              className="text-white"
            ></textarea>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="submit">Submit</button>
          </div>
        </form>

        {statusMessage && (
          <p className={`status-message ${statusMessage.includes('successfully') ? 'success' : 'error'} text-gray-800`}>
            {statusMessage}
          </p>
        )}

        {/* Button to navigate to DiscussionPage */}
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
