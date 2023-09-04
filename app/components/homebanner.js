import { Container, Row, Col } from 'react-bootstrap';
import '../globals.css';
import Image from 'next/image'
import Topmenu from './topmenu';
import Link from 'next/link';

const homebanner = () => {
    return (
      <>
      <Container fluid g-0 className="vh-100" style={{ margin:0, padding:0 }}>
        <Row className="d-flex flex-column">
          <Col className="transparent"> 
            <nav class="navbar bg-body-tertiary">
              <div class="container">
                <Link href={'/'} class="navbar-brand"><Image src='/img/CMS-logo-3.png' alt='CMS Logo' width={150} height={60} className="img-fluid"/></Link>
                <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>
                <Topmenu />
              </div>
            </nav>
          </Col>  
          <Col>
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                <Image src="/img/HomepageBanner1.jpeg" class="d-block w-100 h-100" alt="..." width={600} height={400} />
                  <div class="carousel-caption d-none d-md-block" style={{ textAlign:'left' }}>
                    <h2>Unlocking Value</h2>
                    <p>Catalysing Ideas, Individuals, Institutions and Investing in Equity</p>
                    <a className='btn btn-success' href="https://solvists.org">LEARN MORE</a>
                  </div>
                </div>
                <div class="carousel-item">
                <Image src="/img/HomepageBanner2.jpeg" class="d-block w-100 h-100" alt="..." width={200} height={200} />
                  <div class="carousel-caption d-none d-md-block" style={{ textAlign:'left' }}>
                    <h5>Unlocking Value</h5>
                    <p>An investment reimagined approach levaraging our assets, commitment and passion</p>
                    <a className='btn btn-success' href="https://solvists.org">LEARN MORE</a>
                  </div>
                </div>
                <div class="carousel-item">
                <Image src="/img/HomepageBanner3.jpeg" class="d-block w-100 h-100" alt="" width={200} height={200} />
                  <div class="carousel-caption d-none d-md-block" style={{ textAlign:'left' }}>
                    <h5>Unlocking Value</h5>
                    <p>Creating transformational impact that is driving sustainable and scalable equity</p>
                    <a className='btn btn-success' href="https://solvists.org">LEARN MORE</a>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </Col>
          <Col style={{ backgroundColor: '#00AC8D' }}>
            <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
              <h2 style={{ color: 'white' }}>We believe in an uncompromising investment in equity.</h2>
              <p style={{ color: 'white' }}>We seek and raise &apos;Committed Capital&apos; to invest in &apos;Meaningful Returns&apos;.</p>
            </Container>
          </Col>
        </Row>  
      </Container>
      </>
    );
};

export default homebanner;