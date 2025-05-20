import React from "react";
import CourseList from "../components/CourseList";
import "../styles/CourseList.css"; // Optional: for separate CSS file

const Courses = () => {
  return (
    <div className="App">
      {/* Section with custom background */}
      <section className="courses-section">
        <div className="course-section-wrapper relative z-10">
          <CourseList />
        </div>
      </section>
    </div>
  );
};

export default Courses; 