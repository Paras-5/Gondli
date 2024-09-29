import React from "react";
import navLogo from "../assets/nav-logo.png";
import navPlayer from "../assets/nav-player.png"
import navNotification from '../assets/nav-notification.png'
import navProfile from '../assets/nav-profile.png'

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={navLogo} alt="logo" />
      </div>
      <div className="nav-widgets">
        <div className="nav-player">
          <img src={navPlayer} alt="player" />
        </div>
        <div className="nav-notification">
          <img src={navNotification} alt="notification" />
        </div>
        <div className="nav-profile">
          <img src={navProfile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
