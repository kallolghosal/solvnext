"use client"
import { Container,Row,Col, Button } from "react-bootstrap";
import Footer from "@/app/components/footer";
import Copyright from "@/app/components/copyright";
import Enablingheader from "@/app/components/enablingheader";
import Link from "next/link";
import Image from "next/image";

const genderequity = () => {
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
                            <Link href='/transforming-investment/monitorforresult'>
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
                    <div className='designbox44'>
                        <h2>Gender &amp; Equity</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>Gender has been the cross-cutting theme of many of our research, review and evaluation studies in the areas of poverty, financial inclusion, social protection, livelihoods and governance.</p>
                        <p>We have adopted various gender frameworks, such as the World Bank’s agency opportunity framework and the women’s empowerment in agriculture index of IFPRI.</p>
                        <p>We contributed to developing an innovative reporting module on a mobile application that helps track the escalating experience of gender-based violence (GBV), focusing on the prevention and mitigation of violence.</p>
                        <p>We also quality assured the DOT tool developed for use in factories, where the workforce is often not literate. The DOT tool utilises a survey, using dots to capture responses about the work environment, where the colours of the dots indicate the level of action required to prevent GBV.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};
export default genderequity;