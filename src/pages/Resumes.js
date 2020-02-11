import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../src/index.css"
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Layout from "../components/Layout";
import Resume from "../components/Resume";

function Resumes() {
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/experience").then(response => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Tech Stack and Skills" />
          <div className="row">
            <div className="column">
              <img  alt="HTML/CSS3" className="stack-picture"  src="/images/css3logo.png"></img>
              <img  alt="Javascript" className="stack-picture"  src="/images/javascriptlogo.png"></img>
              <img  alt="PHP" className="stack-picture"  src="/images/phplogo.png"></img>      
            <img  alt="React" className="stack-picture"  src="/images/reactlogo.png"></img>
            <img   alt="MongoDB" className="stack-picture" src="/images/mongodblogo.png"></img>

            </div>
            <div className="column">
            <img  alt="Bootstrap" className="stack-picture"  src="/images/bootstraplogo.png"></img>
            <img  alt="Materialize" className="stack-picture"  src="/images/materializelogo.png"></img>
              <img  alt="MySQL" className="stack-picture"  src="/images/mysqlLogo.png"></img>
              <img  alt="Sequelize" className="stack-picture"  src="/images/sequelizelogo.png"></img>
            <img  alt="AdWords" className="stack-picture"  src="/images/adwordsLogo.png"></img>
            </div>
            <div className="column">
            <img   alt="Node.js" className="stack-picture" src="/images/nodelogo.png"></img>
            <img  alt="Express" className="stack-picture"  src="/images/expressLogo.png"></img>
            <img  alt="Firebase" className="stack-picture"  src="/images/firebaselogo.png"></img>
            <img alt="GCP"  className="stack-picture"  src="/images/googlecloudlogo.png"></img>
            <img  alt="Photoshop" className="stack-picture"  src="/images/photoshoplogo.png"></img>



            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Industry Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Relevant Education" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
