import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './ServiceHub.css';

class ServiceHub extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Grid>
                <h2>ServiceHub gives individuals the power to spin up global financial and alternative markets on-demand.</h2>
                <Row>
                    <Col xs={12} sm={6}>
                        <h4>Summary</h4>
                        <p>I was tasked to envision the user experience for cloud-based financial and alternative markets.</p>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h4>Role</h4>
                        <p>Web Designer</p>

                        <h4>Responsibilities</h4>
                        <p>Wireframing and Prototyping</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12}>
                        <Image src="./assets/ServiceHub/Landing Page.png" className="screenshot" />
                    </Col>
                    <Col xs={12} sm={12}>
                        <Image src="./assets/ServiceHub/Learn.png" className="screenshot" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12}>
                        <Image src="./assets/ServiceHub/Create Account.png" className="screenshot" />
                    </Col>
                    <Col xs={12} sm={12}>
                        <Image src="./assets/ServiceHub/Chat Box.png" className="screenshot" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ServiceHub;