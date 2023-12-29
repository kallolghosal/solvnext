"use client"
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Copyright from "../components/copyright";

const Cmsblogs = () => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
        fetch('https://cms.org.in/wp-json/wp/v2/posts/7640')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])
 
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    const title = data.title.rendered;
    const cdata = data.content.rendered;

    return (
        <>
        <Container>
            <h1 dangerouslySetInnerHTML={{ __html: title}}></h1>
            <p dangerouslySetInnerHTML={{ __html: cdata}}></p>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};
export default Cmsblogs;