"use client"
import { Container,Row,Col, Button } from "react-bootstrap";
import Footer from "@/app/components/footer";
import Copyright from "@/app/components/copyright";
import Enablingheader from "@/app/components/enablingheader";
import Link from "next/link";
import Image from "next/image";

const behaviourscience = () => {
    return (
        <>
        <Enablingheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <p>Working closely with partners, we invest with a rare mix of resources, deep expertise and on-ground experience, shaping social equity, working across SDG goals.</p>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={6}  className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/techtonic'>
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
                                    <Image src={'/img/Health-menu-icon.png'} width={80} height={80} alt='Health Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/education'>
                                <div className='iconbox'>
                                    <Image src={'/img/Wellbeing-icon.png'} width={80} height={80} alt='Wellbeing Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Techtonic</p></Col>
                        <Col md={6}><p>Education</p></Col>
                    </Row>
                    <Row>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/behaviour-science'>
                                <div className='iconbox'>
                                    <Image src={'/img/Livehood.png'} width={80} height={80} alt='Livelihood Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/gender-equity'>
                                <div className='iconbox'>
                                    <Image src={'/img/Climate-Action-Icon.png'} width={80} height={80} alt='Climate Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Behaviour Science</p></Col>
                        <Col md={6}><p>Gender &amp; Equity</p></Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <div className='designbox33'>
                        <h2>Behaviour Science</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>Our Behavioural Sciences services help clients build scientifically-informed programmes, with a commitment to influencing and sustaining lasting behaviour change.</p>
                        <p>Catalyst Behavioural Sciences services specialise in:</p>
                        <ul>
                            <li>Empirical-evidence-based strategies that initiate the adoption of new/positive behaviour</li>
                            <li>Technical support – guided by deep analysis and involving research, insights and trends – to support the ground-level implementation</li>
                            <li>Innovative tools and skills to help communities drive transformation</li>
                        </ul>
                        <p>Some of the key services include:</p>
                        <ul>
                            <li><b>Assessments</b> – Community immersion workshops, Audience segmentation & insights, Understanding of the ecosystem</li>
                            <li><b>Package design and implementation support</b> – for gateway behaviour change, tools, processes and capacity building</li>
                        </ul>
                        <p>Some of the tools we use:</p>
                        <ul>
                            <li>Predictive Behaviour Tools, like survival analysis</li>
                            <li>Game-based data collection tool</li>
                            <li>Audience insights and segmentation tool</li>
                            <li>Behaviour insights survey</li>
                        </ul>
                        <p>Some key examples of our work in this area:</p>
                        <ul>
                            <li><b>Social Norms hub</b> – In partnership with UNICEF, CMS runs/manages the Social Norms hub as the secretariat, which promotes Social and Behavioural Change Communication and social norms work through six key Indian Universities</li>
                            <li><b>Changing behaviours and saving lives &amp; money</b> – Avahan Programme: applied behavioural sciences in 130,000 cohorts, achieving extraordinary results.</li>
                            <li><b>How financial goal setting affects health behaviour (and risk perception)</b> – a study in partnership with Houston University, USA</li>
                            <li><b>Nutrition: Comprehensive programmatic assessment of intervention to improve dietary diversity</b> – studies across states and value chains to assess, enhance and improve the programme’s impact in partnership with the Global Alliance for Improved Nutrition (GAIN)</li>
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
export default behaviourscience;