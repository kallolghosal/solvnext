import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Topmenu from "./topmenu";

const BlogHeader = ({url}) => {
    return (
        <Container fluid className="blogheaderbg" style={{backgroundImage:'url('+url+')'}}>
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
                    <Container style={{ paddingTop: '200px', paddingBottom:'90px' }}>
                        <h2 style={{color:'#fff'}}>CMS Blog</h2>
                    </Container>
                </Col>
                <Col style={{ backgroundColor: '#00AC8D' }}>
                    <Container style={{ color: 'white', marginTop: '20px', height:'30px' }}>
                        <p></p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
export default BlogHeader;