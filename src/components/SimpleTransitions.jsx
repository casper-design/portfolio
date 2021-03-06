import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SimpleTransitions.css';

class SimpleTransitions extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Grid>
                    <h2>Simple Transitions provides easy steps for life's most difficult events</h2>
                    <Row>
                        <Col xs={12} sm={6}>
                            <h4>Summary</h4>
                            <p>I had the opportunity to do a one-week training on design-thinking with IDEO. I took on the role of UX Designer within our group, and it became my first foray into the field.</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h4>Role</h4>
                            <p>UX Designer</p>

                            <h4>Responsibilities</h4>
                            <p>Wireframing and Prototyping</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Image src="./assets/SimpleTransitions/Login Page.png" className="screenshot" />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Image src="./assets/SimpleTransitions/Landing Page.png" className="screenshot" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Image src="./assets/SimpleTransitions/Legacy Planning.png" className="screenshot" />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Image src="./assets/SimpleTransitions/We're Getting Married.png" className="screenshot" />
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <h2>More Projects</h2>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Link to={'/ServiceHub'} id="link">
                                <Image src="assets/ServiceHubCover.png" className="next-project" alt="..." />
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Link to={'/Spotify'} id="link">
                                <Image src="assets/SpotifyCover.png" className="next-project" alt="..." />
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );        
    }
}

export default SimpleTransitions;