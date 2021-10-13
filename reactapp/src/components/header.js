import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../css/Header.css'

// import image paths
import githubLogo from '../images/aboutMe/githubLogo.png';
import linkedInLogo from '../images/aboutMe/linkedInLogo.png';

const header = () => {
    return (
        <div className="header-container">
            <Navbar className='Header' variant="light">
                {/* <LinkContainer to="/">
                    <Navbar.Brand>Matthew Myrick</Navbar.Brand>
                </LinkContainer> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <LinkContainer to="/" className="navItem">
                            <Nav.Link className="navLabel">
                                <h5 className="navLabel">
                                    About
                                </h5>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/experience" className="navItem">
                            <Nav.Link className="navLabel">
                                <h5 className="navLabel">
                                    Experience/Resume
                                </h5>

                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/portfolio" className="navItem">
                            <Nav.Link className="navLabel">
                                <h5 className="navLabel">
                                    Portfolio
                                </h5>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" className="navItem">
                            <Nav.Link className="navLabel">
                                <h5 className="navLabel">
                                    Contact
                                </h5>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="top-container">
                <div className="logo-links-container">
                    <a href="https://github.com/matthewmyrick" target="_blank">
                        <img className="logo-icon" src={githubLogo} alt="Github" width="50" height="50"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mattmyrick/" target="_blank">
                        <img className="logo-icon" src={linkedInLogo} alt="LinkedIn" width="50" height="50"/>
                    </a>
                </div>
                <div className="signature-container">
                    <b id="name-aboutme">Matthew J Myrick</b>
                    <br/>
                    <p id="contact-info-aboutme">
                        MatthewMyrick2@gmail.com
                        <br/>
                        +1(408)390-5085
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default header