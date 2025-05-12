import React from 'react';
import '../style.css'; // Ensure this path is correct
// Note: Make sure you load Material Icons in your HTML head or via an npm package.

const Profile = () => {
  return (
  
      <main className="main-content pt-36">
        {/* Profile Section */}
       
<section className="profile-section">
  <div class="profile-total-block"></div>
             <div className="left-30">
               {/* Top: Profile Picture */}
              <div className="profile-pic-wrapper">
              <img src="https://via.placeholder.com/150" alt="Profile Picture" /> 
                   <div class="username">Madhuri</div>
              <div className="edit-icon">
               <i className="material-icons">edit</i>
             </div>
            </div>

    {/* Bottom: Streak Block */}
    <div className="streak-section">
  <div className="streak-wrapper">
    <div className="streak-label">Current POTD Streak</div>
    <div className="circular-streak">
      <div className="streak-content">
        <strong>STREAK</strong>
        <small>00 / 1375 days</small>
      </div>
    </div>
  </div>
</div>
  
    
  </div>

  <div className="right-70">
   <div className="institution-info-row">
  <div className="institution-header">
    <h2 className="institute-heading">Institute</h2>
    <button className="edit-button">Edit</button>
  </div>
  <div className="institution-info">
    <h3>Andhra Loyola Institute of Engineering & Technology</h3>
    <p>Department of CSE</p>
  </div>
</div>


    {/* Row 2: Score Stats */}
    <div className="scores">
      <div className="stat-item">
        <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/Group-96.svg" alt="Coding Score" />
        <span>Coding Score</span>
        <strong>—</strong>
      </div>
      <div className="stat-item">
        <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/Group-12723.svg" alt="Problems Solved" />
        <span>Problems Solved</span>
        <strong>—</strong>
      </div>
      <div className="stat-item">
        <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/ratingsCardImg.png" alt="Contest Rating" />
        <span>Contest Rating</span>
        <strong>—</strong>
      </div>
    </div>

    {/* Row 3: Ambassador Link */}
    <div className="section-block">
      <div className="ambassador-link">Apply for Campus Ambassador</div>
    </div>
  </div>
  

  
</section>


        {/* Problem Solving Section */}
        <section className="problem-solving">
          <div className="problem-image"></div>
          <div className="problem-details">
            <h3>Start solving a problem</h3>
            <p>To view your submission here, solve a problem and submit it.</p>
            <button className="solve-button">Solve Problems</button>
          </div>
        </section>

        {/* Updated Learning Section */}
        <section className="learning">
          <div className="learning-image"></div>
          
          <div className="learning-details">
            <h3>Learn from Industry Professionals</h3>
            <p>
              Enroll in courses taught by experts and gain real-world skills that make a difference.
            </p>
            <button className="explore-button">Explore Course</button>
          </div>
        </section>
        {/*ponter*/}
      <section className="points-system">
  <div className="main-block">
    <div className="badges-container">
      <div class="badge-item">
        <p>Contributor</p>
        <img src="/assets/image/img11.png" alt="Contributor" />
        <span>1 Point</span>
      </div>
      <div class="badge-item">
        <p>Proficient</p>
        <img src="assets/image/img22.png" alt="Proficient" />
        <span>100 Points</span>
      </div>
      <div class="badge-item">
        <p>Scholar</p>
        <img src="assets/image/img33.png" alt="Scholar" />
        <span>1k Points</span>
      </div>
      <div class="badge-item">
        <p>Master</p>
        <img src="assets/image/img44.png" alt="Master" />
        <span>10k Points</span>
      </div>
      <div class="badge-item">
        <p>Ace</p>
        <img src="assets/image/img555.png" alt="Ace" />
        <span>50k Points</span>
      </div>
    </div>


<div class="badges-right">
  <div class="write-more-box">
    <div class="write-content">
      <div class="write-text">
        <h4>Write More to Win More</h4>
        <p>Share your thoughts and unlock badges as you progress.</p>
        <div class="buttons-row">
          <button class="start-btn">Start Writing</button>
          <button class="badge-info-btn">How Badges Work</button>
        </div>
      </div>
      <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/33953.png" alt="Write Illustration" class="write-image" />
    </div>
  </div>
</div>
</div>

</section>


        {/* Contest Promotion Section */}
        <section className="contest-promotion">
        <div className="contest-details">
           <div className="contest-image"></div>
             <h3>Join the contest to boost your rating and win Prizes!</h3>
             <p>Challenge yourself and rise to the top.</p>
          <button className="explore-button">Explore Course</button>
          </div>



          <div class="wrapper">
  <button class="hamburger">☰</button>

  <nav class="sidebar">
    <ul>
      <li><i class="fas fa-user"></i><span>Profile</span></li>
      <li><i class="fas fa-chart-line"></i><span>Contributions</span></li>
      <li><i class="fas fa-bookmark"></i><span>Saved Items</span></li>
      <li><i class="fas fa-university"></i><span>Colleges</span></li>
      <li><i class="fas fa-building"></i><span>Companies</span></li>
      <li><i class="fas fa-user-graduate"></i><span>Campus Ambassadors</span></li>
      <li><i class="fas fa-user-plus"></i><span>Invite</span></li>
      <li><i class="fas fa-edit"></i><span>Edit Profile</span></li>
      <li><i class="fas fa-cog"></i><span>Account Settings</span></li>
      <li><i class="fas fa-sign-out-alt"></i><span>Logout</span></li>
    </ul>
  </nav>
</div>
<script>
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", function() 
  sidebar.classList.toggle("open")

</script>


        </section>
        
      </main>
 );
}

export default Profile;