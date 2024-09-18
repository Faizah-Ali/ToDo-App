import React, { useEffect, useState } from 'react';
import img1 from "../Assets/Banner.png";
import './CSS/Banner.css';

export default function Banner() {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="banner-container"> {/* Flex container */}
      <div className="banner-content"> {/* Left content */}
        <h1>Welcome to Your Personal Task Manager !!</h1>
        <h2>Stay Organized, Stay Productive </h2>
        <p>
          Manage your daily tasks efficiently and never miss a deadline again.
          Our To-Do List App is designed to help you stay on top of your tasks and boost your productivity. 
          Whether you're managing daily chores, work projects, or long-term goals, our app simplifies task management 
          to ensure nothing slips through the cracks.
        </p>
        {showMore && (
          <p>
            <h4>Our Mission</h4>
            Our goal is simple, to help you stay organized and stress-free. We believe that better task management 
            leads to better time management, helping you achieve more in less time.
            <br />
            <h4>Get Started Now !</h4> Sign Up or Log In to start creating your to-do list.<br/> Begin adding tasks and 
            ticking them off as you complete them. 
            <br /><br />
            <b>Your productivity starts here!</b>
          </p>
        )}
        <button onClick={handleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="banner-img"> {/* Right image */}
        <img src={img1} alt="Banner" />
      </div>
    </div>
  );
}
