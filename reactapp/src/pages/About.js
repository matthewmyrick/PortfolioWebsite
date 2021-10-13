// library and component imports
import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Tabs, Tab} from 'react-bootstrap';

// import css 
import '../css/About.css';


// import image path
import hawaii from '../images/aboutMe/sld-img-1.jpg';
import profile_pic from '../images/aboutMe/profile-pic.jpg';
import resume from '../images/aboutMe/Matthew Myrick - Resume.pdf';

function GoToLink(link, page){
  window.open(link, page);
}

function TabExperience(type, location, role, date, responsibilities){
  return (
    <div>
      Type: {type}<br/>
      Location: {location}<br/>
      Role: {role}<br/>
      Date: {date}<br/>
      Responsibilities:<br/>
      <ul>
      {responsibilities.map(function(name, index){
            return <li key={ index }>{name}</li>;
        })}
      </ul> 
    </div>
  )
}

function About() {
  return (
    <div className="About">
      {/* <div className="carrousel-container">
        <ImageGallery id="slide-show" items={images} />; 
      </div> */}
        <div className="About-Me-Content-Container">
          <div className="aboutme-content-container">
            <b>About Me</b>
            <hr/>
            <p>
            Hello! My Name is Matthew Myrick. I am currently a student at Marquette University majoring in Information Systems and Finance with a Minor in Computer Science. I was born and raised in San Jose, CA, where I started to gain a serious interest in the capabilities and opportunities of technology. 
            </p>
            <b/>
            <p>
            With my degree in Finance and Minor in Computer Science, I enjoy creating statistical FinTech software applications and data models. Some software libraries/frameworks & skill I have been using to create these types of applications are:
            </p>
            <br/>
            <table>
              <tr>
                <td>
                  <ul>
                    <li>VSTO .NET Core</li>
                    <li>.NET Core MVC</li>
                    <li>NumPy</li>
                    <li>Pandas</li>
                  </ul>  
                </td>
                <td>
                  <ul>
                    <li>Matplotlib/Seaborn</li>
                    <li>ChartsJs</li>
                    <li>Dash - Plotly</li>
                    <li>TensorFlow/Pytorch</li>
                  </ul>  
                </td>
                <td>
                  <ul>
                    <li>Financial Modeling/Analysis</li>
                    <li>Statistics & Business Analytics</li>
                    <li>Investment Analysis</li>
                    <li>Database Management</li>
                  </ul>  
                </td>
              </tr>
            </table>
          </div>
          <div className="img-container-aboutme right">
                <img src={hawaii}/>
          </div>
              
        </div>
        <div className="About-Me-Content-Container">
          <div className="img-container-aboutme left">
                  <img src={profile_pic}/>
          </div>
          <div className="aboutme-content-container">
            <b>Experiences</b>
            <hr/>
            <p>
            Through my internships, relevant course work, and projects at Oracle (FP&A), Cliq’d (Mobile App Development), True Blue Partners (M&A), and my Finance/Information Systems Major and Computer Science Minor at Marquette University; I have cultivated a unique blend of skills that allowed me to analyze data and create financial models then deploy these analyses to a web application or executable. Most recent Experiences:
            </p>
            <br/>
            <div className="experiences-tabs-container">
              <Tabs defaultActiveKey="ORCL" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="ORCL" title="Oracle">
                  {TabExperience(
                    "Internship",
                    "Redwood City, CA",
                    "Financial Analyst Intern",
                    "June 2019 - September 2019",
                    [
                      "Assisted in redesigning Segmentation Processes in cloud finance group",
                      "Developed and created lagging indicators for our marketing business partners",
                      "Identified segmentation patterns and trends from sales and marketing datasets"
                    ]
                  )}
                </Tab>
                <Tab eventKey="TBP" title="True Blue Partners">
                  {TabExperience(
                      "Internship",
                      "San Jose, CA",
                      "Fall Analyst",
                      "August 2018 - December 2018",
                      [
                        "Prepared investment management presentation included: market research, due diligence findings, and financial analysis leading to a minority investment of $23 million capital raise from Delta-V Capital and Salesforce Ventures",
                        "Analyzed $200 thousand debt offering by working directly with True Blue Partner's Managing Director and Senior Analyst in forecasting the Statement of Cashflows"
                      ]
                    )}
                </Tab>
                <Tab eventKey="ACN" title="Accenture">
                  {TabExperience(
                      "School Project",
                      "Milwaukee, WI",
                      "Business Analyst",
                      "August 2021 - Present",
                      [
                        "Assisted fictitious client with a hybrid cloud solution from their on-premises database servers",
                        "Analyzed potential cloud providers with integration solutions for their on premises database systems and Docker-Kubernetes architecture"
                      ]
                    )}
                </Tab>
                <Tab eventKey="CLQ" title="Cliq'd">
                  {TabExperience(
                      "Project",
                      "San Jose, CA",
                      "CEO/Founder",
                      "January 2021 – Present",
                      [
                        "Leading a team of 7 in developing and launching a dating application on IOS and Android",
                        "Supporting/assisting marketing group in optimized marketing analytics and research",
                        "Worked with lead engineer in frontend/backend development"
                      ]
                    )}
                </Tab>
              </Tabs>
            </div>
            <br/>
            <div className="experiences-tabs-container">
              <Button variant="outline-dark" onClick={
                () => GoToLink("/portfolio", "_self")
              }>See Projects</Button>
              <Button variant="outline-dark" onClick={
                () => GoToLink(resume, "_blank")
              }>See Resume</Button>
            </div>
          </div>              
        </div>

    </div>
    
  );
}

export default About;