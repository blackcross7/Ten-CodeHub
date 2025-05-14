import React from "react";
import CourseList from "../components/CourseList";

const Courses = () => {
  return (
    <div className="App">
      {/* White background wrapper for the course page content */}
      <div className="course-page-wrapper">
        <CourseList />
      </div>
    </div>
  );
};

export default Courses;
