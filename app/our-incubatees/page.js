"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../globals.css';
import Image from 'next/image';
import Insideheader from '../components/insideheader';
import Footer from '../components/footer';
import Copyright from '../components/copyright';
import Link from 'next/link';

const incubatees = () => {
    return (
        <>
        <Insideheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <Row>
                <Col md={3}>
                    <ul className='aboutlink'>
                        <li><Link href={'/about-us'}>ABOUT CMS</Link></li>
                        <li><Link href={'/our-team'}>Our Team</Link></li>
                        <li><Link href={'/our-incubatees'} style={{ fontWeight: 'bold', color: '#7F3F98' }}>Our Incubatees</Link></li>
                    </ul>
                </Col>
                <Col md={9}>
                    <p>Some of our incubated ideas have become full-fledged organisations, which operate as our sister organisations, but have grown to be significant development players in their own right.</p>
                    <Row style={{ marginTop: '25px' }}>
                        <Col md={3}>
                            <div className='logobox'>
                                <Image src={'/img/swasti-logo.png'} width={170}height={100} alt='Swasti Logo' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h4 style={{ color: '#7F3F98', marginTop: '20px' }}>SWASTI</h4>
                            <p>Swasti &ndash; The Health Catalyst &ndash; is a health resource centre, which achieves public health outcomes for the marginalised through the delivery of end-to-end solutions as well as short and long term support and facilitation, combining research and practice. The organisation has supported governments, donors and development partners to design solutions in public health.</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '25px' }}>
                        <Col md={3}>
                            <div className='logobox'>
                                <Image src={'/img/vrutti-logo.png'} width={180}height={80} alt='Swasti Logo' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h4 style={{ color: '#7F3F98', marginTop: '20px' }}>VRUTTI</h4>
                            <p>Vrutti is a Livelihood Impact Partner which enhances people’s well-being through knowledge, innovation and transformative actions, and brings about solutions at a scale that eliminate inequities and create wealth for marginalised communities. The social organisation works through result-based planning tools, performance measurement metrics, impact and value for money assessments, and using technology as an augmenter.</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '25px' }}>
                        <Col md={3}>
                            <div className='logobox'>
                                <Image src={'/img/logo-fuzhio.png'} width={160}height={80} alt='Swasti Logo' />
                            </div>
                        </Col>
                        <Col md={9}>
                            <h4 style={{ color: '#7F3F98', marginTop: '20px' }}>FUZHIO</h4>
                            <p>Fuzhio promotes Impact Products directly to customers on behalf of small farmers and vulnerable groups, and allows them to maximise yields and provide customers with safe, responsible products.</p>
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

export default incubatees;