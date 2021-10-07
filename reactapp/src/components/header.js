import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../css/Header.css'

const header = () => {
    return (
        <div className="header-container">
            <Navbar expand="lg" className='Header'>
                {/* <LinkContainer to="/">
                    <Navbar.Brand>Matthew Myrick</Navbar.Brand>
                </LinkContainer> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <LinkContainer to="/" className="navItem">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/portfolio" className="navItem">
                            <Nav.Link>
                                Portfolio
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" className="navItem">
                            <Nav.Link>
                                About Me
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" className="navItem">
                            <Nav.Link>
                                Contact
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default header