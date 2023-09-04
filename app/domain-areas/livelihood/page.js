"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Domainareaheader from '@/app/components/domainareaheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Image from 'next/image';
import Link from 'next/link';

const livelihood = () => {
    return (
        <>
        <Domainareaheader />
        <Container style={{ marginTop: '80px', marginBottom: '100px' }}>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={6}  className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/health'>
                                <div className='iconbox'>
                                    <Image src={'/img/Health-menu-icon.png'} width={80} height={80} alt='Health Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/wellbeing-for-workforce'>
                                <div className='iconbox'>
                                    <Image src={'/img/Wellbeing-icon.png'} width={80} height={80} alt='Wellbeing Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Health</p></Col>
                        <Col md={6}><p>Welbeing for workforce</p></Col>
                    </Row>
                    <Row>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/livelihood'>
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
                                    <Image src={'/img/Livehood.png'} width={80} height={80} alt='Livelihood Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/domain-areas/climate-practice'>
                                <div className='iconbox'>
                                    <Image src={'/img/Climate-Action-Icon.png'} width={80} height={80} alt='Climate Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Livelihood</p></Col>
                        <Col md={6}><p>Climate</p></Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <div className='livelihoodbox'>
                        <h2 className='bg-transparent'>Livelihood</h2>
                    </div>
                    <div className='livhoodtext'>
                        <h4>Livelihood Practice</h4>
                        <p>
                        We work with vulnerable people who operate as small producers (farms, forests, allied industries, fisheries and MSMEs) to enhance their livelihoods. Our overall objective is to promote wealthy, resilient and responsible small producers at a national scale through inclusive entrepreneurship. Our approach to build wealth for small producers focuses on having effective market engagement and co-creating business solutions that benefit both businesses and small producers.
                        </p>
                        <h4>Our Beliefs:</h4>
                        <p>
                        Strengthening small producers and their livelihoods at a national scale lies at the heart of our mission and our work is built on a set of core beliefs and learnings:
                        </p>
                        <ul>
                            <li>We believe that the market and market-led supply chain development is beneficial for small producers given the volume and value of operations rather than production-based work</li>
                            <li>Commodity-specific and end-to-end operations are the best pathways to maximise returns</li>
                            <li>Small producers, on their own, find it difficult to access and thrive in the marketplace, given the scale, quality, investment, skills and expertise required. Therefore, a business service organisation partnership with entities like Vrutti and Fuzhio is critical for their betterment</li>
                        </ul>
                        <h4>Our Approaches:</h4>
                        <p>We ensure that our beliefs are turned into action by employing impactful approaches like:</p>
                        <ul>
                            <li>Ensuring small producers receive reasonable prices for the risk and effort they take in the value chain</li>
                            <li>Maximising the proportion of the consumer pie and reaching small producers</li>
                            <li>Calibrating Bundled services (market channel, capital and capacity building) and addressing their interdependencies to make it work for the entrepreneur</li>
                            <li>Working through collectives or clusters to bring power—collective agency—to deal with the ecosystem</li>
                            <li>Working with established market players and engaging with them as supply chain partners through co-investment is an effective way</li>
                        </ul>
                        <p>We use multiple levers to achieve our vision, such as:</p>
                        <ul>
                            <li>Building programmatic models and approaches</li>
                            <li>Providing technical and strategic support to organisations</li>
                            <li>Engaging and shaping investments and policies</li>
                            <li>Leveraging technology-enabled platforms and directly implementing programmes at scale</li>
                        </ul>
                        <h4>How Do We Work?</h4>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p>By building capacities for various actors (internal and external) based on market opportunities and institutional architecture</p>
                        </div>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p>By facilitating appropriate financial services throughout the value chain—incubation, production, processing, marketing and so on</p>
                        </div>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p>By forging business partnerships and orchestrating a range of solutions</p>
                        </div>
                        <div className='greenbox'>
                            <Image src={'/../img/Group-icon.png'} width={35} height={35} alt='Icon' />
                            <p>By providing technical support—value chain studies, landscape studies, feasibility studies, business planning, hand-holding and mentoring support, institutional diagnosis and assessments, quality assurance systems, technology products, etc.</p>
                        </div>
                        <p>To address the various levers of impact, we work with a number of organisations like:</p>
                        <div className='whitebox'>
                            <Image src={'/../img/Group-12143.svg'} width={25} height={25} alt='Icon' />
                            <p>Vrutti, which has a strong grassroot presence and domain expertise, works on the mobilisation and institutionalisation (institutions and clusters) of small producers in order to build their collective agency and supply chain readiness</p>
                        </div>
                        <div className='whitebox'>
                            <Image src={'/../img/Group-12143.svg'} width={25} height={25} alt='Icon' />
                            <p>Fuzhio which specialises in marketing, bringing market opportunities to entrepreneurs, and developing a market-ready supply chain</p>
                        </div>
                        <div className='whitebox'>
                            <Image src={'/../img/Group-12143.svg'} width={25} height={25} alt='Icon' />
                            <p>The GREEN Foundation, that has a strong expertise in biodiversity and conservation, works to promote sustainable, climate-friendly practices</p>
                        </div>
                        <p>We implemented a number of important initiatives, including:</p>
                        <div className='transparentbox'>
                            <Image src={'/../img/icon-1.png'} width={35} height={35} alt='Icon' style={{marginRight:'10px'}} />
                            <p>3-Fold &ndash; Working with Vrutti, the 3-Fold model aims at building wealth, resilience and responsibility for the smallholder farmers by working end-to-end on five major value chains. This model delivers six key services, customised and bundled, to the farmers. This programme has been working in six states with over 70,000 small and marginal farmers through 29 Farmer Producer Organisations (FPOs).</p>
                        </div>
                        <div className='transparentbox'>
                            <Image src={'/../img/icon-2.png'} width={35} height={35} alt='Icon' style={{marginRight:'10px'}} />
                            <p>Walmart Vriddhi Supplier Development Programme &ndash; Working with Walmart, the Vriddhi programme works with 50,000 Micro, Small and Medium Enterprises (MSMEs) in India to expand their domestic capabilities and participate in the global economy. It offers on-demand learning and personalised mentoring for MSMEs, as well as onboarding and incubation support on Flipkart and Walmart Marketplaces.</p>
                        </div>
                        <div className='transparentbox'>
                            <Image src={'/../img/icon-3.png'} width={35} height={35} alt='Icon' style={{marginRight:'10px'}}/>
                            <p>Working with SEWA Bharat, we are providing mentoring support for strengthening Bihar&apos;s only women-led Karnabhoomi Farmer Producer Company, set up in 2018 by 750 women shareholders across two districts: Munger and Bhagalpur.</p>
                        </div>
                        <h4>Investing for Impact</h4>
                        <p>We want to achieve impact at scale by co-investing with change agents to shape solutions and investments. Some of the work we have implemented in this regard is outlined below:</p>
                        <div className='greenbox'>
                        Inclusive Entrepreneurship Development Fund:
                        </div>
                        <div className='whitebox'>
                        With the ambition of offering flexible financial products customised for individual small producers, we are in the process of setting up a blended finance facility through the innovative use of philanthropic and debt capital. We will be leveraging guarantee capital to “de-risk” the investment for investors and NBFC partners.
                        </div>
                        <div className='greenbox'>
                        Establishing a Platform for Inclusive Entrepreneurship (PIE):
                        </div>
                        <div className='whitebox'>
                        PIE follows the societal platform principles and leverages open-source technology, knowledge resources and deep hand-holding support from pools of professionals, enabling enterprises to directly access national and global markets and reach scale.
                        </div>
                        <div className='greenbox'>
                        Partner for shaping policy, generating knowledge and evidence, and undertaking innovative work:
                        </div>
                        <div className='whitebox'>
                            <ul>
                                <li>National Rural Livelihood Mission (NRLM): Vrutti and CMS are undertaking an impact evaluation of the NRLM (along with 3ie and Stanford University) to determine the impact of the programme using rigorous econometric methods. The study covers about 27,500 households across 9 states in India, about 1,000 village organisations and over 4,000 Self-Help Groups. This is a one-of-a-kind ongoing national programme to be evaluated, and the methodology is being celebrated with high policy relevance and evidence uptake by the government. The Ministry of Rural Development is utilising the findings to course-correct the elements of the NRLP and as design inputs for the NRETP (National Rural Economic Transformation Project).</li>
                                <li>Cotton Connect: The Organic Cotton Farmer Training Programme is supporting 16,000 farmers across India to convert to an organic system of production that can be cost-saving and less damaging to the environment. CMS is undertaking an impact evaluation of the programme over 6 years, covering 8,000 farmers across 4 states, to determine whether;
                                    <br />
                                    <Row>
                                        <Col style={{border: '1px solid green', borderRadius: '5px', padding: '15px', marginRight: '10px'}}>Ensuring small producers receive reasonable prices for the risk and effort they take in the value chain</Col>
                                        <Col style={{border: '1px solid green', borderRadius: '5px', padding: '15px'}}>whether farmers can successfully adopt organic cotton production through an extension services programme</Col>
                                    </Row>
                                    <br />This unique evaluation attempts to determine the profit margins and returns from organic farming. It also provides sectoral inputs on topics including whether going organic for a farmer makes financial sense, if so, how to support it, and if not, how to make it profitable, despite the fact that doing so is both climate-friendly and need-of-the-hour.</li>
                                <li>Agri and Climate Smart Agriculture (CSA) Finance Market Assessment in India: The objective of this study is to increase access to agri-finance by building digital agricultural lending platforms with financial institutions (FIs) and agribusinesses and to increase adoption of CSA technologies in the relevant agri-sub-sectors and value chains, contributing to the larger vision of WBG‘s Climate Action Plan 2021–2025. This study is expected to also feed into the climate finance strategy of IFC, which aims to mainstream climate in the agriculture sector and in small and medium enterprises (SMEs). An interesting exploration of agri-finance, this study attempts to bridge the gap in financing for farmers and the other players in the value chain through private sector lending while keeping profitability, technology, gender, climate responsiveness and inclusion in mind. This landscape study will also develop products for the value chain sector, looking at it from both the demand (farmers/value chain-implementing partners) and supply (financial institutions) sides.</li>
                                <li>Economic Resilience model: COVID-19 has significantly affected the livelihoods of vulnerable communities. We are developing a scalable model for building economic resilience among vulnerable populations. Currently, piloting with 6,000 vulnerable households at three locations across the country with the Head Held High Foundation, Gopabandhu Seva Parishad (GSP), and Transform Rural India Foundation (TRIF) as partner organisations. The pathways designed to enhance resilience are conservation (cost cutting, risk reduction, etc.), diversification (of income and revenue streams), aggregation (helping the poor save and invest), and risk pooling (formal and informal insurance mechanisms).</li>
                            </ul>
                        </div>
                        <div className='greenbox'>Business Catalyst for MSMEs</div>
                        <div className='whitebox'>
                        MSMEs play a vital role in driving economic growth and development by creating jobs, fostering innovation and driving large-scale societal change. It is crucial to empower MSMEs with the necessary resources and guidance to facilitate their growth.<br />
The goal of Business Catalyst is to partner with MSMEs &ndash; to support them to grow and increase their business &ndash by addressing challenges faced by them and offering tailor made solutions. Through a process of one-on-one consultation, Business Catalyst seeks to ensure that an MSME achieves its potential by providing them specific solutions based on its business requirements. The range of solutions offered would be as diverse as assistance in capacity building to providing technical services. The services offered would help an MSME improve profitability and address barriers of growth. Know more.
                        </div>
                        <p>We work towards the holistic development of small producers and to pave the way to a brighter future. All of our work is geared towards achieving the UN SDGs, specifically Goals 1, 2, 5, 10, 11 and 17.</p>
                        <div className='imgbox'>
                            <Image src={'/../img/grp1.png'} width={400} height={120} alt='Group Icon' style={{marginRight:'15px'}} />
                            <Image src={'/../img/grp2.png'} width={400} height={120} alt='Group Icon' />
                        </div>
                        <div><p><b><br />To learn more about the work we do, contact us at</b></p></div>
                        <Link href={'mailto:contactus@catalists.org'} className='btn btn-success'>contacyus@ctalysts.org</Link>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default livelihood;