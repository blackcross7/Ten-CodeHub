// src/components/DiscussionsPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Discussion.css";

const DiscussionsPage = () => {
  const navigate = useNavigate();
  const [replies, setReplies] = useState({}); // stores reply text per discussion

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

  return (
    <div className="main-container bg-[url('/assets/image/HeroBg3.jpeg')] bg-cover bg-center">
      <div className="image-container">
        <img src="/assets/image/discussion.png" alt="Discussion" />
      </div>

      <div className="discussions-container text-white">
        <div className="discussions-header">
          <h2 className="discussions-heading">Discussions</h2>
          <button onClick={handleGoBack} className="back-to-forum-btn">
            Back to Forum
          </button>
        </div>

        {dummyDiscussions.length > 0 ? (
          dummyDiscussions.map((discussion) => (
            <div key={discussion.id} className="discussion-card bg-white text-gray-800">
              <h3>{discussion.topic}</h3>
              <p><strong>By:</strong> {discussion.name}</p>
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
              <form onSubmit={(e) => handleReplySubmit(e, discussion.id)}>
                <div className="reply-box">
                  <textarea
                    placeholder="Write your reply..."
                    value={replies[discussion.id] || ""}
                    onChange={(e) => handleReplyChange(discussion.id, e.target.value)}
                    className="reply-textarea text-gray-800"
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