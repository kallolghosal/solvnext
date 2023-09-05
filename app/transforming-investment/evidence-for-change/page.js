"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Investheader from '@/app/components/investheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const evidencechange = () => {
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
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
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
                    <div className='evidencebox'>
                        <h2 className='bg-transparent' style={{top:'400px'}}>Evidence for Change</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>In Evidence for Change, we specialise in facilitating theories of change, alternate analysis, results frameworks, and tools, building evidence through pluralistic methodologies, participatory learning, and action, and establishing efficient monitoring, evaluation, and learning systems through a multidisciplinary approach.</p>
                        <p>We specialise in designing and conducting research and evaluation in multiple domains, with a variety of partners through a collaborative process.</p>
                        <p>We deliver quality impact evaluations through rigorous experimental, quasi-experimental, mixed-method and qualitative methods, nationally and internationally. Our focus areas include conducting impact assessments, programme evaluations, summative and performance evaluations, action research, exploratory and formative assessments, literature reviews, sectoral studies, and organisational assessments, amongst others.</p>
                        <p>We have partnered with experts from Stanford University, International Initiative for Impact Evaluation (3ie), Statistics for Sustainable Development (Stats4SD), Institute of Rural Management, Krea University, Tufts University, University of Reading, University of Oregon, Purdue University, Indian Statistical Institute, etc.</p>
                        <p>We have carried out over 100 project/programme evaluations and organisational assessments, using methods and approaches that help communities and programme staff to reflect, assess, learn and apply strategies. The team has strong experience in using evidence to contribute to shaping public and organisational policies and improving programme strategies.</p>
                        <p><b>Recently, the team (CMS and 3ie) working with the Government, concluded the evaluation of the National Rural Livelihood Project&apos;s (NRLP) programme</b> working on women empowerment and decision-making within the household through access to credit. We studied the impact of the programme and institutional support that SHG provides to women with the aim of providing a sustainable livelihood and financial inclusion. We measured the decision-making capacity of women based on the responses recorded to 26 questions that covered a variety of scenarios within households, such as food, children, education, assets and finance.</p>
                        <p>Other examples of our work include</p>
                        <ul>
                            <li>Impact evaluation using experimental design for Breakthrough’s innovative programme utilising mass and community media to address the issue of Early Marriage across three districts in Bihar and Jharkhand</li>
                            <li>Literature review of interventions facilitating smallholder farmers’ access to the market in India using the hierarchy of study design. The study aimed to understand the current scenario and also to provide insights into the sustainability of the producer organisations as institutions</li>
                            <li>Formative research to understand the effect of seasonality and agriculture on the nutrition of pregnant and lactating women and children under five and household coping mechanisms in four districts in Madhya Pradesh</li>
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

export default evidencechange;