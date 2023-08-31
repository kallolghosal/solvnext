import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Topmenu from '../components/topmenu';
import '../globals.css'

const partnerheader = () => {
    return (
        <>
        <Container fluid g-0 style={{ margin:0, padding:0 }}>
            <Row className="d-flex flex-column">
                <Col className="transparent"> 
                    <nav class="navbar bg-body-tertiary">
                        <div class="container">
                            <a class="navbar-brand"><Image src='/img/CMS-logo-3.png' alt='CMS Logo' width={180} height={60} /></a>
                            <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>
                            <Topmenu />
                        </div>
                    </nav>
                </Col>  
                <Col>
                    <div className='partnerbanner'>
                        <Container style={{ paddingTop: '200px' }}>
                            <h2>Our Partners</h2>
                            <p>To address complex issues, we forge partnerships to shape <br />social equity.</p>
                        </Container>
                    </div>
                </Col>
                <Col style={{ backgroundColor: '#00AC8D' }}>
                    <Container style={{ color: 'white', marginTop: '20px', marginBottom: '20px' }}>
                        <p>Over the last two decades, we have worked with a range of stakeholders, like CSOs, banks, corporate foundations, academic institutions, funding agencies, community organisations, multilateral and bilateral agencies, networks, governments, and nonprofits.</p>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default partnerheader;