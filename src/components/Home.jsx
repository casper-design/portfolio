import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
/*import { HashLink as hashlink} from 'react-router-dom';*/
/*import { Motion, spring } from 'react-motion';*/
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Grid>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <Helmet>
                    <title>Michael Casper</title>
                </Helmet>

                <h1>
                    Hello, I'm Michael.<br></br>
                    UX Designer and Project Manager.
                </h1>  
                <h3>Digital design enthusiast and physical design hobbyist.</h3>
                <Row>
                    <a href="https://github.com/casper-design">
                        <img src="/assets/icons/github.png" alt="" className="social-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-casper-9944508a/">
                        <img src="/assets/icons/linkedin.png" alt="" className="social-icon"/>
                    </a>
                </Row>

                <h2 id="projects">Projects</h2>
                <Row>
                    <Col xs={12} sm={6} className="project-wrapper">
                        <Link to={'/SimpleTransitions'} id="link">
                            <Image src="assets/SimpleTransitionsCover.png" className="project-pic" alt="..." />
                        </Link>
                    </Col>
                    <Col xs={12} sm={6} className="project-wrapper">
                        <p>Simple Transitions helps you plan for your future - or recover from unexpected turns. It is an information platform that consolidates the red tape of bureacratic processes to help you cut it all at once.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} className="project-wrapper">
                        <Link to={'/ServiceHub'} id="link">
                            <Image src="assets/ServiceHubCover.png" className="project-pic" alt="..."/>
                        </Link>
                    </Col>
                    <Col xs={12} sm={6} className="project-wrapper">
                        <p>ServiceHub is the marketplace for markets. Individuals are given the power to spin up global financial or alternative markets on-demand, covering everything from stock options to racetrack wagers.</p>  
                    </Col>
                </Row>

                <h2>Get in touch.</h2>
                <Row id="contact">
                    <p>To-Do: Send email function.</p>
                </Row>
            </Grid>
        )
    }
}

export default Home;