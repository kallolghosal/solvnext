"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Domainareaheader from '@/app/components/domainareaheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const wellbeing = () => {
    return (
        <>
        <Domainareaheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={6}  className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/health'>
                                <div className='iconbox'>
                                    <Image src={'/img/Health-menu-icon.png'} width={80} height={80} alt='Health Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/wellbeing-for-workforce'>
                                <div className='iconbox'>
                                    <Image src={'/img/Wellbeing-icon.png'} width={80} height={80} alt='Wellbeing Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Health</p></Col>
                        <Col md={6}><p>Welbeing for workforce</p></Col>
                    </Row>
                    <Row>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/livelihood'>
                                <div className='iconbox'>
                                    <Image src={'/img/Livehood.png'} width={80} height={80} alt='Livelihood Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/climate-practice'>
                                <div className='iconbox'>
                                    <Image src={'/img/Climate-Action-Icon.png'} width={80} height={80} alt='Climate Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Livelihood</p></Col>
                        <Col md={6}><p>Climate</p></Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <div className='wellbeingbox'>
                        <h2 className='bg-transparent'>Wellbeing for Workforce</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>Our Wellbeing for Workforce practise strives to make wellbeing a reality for the first mile workers and reach 100 million workers by 2030. We are committed to the Wellbeing of Workers, their families and communities.</p>
                        <p>Over the last 14 years, we have partnered with over 30 organisations and built our presence in over 351 factories across 14 states in India. We have also reached 12 countries across Asia and African regions through technical support on building capacities, programmes, systems and workplace policies. We have reached over 230,000 workers and their families (than 60% are women).</p>
                        <p>Our work on worker wellbeing, gender equality and women workforce empowerment finds mention by International organisations and in alliances, such as the United Nations Foundation, World Benchmarking Alliance, World Bank, Walmart Foundation, ICRW, amongst several others.</p>
                        <p>We are a member of the World Benchmarking Alliance and are on the national consultation on Business and Human rights.</p>
                        <p>To respond to and address the COVID-19 related crisis around health, livelihood and social areas, we are building an Apparel Sector Response in consultation with key stakeholders from the supply chain.</p>
                        <p>Our core competencies are in developing replicable models on transformation, large-scale implementation, transferring knowledge and best practices that cut across the boundaries and sectors. We have designed and implemented various national and international programmes.</p>
                        <p>We have built a repository of solutions and approaches to complex problems. We strongly believe that both worker and business wellbeing can be simultaneously maximised, and not at the cost of each other.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default wellbeing;