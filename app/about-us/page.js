"use client"
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap';
import Topmenu from '../components/topmenu';
import '../globals.css'

const about = () => {
    return (
        <>
        <Container fluid g-0 className="vh-100" style={{ margin:0, padding:0 }}>
            <Row className="d-flex flex-column">
                <Col className="transparent"> 
                    <nav class="navbar bg-body-tertiary">
                        <div class="container">
                            <a class="navbar-brand"><Image src='/img/CMS-logo-3.png' alt='CMS Logo' width={180} /></a>
                            <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>
                            <Topmenu />
                        </div>
                    </nav>
                </Col>  
                <Col>
                    <div className='aboutbanner'>
                        <Container style={{ paddingTop: '200px' }}>
                            <h2>About Us</h2>
                            <p>We create impact that is trasformational, driving <br />sustainable and scalable equity.</p>
                        </Container>
                    </div>
                </Col>
                <Col style={{ backgroundColor: '#00AC8D' }}>
                    <Container style={{ height: '60px' }}>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default about;