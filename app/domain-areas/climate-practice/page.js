"use client"
import { Container, Row, Col } from 'react-bootstrap';
import '../../globals.css';
import Domainareaheader from '@/app/components/domainareaheader';
import Footer from '../../components/footer';
import Copyright from '../../components/copyright';
import Link from 'next/link';
import Image from 'next/image';

const climate = () => {
    return (
        <>
        <Domainareaheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
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
                                <div className='iconbox'>
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
                    <div className='climatebox'>
                        <h2 className='bg-transparent' style={{top:'380px'}}>Climate</h2>
                    </div>
                    <div className='livhoodtext' style={{marginTop:'-30px'}}>
                        <p>Climate change consequences and effects on sectors, communities, and natural habitats are interconnected and complex.</p>
                        <p>The Climate Practice at the Catalyst Group believes in a vision to build “A thriving world powered by resilient communities and carbon neutral systems”. Given the imperative to address systemic gaps in climate ecosystems and promote people-centric models at scale, the Catalyst Group intends to build on our expertise and relationships with vulnerable groups to strengthen climate action.</p>
                        <p>We work with vulnerable people who are disproportionately affected by climate change (small marginal farmers, marine fisherfolk, Nano, Micro, and MSMEs, street vendors, and indigenous people) to continue improving their resilience, or the capability to recover from or adapt to any climate-related disruption without compromising their lives, livelihoods, or long-term well-being.</p>
                        <div className='purplebox'>
                            Our Beliefs
                        </div>
                        <div className='whitetextbox'>
                            <p style={{fontStyle:'italic', fontWeight:'600', display:'block'}}>Resilience building, climate impact proofing vulnerable populations, and enhancing their lives and livelihoods at a global and national scale lies at the core of our vision and our approaches stem from our core beliefs and expertise;</p>
                            <ul>
                                <li>We believe that a holistic resilience-building approach is critical to eliminating the disproportionate impacts of climate change on the lives and livelihoods of vulnerable population</li>
                                <li>While transitioning to sustainable practices and solutions, if the transition isn&apos;t just carbon neutral or negative, the extent of vulnerability will affect the long-term well-being of communities</li>
                                <li>Vulnerable communities, on their own, find it difficult to access and thrive in the ecosystem, given the complexity of the issues, intersectionality of sectors and multiplicity of actors. A singular unifying platform could help facilitate collaboration, pool resources and promote global replication to accelerate climate outcomes and achievement of SDGs</li>
                                <li>To unlock the potential of the system, geography and systems; a place-based community-led solutions in synergy with sector-wide scalable solutions are critical, enhancing the adaptive capacities, reducing the vulnerabilities and promoting sustainable development</li>
                            </ul>
                        </div>
                        <div className='greanheaderbox'>
                            Our Approach
                        </div>
                        <div className='whitetextbox'>
                            <p style={{fontStyle:'italic', fontWeight:'600', display:'block'}}>We ensure that our beliefs are turned into action by employing impactful approaches like:</p>
                            <ul>
                                <li>Ensuring vulnerable populations build resilience enhancing their long-term well-being outcomes</li>
                                <li>Calibrating and mobilising critical resources to ensure a just and carbon-neutral/negative transition</li>
                                <li>Working through communities and institutions to bring power—collective agency—to deal with the ecosystem</li>
                                <li>Collaborating with impact-focused partners, who can rally around climate outcomes to achieve scale, impact and sustainability in a collective fashion</li>
                                <li>Evangelising champions, solutions and models across geographies and sectors accelerating our shared vision and goals</li>
                            </ul>
                            <p style={{fontStyle:'italic', fontWeight:'600', display:'block'}}>We use multiple levers to achieve our vision, such as:</p>
                            <ul>
                                <li>Building climate-smart innovations, models and solutions across geographies at scale</li>
                                <li>Empowering the adoption enablers by providing technical, strategic and innovative financing support to organisations and institutions</li>
                                <li>Activating the scale influencers through knowledge, evidence and policies</li>
                                <li>Collaborating and evangelising climate leadership through organisations, influencers etc.</li>
                            </ul>
                        </div>
                        <div className='greenboxlarge'>
                            <h4>How do we work?</h4>
                            <ol>
                                <li>Thought &amp; Transformation:
                                    <ul>
                                        <li>Design and develop incursive ideas, solutions and practices leading to resilience building and just transition to carbon-neutral/negative state</li>
                                        <li>Support innovation that can enable and expedite transformative climate actions</li>
                                        <li>Pursue the appropriate strategies and actions to move toward climate-resilient pathways and just transition to carbon-neutral/negative solutions</li>
                                    </ul>
                                </li>
                                <li>Design &amp; Demonstrations
                                    <ul>
                                        <li>Facilitate the design and scale-up of sustainable solutions</li>
                                        <li>Mobilising finance and innovative financing mechanisms for generating models, solutions and practices that can work across geographies at scale</li>
                                    </ul>
                                </li>
                                <li>Collaborations &amp; other Alliances
                                    <ul>
                                        <li>Engage with key actors and stakeholders to collaboratively champion the change</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <p style={{ fontStyle: 'italic', fontWeight:'bold' }}>To address the various levers of impact, the Catalyst Group works with nodal organisations who have the relevant community integration and work at the succinct intersections,</p>
                        <p><Link href={'https://greenfoundatio.in'} style={{color:'#7F3F97', fontStyle:'italic',textDecoration:'none'}}>GREEN Foundation</Link> works at the intersection of food, energy and health systems using regenerative models that integrate agricultural practices, sustainable land use and rural communities. Its mission is to ensure sustainable food production and livelihoods for rural communities through models that bring together the &apos;society-science-market&apos; led by women and their collectives. GREEN Foundation, works on</p>
                        <Image src={'/../img/climate-scale.png'} width={200} height={160} alt='Climate Scale' className='w-100' style={{height:'auto',marginBottom:'20px'}}/>
                        <p><Link href={'https://swasti.org'} style={{color:'#7F3F97', fontStyle:'italic',textDecoration:'none'}}>Swasti</Link> as the &apos;health catalyst&apos; of the group, focuses on people-centric health and well-being with vulnerable communities as key participants. Swasti champions the &apos;One Health&apos; approach that recognizes that the health of people is interconnected with people, animals, plants, and our environment. The effects of climate change and human health are deeply intertwined; with Swasti working intricately at the intersection.</p>
                        <p><Link href={'https://fuzhio.org'} style={{color:'#7F3F97', fontStyle:'italic',textDecoration:'none'}}>Fuzhio</Link> specialises in enhancing opportunities for enterprises and the supply chain across various sectors. Fuzhio&apos;s vision is to build thriving and resilient businesses and thereby Fuzhio specialises in promoting Shoonya (Circularity) and just transition (energy, water, waste and natural resources) to a climate neutral/negative state.</p>
                        <p><Link href={'https://vruttiimpactcatalysts.org/'} style={{color:'#7F3F97', fontStyle:'italic',textDecoration:'none'}}>Vrutti</Link> has a strong grassroots presence and works closely in the livelihoods sector, enhancing people&apos;s well-being through knowledge, innovations and transformative actions. Mobilising and institutionalising (institutions and clusters) small producers in order to build their collective agency and supply chain sustainability. Vrutti, strongly believes that &apos;Sustainable Livelihood Approaches&apos; can be a great lever to address poverty, marginalization and inclusive development</p>
                        <p style={{fontStyle:'italic', fontWeight:'bold'}}>We implement a number of important initiatives, including</p>
                        <div className='whitebox' style={{padding:'20px'}}>The Regenerative Communities Model implemented by the GREEN Foundation adopts a comprehensive framework and a collaborative action model bringing in regenerative practices, livelihoods, health, and market. The women farmers’ owned and governed Janadhanya Federation and Janadhanya Producer Company anchor and drive this initiative. GREEN Foundation brings its expertise and passion related to agroecology, biodiversity, and women farmers’ empowerment, and orchestrates this action on the ground. This model ensures that every family has access to a set of support and services to undertake crop production, allied activities, and any non-farm enterprises, and address family-specific health and nutrition. The practices that are promoted are planned in such a way that there is biodiversity and resource regeneration. The work so far and the base of communities is giving enough confidence as a step forward in partnership with key enablers with this framework across the GREEN Foundation locations. Apart from the holistic model of Regen Communities, this initiative has developed specific components which can be embedded in other programmes and scaled individually – Regenerative Agri Practices (RAP), BIoinput Resource Centre (BRC), Community Seed Banks (CSB), Value-addition Micro Businesses such as Cold Press Oil, Millet Processing Units, etc.</div>
                        <div className='whitebox' style={{padding:'20px'}}>Shoonya (The integrated circularity initiative) front-ended by Fuzhio, works on making markets work for people and the planet. The objective of the initiative is to help companies accelerate to Net Zero and ESG goals through new building blocks to reshape the value chain and in the process create more value and share fairly. Businesses engage in improving their ESG outcomes and enhancing their transparency and measurement while improving on the management of energy, water and waste costs by implementing a range of solutions, which are integrated and financed. The overall approach reducing their carbon footprint and offset through tie-ups for offset activities (tree plantation, protecting soil and other innovative sequestering methods). Businesses see assured monetary, and social returns and their brand image is enhanced and celebrated through gamification and promotion.</div>
                        <div className='whitebox' style={{padding:'20px'}}>Green Health Alliance (GHA) is an action-oriented alliance of diverse stakeholders to accelerate and institutionalise green health solutions for climate mitigation, adaptation and building resilience in the health ecosystem in a circular fashion. GHA works at the intersection of health and climate, moving the needle on mitigation mechanisms and adaptive capacity to prevent adverse health outcomes and build resilience both at the level of vulnerable individuals as well as health systems. While there are quite a few standalone solutions and service providers, implementing organisations active in the space, GHA is uniquely positioned to bridge the critical gap existing for a holistic convening platform that acts as a cohesive force to forge benchmarks of excellence out of the varied strands of effort existing in this domain. GHA priority intervention areas focus on the public and private health care institutional green transition and improve their resilience through carbon neutral transition, lowering institution-level GHG emissions, and sustainable water, waste and energy management. The Health sector (Healthcare & Pharma industry) is among the most carbon-intensive service sectors in the industrialised world. India is the seventh-largest contributor to the global health sector’s climate footprint.</div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};

export default climate;