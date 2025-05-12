import React, { useState, useEffect } from "react";
import "../ForumPage.css"; // Import CSS for styling

const ForumPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How to prepare for coding interviews?",
      author: "Amit Gupta",
      content: "Looking for advice on cracking technical interviews. Any recommendations?",
      replies: [
        { id: 1, author: "Shweta", content: "Start with Data Structures and Algorithms. Also, practice mock interviews!" },
        { id: 2, author: "Rahul Verma", content: "Leetcode, GeeksForGeeks, and system design fundamentals are essential." },
      ],
      likes: 10,
    },
    {
      id: 2,
      title: "Best resources for learning web development?",
      author: "Priya Sharma",
      content: "Should I start with HTML, CSS, JavaScript first or jump into React?",
      replies: [],
      likes: 5,
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [replyText, setReplyText] = useState({});
  const [fadeIn, setFadeIn] = useState(false); // State for animations

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in animation on mount
  }, []);

  const handleCreatePost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const newEntry = {
        id: posts.length + 1,
        title: newPost.title,
        author: "You",
        content: newPost.content,
        replies: [],
        likes: 0,
      };
      setPosts([...posts, newEntry]);
      setNewPost({ title: "", content: "" });
    }
  };

  const handleAddReply = (postId) => {
    if (replyText[postId]?.trim()) {
      const newReply = { id: Date.now(), author: "You", content: replyText[postId] };
      setPosts(
        posts.map((post) =>
          post.id === postId ? { ...post, replies: [...post.replies, newReply] } : post
        )
      );
      setReplyText((prev) => ({ ...prev, [postId]: "" })); // Reset reply input
    }
  };

  return (
    <div className={`forum-container ${fadeIn ? "fade-in" : ""}`}>
      <h2>Discussion Forum</h2>

      {/* Create New Post Section */}
      <div className="create-post">
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Start the discussion..."
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button className="animated-btn" onClick={handleCreatePost}>Post Discussion</button>
      </div>

      {/* Display Forum Posts */}
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p><strong>By:</strong> {post.author}</p>
            <p>{post.content}</p>
            <div className="post-actions">
              <button className="upvote-btn">👍 {post.likes}</button>
              <span>💬 {post.replies.length} Replies</span>
            </div>

            {/* Replies Section */}
            <div className="replies-section">
              {post.replies.length > 0 && <h4>Replies:</h4>}
              {post.replies.map((reply) => (
                <div key={reply.id} className="reply-card">
                  <p><strong>{reply.author}:</strong> {reply.content}</p>
                </div>
              ))}

              {/* Reply Input Section */}
              <div className="reply-input">
                <input
                  type="text"
                  placeholder="Write a reply..."
                  value={replyText[post.id] || ""}
                  onChange={(e) => setReplyText({ ...replyText, [post.id]: e.target.value })}
                />
                <button onClick={() => handleAddReply(post.id)}>Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
