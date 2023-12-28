import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Topmenu from './topmenu';
import '../globals.css';
import Link from 'next/link';

const socialimpactheader = () => {
    return (
        <>
        <Container fluid g-0 style={{ margin:0, padding:0 }}>
            <Row className="d-flex flex-column">
                <Col className="transparent"> 
                    <nav class="navbar bg-body-tertiary">
                        <div class="container">
                            <Link href={'/'} class="navbar-brand"><Image src='/img/CMS-logo-3.png' alt='CMS Logo' width={180} height={60} /></Link>
                            <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>
                            <Topmenu />
                        </div>
                    </nav>
                </Col>  
                <Col>
                    <div className='socialimpactheader'>
                        <Container style={{ paddingTop: '200px' }}>
                            <h2>OUR INITIATIVES</h2>
                            <p>Catalysing Social Impact</p>
                        </Container>
                    </div>
                </Col>
                <Col style={{ backgroundColor: '#00AC8D' }}>
                    <Container style={{ color: 'white', marginTop: '20px', marginBottom: '20px' }}>
                        <p><br /></p>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default socialimpactheader;