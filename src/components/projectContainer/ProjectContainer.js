// ProjectContainer.js
import React from 'react';
import { Element } from 'react-scroll';
import ProfileCard from './ProfileCard';
import './ProfileCard.css'; // Import the CSS file

const ProjectContainer = () => {
  return (
    <Element className="project_Container" id="projects">
      <div className="profile-cards-wrapper">
        {/* Behance Profile Card */}
        <ProfileCard
          name="Mohamed Aslam"
          bio="UI/UX Designer | Creating stunning designs"
          image={require("../../resource/behnace.png")} // Adjust path as necessary
          profileLink="https://www.behance.net/achchuak"
          platform="Behance"
        />
  
        {/* GitHub Profile Card */}
        <ProfileCard
          name="Mohamed Aslam"
          bio="Full-Stack Developer | Passionate about coding"
          image={require("../../resource/gitHub.png")} // Adjust path as necessary
          profileLink="https://github.com/Mr-Achchu"
          platform="GitHub"
        />
      </div>
    </Element>
  );
};

export default ProjectContainer;
