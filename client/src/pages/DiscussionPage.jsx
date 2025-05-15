// src/components/DiscussionsPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Discussion.css";

const DiscussionsPage = () => {
  const navigate = useNavigate();
  const [reply, setReply] = useState("");

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
    navigate("/");
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (reply) {
      alert("Your reply has been posted!");
      setReply("");
    } else {
      alert("Please write a reply before submitting.");
    }
  };

 return (
  <div className="main-container">
    <div className="image-container">
      <img src="/assets/image/discussion.png" alt="Discussion" />
    </div>

    <div className="discussions-container">
      {/* Header with title and back button */}
      <div className="discussions-header">
        <h2 className="discussions-heading">Discussions</h2>
        <button onClick={handleGoBack} className="back-to-forum-btn">
          Back to Forum
        </button>
      </div>

      {/* Discussions list */}
      {dummyDiscussions.length > 0 ? (
        dummyDiscussions.map((discussion) => (
          <div key={discussion.id} className="discussion-card">
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

            {/* Reply Box */}
            <form onSubmit={handleReplySubmit}>
              <div className="reply-box">
                <textarea
                  placeholder="Write your reply..."
                  value={reply}
                  onChange={handleReplyChange}
                  className="reply-textarea"
                ></textarea>
                <button type="submit" className="reply-submit-btn">
                  Submit Reply
                </button>
              </div>
            </form>
          </div>
        ))
      ) : (
        <p>No discussions available.</p>
      )}
    </div>
  </div>
);

};

export default DiscussionsPage;