"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../globals.css';
import Image from 'next/image';
import Insideheader from '../components/insideheader';
import Footer from '../components/footer';
import Copyright from '../components/copyright';

const ourteam = () => {
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
                    <Row>
                        <Col md={4}>
                            <Image src={'/img/Angela.jpg'} width={240} height={360} alt='DR. ANGELA CHAUDHURI' />
                            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>DR. ANGELA CHAUDHURI</p>
                            <p>HEALTH PRACTICE AREA</p>
                        </Col>
                        <Col md={4}>
                            <Image src={'/img/arun.jpg'} width={240} height={360} alt='ARUN SIVARAMAKRISHNAN' />
                            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>ARUN SIVARAMAKRISHNAN</p>
                            <p>LIVELIHOOD PRACTICE AREA</p>
                        </Col>
                        <Col md={4}>
                            <Image src={'/img/Bhagvat.jpg'} width={240} height={360} alt='BHAGVATH CHANDRA' />
                            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>BHAGVATH CHANDRA</p>
                            <p>INVESTMENT CATALYST</p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                            <Image src={'/img/Kumar.jpg'} width={240} height={360} alt='DR. ANGELA CHAUDHURI' />
                        </Col>
                        <Col md={4}>
                            <Image src={'/img/Latheef.jpg'} width={240} height={360} alt='ARUN SIVARAMAKRISHNAN' />
                        </Col>
                        <Col md={4}>
                            <Image src={'/img/Nandlal.jpg'} width={240} height={360} alt='BHAGVATH CHANDRA' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default ourteam;