import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';

const TopContent = () => {
  
  // Function to handle CV Download
  const handleDownloadCV = () => {
    const cvUrl = "/cv/MohamedAslam_CV.pdf"; // Ensure this file exists in the "public/cv" folder
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "MohamedAslam_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="topContent">
      <div className="topContent_Content">
        <h1>Mr. A.K. Mohamed Aslam</h1>
        <p>A passionate Designer</p>

        {/* Download CV Button */}
        <button className="topContent_downloadButton" onClick={handleDownloadCV}>
          Download CV
        </button>

        {/* My Work Button */}
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent_workButton">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
