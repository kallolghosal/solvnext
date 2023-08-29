"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../globals.css';
import Insideheader from '../components/insideheader';
import Footer from '../components/footer';
import Copyright from '../components/copyright';

const about = () => {
    return (
        <>
        <Insideheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <Row>
                <Col md={3}>
                    <ul>
                        <li>ABOUT CMS</li>
                        <li>Our Team</li>
                        <li>Our Incubatees</li>
                    </ul>
                </Col>
                <Col md={9}>
                    <h5>Vision</h5>
                    <p>A future where holistic and well-orchestrated partnerships and investments create impact that is transformational, driving sustainable and scalable equity.</p>
                    <h5>Mission</h5>
                    <ul>
                        <li>Impacting 8 SDGs by 2030</li>
                        <li>Improving 100 million lives by enabling development partners to enhance their impact through integrated and scalable solutions and investments</li>
                        <li>Investing in partnerships and social impact externally, and in people, process and performance internally</li>
                    </ul>
                    <h4>An Investment Reimagined Approach</h4>
                    <p>We like to see ourselves as Solution-focused activist &ndash; &apos;Solvists&apos;. Working closely with partners, we incubate and invest with a rare mix of resources, deep expertise and on-ground experience, shaping social equity while working across SDG goals. We:</p>
                    <ul>
                        <li>Co-Invest in the success of key change agents
                            <ul>
                                <li>Leverage resources for effective action while addressing complex issues</li>
                            </ul>
                        </li>
                        <li>Raise and shape investments
                            <ul>
                                <li>Secure higher value for investments made, through growth-driven solutions</li>
                            </ul>
                        </li>
                        <li>Invest in scalable solutions
                            <ul>
                                <li>Incubate and scale sectoral solutions that deliver value and returns</li>
                            </ul>
                        </li>
                    </ul>
                    <p>This &apos;Unlocking Value to Invest in Impact&apos; framework brings alive our living intelligence to enhance social equity.</p>
                    <video src='/img/NewCMSVideo.mp4' autoPlay loop style={{ width: '700px', height: '700px' }}></video>
                    <h5>Our Values</h5>
                    <ul>
                        <li>An unconditional and uncompromising sense of compassion</li>
                        <li>Striving for excellence in approach and impact</li>
                        <li>Driven by intellect and imagination</li>
                        <li>Committed to sustained collaborations delivering solutions</li>
                    </ul>
                    <h5>Working with CMS</h5>
                    <p>Our on-ground experience and understanding help us partner with multi-disciplinary teams to tackle complex challenges and maximise social returns.</p>
                    <h5>We are committed to forging transformative partnerships towards investing in equity.</h5>
                    <p>Established in 1994, CMS, based in India, works in 25 other countries, exporting India&apos;s social development capacities and bringing back learning and goodwill. We are part of the Catalyst Group.</p>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default about;