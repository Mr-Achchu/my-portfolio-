import React from "react";
import { Element } from "react-scroll";
import { Facebook, LinkedIn, Email, WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Contact.css"; // Import CSS for styling

const ContactContainer = () => {
  // Contact platform data
  const contactPlatforms = [
    { name: "WhatsApp", icon: <WhatsApp fontSize="large" />, link: "https://wa.me/your-number", color: "#25D366" },
    { name: "Facebook", icon: <Facebook fontSize="large" />, link: "https://www.facebook.com/profile.php?id=100017309707533", color: "#1877F2" },
    { name: "LinkedIn", icon: <LinkedIn fontSize="large" />, link: "https://linkedin.com/in/mohamed-aslam-42596630a", color: "#0077B5" },
    { name: "Gmail", icon: <Email fontSize="large" />, link: "mailto:akaslam047@gmail.com", color: "#D14836" }
  ];

  return (
    <Element className="contactContainer" id="contact">
      <h1>Contact</h1>
      <div className="platformWrapper">
        {contactPlatforms.map((platform, index) => (
          <IconButton 
            key={index} 
            href={platform.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: platform.color }}
          >
            {platform.icon}
          </IconButton>
        ))}
      </div>
    </Element>
  );
};

export default ContactContainer;
