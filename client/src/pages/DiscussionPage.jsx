import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Discussion.css";

const DiscussionsPage = () => {
  const navigate = useNavigate();
  const [replies, setReplies] = useState({});

  const dummyDiscussions = [
    {
      id: 1,
      name: "Amit Sharma",
      topic: "React vs Angular",
      views: "I think React is more flexible and has a larger community.",
      likes: 5,
    },
    {
      id: 2,
      name: "Neha Patel",
      topic: "Best practices in CSS",
      views: "Use flexbox and grid wisely! And keep components reusable.",
      likes: 3,
    },
  ];

  const handleGoBack = () => {
    navigate("/forum");
  };

  const handleReplyChange = (id, value) => {
    setReplies((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleReplySubmit = (e, id) => {
    e.preventDefault();
    const reply = replies[id];
    if (reply) {
      alert(`Your reply to "${id}" has been posted!`);
      setReplies((prev) => ({ ...prev, [id]: "" }));
    } else {
      alert("Please write a reply before submitting.");
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Zoom-out background image */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/assets/image/HeroBg3.jpg')] bg-cover bg-center z-0"
      />

      {/* Main content */}
      <div className="main-container relative z-10">
        <div className="image-container">
          <motion.img
            src="/assets/image/discussion.png"
            alt="Discussion"
            initial="hidden"
            animate="visible"
            variants={cardVariant}
          />
        </div>

        <div className="discussions-container text-white">
          <div className="discussions-header">
            <motion.h2
              className="discussions-heading text-white"
              initial="hidden"
              animate="visible"
              variants={cardVariant}
            >
              Discussions
            </motion.h2>
            <motion.button
              onClick={handleGoBack}
              className="back-to-forum-btn"
              initial="hidden"
              animate="visible"
              variants={buttonVariant}
            >
              Back to Forum
            </motion.button>
          </div>

          {dummyDiscussions.length > 0 ? (
            dummyDiscussions.map((discussion) => (
              <motion.div
                key={discussion.id}
                className="discussion-card bg-white/10 backdrop-blur-md text-white border border-white/20"
                initial="hidden"
                animate="visible"
                variants={cardVariant}
              >
                <h3>{discussion.topic}</h3>
                <p>
                  <strong>By:</strong> {discussion.name}
                </p>
                <p>{discussion.views}</p>
                <div className="discussion-actions">
                  <button className="like-btn">
                    <img
                      src="/assets/image/like-icon.png"
                      alt="Like"
                      className="like-icon"
                    />{" "}
                    {discussion.likes}
                  </button>
                </div>

                <form onSubmit={(e) => handleReplySubmit(e, discussion.id)}>
                  <div className="reply-box">
                    <textarea
                      placeholder="Write your reply..."
                      value={replies[discussion.id] || ""}
                      onChange={(e) =>
                        handleReplyChange(discussion.id, e.target.value)
                      }
                      className="reply-textarea text-gray-800"
                    ></textarea>
                    <button type="submit" className="reply-submit-btn">
                      Submit Reply
                    </button>
                  </div>
                </form>
              </motion.div>
            ))
          ) : (
            <p>No discussions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscussionsPage;
