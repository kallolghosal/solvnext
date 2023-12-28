"use client"
import { Col, Container, Row } from "react-bootstrap";
import Socialimpactheader from "../components/socialimpactheader";
import Image from "next/image";
import Footer from '../components/footer';
import Copyright from '../components/copyright';

const catalystsocialimpact = () => {
    return (
        <>
        <Socialimpactheader />
        <Container>
            <h2 style={{textAlign:'center',marginTop:'30px'}}>About CSI</h2>
           <Row>
                <Col md={4}>
                    <Image src={'/img/catalysing2.png'} style={{width:'100%',height:'auto'}} width={300} height={240} alt="" />
                </Col>
                <Col md={8}>
                    <p>Catalysing Social Impact is a forum to solve complex societal problems. Many societal problems are either slow to change or have solutions that have not gone to scale. We believe solutions can be found if problems are not narrowly framed, boxed into sectoral thinking and limited by the known.</p>
                    <p>A mix of communities and professionals, the young and experienced, and a multi-disciplinary team of doers, thinkers and investors should dive deep and #ShapeTheFuture. The forum uses a Solution Circle approach, which is inspired by methods like Socrates Circle, Community of Practise, Hackathon and Design Thinking. Solution Circles is a self-organised group of people who hold a common interest, are committed to collective learning, collaboration, advancing knowledge and practice.</p>
                    <p>The results of the forum will be solutions in practice. This will be achieved through pilot, experiment, framework, whitepaper, etc., as decided by the Solution Circles. All outputs will be widely available through Creative Commons.</p>
                </Col>
           </Row>
           <p>The forum will focus largely on India and its societal problems, however the participants (and benefit) will not be limited to India.</p>
           <p>Principles at the core of the solution circles:</p>
           <Row>
                <Col md={6}>
                    <ul>
                        <li>Social impact driven</li>
                        <li>Vulnerable community centric</li>
                        <li>Self-organising and managing</li>
                        <li>Build on what exists</li>
                    </ul>
                </Col>
                <Col md={6}>
                    <ul>
                        <li>Respect all approaches</li>
                        <li>Non-dogmatic</li>
                        <li>Sharing knowledge freely</li>
                        <li>Voluntary</li>
                    </ul>
                </Col>
           </Row>
           <p>The COVID-19 situation provided the ideal challenge for us to build on this approach, thus giving birth to the #COVIDActionCollab. The collaborative aims to rapidly and cost-effectively prevent new infections, diagnose early, treat appropriately and care and mitigate any other impacts. Solution circles/impact canvas is one of the 3 key strategies of the collaborative.</p>
           <br />
           <Row>
                <Col md={1}>
                    <Image src={'/img/catalysing-icon1.png'} width={80} height={80} alt="" />
                </Col>
                <Col md={11}>
                    <h4>INNOVATIVE FINANCE</h4>
                    <p>New innovative financial instruments (like DIBs) have focused on easy-to-measure outcomes. Societal problems are complex and some key sectors are not attracting sufficient investments (e.g. child marriage, disability). How do these sectors set themselves up for innovative financing? The sub-sector is evolving and needs coordination and market making. How will that happen?</p>
                </Col>
           </Row>
           <Row>
                <Col md={1}>
                    <Image src={'/img/catalysing-icon2.png'} width={80} height={80} alt="" />
                </Col>
                <Col md={11}>
                    <h4>TECHTONIC</h4>
                    <p>Technology is a great enabler for social impact. However, Impact Organizations (IOs) and Governments typically do not have a tech strategy and then are exposed to an exponential number of solutions looking for problems. AI/ML/Blockchain – what is the hype vs realised vs unrealised potential? How can IOs use them? How can field-focused interventions gain from the various technologies available?</p>
                </Col>
           </Row>
           <Row>
                <Col md={1}>
                    <Image src={'/img/catalysing-icon3.png'} width={80} height={80} alt="" />
                </Col>
                <Col md={11}>
                    <h4>SOCIAL BEHAVIOUR CHANGE</h4>
                    <p>Behaviour Change is explained by diverse disciplines, theories, models and frameworks. It is practiced across sectors, such as marketing, advertisement and social programmes. How can theories and experiences combine to understand and look for designs that address problems such as improving access to ANC services, improving hand washing practices among health care practitioners and understanding the changing norms of sexuality to prevent early marriage or teen pregnancies.</p>
                </Col>
           </Row>
           <Row>
                <Col md={1}>
                    <Image src={'/img/catalysing-icon4.png'} width={80} height={80} alt="" />
                </Col>
                <Col md={11}>
                    <h4>TRANSFORM FOR SCALE</h4>
                    <p>Inequities and high marginalisation still exist. Solutions, despite many, are not keeping pace with the growing challenges to the social sector. There is a need to look at ‘what works at scale’. Some organisations work on scaling direct service models, whereas others work to change the wider system and address the root causes that perpetuate the problem. The threads emerging are: How do we deliver ‘impact at scale’ by unlocking new potential? How does an organisation transform itself to scale?</p>
                </Col>
           </Row>
           <p>For more information, <a href="mailto:contacyus@catalysts.org">write to us</a>.</p>
        </Container>
        <Footer />
        <Copyright />
        </>
        
    );
};

export default catalystsocialimpact;