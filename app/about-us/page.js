"use client"
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Topmenu from '../components/topmenu';
import '../globals.css';
import Insideheader from '../components/insideheader';

const about = () => {
    return (
        <>
        <Insideheader />
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ul>
                        <li>ABOUT CMS</li>
                        <li>Our Team</li>
                        <li>Our Incubatees</li>
                    </ul>
                </Col>
                <Col md={9}>
                    <h5>Vision</h5>
                    <p>A future where holistic and well-orchestrated partnerships and investments create impact that is transformational, driving sustainable and scalable equity.</p>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default about;