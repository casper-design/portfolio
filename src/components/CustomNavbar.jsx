import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DownloadLink } from 'react-download-link';
import './CustomNavbar.css';


class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Michael Casper</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight style={{display:"flex", flexDirection:"row"}}>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/" >
                            Projects
                        </NavItem>
                        <NavItem eventKey={2} componentClass={DownloadLink} href="/assets/McasperResume.pdf" download>
                            Resume
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/Contact" to="/Contact" >
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>   
            </Navbar>
        );
    }
}

export default CustomNavbar;