import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
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
                            <li><Link href={'/'}>Home</Link></li>
                            <li>About Us
                                <ul className='footerlists'>
                                    <li><Link href={'/about-us'}>About CMS</Link></li>
                                    <li><Link href={'/our-team'}>Our Team</Link></li>
                                    <li><Link href={'our-incubatees'}>Our Incubatees</Link></li>
                                </ul>
                            </li>
                            <li><Link href={'/our-partners'}>Our Partners</Link></li>
                            <li>Domain Areas
                                <ul className='footerlists'>
                                    <li><Link href={'/domain-areas/livelihood'}>Livelihood</Link></li>
                                    <li><Link href={'/domain-areas/health'}>Health</Link></li>
                                    <li><Link href={'/domain-areas/wellbeing-for-workforce'}>Wellbeing for Workforce</Link></li>
                                    <li><Link href={'/domain-areas/climate-practice'}>Climate</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <ul>
                            <li>Transforming Investment
                                <ul className='footerlists'>
                                    <li><Link href={'/transforming-investment/design-for-success'}>Design for Success</Link></li>
                                    <li><Link href={'/transforming-investment/evidence-for-change'}>Evidence for Change</Link></li>
                                    <li><Link href={'/transforming-investment/monitorforresult'}>Monitor for Results</Link></li>
                                    <li><Link href={'/transforming-investment/learning-for-impact'}>Learning for Impact</Link></li>
                                </ul>
                            </li>
                            <li>Leveraging Assets</li>
                            <li>Our Initiatives
                                <ul className='footerlists'>
                                    <li><Link href={'/community-action-collab'}>Community Action Collab</Link></li>
                                    <li><Link href={'/catalysing-social-impact'}>Catalysing Social Impact</Link></li>
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