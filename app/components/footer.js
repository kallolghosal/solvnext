import { Container, Row, Col } from 'react-bootstrap';
import '../globals.css'

const footer = () => {
    return (
        <Container fluid style={{ backgroundColor: '#333', paddingTop: '40px', paddingBottom: '40px', color: 'white', fontSize: '14px' }}>
            <Container>
                <Row>
                    <Col md={9}>
                        <h5>Sitemap</h5>
                    </Col>
                    <Col md={3}>
                        <h5>Get In Touch</h5>
                    </Col>
                </Row>
                <Row className='footerstyle'>
                    <Col md={3}>
                        <ul>
                            <li>Home</li>
                            <li>About Us
                                <ul className='footerlists'>
                                    <li>About CMS</li>
                                    <li>Our Team</li>
                                    <li>Our Incubatees</li>
                                </ul>
                            </li>
                            <li>Our Partners</li>
                            <li>Domain Areas
                                <ul className='footerlists'>
                                    <li>Livelihood</li>
                                    <li>Health</li>
                                    <li>Wellbeing for Workforce</li>
                                    <li>Climate</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <li>Transforming Investment
                                <ul className='footerlists'>
                                    <li>Design for Success</li>
                                    <li>Evidence for Change</li>
                                    <li>Monitor for Results</li>
                                    <li>Learning for Impact</li>
                                </ul>
                            </li>
                            <li>Leveraging Assets</li>
                            <li>Our Initiatives
                                <ul className='footerlists'>
                                    <li>Community Action Collab</li>
                                    <li>Catalysing Social Impact</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <li>Enabling Spcialists
                                <ul className='footerlists'>
                                    <li>Techtonic</li>
                                    <li>Community Engagement</li>
                                    <li>Education</li>
                                    <li>Behaviour Sciente</li>
                                    <li>Gender &amp; Equity</li>
                                    <li>Social Protection</li>
                                </ul>
                            </li>
                            <li>CMS Blog</li>
                            <li>In the Media</li>
                            <li>Contact Us</li>
                            <li>Career</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <p>Catalyst Management Services Pvt. Ltd., #25, 4th Floor, AECS Layout, RMV 2nd Stage, Ashwathnagar, Bangalore – 560 094.</p>
                        <p>Email: contactus@catalysts.org</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default footer;