import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import '../globals.css'

const contentslider = () => {
    return (
        <>
        <Container fluid style={{ backgroundColor: '#E4F6F3', paddingTop: '120px', paddingBottom: '60px' }}>
            <Container>
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Row>
                                <Col>
                                    <h2>Domain Areas</h2>
                                    <p>
                                        We work accross the domains of livelihood, health and wellbeing of workforce. CMS has deep experience in policy, research, implementation, monitoring, capacity building, strategy and documentation.
                                    </p>
                                    <a href='https://solvists.org' alt="Solvists" className='btn btn-success'>LEARN MORE</a>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Health-1.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Strengthening Health and Community Systems | Health
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Health-2.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Making worker wellbeing a reality | Wellbeing for Workforce
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Livehood.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Supporting enterprises with evidence based solutions | Livelihood
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Climate-Icon.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Climate change has a range of impacts on sectors
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div class="carousel-item">
                            <Row>
                                <Col>
                                    <h2>Transforming Investment</h2>
                                    <p>
                                        We address complex issues that need integrated solutions, froge partnerships for effective action and devise grow solutions to shape social equity. 
                                    </p>
                                    <a href='https://solvists.org' alt="Solvists" className='btn btn-success'>LEARN MORE</a>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/shape5.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Designing sustainable development interventions | Design for Success
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/shape6.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Transforming investment through impact evaluations | Evidence for Change
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/shape7.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Mobilising partners with number-based and evidence-based action | Monitor for results
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/shape8.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Capturing, using and sharing learnings for strategy, action and implementation | Learning for Impact
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div class="carousel-item">
                            <Row>
                                <Col>
                                    <h2>Enabling Specialists</h2>
                                    <p>
                                        Working closely with partners, we invest in a rare mix of resources, deep expertise and on-ground experience, shape social equity and work accross SDG golas.
                                    </p>
                                    <a href='https://solvists.org' alt="Solvists" className='btn btn-success'>LEARN MORE</a>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Health-1.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Creating technologies that work for all | Techtonic
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Health-2.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Enabling social development | Community Engagement
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Livehood.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Building resilience through educational interventions | Education
                                    </p>
                                </Col>
                                <Col style={{ textAlign: 'center', color:'#00ac8d' }}>
                                    <Image src='/img/Climate-Icon.png' alt='Health' style={{ width: 'auto', height: '140px' }} />
                                    <p style={{ paddingLeft: '40px', paddingRight: '40px', marginTop: '20px' }}>
                                        Producing enduring behavioural change | Behaviour Science
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </Container>
            
        </Container>
        </>
    );
};

export default contentslider;