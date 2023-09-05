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
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
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
                        <div className='whitebox' style={{padding:'20px'}}>The Regenerative Communities Model implemented by the GREEN Foundation adopts a comprehensive framework and a collaborative action model bringing in regenerative practices, livelihoods, health, and market. The women farmers&apos; owned and governed Janadhanya Federation and Janadhanya Producer Company anchor and drive this initiative. GREEN Foundation brings its expertise and passion related to agroecology, biodiversity, and women farmers&apos; empowerment, and orchestrates this action on the ground. This model ensures that every family has access to a set of support and services to undertake crop production, allied activities, and any non-farm enterprises, and address family-specific health and nutrition. The practices that are promoted are planned in such a way that there is biodiversity and resource regeneration. The work so far and the base of communities is giving enough confidence as a step forward in partnership with key enablers with this framework across the GREEN Foundation locations. Apart from the holistic model of Regen Communities, this initiative has developed specific components which can be embedded in other programmes and scaled individually &ndash; Regenerative Agri Practices (RAP), BIoinput Resource Centre (BRC), Community Seed Banks (CSB), Value-addition Micro Businesses such as Cold Press Oil, Millet Processing Units, etc.</div>
                        <div className='whitebox' style={{padding:'20px'}}>Shoonya (The integrated circularity initiative) front-ended by Fuzhio, works on making markets work for people and the planet. The objective of the initiative is to help companies accelerate to Net Zero and ESG goals through new building blocks to reshape the value chain and in the process create more value and share fairly. Businesses engage in improving their ESG outcomes and enhancing their transparency and measurement while improving on the management of energy, water and waste costs by implementing a range of solutions, which are integrated and financed. The overall approach reducing their carbon footprint and offset through tie-ups for offset activities (tree plantation, protecting soil and other innovative sequestering methods). Businesses see assured monetary, and social returns and their brand image is enhanced and celebrated through gamification and promotion.</div>
                        <div className='whitebox' style={{padding:'20px'}}>Green Health Alliance (GHA) is an action-oriented alliance of diverse stakeholders to accelerate and institutionalise green health solutions for climate mitigation, adaptation and building resilience in the health ecosystem in a circular fashion. GHA works at the intersection of health and climate, moving the needle on mitigation mechanisms and adaptive capacity to prevent adverse health outcomes and build resilience both at the level of vulnerable individuals as well as health systems. While there are quite a few standalone solutions and service providers, implementing organisations active in the space, GHA is uniquely positioned to bridge the critical gap existing for a holistic convening platform that acts as a cohesive force to forge benchmarks of excellence out of the varied strands of effort existing in this domain. GHA priority intervention areas focus on the public and private health care institutional green transition and improve their resilience through carbon neutral transition, lowering institution-level GHG emissions, and sustainable water, waste and energy management. The Health sector (Healthcare & Pharma industry) is among the most carbon-intensive service sectors in the industrialised world. India is the seventh-largest contributor to the global health sector&apos;s climate footprint.</div>
                        <div className='greenborderbox'>
                            <div className='greenbox'>
                                Investing for Impact
                            </div>
                            <p style={{color:'#7F3F97',fontWeight:'600'}}>We want to achieve impact at scale by co-investing with change agents to shape solutions and investments. Some of the work we have implemented in this regard is outlined below:</p>
                            <p>Our ambition as an organisation is to contribute to impact, scale and sustainability. We achieve this by partnering with large scale/deep change-makers and investors, enabling them to succeed through our capabilities of evaluation partnerships.</p>
                            <div className='greenbox' style={{marginRight:'15px', marginLeft:'15px'}}>
                                CIFF Collaboration
                            </div>
                            <p>Deepening our work with CIFF is a strategic proposition for us. CIFF has been a pivotal partnership in nurturing our degree of association with the aforementioned SDGs since 2019. CIFF India&apos;s climate investments are tapping into opportunities to shape India’s ambitions and activities around clean energy and climate change mitigation, by facilitating reform, transitions, and innovations that can help achieve low-carbon cities. In this collaboration, our goal is to ensure the measurability of progress across sectors of climate, geographic scales, and time and to be able to determine how successful the interventions are in reducing climate vulnerability and in keeping development on course. CMS strongly invested in enhancing M&E capacity and systems at the grantee level. And improving their ability to ensure progress on climate change toward national development goals</p>
                            <p>Working with CIFF India&apos;s Power, Clean Air and Cooling portfolio partners, CMS co-creates and deploys Theories of Change, Cascade to Impact, Results Frameworks, Partner and Programme Level Management Information Systems (MIS) and Interactive, Tech-enabled Dashboards. facilitate indicator design workshops with sectoral players. Conducted gating review and uncovered insights for investment course correction.</p>
                            <div className='greenbox' style={{marginRight:'15px', marginLeft:'15px'}}>
                                Agri and Climate Smart Agriculture (CSA) Finance Market Assessment in India
                            </div>
                            <p>The objective of this study is to increase access to agri-finance by building digital agricultural lending platforms with financial institutions (FIs) and agribusinesses and to increase adoption of CSA technologies in the relevant agri-sub-sectors and value chains, contributing to the larger vision of WBG‘s Climate Action Plan 2021–2025. This study is expected to also feed into the climate finance strategy of the IFC, which aims to mainstream climate in the agriculture sector and in small and medium enterprises (SMEs). An interesting exploration of agri-finance, this study attempts to bridge the gap in financing for farmers and the other players in the value chain through private-sector lending while keeping profitability, technology, gender, climate responsiveness and inclusion in mind. This landscape study will also develop products for the value chain sector, looking at it from both the demand (farmers/value chain-implementing partners) and supply (financial institutions) sides.</p>
                            <div className='greenbox' style={{marginRight:'15px', marginLeft:'15px'}}>
                                Selco Foundation Collaboration
                            </div>
                            <p>On the solar electrification project (2022-2023) to evaluate the impact of decentralised electricity of last mile public health facilities like Sub-centres (SC), Health & Wellness centres (H&WC) and Public health centres (PHC) in the states of Karnataka and Meghalaya. Currently, the baseline for the study has been completed. The primary scope of the study is to assess the extent to which the DRE programme has impacted the performance of public health facilities and examine factors contributing to the sustainability and institutionalisation of the programme.</p>
                            <div className='greenbox' style={{marginRight:'15px', marginLeft:'15px'}}>
                                Impact assessment from donors and funding partners to inform CEEW&apos;s 20-year vision and strategic plan
                            </div>
                            <p>As CEEW steps into its new decade, a deeper impact assessment from donors and funding partners is warranted to inform CEEW’s 20-year vision and strategic plan. This will not be a traditional impact assessment, but this provided a detailed look at where the organisation is today, and the trajectories ahead of it, to arrive at the following deliverables tailored for CEEW, mapping CEEW’s research, advisory and outreach, analysing perceptions around CEEW’s growth being organic, planned or strategic; areas, CEEW’s approach towards data and strategic outreach, its commitment to transparency and its position in the public mindset and analysing how donors perceive CEEW’s governance as well as the risks that CEEW must be resilient against, whether emanating from internal processes, external environment or strategic directions. Benchmarking CEEW against domestic and international competition was critical to consolidate the discussions and analysis and seek to provide insight into actions to strengthen the institution so that CEEW can take over the short- to medium-term towards its journey to Vision 2030.</p>
                            <div className='greenbox' style={{marginRight:'15px', marginLeft:'15px'}}>
                                Independent review of CAFs (Clean Air Fund&apos;s) India Portfolio
                            </div>
                            <p>A global philanthropic initiative whose mission is to use philanthropic grants to catalyse reduction in air pollution, and thereby improve people’s health and simultaneously mitigate climate change. CMS in collaboration with Agulhas focused on driving policy-level changes in the air quality space through the levers of data, demand, delivery and field-building. The study evaluated the progress of CAF grantees delivering the approved strategy, supporting the acceleration of NCAP implementation in India, contributing towards catalysing government and business action for clean air, creating a demand for clean air action from vulnerable groups and the general public and strengthening the air quality field in India. In extension, the relevance, effectiveness and replication potential of the approaches adopted was reviewed, and the study recommendations at a strategic level and operational level along with a new TOC for the CAF India portfolio is provided to the CAF management.</p>
                        </div>
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