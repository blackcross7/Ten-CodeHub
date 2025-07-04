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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
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
      className="forum-page min-h-screen text-white py-8"
      style={{
        backgroundImage: "url('/assets/image/HeroBg3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 3, ease: 'easeOut' }}
    >
      <motion.h1
        className="forum-title text-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
        Discussion Forum
      </motion.h1>

      <div className="forum-wrapper">
        {/* Image with animation */}
        <motion.div
          className="image-container"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          <img src="/assets/image/discussion.png" alt="Discussion" />
        </motion.div>

        {/* Form container with animated form elements */}
        <motion.div
          className="forum-container bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg p-6 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={2}
        >
          <form onSubmit={handleSubmit}>
            <motion.div className="input-group" variants={fadeInUp} custom={3}>
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
            </motion.div>

            <motion.div className="input-group" variants={fadeInUp} custom={4}>
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
            </motion.div>

            <motion.div className="input-group" variants={fadeInUp} custom={5}>
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
            </motion.div>

            <motion.div
              style={{ textAlign: 'center' }}
              variants={fadeInUp}
              custom={6}
            >
              <button type="submit">Submit</button>
            </motion.div>
          </form>

          {statusMessage && (
            <motion.p
              className={`status-message ${
                statusMessage.includes('successfully') ? 'success' : 'error'
              } text-white mt-2`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {statusMessage}
            </motion.p>
          )}

          <motion.div
            style={{ textAlign: 'center' }}
            variants={fadeInUp}
            custom={7}
          >
            <button className="view-discussions-btn" onClick={goToDiscussions}>
              View Discussions
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ForumPage;
