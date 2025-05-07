import React, { useState } from "react";
import CourseList from "../components/CourseList";
import ForumPage from "../components/ForumPage";

const Courses = () => {
  const [currentPage, setCurrentPage] = useState("courses"); // ✅ Tracks which page is displayed

  return (
    <div className="App">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => setCurrentPage("courses")}>Courses</button>
        <button onClick={() => setCurrentPage("forum")}>Discussion Forum</button>
      </div>

      {/* Conditional Rendering: Switch Between Pages */}
      {currentPage === "courses" && <CourseList />}
      {currentPage === "forum" && <ForumPage />}
    </div>
  );
}

export default Courses;
