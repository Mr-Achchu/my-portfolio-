import React from 'react';
import Header from './components/header/Header';
import TopContainer from './components/topContainer/TopConatiner';
import SkillContainer from './components/skillContainer/SkillContainer';
import ProjectContainer from './components/projectContainer/ProjectContainer';
import Experience from './components/ExpiriencerContainer/Experiance';
import ContactContainer from './components/ContactContainer/ContactContainer';
import './App.css'


const App = () => {
  return (
    <>
      <Header />
     <TopContainer/>
     <SkillContainer/>
     <ProjectContainer/>
     <Experience/>
     <ContactContainer/>
    </>
  );
};

export default App;
