import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import '../globals.css'

const topmenu = () => {
    return (
        <>
        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style={{ backgroundColor: '#7F3F97', color: 'white', minHeight: '70vh' }}>
            <div class="offcanvas-header">
            <h5 id="offcanvasTopLabel"></h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <Container>
                <Row>
                <Col md={4}>
                    <ul className='topMenu'>
                    <li><Link href='/'>Home</Link></li>
                    <li>About Us
                        <ul className='topMenuLists'>
                        <li><Link href='/about-us'>About CMS</Link></li>
                        <li><Link href={'/our-team'}>Our Team</Link></li>
                        <li>Our Incubatees</li>
                        </ul>
                    </li>
                    <li>Our Partners</li>
                    <li>Domain Areas
                        <ul className='topMenuLists'>
                        <li>Livelihood</li>
                        <li>Health</li>
                        <li>Wellbeing for Workforce</li>
                        <li>Climate</li>
                        </ul>
                    </li>
                    </ul>
                </Col>
                <Col md={4}>
                    <ul className='topMenu'>
                        <li>Transforming Investment
                            <ul className='topMenuLists'>
                                <li>Design for Success</li>
                                <li>Evidence for Change</li>
                                <li>Monitor for Results</li>
                                <li>Learning for Impact</li>
                            </ul>
                        </li>
                        <li>Leveraging Assets</li>
                        <li>Our Initiatives
                            <ul className='topMenuLists'>
                                <li>Community Action Collab</li>
                                <li>Catalysing Social Impact</li>
                            </ul>
                        </li>
                    </ul>
                </Col>
                <Col md={4}>
                    <ul className='topMenu'>
                        <li>Enabling Spcialists
                            <ul className='topMenuLists'>
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
                </Row>
            </Container>
            </div>
        </div>
        </>
    );
};

export default topmenu;