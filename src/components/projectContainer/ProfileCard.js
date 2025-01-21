// ProfileCard.js
import React from 'react';
 import './ProfileCard.css';

const ProfileCard = ({ name, bio, image, profileLink, platform }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <p>{bio}</p>
      <a 
        href={profileLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className={platform === 'GitHub' ? 'github' : ''}
      >
        Visit {platform}
      </a>
    </div>
  );
}

export default ProfileCard;
