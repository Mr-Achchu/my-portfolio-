import React from 'react'
import { Element } from 'react-scroll'
import skllimg from "../../resource/skills.webp"
import LinearProgress from '@mui/material/LinearProgress';
import './SkillContainer.css'

const SkillContainer = () => {
  return (
     <Element className="skillContainer" id="skills">  
      <div className="skillContainer_image">
        <img src={skllimg} alt="Skills_image" />
      </div>

      <div className="skillContainer_text">
        <h2> Skill Set</h2>
        <div className="SkillContainer_skillset">
          <h5> Frontend Development </h5>
          <div className="skillContainer_slider skillContainer_slider1">
            <LinearProgress variant="determinate" value={90}></LinearProgress>
            </div>
        </div>
          
        <div className="SkillContainer_skillset">
          <h5>Object-Oriented Programming (Java)</h5>
          <div className="skillContainer_slider skillContainer_slider2">
            <LinearProgress variant="determinate" value={98}></LinearProgress>
          </div>
        </div>
            
        <div className="SkillContainer_skillset">
          <h5>UI/UX Design</h5>
          <div className="skillContainer_slider skillContainer_slider3">
            <LinearProgress variant="determinate" value={98}></LinearProgress>
          </div>
        </div>
         
         <div className="SkillContainer_skillset">
          <h5>Graphic Design</h5>
          <div className="skillContainer_slider skillContainer_slider4">
            <LinearProgress variant="determinate" value={95}></LinearProgress>
          </div>
        </div>


        <div className="SkillContainer_skillset">
          <h5>Mobile App Development</h5>
          <div className="skillContainer_slider skillContainer_slider5">
            <LinearProgress variant="determinate" value={95}></LinearProgress>
          </div>
        </div>

        <div className="SkillContainer_skillset">
          <h5>Version Control & Tools</h5>
          <div className="skillContainer_slider skillContainer_slider6">
            <LinearProgress variant="determinate" value={70}></LinearProgress>
          </div>
        </div>

      </div>
     </Element>
  )
}

export default SkillContainer