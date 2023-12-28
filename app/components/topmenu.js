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
                    <li><Link href={'/our-partners'}>Our Partners</Link></li>
                    <li>Domain Areas
                        <ul className='topMenuLists'>
                            <li><Link href={'/domain-areas/livelihood'}>Livelihood</Link></li>
                            <li><Link href={'/domain-areas/health'}>Health</Link></li>
                            <li><Link href={'/domain-areas/wellbeing-for-workforce'}>Wellbeing for Workforce</Link></li>
                            <li><Link href={'/domain-areas/climate-practice'}>Climate</Link></li>
                        </ul>
                    </li>
                    </ul>
                </Col>
                <Col md={4}>
                    <ul className='topMenu'>
                        <li>Transforming Investment
                            <ul className='topMenuLists'>
                                <li><Link href={'/transforming-investment/design-for-success'}>Design for Success</Link></li>
                                <li><Link href={'/transforming-investment/evidence-for-change'}>Evidence for Change</Link></li>
                                <li><Link href={'/transforming-investment/monitorforrsult'}>Monitor for Results</Link></li>
                                <li><Link href={'/transforming-investment/learning-for-impact'}>Learning for Impact</Link></li>
                            </ul>
                        </li>
                        <li>Leveraging Assets</li>
                        <li>Our Initiatives
                            <ul className='topMenuLists'>
                                <li><Link href={'/community-action-collab'}>Community Action Collab</Link></li>
                                <li><Link href={'/catalysing-social-impact'}>Catalysing Social Impact</Link></li>
                            </ul>
                        </li>
                    </ul>
                </Col>
                <Col md={4}>
                    <ul className='topMenu'>
                        <li>Enabling Spcialists
                            <ul className='topMenuLists'>
                                <li><Link href={'/enabling-specialists/techtonic'}>Techtonic</Link></li>
                                <li><Link href={'/enabling-specialists/education'}>Education</Link></li>
                                <li><Link href={'/enabling-specialists/behaviour-science'}>Behaviour Science</Link></li>
                                <li><Link href={'/enabling-specialists/gender-equity'}>Gender &amp; Equity</Link></li>
                                <li><Link href={'enabling-specialists/social-protection'}>Social Protection</Link></li>
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