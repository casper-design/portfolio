import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Spotify.css';

class Spotify extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Grid>
                    <h2>Spotify wants to build a home for artists and their teams. This is my take on building that home. More to come on this project!</h2>
                    <Row>
                        <Col xs={12} sm={6}>
                            <h4>Summary</h4>
                            <p>Design a Mac-based editor and artist management system that allows artists to manage their presence on Spotify.</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <h4>Role</h4>
                            <p>Product Designer</p>

                            <h4>Responsibilities</h4>
                            <p>Wireframing</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12}>
                                <h4>Discovery & Research</h4>
                                <p>Stanley Wood, previously a designer at Spotify, defined the design principles within Spotify in his post Design Doesn't Scale. I felt it was best to adhere to these principles as closely as possible in my design. My focus was on Lagom (Swedish for "just the right amount"), to build a product with all the features an artist needs, and none of the ones they don't.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Image src="./assets/Spotify/DesignPrinciples.png" className="screenshot" />
                            <h4>Information Architecture</h4>
                            <p>Understanding how an Artist will navigate through the application is crucial. By creating a hierarchy, we are able to see how we can prioritize home page real estate.</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Image src="./assets/Spotify/Information Architecture.png" className="screenshot" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12}>
                            <h3>Creator Marketplace</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={3}>
                            <h4>Discography</h4>
                            <p>An Artist should be able to customize their discography. Create albums, upload artwork and tracks, add lyrics - all within the client.</p>
                        </Col>
                        <Col xs={12} sm={9}>
                            <Image src="./assets/Spotify/Discography.png" className="screenshot" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={3}>
                            <h4>The Band</h4>
                            <p>An Artist should be able to manage their members and profiles from within the client. This could be through each member, or through their manager.</p>
                        </Col>
                        <Col xs={12} sm={9}>
                            <Image src="./assets/Spotify/The Band.png" className="screenshot" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={3}>
                            <h4>Merchandise</h4>
                            <p>Why use independent merch stores when your audience could find their new favorite band tee attached to their top played? This could also allow for a textiles partnership within Spotify.</p>
                        </Col>
                        <Col xs={12} sm={9}>
                            <Image src="./assets/Spotify/Merchandise.png" className="screenshot" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={3}>
                            <h4>Concerts</h4>
                            <p>This data is already populated by Spotify's ticketing partners. Let the Artist see how many fans are attending the next show! This could also be another potential form factor for fan communication.</p>
                        </Col>
                        <Col xs={12} sm={9}>
                            <Image src="./assets/Spotify/Concerts.png" className="screenshot" />
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <h2>More Projects</h2>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Link to={'/SimpleTransitions'} id="link">
                                <Image src="assets/SimpleTransitionsCover.png" className="next-project-hub" alt="..." />
                            </Link>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Link to={'/ServiceHub'} id="link">
                                <Image src="assets/ServiceHubCover.png" className="next-project-hub" alt="..." />
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Spotify;