import React from 'react'
import { Element } from 'react-scroll'
import ExpirienceBox from './ExpirienceBox'
import './ExperienceContainer.css'
const Experience = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="Exeprience-info" style={{display:'flex' }}>
      <ExpirienceBox number="+1000 " title="Lines of Code Written " />
      <ExpirienceBox number="+15" title=" figma Projects" style={{ backgroundColor: "#F64C08" }} />
      <ExpirienceBox number="02" title="Web Applications" />
      <ExpirienceBox number="+7" title="Graphic Design Projects" />
     
      </div>  
    </Element>
  );
}

export default Experience;
