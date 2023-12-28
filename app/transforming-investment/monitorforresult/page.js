"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Investheader from '@/app/components/investheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const monitorresult = () => {
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
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
                                    <Image src={'/img/Livehood.png'} width={80} height={80} alt='Livelihood Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/transforming-investment/learning-for-impact'>
                                <div className='iconbox' >
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
                    <div className='evidencebox11'>
                        <h2>Monitor for Results</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>We believe that information is power. We move our partners up the evidence-to-results chain through world-class monitoring systems that enable timely and informed decisions.</p>
                        <p>From over 25 years of experience with monitoring, we believe:</p>
                        <ul>
                            <li>Information from monitoring systems feeds into four areas: Planning, Accountability, Learning, Performance Management (PALP)</li>
                            <li>Systems should be use-focused and owned by users</li>
                            <li>Comprehensiveness is important, but for users, simplicity is key</li>
                            <li>A good blend of quantitative and qualitative information is essential for insight</li>
                            <li>Priorities will change, so systems should evolve with their needs</li>
                            <li>Clarity and consensus on how information will be used are critical for action</li>
                        </ul>
                        <p><b>Some of our work in this area:</b></p>
                        <p>Monitoring, Evaluation and Learning for Avahan India AIDS Initiative Phase III across five high HIV-prevalence states in South India. We worked with 87 community organisations, reaching a key population of 1,36,000+ to design and implement technology-driven MEAL systems for better data-based decision making.</p>
                        <p>Monitoring, Evaluation and Learning System for the Poorest Areas Civil Society Programme (PACS-I) across six states of India; designed and implemented the entire system covering – inputs, activities, processes, outputs, outcomes and impact for four years; covering over 300-odd civil society organisations in India. The project was implemented by Development Alternatives and supported by the Department for International Development (DFID).</p>
                        <p>Designing and Operationalising a Participatory Monitoring System for Eastern and Western India Rainfed Farming Projects, supported by DFID-India.</p>
                        <p>Design of a monitoring, evaluation and learning framework and tool to support the implementation of an Institutional Network Strengthening Programme, with a specific focus on the Asia-Pacific region, for Transparency International (TI).</p>
                        <p>Monitoring system for United Nations Office on Drugs and Crime (UNODC), Nigeria in supporting the National Drug Law Enforcement Authority (NDLEA), which is leading the National Drug Control Master Plan (NDCMP), in partnership with 37 Ministries/agencies.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default monitorresult;