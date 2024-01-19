"use client"
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import BlogHeader from "../components/blogheader";
import Link from "next/link";
import Image from "next/image";
import configData from '../../config.json';

const Cmsblogs = () => {

    const [data, setData] = useState([]);
    const [newCat, setNewCat] = useState();
    const [loading, setLoading] = useState(true);
    const now = new Date();

    const postFetch = async () => {
        if (newCat === undefined) {
            const url = `${configData.SERVER_URL}posts?_embed`
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } else {
            const url = `${configData.SERVER_URL}posts?_embed&categories=${newCat}`
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
    };

    const fetchData = async () => {
        const postsUrl = `${configData.SERVER_URL}categories?per_page=30`;
        try {
            const response = await fetch(postsUrl);
            const data = await response.json();
            setCategory(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        postFetch();
        fetchData();
        setLoading(false);
    }, []);
    const imgbg = '/img/CMS-Blog.jpg';

    return (
        <>
        <BlogHeader url={imgbg} headline={'CMS Blog'} />
        <Container style={{marginTop:'80px'}}>
            <Row>
                {data.map((item) => (
                    <Col key={item.id} md={4}>
                        <Link href={`/${item.slug}`}>
                            <div className="card blog_card" >
                                <Image src={item['_embedded']['wp:featuredmedia']['0']['source_url']} width={120} height={120} style={{width:'auto',height:'200px'}} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.rendered}</h5>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ))}
                <h2>All lists</h2>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};
export default Cmsblogs;