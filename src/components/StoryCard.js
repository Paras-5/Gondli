import React from "react";
import storyImage from "../assets/story-image.png";
import storyLogo from "../assets/story-logo.png";

const StoryCard = () => {
  return (
    <div className="story-card">
      <div className="story-image">
        <img src={storyImage} alt="story"/>
      </div>
      <div className="story-details">
        <span className="story-logo">
          <img src={storyLogo} alt="story Logo" />
        </span>
        <span className="story-name">Vitara</span>
      </div>
    </div>
  );
};

export default StoryCard;
