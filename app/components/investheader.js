import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Topmenu from '../components/topmenu';
import '../globals.css';
import Link from 'next/link';

const investheader = () => {
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
                    <div className='investheader'>
                        <Container style={{ paddingTop: '200px' }}>
                            <h2>TRANSFORMING INVESTMENT</h2>
                            <p>Partnering for Growth Solutions</p>
                        </Container>
                    </div>
                </Col>
                <Col style={{ backgroundColor: '#00AC8D' }}>
                    <Container style={{ color: 'white', marginTop: '20px', marginBottom: '20px' }}>
                        <p>Catalyst Management Services is a Social Investment Specialist that partners with Change Agents*, sharing a joint ambition to unlock and accelerate impact, scale and sustainability of development. To address complex issues that need integrated solutions, we forge partnerships for effective action and growth solutions to shape social equity.</p>
                    </Container>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default investheader;