import React, { useEffect, useState } from 'react';
import './CSS/MainPageNavbar.css';
import logo from './Assets/logo.png';
import Profile_logo from './Assets/profile-logo.png';

export default function MainPageNavbar() {
  const [userName, setUserName] = useState('');

  // Fetch user data from the backend
  useEffect(() => {
    fetch('http://localhost:4000/fetch')
      .then(response => response.json())
      .then(data => {
        setUserName(data.name); // Set the user's name
      });
  }, []);

  return (
    <nav className="navbar">
  <div className="logo-container">
    <img src={logo} className="logo-img" alt="Logo"/>
    <h1>ToDo</h1>
    
  </div>
  <h1 className="welcome-text">Welcome {userName}</h1>
  <div className="navbar-content">
    
    
    <button className="profile-button">Dashboard</button>
    <button className="profile-button">Profile</button>
  </div>
</nav>

  );
}
