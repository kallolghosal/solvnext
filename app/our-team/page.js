"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../globals.css';
import Image from 'next/image';
import Insideheader from '../components/insideheader';
import Footer from '../components/footer';
import Copyright from '../components/copyright';
import Link from 'next/link';

const ourteam = () => {
    return (
        <>
        <Insideheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <Row>
                <Col md={3}>
                    <ul className='aboutlink'>
                        <li><Link href={'/about-us'}>ABOUT CMS</Link></li>
                        <li><Link href={'/our-team'} style={{ fontWeight: 'bold', color: '#7F3F98' }}>Our Team</Link></li>
                        <li><Link href={'/our-incubatees'}>Our Incubatees</Link></li>
                    </ul>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Angela.jpg'} width={200} height={360} alt='DR. ANGELA CHAUDHURI' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>DR. ANGELA CHAUDHURI</p>
                                <p style={{marginTop: '-14px'}}>HEALTH PRACTICE AREA</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/arun.jpg'} width={240} height={360} alt='ARUN SIVARAMAKRISHNAN' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>ARUN SIVARAMAKRISHNAN</p>
                                <p style={{marginTop: '-14px'}}>LIVELIHOOD PRACTICE AREA</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Bhagvat.jpg'} width={240} height={360} alt='BHAGVATH CHANDRA' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>BHAGVATH CHANDRA</p>
                                <p style={{marginTop: '-14px'}}>INVESTMENT CATALYST</p>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Kumar.jpg'} width={240} height={360} alt='DR. ANGELA CHAUDHURI' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>KUMAR RAMAN</p>
                                <p style={{marginTop: '-14px'}}>FINANCE</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Latheef.jpg'} width={240} height={360} alt='ARUN SIVARAMAKRISHNAN' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>ABDUL LATHEEF P</p>
                                <p style={{marginTop: '-14px'}}>COMMUNITY ENGAGEMENT</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Nandlal.jpg'} width={240} height={360} alt='BHAGVATH CHANDRA' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>NANDLAL NARAYANAN</p>
                                <p style={{marginTop: '-14px'}}>HUMAN RESOURCES</p>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Ritika.jpg'} width={240} height={360} alt='RITIKA GUPTA' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>RITIKA GUPTA</p>
                                <p style={{marginTop: '-14px'}}>EVIDENCE 4 CHANGE</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Shaonli.jpg'} width={240} height={360} alt='SHAONLI CHAKRABORTY' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>SHAONLI CHAKRABORTY</p>
                                <p style={{marginTop: '-14px'}}>WELLBEING 4 WORKFORCE &amp; GENDER</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Siddhant.jpg'} width={240} height={360} alt='SIDDHANT SAWHNEY' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>SIDDHANT SAWHNEY</p>
                                <p style={{marginTop: '-14px'}}>TECHTONIC</p>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Ambika.jpg'} width={240} height={360} alt='AMBIKA SASIDHARAN' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>AMBIKA SASIDHARAN</p>
                                <p style={{marginTop: '-14px'}}>MARKETING &amp; COMMUNICATIONS</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Shiv.jpg'} width={240} height={360} alt='SHIV KUMAR' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>SHIV KUMAR</p>
                                <p style={{marginTop: '-14px'}}>CO-FOUNDER, DIRECTOR</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='teamImgBox'>
                                <Image src={'/img/Raghu.jpg'} width={240} height={360} alt='RAGHUNATHAN N' />
                                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>RAGHUNATHAN N</p>
                                <p style={{marginTop: '-14px'}}>CO-FOUNDER, DIRECTOR</p>
                            </div>
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