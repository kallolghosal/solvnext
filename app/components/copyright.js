import { Container } from 'react-bootstrap';
import { useState } from 'react';
import '../globals.css'

const copyright = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Container fluid style={{ 
            backgroundColor: '#000', 
            paddingTop: '20px', 
            paddingBottom: '20px', 
            textAlign: 'center', 
            color: 'white', 
            fontSize: '12px' 
        }}>
        &copy; {date.getFullYear()} Catalyst Management Services Pvt. Ltd. All rights reserved.
        </Container>
    );
};
export default copyright;