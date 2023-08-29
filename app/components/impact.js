import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap';
import '../globals.css'

const impact = () => {
    return (
        <Container fluid style={{ backgroundColor: '#E5D9EA' }}>
            <Container style={{ paddingBottom: '50px' }}>
                <h2 style={{ color: '#7F3F97', paddingTop: '40px' }}>Our Impact</h2>
                <br />
                <Row>
                    <Col md={2}>
                        <h2 style={{ color: '#853F97' }}>1994</h2>
                        <h5 style={{ color: '#853F97' }}>YEAR OF ESTABLISHMENT</h5>
                        <br />
                        <h2 style={{ color: '#853F97' }}>500+</h2>
                        <h5 style={{ color: '#853F97' }}>SOCIAL DEVELOPMENT ORGANISATIONS</h5>
                        <br />
                        <h2 style={{ color: '#853F97' }}>1000+</h2>
                        <h5 style={{ color: '#853F97' }}>ENGAGEMENTS</h5>
                    </Col>
                    <Col md={2}>
                        <h2 style={{ color: '#853F97' }}>25</h2>
                        <h5 style={{ color: '#853F97' }}>COUNTRIES FOOTPRINT</h5>
                        <br />
                        <h2 style={{ color: '#853F97' }}>210+</h2>
                        <h5 style={{ color: '#853F97' }}>INSTITUTIONS INCUBATED, TRANSFORMED</h5>
                        <br />
                        <h2 style={{ color: '#853F97' }}>500+</h2>
                        <h5 style={{ color: '#853F97' }}>LEADERS MENTORED</h5>
                    </Col>
                    <Col md={8}>
                        <Image src='/img/hp-impact-map.png' width={760} alt='Map' />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
export default impact;