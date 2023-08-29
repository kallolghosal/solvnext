import { Container } from 'react-bootstrap';
import '../globals.css'

const copyright = () => {
    return (
        <Container fluid style={{ 
            backgroundColor: '#000', 
            paddingTop: '20px', 
            paddingBottom: '20px', 
            textAlign: 'center', 
            color: 'white', 
            fontSize: '12px' 
        }}>
            &copy; 2023 Catalyst Management Services Pvt. Ltd. All rights reserved.
        </Container>
    );
};
export default copyright;