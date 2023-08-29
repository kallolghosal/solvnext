import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap';
import '../globals.css'

const collab = () => {
    return (
        <Container fluid>
            <Container style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <Row>
                    <Col md={4}>
                        <Image src='/img/Group-3.png' width={370} height={'auto'} alt='Community Action Collab' />
                    </Col>
                    <Col md={8}>
                        <Image src='/img/CAC-logo.svg' width={300} height={150} alt='CAC Logo' />
                        <p>
                        Community Action Collab (CAC) is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions in their everyday emergencies and is ready for future humanitarian crises (climate & health). The platform orchestrates and influences the actions and decisions of 360 partners, governments and other alliances, enabling them to solve issues affecting the vulnerable and ensuring access to critical livelihood, health, social protection and climate impact solutions.
                        </p>
                        <a href='https://solvists.org/community-action-collab' target='_blank' className='btn btn-success'>LEARN MORE</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default collab;