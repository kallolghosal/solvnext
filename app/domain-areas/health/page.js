"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Domainareaheader from '@/app/components/domainareaheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const health = () => {
    return (
        <>
        <Domainareaheader />
        <Container style={{ marginTop: '80px', marginBottom: '100px' }}>
            <Row>
                <Col md={3} xs={12}>
                    <Row>
                        <Col md={6} xs={6}  className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/health'>
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
                                    <Image src={'/img/Health-menu-icon.png'} width={80} height={80} alt='Health Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} xs={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/wellbeing-for-workforce'>
                                <div className='iconbox'>
                                    <Image src={'/img/Wellbeing-icon.png'} width={80} height={80} alt='Wellbeing Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6} xs={6}><p>Health</p></Col>
                        <Col md={6} xs={6}><p>Welbeing for workforce</p></Col>
                    </Row>
                    <Row>
                        <Col md={6} xs={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/livelihood'>
                                <div className='iconbox'>
                                    <Image src={'/img/Livehood.png'} width={80} height={80} alt='Livelihood Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} xs={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/climate-practice'>
                                <div className='iconbox'>
                                    <Image src={'/img/Climate-Action-Icon.png'} width={80} height={80} alt='Climate Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6} xs={6}><p>Livelihood</p></Col>
                        <Col md={6} xs={6}><p>Climate</p></Col>
                    </Row>
                </Col>
                <Col md={9} xs={12}>
                    <div className='healthbox'>
                        <h2 className='bg-transparent'>Health</h2>
                    </div>
                    <div className='livhoodtext'>
                        <h4>Health Practice</h4>
                        <p>We have 25 years of experience as a global social impact consulting firm and use 360-degree approach that improves the well-being of vulnerable communities. CMS and its sister organisation, Swasti, a global south public health agency, partners with communities at the last mile to help them realise their potential through health and well-being. We work to achieve Universal Health Care and Global Health Security.</p>
                        <ul>
                            <li>Community System Strengthening: People-centric outcomes through Swasti</li>
                            <li>Health System Strengthening: Institution and policy outcomes through CMS</li>
                        </ul>
                        <h4>Key Domains We Work In</h4>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p><b>Comprehensive Primary Health</b><br />Changing the way health services are for vulnerable communities. Sector shaping work through Invest4Wellness (i4We), a system innovation in primary healthcare and Comprehensive Primary Health Care (CPHC) Alliance to strengthen primary health care.</p>
                        </div>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p><b>Early diagnosis</b><br />Detecting symptoms, health concerns and disease trends through sector shaping work like self-testing initiatives, screening &amp; testing, and integrated disease surveillance.</p>
                        </div>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p><b>Technology &amp; Digital Health</b><br />Providing appropriate cutting-edge technology solutions to enable vulnerable groups to achieve well-being. Sector shaping work through Call4Svasth, telecare for the vulnerable, using point-of-care diagnostics in our community health interventions, DICEFlow for our primary healthcare work, and using data science, Geographical Information Systems (GIS) and Machine Learning models (ML) as essential components of our approach to environmental surveillance.</p>
                        </div>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p><b>SRHR &amp; Maternal health</b><br />Empowering adolescent girls, women, and sexual minorities to protect their health and rights. Sector shaping work through Saarthi Health Platform (SHP) to scale-up Manyata to at least 1000 new social healthcare enterprises (SHEs) in key states of India by 2024 and membership at Asia Pacific Alliance for SRHR.</p>
                        </div>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p><b>One Health + Planetary Health</b><br />Coordinating with human, animal and environmental health partners for successful public health interventions. Sector shaping work through Precision Health Platform, surveillance using environmental tools and Green Health Alliance.</p>
                        </div>
                        <p>Other priority domains include Mental Health, Social Determinants of Health, Inclusive Health Systems for Special Populations, and Innovative Financing & Health Entrepreneurship.</p>
                        <h5>The Practice Works with Various Partner Types:</h5>
                        <ul>
                            <li>Local to National Governments</li>
                            <li>Regional Government bodies</li>
                            <li>UN Agencies</li>
                            <li>Bilateral and Multilateral Agencies</li>
                            <li>Large Civil Society Networks representing the cause of vulnerable populations</li>
                        </ul>
                        <h5>Key Initiatives</h5>
                        <ul>
                            <li>Transforming the city of Bhopal into a &apos;Healthy City&apos; based on WHO&apos;s long-running Healthy Cities framework concentrating on the Social Determinants of Health in five pillars:</li>
                        </ul>
                        <video src='/img/health_video.mp4' autoPlay loop className='w-100' style={{height:'auto'}}></video>
                        <p>The initiative has been successful with support from National Health Mission, Government of Madhya Pradesh and HSTP</p>
                        <ul>
                            <li>Developed effective strategies for COVID-19 vaccination and building resilience with support from Rockefeller Foundation in 3 SEAR countries</li>
                        </ul>
                        <Image src={'/../img/map.png'} width={200} height={100} alt='Map' className='w-100' style={{height:'auto'}} />
                        <ul>
                            <li>National QI Coordinating Agency &amp; Technology Agency for Manyata 4.0 aims to scale up Manyata to at least 1000 new social healthcare enterprises (SHEs) in key states of India by 2024 with support from MSD for Mothers, a global healthcare initiative for women</li>
                            <li>Built the resilience among workers and businesses of factories against Covid-19 and future crises of over 40,000 workers from 14 RMG factories of Amazon Supply Chains located districts of Bangladesh with support from Amazon</li>
                            <li>Launched India&apos;s first city-wide environmental surveillance system in 5 cities with the aim to develop a comprehensive yet decentralised environmental surveillance system with support from Skoll Foundation</li>
                            <li>Facilitated the Learning for Impact L4I knowledge collaborative by USAID India</li>
                            <li>Conducted a process evaluation of India&apos;s first health-focused &apos;development impact bond&apos; (DIB) to generate insights on the prospective role of performance-based financing mechanisms in global health programming</li>
                            <li>Designed the National Drug Control Master Plan (NDCMP) II for the Government of Nigeria to combat the challenges of addiction and trafficking</li>
                            <li>Conducted an evaluation of the World Health Organisation&apos;s Regional Office for South East Asia&apos;s (WHO SEARO) Collaborating Centers</li>
                            <li>Together with Swasti, raised over one billion USD from the Global Fund for AIDS, TB and Malaria</li>
                        </ul>
                        <h5>Alliances and Platforms</h5>
                        <p>Creating impact, orchestrating results, and shaping the sector of primary health care, environmental health, and climate change through our platforms and multi-partner alliances.</p>
                        <div className='imgbox'>
                            <Image src={'/../img/Logo-1.png'} width={160} height={50} alt='Logo 1' />
                            <Image src={'/../img/Logo-2.png'} width={160} height={90} alt='Logo 1' />
                            <Image src={'/../img/Logo-3.png'} width={160} height={60} alt='Logo 1' />
                            <Image src={'/../img/Logo-4.png'} width={130} height={50} alt='Logo 1' />
                            <Image src={'/../img/Logo-5.png'} width={150} height={60} alt='Logo 1' />
                        </div>
                        <p>The practice area has representation under some of the most prestigious boards and panels:</p>
                        <ul>
                            <li>WHO Alliance for Transformative Action on Climate and Health (ATACH)</li>
                            <li>WHO Knowledge Sharing Platform</li>
                            <li>Scientific and Industrial Research Organizations (SIRO)</li>
                            <li>Global Learning Collaborative for Health Systems Resilience</li>
                            <li>MIT Solve Health Leadership</li>
                            <li>Asia Pacific Alliance for SRHR</li>
                        </ul>
                        <p><b>Pivoting Towards Climate-Responsive Healthy Days</b></p>
                        <h5>#100MillionHealthyDays:</h5>
                        <p>Building stronger evidence on measuring healthy days</p>
                        <h5>Climate Change and Health:</h5>
                        <p>Climate change has resulted in extreme weather conditions that have a serious impact on health. Through climate-responsive programs, we hope to build the resilience of vulnerable communities.</p>
                        <p><b>To learn more about the work we do, contact us at:</b></p>
                        <Link href={'mailto:solvists@catalists.org'} className='btn btn-success'>solvists@ctalysts.org</Link>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default health;