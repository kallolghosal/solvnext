"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Investheader from '@/app/components/investheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const designsuccess = () => {
    return (
        <>
        <Investheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={6}  className='d-flex align-items-center justify-content-center'>
                            <Link href='/transforming-investment/design-for-success'>
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
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
                                <div className='iconbox'>
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
                    <div className='designbox'>
                        <h2 className='bg-transparent' style={{top:'400px'}}>Design for Success</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>We implement landscape, feasibility and needs assessments, all leading up to the design of development interventions. We believe design is a significant factor in the effectiveness, impact and sustainability of such interventions. We create designs using human-centred design and participatory approaches, incorporating learning from successful stakeholder interventions. We specialise in designing:</p>
                        <ul>
                            <li>Programmes and projects</li>
                            <li>Models</li>
                            <li>Social enterprises and social business</li>
                            <li>Organisations</li>
                            <li>Institutions and networks</li>
                        </ul>
                        <p>We use established design and planning frameworks like Results Based Management (RBM) and our own proprietary frameworks. Our work includes:</p>
                        <ul>
                            <li>Theory of change</li>
                            <li>Log Frame</li>
                            <li>Results assessment framework</li>
                            <li>Strategic plan</li>
                            <li>Business model</li>
                            <li>Business plan</li>
                            <li>Action plan</li>
                            <li>Road Map</li>
                            <li>Costed plan</li>
                        </ul>
                        <p>Redesigning midway during periods of crisis or unplanned change is also part of our design work. Some key examples of our work in this area:</p>
                        <ul>
                            <li>National Drug Control Master Plan (NDCMP) for Government of Nigeria and UNODC, involving 37 Ministries and Departments</li>
                            <li>Design of India&apos;s HIV Programme for Global Fund &ndash; Rounds 7,8,9,10</li>
                            <li>Design of the 3-fold model for smallholder farmers &ndash; for a three-fold increase in their incomes</li>
                            <li>Design of invest for wellness (i4we) primary healthcare model</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default designsuccess;