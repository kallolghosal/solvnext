"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../globals.css';
import Partnerheader from '../components/partnerheader';
import Footer from '../components/footer';
import Copyright from '../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const partners = () => {
    return (
        <>
        <Partnerheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <Row>
                <Col md={2}>
                    <Image src={'/img/logo-worldbank.png'} width={160} height={30} alt='The Worldbank Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/world-benchmarking.png'} width={160} height={50} alt='Worldbenchmarking Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/who-logo.jpg'} width={160} height={90} alt='WHO Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/wateraid-logo.png'} width={160} height={50} alt='Wateraid Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/walmartLogo.png'} width={160} height={70} alt='Walmart Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/vrutti-logo.png'} width={160} height={70} alt='Vrutti Logo' />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={2}>
                    <Image src={'/img/usaid-logo.png'} width={180} height={60} alt='USAID Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/greenwich-logo.png'} width={160} height={40} alt='Greenwich Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/chicago-logo.png'} width={160} height={60} alt='Chicago Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/unicef-logo.png'} width={160} height={90} alt='UNICEF Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/undp-logo.png'} width={60} height={120} alt='UNDP Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/gov-uk-logo.png'} width={160} height={160} alt='UK Logo' />
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={2}>
                    <Image src={'/img/tufts-logo.png'} width={170} height={100} alt='Tufts Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/traidcraft-logo.png'} width={190} height={30} alt='Traidcraft Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/swasti-logo.png'} width={170} height={90} alt='Swasti Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/sussex-logo.png'} width={160} height={130} alt='Sussex Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/stanford-logo.png'} width={160} height={50} alt='Stanford Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/societal-logo.png'} width={190} height={40} alt='Societal Logo' style={{ marginTop: '30px' }} />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Image src={'/img/skoll-logo.png'} width={130} height={50} alt='Skoll Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/logo-sfac.gif'} width={160} height={80} alt='SFAC Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/selco-logo.png'} width={110} height={120} alt='Selco Logo' />
                </Col>
                <Col md={2}>
                    <Image src={'/img/rural.png'} width={160} height={50} alt='Rural Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/rainfedindia-logo.png'} width={160} height={40} alt='Rainfed India Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/pratham-books.png'} width={130} height={70} alt='Pratham Books Logo' style={{ marginTop: '10px' }} />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Image src={'/img/pennsong-logo.jpg'} width={130} height={70} alt='Pennsong Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/alumni-logo.png'} width={160} height={70} alt='Alumni Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/oregonstate-logo.png'} width={180} height={60} alt='Oregonstate Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/nri-logo.png'} width={160} height={90} alt='NRI Logo' style={{ marginTop: '20px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/mohfw.png'} width={160} height={70} alt='MOHFW Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/mindtree-logo.png'} width={160} height={32} alt='Mindtree Logo' style={{ marginTop: '30px' }} />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Image src={'/img/mands-logo.png'} width={130} height={70} alt='Mands Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/LaudesF-logo.png'} width={160} height={50} alt='LaudesF Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/labour-logo.png'} width={180} height={54} alt='Labournet Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/irma-logo.png'} width={160} height={45} alt='IRMA Logo' style={{ marginTop: '20px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/iihs.jpg'} width={120} height={110} alt='IIHS Logo' style={{ marginTop: '10px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/IFC-logo.png'} width={160} height={42} alt='IFC Logo' style={{ marginTop: '30px' }} />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Image src={'/img/idh-logo.png'} width={160} height={75} alt='IDH Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/hivos-logo.jpg'} width={160} height={90} alt='Hivos Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/Heifer-logo.png'} width={180} height={40} alt='Heifer Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/Greenfoundation-logo.png'} width={160} height={160} alt='Greenfoundation Logo' style={{ marginTop: '20px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/gates.png'} width={120} height={120} alt='Gates Logo' style={{ marginTop: '10px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/gainhealth-logo.png'} width={160} height={60} alt='Gain Health Logo' style={{ marginTop: '30px' }} />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Image src={'/img/logo-fuzhio.png'} width={160} height={75} alt='Fuzhio Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/ford-logo.png'} width={160} height={26} alt='Fordfoundation Logo' style={{ marginTop: '50px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/Edelgive.jpg'} width={180} height={120} alt='Edelgive Logo' style={{ marginTop: '10px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/cotton-logo.png'} width={160} height={50} alt='Cotton Connect Logo' style={{ marginTop: '40px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/download.jpg'} width={120} height={120} alt='Download Logo' style={{ marginTop: '10px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/ciff-logo.png'} width={160} height={40} alt='Ciff Logo' style={{ marginTop: '30px' }} />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Image src={'/img/childfund.png'} width={160} height={30} alt='Childfund Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/ceew-logo.png'} width={160} height={76} alt='CCEW Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/Catalyst-logo.png'} width={180} height={110} alt='Catalyst Logo' style={{ marginTop: '10px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/bsr-logo.png'} width={160} height={64} alt='BSR Logo' style={{ marginTop: '40px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/bt-logo.png'} width={120} height={50} alt='Breakthrough Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/boston-logo.png'} width={160} height={60} alt='Boston Logo' style={{ marginTop: '30px' }} />
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <Image src={'/img/basix-logo.jpg'} width={160} height={156} alt='Basix Logo' style={{ marginTop: '10px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/azim-premji-logo.png'} width={160} height={76} alt='Azim Premji Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/aiaca-logo.png'} width={180} height={60} alt='Aiaca Logo' style={{ marginTop: '10px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/adb-logo.png'} width={160} height={34} alt='ADB Logo' style={{ marginTop: '40px' }} />
                </Col>
                <Col md={2}>
                    <Image src={'/img/ieimpact-logo.png'} width={120} height={34} alt='IEImpact Logo' style={{ marginTop: '30px' }} />
                </Col>
                <Col md={2}>
                    
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default partners;