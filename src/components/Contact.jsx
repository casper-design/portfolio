import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Grid>
                <h1>Let's talk.</h1>
                <Row>
                    <Col xs={12} sm={6} className='project-wrapper'>
                        <a class="mailto" href="mailto:michael.rob.casper@gmail.com" className='message'>michael.rob.casper@gmail.com</a> 
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Contact;