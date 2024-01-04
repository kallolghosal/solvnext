"use client"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogHeader from "../components/blogheader";
import Footer from "../components/footer";
import Copyright from "../components/copyright";

const InTheMedia = () => {
    const url = '/img/Banner-In-the-Media.jpg';
    return (
        <>
        <BlogHeader url={url} headline={'In The Media'} />
        <Container style={{marginTop:'60px',marginBottom:'60px'}}>
            <Row>
                <Col md={4}></Col>
                <Col md={4}></Col>
                <Col md={4}></Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};
export default InTheMedia;