"use client"
import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import BlogHeader from "../components/blogheader";
import Footer from "../components/footer";
import Copyright from "../components/copyright";

const CareerPage = () => {
    const bannerbg = '/img/Career-Banner.jpg';
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
        <BlogHeader url={bannerbg} headline={'Career'} />
        <Container style={{marginTop:'60px',marginBottom:'60px'}}>
            <p>We at CMS know that reaching scale, impact and sustainability of social initiatives requires the operation of an eco-system that integrates four elements–the capacities of the communities; the efficiency of the market; the reach, vision and effectiveness of social initiatives; and the power of the state. As catalysts, we work with our partners to harness the ecosystem strength for accelerated impact, maximisation of the social return of initiatives, and creation of shared value. In this journey, the staff members play an integral role and we are sure that your association with CMS will result in achievement of not just organisation goals but also see your dreams converted into reality. We also provide you with Economic Stability, Opportunity for Intellectual Growth and Learning, Opportunity to work in multiple domains and freedom of expression.</p>
            <h2 className="greenhead">CURRENT OPENINGS</h2>
            <Row>
                <Col md={4}>
                    <div className="careerborderbox">
                        <p><b>Marketing and Communications Lead</b></p>
                        <ul>
                            <li>Develop and promote branding initiatives consistent with corporate business goals and objectives</li>
                            <li>Creating and managing all marketing materials and collateral in line with brand direction</li>
                            <li>Implementing online marketing activities including social media, SEO/SEM, demand generation, lead generation, etc.</li>
                        </ul>
                        <Button className="careerbtn" href="https://catalyst.keka.com/careers/jobdetails/36543" target="_blank">LEARN MORE</Button>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="careerborderbox">
                        <p><b>LEAD, DESIGN FOR SUCCESS PORTFOLIO</b></p>
                        <ul>
                            <li>Orchestrate, facilitate and handhold design processes; internally and externally. delivery.</li>
                            <li>Set in place a learning system on design theory and practice.</li>
                            <li>Communicate effectively on the design process, success and challenges.</li>
                        </ul>
                        <Button className="careerbtn" href="https://catalyst.keka.com/careers/jobdetails/32947" target="_blank">LEARN MORE</Button>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="careerborderbox">
                        <p><b>COMMUNICATIONS AND DOCUMENTATION ASSOCIATE</b></p>
                        <p>Documentation:</p>
                        <ul>
                            <li>He/She will be primarily responsible for providing the first level of designing, formatting and editing support to all the SP documents, experience, reports and communication materials.</li>
                        </ul>
                        <Button className="careerbtn" href="https://catalyst.keka.com/careers/jobdetails/9668" target="_blank">LEARN MORE</Button>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <div className="careerborderbox">
                        <p><b>QUANTITATIVE RESEARCH ASSOCIATE</b></p>
                        <ul>
                            <li>Selecting appropriate research design for impact evaluations. Such design may include experimental, quasi-experimental, or other techniques. They may be short-, medium-, or long-term.</li>
                            <li>Designing questionnaires for primary data collection, incorporating feedback from…</li>
                        </ul>
                        <Button className="careerbtn" href="https://catalyst.keka.com/careers/jobdetails/9666" target="_blank">LEARN MORE</Button>
                    </div>
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    
                </Col>
            </Row>
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
                            <Form.Control type="text" placeholder="Contact Number" />
                        </Col>
                        <Col md={4}>
                            <Form.Control type="text" placeholder="Location" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={4}>
                        <Form.Select aria-label="Select a position">
                            <option>Select a position</option>
                            <option value="1">PMO Lead</option>
                            <option value="2">Team Lead, Livelihood Practice</option>
                            <option value="3">Associate Livelihood Practice</option>
                            <option value="4">Quantitative Research Associate</option>
                            <option value="5">Communication and Documentation Associate</option>
                        </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                        <Col md={4}>
                            <Form.Control type="file" placeholder="Choose file" />
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
export default CareerPage;