import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ForumPage.css';

const ForumPage = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [views, setViews] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const fadeInUpEnhanced = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.12,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && topic && views) {
      setStatusMessage('Forum submitted successfully!');
      setName('');
      setTopic('');
      setViews('');
      setTimeout(() => setStatusMessage(''), 3000);
    } else {
      setStatusMessage('Please fill in all fields.');
    }
  };

  const goToDiscussions = () => {
    navigate('/discussion');
  };

  return (
    <motion.div
      className="forum-page min-h-screen bg-[url('/assets/image/HeroBg3.jpg')] bg-cover bg-center bg-no-repeat text-white py-8"
      initial={{ scale: 1.2}}
      animate={{ scale: 1 }}
      transition={{ duration: 3, ease: 'easeOut' }}
    >
      <h1 className="forum-title text-white">Discussion Forum</h1>

      <div className="forum-wrapper">
        <motion.div
          className="image-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpEnhanced}
        >
          <img src="/assets/image/discussion.png" alt="Discussion" />
        </motion.div>

        <motion.div
          className="forum-container bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg p-6 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpEnhanced}
        >
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name" className="text-white">
                <img
                  src="/assets/image/user-icon.png"
                  alt="User"
                  className="icon-img"
                />{' '}
                Name:
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
                <img
                  src="/assets/image/topic-icon.png"
                  alt="Topic"
                  className="icon-img"
                />{' '}
                Discussion Topic:
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
              <label htmlFor="views" className="text-white">
                <img
                  src="/assets/image/views-icon.png"
                  alt="Views"
                  className="icon-img"
                />{' '}
                Your Views:
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
            <p
              className={`status-message ${
                statusMessage.includes('successfully') ? 'success' : 'error'
              } text-white mt-2`}
            >
              {statusMessage}
            </p>
          )}

          <div style={{ textAlign: 'center' }}>
            <button className="view-discussions-btn" onClick={goToDiscussions}>
              View Discussions
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ForumPage;