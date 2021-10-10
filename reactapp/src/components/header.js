import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../css/Header.css'

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
                                    Home
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
                        <LinkContainer to="/about" className="navItem">
                            <Nav.Link className="navLabel">
                                <h5 className="navLabel">
                                    About Me
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
        </div>
    )
}

export default header