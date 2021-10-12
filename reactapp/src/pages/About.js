// library and component imports
import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

// import css 
import '../css/About.css';


// import image path
import sld1 from '../images/aboutMe/sld-img-1.jpg';
import sld2 from '../images/aboutMe/sld-img-2.jpg';
import sld3 from '../images/aboutMe/sld-img-3.jpg';
import sld4 from '../images/aboutMe/sld-img-4.jpg';

function About() {
  // const images = [
  //   {
  //     original: sld1,
  //     thumbnail: sld1,
  //     originalHeight: 1000
  //   },
  //   {
  //     original: sld2,
  //     thumbnail: sld2,
  //   },
  //   {
  //     original: sld3,
  //     thumbnail: sld3,
  //   },
  //   {
  //     original: sld4,
  //     thumbnail: sld4,
  //   }
  // ];
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
            Hello! My Name is Matthew Myrick. 
            I am currently a student at Marquette University majoring in Information Systems and Finance with a Minor in Computer Science.
            I was born and raised in San Jose, CA where I started to gain heavy interest in the capabilities in technology. 
            </p>
          </div>
          <div className="img-container-aboutme">
                <img src={sld1}/>
          </div>
              
        </div>

    </div>
    
  );
}

export default About;