"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Investheader from '@/app/components/investheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const learningimpact = () => {
    return (
        <>
        <Investheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={6}  className='d-flex align-items-center justify-content-center'>
                            <Link href='/transforming-investment/design-for-success'>
                                <div className='iconbox'>
                                    <Image src={'/img/Health-menu-icon.png'} width={80} height={80} alt='Health Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/transforming-investment/evidence-for-change'>
                                <div className='iconbox'>
                                    <Image src={'/img/Wellbeing-icon.png'} width={80} height={80} alt='Wellbeing Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Design for Success</p></Col>
                        <Col md={6}><p>Evidence for Change</p></Col>
                    </Row>
                    <Row>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/transforming-investment/monitorforresult'>
                                <div className='iconbox'>
                                    <Image src={'/img/Livehood.png'} width={80} height={80} alt='Livelihood Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/transforming-investment/learning-for-impact'>
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
                                    <Image src={'/img/Climate-Action-Icon.png'} width={80} height={80} alt='Climate Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Monitor for Results</p></Col>
                        <Col md={6}><p>Learning for Impact</p></Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <h2>Learning for Impact</h2>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default learningimpact;