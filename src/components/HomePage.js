import React from "react";
import StoryCard from "./StoryCard";
import searchIcon from '../assets/SearchIcon.png'
const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="home-heading">
          <div>Welcome back, Madeline.</div>
          <div>What are you looking for today?</div>
        </div>
        <div className="home-search">
          <div className="home-searchIcon">
            <img src={searchIcon} alt="search icon" />
          </div>
          <input className="home-searchInput" placeholder="Enter service, location, or therapist"/>
          <div className="home-searchButton">Search</div>
        </div>
      </div>
      <div className="home-upper">
        <div className="upper-heading">Stories You Missed</div>
        <div className="story-grid">
          {Array.from({ length: 6 }, (_, index) => (
            <StoryCard key={index} />
          ))}
        </div>
        <div className="upper-heading">Based on Your Past Bookings</div>
        <div className="story-grid">
          {Array.from({ length: 6 }, (_, index) => (
            <StoryCard key={index} />
          ))}
        </div>
      </div>
      <div className="home-middle"></div>
      <div className="homelower"></div>
    </div>
  );
};

export default HomePage;
