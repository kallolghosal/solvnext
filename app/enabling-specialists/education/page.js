"use client"
import { Container,Row,Col, Button } from "react-bootstrap";
import Footer from "@/app/components/footer";
import Copyright from "@/app/components/copyright";
import Enablingheader from "@/app/components/enablingheader";
import Link from "next/link";
import Image from "next/image";

const education = () => {
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
                    <div className='designbox22'>
                        <h2>Education</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>Our education portfolio is diverse, covering the right to education, education for livelihoods, education governance, ICT (Information, Communication, Technology) and innovations in education. We have worked across the entire cycle of learning, from early child-care, school education, supplementary and vocational training, life-skills education and workplace advancement.</p>
                        <p>We have conducted impact evaluations to provide evidence for decision-making on scale and for investment in education initiatives such as the Prajayatna and Nali Kali government projects in Karnataka, and Pratham-Vodafone’s ICT initiatives in urban and rural sites across their programme locations in India.</p>
                        <p>We anchored and supported the implementation of the Centre for Education (CEI) and Results for Development (R4D) in India. We have also evaluated several early childhood programmes. Through projects for Agastya and Pratham Books, we have assessed the curiosity of students for science and their association with story books.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};
export default education;