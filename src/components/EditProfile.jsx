import React from 'react';
import '../style.css';

const EditProfile = () => {
  return (
    <main className="edit-profile-container">
      <div className="edit-profile-header">
        <h1><i className="fas fa-user-edit"></i> Edit Profile</h1>
        <a href="/profile" className="back-to-profile-btn">
          <i className="fas fa-arrow-left"></i> Back to Profile
        </a>
      </div>

      <form className="edit-profile-form">
        {/* Profile Picture Section */}
        <section className="form-section">
          <h2>Profile Picture</h2>
          <div className="profile-picture-upload">
            <div className="current-picture">
              <img
                src="assets/image/Screenshot 2025-02-07 223101.png"
                alt="Current Profile Picture"
                className="current-pic"
              />
              <label htmlFor="profile-pic" className="upload-btn">
                <i className="fas fa-camera"></i> Change Picture
              </label>
              <input type="file" id="profile-pic" accept="image/*" className="hidden" />
            </div>
          </div>
        </section>

        {/* Personal Information Section */}
        <section className="form-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" defaultValue="Nikita Soni" required />
          </div>
          <div className="form-group">
            <label htmlFor="job-title">Job Title</label>
            <input type="text" id="job-title" defaultValue="Frontend Developer" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" defaultValue="India" />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              rows="4"
              defaultValue="Passionate coder and tech enthusiast. Love to learn and share knowledge about web development and programming."
            ></textarea>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="form-section">
          <h2>Social Links</h2>
          <div className="form-group">
            <label htmlFor="github"><i className="fab fa-github"></i> GitHub</label>
            <input type="url" id="github" placeholder="https://github.com/username" />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin"><i className="fab fa-linkedin"></i> LinkedIn</label>
            <input type="url" id="linkedin" placeholder="https://linkedin.com/in/username" />
          </div>
          <div className="form-group">
            <label htmlFor="twitter"><i className="fab fa-twitter"></i> Twitter</label>
            <input type="url" id="twitter" placeholder="https://twitter.com/username" />
          </div>
        </section>

        {/* Skills Section */}
        <section className="form-section">
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill-tags">
              <span className="skill-tag">JavaScript <button className="remove-skill"><i className="fas fa-times"></i></button></span>
              <span className="skill-tag">React <button className="remove-skill"><i className="fas fa-times"></i></button></span>
              <span className="skill-tag">HTML <button className="remove-skill"><i className="fas fa-times"></i></button></span>
              <span className="skill-tag">CSS <button className="remove-skill"><i className="fas fa-times"></i></button></span>
            </div>
            <div className="add-skill">
              <input type="text" id="new-skill" placeholder="Add a skill" />
              <button type="button" className="add-skill-btn"><i className="fas fa-plus"></i></button>
            </div>
          </div>
        </section>

        {/* Notification Preferences */}
        <section className="form-section">
          <h2>Notification Preferences</h2>
          <div className="preference-group">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span>Email notifications for new articles</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span>Course completion reminders</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Weekly learning progress report</span>
            </label>
          </div>
        </section>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save Changes</button>
        </div>
      </form>
    </main>
  );
};

export default EditProfile;
