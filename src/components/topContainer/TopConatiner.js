import React from 'react';
import { Element } from 'react-scroll';
import TopContent from './TopContent';
import './topContainer.css'



const TopContainer = () => {
  return (
    <Element name="about" className="topContainer">
      <TopContent/>
    </Element>
  );
};

export default TopContainer;
