"use client"
import React, {useState} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BlogHeader from "../components/blogheader";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import Link from "next/link";

const ContactPage = () => {
    const url = '/img/contact-banner.jpg';
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts
     
        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formData,
            });
     
            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }
        
            // Handle response if necessary
            const data = await response.json()
            // ...
        } catch (error) {
            // Capture the error message to display to the user
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
        <BlogHeader url={url} headline={'Contact Us'} />
        <Container style={{marginTop:'60px',marginBottom:'60px'}}>
            <p>Catalyst Management Services Pvt. Ltd.</p>
            <p>Email us at <Link href={'mailto:contactus@catalysts.org'}>contactus@catalysts.org</Link></p>
        </Container>
        <Container fluid className="contactformbg">
            <Container>
                <p>Please send in your CVs to hr@catalysts.org<br />We will revert to you as soon as we have any suitable openings that might arise at CMS.</p>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col md={4}>
                            <Form.Control type="text" placeholder="Name" />
                        </Col>
                        <Col md={4}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                        <Col md={4}>
                            <Form.Control type="text" placeholder="Message" />
                        </Col>
                    </Row>
                    <br />
                    <Form.Check type="checkbox" label="I consent to having this website store my submitted information so they can respond to my inquiry. See our privacy policy to learn more how we use data." />
                    <br />
                    <button type="submit" className='btn btn-primary' disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Send'}
                    </button>
                </Form>
            </Container>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};
export default ContactPage;