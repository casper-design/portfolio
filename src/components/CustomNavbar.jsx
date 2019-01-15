import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DownloadLink } from 'react-download-link';
import { HashLink } from 'react-router-hash-link';
import './CustomNavbar.css';


class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Michael Casper</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight style={{display:"flex", flexDirection:"row"}}>
                    <NavItem eventKey={1} componentClass={HashLink} to="/Home#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                        Projects
                    </NavItem>
                    <NavItem eventKey={2} componentClass={DownloadLink} href="/assets/McasperResume.pdf" download>
                        Resume
                    </NavItem>
                    <NavItem eventKey={3} componentClass={HashLink} to="/Home#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                        Contact
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default CustomNavbar;