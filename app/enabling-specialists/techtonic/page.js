"use client"
import { Container,Row,Col, Button } from "react-bootstrap";
import Footer from "@/app/components/footer";
import Copyright from "@/app/components/copyright";
import Enablingheader from "@/app/components/enablingheader";
import Link from "next/link";
import Image from "next/image";

const techtonic = () => {
    return (
        <>
        <Enablingheader />
        <Container fluid style={{ marginTop: '80px', marginBottom: '100px', paddingLeft: '80px', paddingRight: '80px' }}>
            <p>Working closely with partners, we invest with a rare mix of resources, deep expertise and on-ground experience, shaping social equity, working across SDG goals.</p>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={6}  className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/techtonic'>
                                <div className='iconbox' style={{backgroundColor: '#027963'}}>
                                    <Image src={'/img/Health-menu-icon.png'} width={80} height={80} alt='Health Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/education'>
                                <div className='iconbox'>
                                    <Image src={'/img/Wellbeing-icon.png'} width={80} height={80} alt='Wellbeing Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Techtonic</p></Col>
                        <Col md={6}><p>Education</p></Col>
                    </Row>
                    <Row>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/behaviour-science'>
                                <div className='iconbox'>
                                    <Image src={'/img/Livehood.png'} width={80} height={80} alt='Livelihood Icon' />
                                </div>
                            </Link>
                        </Col>
                        <Col md={6} className='d-flex align-items-center justify-content-center'>
                            <Link href='/enabling-specialists/gender-equity'>
                                <div className='iconbox'>
                                    <Image src={'/img/Climate-Action-Icon.png'} width={80} height={80} alt='Climate Icon' />
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{textAlign:'center'}}>
                        <Col md={6}><p>Behaviour Science</p></Col>
                        <Col md={6}><p>Gender &amp; Equity</p></Col>
                    </Row>
                </Col>
                <Col md={9}>
                    <div className='designbox11'>
                        <h2>TechTonic</h2>
                    </div>
                    <div className='livhoodtext'>
                        <p>TechTonic envisions technology as a force multiplier, problem solver, paradigm changer, and significant enabler of social impact. As a unit, our prime intention is to design, implement, or apply technology solutions in a way that works for all, especially the people from marginalised communities. Our expertise stems from our significant on-field experience, a multi-disciplinary team, and partnerships. TechTonic is product and company-agnostic, which allows it to seamlessly integrate with whatever is effective and functional.</p>
                        <p>TechTonic operates as the dedicated technology strategy division. The pivotal function fulfilled by TechTonic revolves around the creation and development of:</p>
                        <ul>
                            <li>Technology architectures</li>
                            <li>Implementation strategies for impact programmes at scale</li>
                        </ul>
                        <div className="whitebox11">
                            <h4 style={{color:'#774295'}}>Our Approach</h4>
                            <p>TechTonic uses a Business Process Improvement approach to increase the overall efficiency and effectiveness of the programme through the use of technology. Moving ahead, TechTonic will adopt a course of action focused on the following approaches:</p>
                            <ul>
                                <li>TechTonic aims to work with partners to strengthen platforms that help improve the discovery of technology solutions within the sector. It ensures that all organisations have the resources and support they need to adopt solutions that improve the scale, impact, and sustainability of their respective programmes.</li>
                                <li>TechTonic intends to work with a network of partners to bridge the digital divide on the ground and ensure that critical digitally delivered services reach the vulnerable population.</li>
                            </ul>
                            <h4 style={{color:'#774295'}}>Our Functions</h4>
                            <ul>
                                <li>To implement its strategies and blueprints, TechTonic works with a range of partners with tech development capabilities.</li>
                                <li>Internally, TechTonic also plays the role of a testing lab that assesses the capabilities of various solutions for the sector.</li>
                            </ul>
                        </div>
                        <h4 style={{color:'#774295'}}>Our Work</h4>
                        <p>TechTonic has worked on a diverse set of projects and programmes and has used technology as a lever to enable smooth operations and capture impact effectively.</p>
                        <p><b>Community Action Collab (previously #COVIDActionCollab)</b></p>
                        <p>Community Action Collab (CAC) is a spring-to-action humanitarian emergency platform that builds the resilience of Vulnerable People (VP) and their institutions. Started as #COVIDActionCollab, the group has successfully been able to demonstrate its capabilities by reaching 25 million services and 15 million VPs as part of the COVID response.</p>
                        <p>The TechTonic team worked with the technology partners of the collaborative to create a strong operational backbone that facilitated the provision as well as monitoring of the above-mentioned 25 million services. Most of the implementation operations were operationalised through an in-house-developed application called DICEflow, through which we were able to map out the number of services delivered to each person all across the country.</p>
                        <p><b>Social Protection</b></p>
                        <p>The Social Protection Programme is a Catalyst Group initiative that has been ongoing since 2019. It ensures that central and state government benefits reach eligible beneficiaries at the community level. The benefits are delivered through a help desk-facilitated model led by field-level workers.</p>
                        <p>TechTonic has helped create a model for operationalising the facilitation of social protection benefits to vulnerable populations on its in-house application, DICEflow. The solution designed for the social protection team involves streamlined workflows to ensure an up-to-date database of government schemes, assess eligibility for community members, verify document availability, and facilitate the scheme availing process. The solution allows geo-location tracking of where each community member is in their scheme application process. It also helps understand and generate insights into why certain community members were unable to avail themselves of a certain scheme.</p>
                        <p><b>Manyata: A Digitally Enabled Quality Improvement and Accreditation Journey for Small and Medium-Sized Private Nursing Homes</b></p>
                        <p>Manyata is a programme led by the Federation of Obstetric and Gynaecological Societies of India (FOGSI) and a global initiative for improving maternal health standards by a globally recognised pharmaceutical company. This programme spans 22 states, has been ongoing since 2013, and is now in its fourth phase.</p>
                        <p>For Manyata, TechTonic has been involved in creating the technology strategy and architecture of the project. The programme has envisioned a technology stack that allows various technology solutions to work together towards ensuring seamless delivery of the programme on the ground and an efficient data flow mechanism that enables strong governance.</p>
                        <p>We followed the below process towards making this happen:</p>
                        <div className="greenbox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.14" height="28.14" viewBox="0 0 28.14 28.14"><g id="Group_12192" data-name="Group 12192" transform="translate(0)"><path id="Path_343" data-name="Path 343" d="M11.918,16.527l4.2,4.2,5.944-5.943" transform="translate(-2.92 -3.687)" fill="none" stroke="#fff" stroke-width="2"></path><g id="Group_12152" data-name="Group 12152" transform="translate(1 1)"><g id="Group_12154" data-name="Group 12154" transform="translate(0 0)"><circle id="Ellipse_1" data-name="Ellipse 1" cx="13.07" cy="13.07" r="13.07" fill="none" stroke="#fff" stroke-width="2"></circle></g></g></g></svg>
                            <p>Conduct a business process mapping and technology assessment of the entire Manyata system towards building an understanding of what is working, what is not working, and what it will take to make things work.</p>
                        </div>
                        <div className="greenbox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.14" height="28.14" viewBox="0 0 28.14 28.14"><g id="Group_12192" data-name="Group 12192" transform="translate(0)"><path id="Path_343" data-name="Path 343" d="M11.918,16.527l4.2,4.2,5.944-5.943" transform="translate(-2.92 -3.687)" fill="none" stroke="#fff" stroke-width="2"></path><g id="Group_12152" data-name="Group 12152" transform="translate(1 1)"><g id="Group_12154" data-name="Group 12154" transform="translate(0 0)"><circle id="Ellipse_1" data-name="Ellipse 1" cx="13.07" cy="13.07" r="13.07" fill="none" stroke="#fff" stroke-width="2"></circle></g></g></g></svg>
                            <p>Create the technology architecture that would help the programme sustain itself at scale.</p>
                        </div>
                        <div className="greenbox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.14" height="28.14" viewBox="0 0 28.14 28.14"><g id="Group_12192" data-name="Group 12192" transform="translate(0)"><path id="Path_343" data-name="Path 343" d="M11.918,16.527l4.2,4.2,5.944-5.943" transform="translate(-2.92 -3.687)" fill="none" stroke="#fff" stroke-width="2"></path><g id="Group_12152" data-name="Group 12152" transform="translate(1 1)"><g id="Group_12154" data-name="Group 12154" transform="translate(0 0)"><circle id="Ellipse_1" data-name="Ellipse 1" cx="13.07" cy="13.07" r="13.07" fill="none" stroke="#fff" stroke-width="2"></circle></g></g></g></svg>
                            <p>Create the technology strategy for taking the new Manyata technology stack to at least 1,000 Small and Medium-Sized private nursing homes.</p>
                        </div>
                        <div className="greenbox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.14" height="28.14" viewBox="0 0 28.14 28.14"><g id="Group_12192" data-name="Group 12192" transform="translate(0)"><path id="Path_343" data-name="Path 343" d="M11.918,16.527l4.2,4.2,5.944-5.943" transform="translate(-2.92 -3.687)" fill="none" stroke="#fff" stroke-width="2"></path><g id="Group_12152" data-name="Group 12152" transform="translate(1 1)"><g id="Group_12154" data-name="Group 12154" transform="translate(0 0)"><circle id="Ellipse_1" data-name="Ellipse 1" cx="13.07" cy="13.07" r="13.07" fill="none" stroke="#fff" stroke-width="2"></circle></g></g></g></svg>
                            <p>Partner with various technology organisations to ensure that the intended design of the technology stack gets deployed. The Ecosystem partners involved in the project have been Dhwani Rural Information Systems, PharmAccess Foundation, Maternity Foundation, Aastrika, Together For Her (Avegen), and Nivi Inc.</p>
                        </div>
                        <div className="greenbox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.14" height="28.14" viewBox="0 0 28.14 28.14"><g id="Group_12192" data-name="Group 12192" transform="translate(0)"><path id="Path_343" data-name="Path 343" d="M11.918,16.527l4.2,4.2,5.944-5.943" transform="translate(-2.92 -3.687)" fill="none" stroke="#fff" stroke-width="2"></path><g id="Group_12152" data-name="Group 12152" transform="translate(1 1)"><g id="Group_12154" data-name="Group 12154" transform="translate(0 0)"><circle id="Ellipse_1" data-name="Ellipse 1" cx="13.07" cy="13.07" r="13.07" fill="none" stroke="#fff" stroke-width="2"></circle></g></g></g></svg>
                            <p>Ensuring long-term sustainability by creating a modular architecture reduces the dependency on one system. It ensures that the strengths and reach of various partners working in the ecosystem are leveraged rather than sabotaged.</p>
                        </div>
                        <h4 style={{color:'#774295'}}>DICEflow</h4>
                        <p>In 2018, we conceptualised and developed an Outreach-as-a-solution (OaaS) called DICEflow, a mobile and web solution that enables continuous and deeper community engagement. DICEflow has been instrumental in delivering key wellness and social protection-based benefits to the poor in Swasti’s Invest4Wellness (i4we) programme. Currently, DICEflow is also being used to facilitate vaccine eligibility and registration, screening of non-communicable diseases, and access to social protection schemes under the Community Action Collab initiative.</p>
                        <p><b>Please reach out to us at</b></p>
                        <Button className="tecttonic-btn" href="mailto:contactus@catalysts.org">contactus@catalysts.org</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        <Copyright />
        </>
    );
};
export default techtonic;