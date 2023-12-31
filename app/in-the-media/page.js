"use client"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogHeader from "../components/blogheader";
import Footer from "../components/footer";
import Copyright from "../components/copyright";
import Image from "next/image";
import Link from "next/link";

const InTheMedia = () => {
    const url = '/img/Banner-In-the-Media.jpg';
    return (
        <>
        <BlogHeader url={url} headline={'In The Media'} />
        <Container style={{marginTop:'100px',marginBottom:'60px'}}>
            <Row>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://timesofindia.indiatimes.com/blogs/voices/heat-stress-and-vulnerable-communities-a-call-for-proactive-action/'} target="_blank">
                            <Image src={'/img/banner-img-1.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://timesofindia.indiatimes.com/blogs/voices/heat-stress-and-vulnerable-communities-a-call-for-proactive-action/'} target="_blank">
                            Heat stress and vulnerable communities: A call for proactive action
                            </Link>
                            <br />
                            <p>2023-04-27<br /><Link href={'https://timesofindia.indiatimes.com/blogs/voices/heat-stress-and-vulnerable-communities-a-call-for-proactive-action/'} target="_blank">Published by Times of India</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://sunnewsonline.com/anti-drug-war-women-as-change-catalysts/?amp'} target="_blank">
                            <Image src={'/img/banner-img-2.jpeg'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://sunnewsonline.com/anti-drug-war-women-as-change-catalysts/?amp'} target="_blank">
                            Anti-drug war: Women as change catalysts
                            </Link>
                            <br />
                            <p>2023-03-30<br /><Link href={'https://sunnewsonline.com/anti-drug-war-women-as-change-catalysts/?amp'} target="_blank">Published by The Sun</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                <div className="medialinkbox">
                        <Link href={'https://sunnewsonline.com/anti-drug-war-women-as-change-catalysts/?amp'} target="_blank">
                            <Image src={'/img/banner-img-3.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://sunnewsonline.com/anti-drug-war-women-as-change-catalysts/?amp'} target="_blank">
                            #CovidActionCollab Works to Ramp up Telehealth across Vulnerable Communities
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://sunnewsonline.com/anti-drug-war-women-as-change-catalysts/?amp'} target="_blank">Published by Pharmabiz</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://bangaloremirror.indiatimes.com/bangalore/civic/the-murky-underbelly-of-bengalurus-wastewater/articleshow/93761732.cms'} target="_blank">
                            <Image src={'/img/banner-img-4.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://bangaloremirror.indiatimes.com/bangalore/civic/the-murky-underbelly-of-bengalurus-wastewater/articleshow/93761732.cms'} target="_blank">
                            The Murky Underbelly of Bengaluru’s Wastewater
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://bangaloremirror.indiatimes.com/bangalore/civic/the-murky-underbelly-of-bengalurus-wastewater/articleshow/93761732.cms'} target="_blank">Published by Bangalore Mirror</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-wastewater-surveillance-finds-high-covid-positivity-in-several-areas-1131072.html'} target="_blank">
                            <Image src={'/img/banner-img-5.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-wastewater-surveillance-finds-high-covid-positivity-in-several-areas-1131072.html'} target="_blank">
                            Bengaluru: Wastewater Surveillance Finds High COVID Positivity in Several Areas
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-wastewater-surveillance-finds-high-covid-positivity-in-several-areas-1131072.html'} target="_blank">Published by Deccan Herald</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                <div className="medialinkbox">
                        <Link href={'https://indianexpress.com/article/lifestyle/art-and-culture/onward-together-photo-exhibition-pandemic-disparities-prejudice-marginalised-communities-8126601/'} target="_blank">
                            <Image src={'/img/banner-img-6.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://indianexpress.com/article/lifestyle/art-and-culture/onward-together-photo-exhibition-pandemic-disparities-prejudice-marginalised-communities-8126601/'} target="_blank">
                            ‘Onward Together’: A Photo Exhibition That Highlights COVID-19 Pandemic’s ‘Disparities and Prejudice’
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://indianexpress.com/article/lifestyle/art-and-culture/onward-together-photo-exhibition-pandemic-disparities-prejudice-marginalised-communities-8126601/'} target="_blank">Published by The Indian Express</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://health.economictimes.indiatimes.com/news/industry/the-climate-crisis-impacts-the-health-of-the-people-and-the-economy-of-the-country-sanjeev-vyas-lead-green-health-alliance/93041139'} target="_blank">
                            <Image src={'/img/banner-img-7.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://health.economictimes.indiatimes.com/news/industry/the-climate-crisis-impacts-the-health-of-the-people-and-the-economy-of-the-country-sanjeev-vyas-lead-green-health-alliance/93041139'} target="_blank">
                            The Climate Crisis Impacts the Health of the People and the Economy of the Country
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://health.economictimes.indiatimes.com/news/industry/the-climate-crisis-impacts-the-health-of-the-people-and-the-economy-of-the-country-sanjeev-vyas-lead-green-health-alliance/93041139'} target="_blank">Published by Healthworld</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://www.htsmartcast.com/business-podcasts/ht-smartcast-leadership-lessons/how-can-community-collaboration-solve-problems-of-humanitarian-crisis-in-future/'} target="_blank">
                            <Image src={'/img/banner-img-8.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.htsmartcast.com/business-podcasts/ht-smartcast-leadership-lessons/how-can-community-collaboration-solve-problems-of-humanitarian-crisis-in-future/'} target="_blank">
                            How Can Community Collaboration Solve Problems of Humanitarian Crisis in Future?
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://www.htsmartcast.com/business-podcasts/ht-smartcast-leadership-lessons/how-can-community-collaboration-solve-problems-of-humanitarian-crisis-in-future/'} target="_blank">Published by HTsmartcast</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                <div className="medialinkbox">
                        <Link href={'https://timesofindia.indiatimes.com/blogs/voices/should-we-mobilize-indias-election-machinery-for-the-final-mile-of-covid-vaccines/'} target="_blank">
                            <Image src={'/img/banner-img-9.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://timesofindia.indiatimes.com/blogs/voices/should-we-mobilize-indias-election-machinery-for-the-final-mile-of-covid-vaccines/'} target="_blank">
                            Should We Mobilize India’s Election Machinery for the Final Mile of COVID Vaccines?
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://timesofindia.indiatimes.com/blogs/voices/should-we-mobilize-indias-election-machinery-for-the-final-mile-of-covid-vaccines/'} target="_blank">Published by The Times of India</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://www.newsvoir.com/release/green-health-alliance-gha-launched-in-association-with-usaid-rockefeller-foundation-and-the-office-of-the-principal-scientific-adviser-to-the-government-of-india-20293.html'} target="_blank">
                            <Image src={'/img/banner-img-10.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.newsvoir.com/release/green-health-alliance-gha-launched-in-association-with-usaid-rockefeller-foundation-and-the-office-of-the-principal-scientific-adviser-to-the-government-of-india-20293.html'} target="_blank">
                            GHA Launched in Association with USAID, Rockefeller Foundation and the Office of the Principal Scientific Adviser to the GoI
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://www.newsvoir.com/release/green-health-alliance-gha-launched-in-association-with-usaid-rockefeller-foundation-and-the-office-of-the-principal-scientific-adviser-to-the-government-of-india-20293.html'} target="_blank">Published by NewsVoir</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://yourstory.com/herstory/2022/10/transgender-activist-priya-babu-community-kitchen-madurai'} target="_blank">
                            <Image src={'/img/banner-img-11.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://yourstory.com/herstory/2022/10/transgender-activist-priya-babu-community-kitchen-madurai'} target="_blank">
                            Transgender Activist Priya Babu Is Helping the Trans Community Find a Purpose and Livelihood
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://yourstory.com/herstory/2022/10/transgender-activist-priya-babu-community-kitchen-madurai'} target="_blank">Published by YourStory</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                <div className="medialinkbox">
                        <Link href={'https://www.whitehousenewstime.com//news/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183125/'} target="_blank">
                            <Image src={'/img/banner-img-12.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.whitehousenewstime.com//news/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183125/'} target="_blank">
                            CovidActionCollab’s #OnwardTogether Celebrates the Impact and Power of Collaborative Efforts
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://www.whitehousenewstime.com//news/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183125/'} target="_blank">Published by White House Newstime</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <div className="medialinkbox" style={{paddingTop:'100px'}}>
                        <Link href={'https://www.newsvoir.com/release/green-health-alliance-gha-launched-in-association-with-usaid-rockefeller-foundation-and-the-office-of-the-principal-scientific-adviser-to-the-government-of-india-20293.html'} target="_blank">
                            <Image src={'/img/banner-img-13.png'} width={120} height={120} style={{width:'80%',height:'auto',marginLeft:'40px'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.newsvoir.com/release/green-health-alliance-gha-launched-in-association-with-usaid-rockefeller-foundation-and-the-office-of-the-principal-scientific-adviser-to-the-government-of-india-20293.html'} target="_blank">
                            GHA Launched in Association with USAID, Rockefeller Foundation and the Office of the Principal Scientific Adviser to the GoI
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://www.newsvoir.com/release/green-health-alliance-gha-launched-in-association-with-usaid-rockefeller-foundation-and-the-office-of-the-principal-scientific-adviser-to-the-government-of-india-20293.html'} target="_blank">Published by NewsVoir</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://yourstory.com/herstory/2022/10/transgender-activist-priya-babu-community-kitchen-madurai'} target="_blank">
                            <Image src={'/img/banner-img-14.png'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://yourstory.com/herstory/2022/10/transgender-activist-priya-babu-community-kitchen-madurai'} target="_blank">
                            Transgender Activist Priya Babu Is Helping the Trans Community Find a Purpose and Livelihood
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://yourstory.com/herstory/2022/10/transgender-activist-priya-babu-community-kitchen-madurai'} target="_blank">Published by YourStory</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                <div className="medialinkbox">
                        <Link href={'https://www.whitehousenewstime.com//news/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183125/'} target="_blank">
                            <Image src={'/img/banner-img-15.jpeg'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.whitehousenewstime.com//news/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183125/'} target="_blank">
                            CovidActionCollab’s #OnwardTogether Celebrates the Impact and Power of Collaborative Efforts
                            </Link>
                            <br />
                            <p>2022-12-20<br /><Link href={'https://www.whitehousenewstime.com//news/covidactioncollabs-onwardtogether-celebrates-the-impact-and-power-of-collaborative-efforts20220912183125/'} target="_blank">Published by White House Newstime</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <div className="medialinkbox" style={{paddingTop:'120px'}}>
                        <Link href={'https://www.businesstoday.in/pti-feed/story/changemakers-from-public-private-and-development-sector-to-underscore-long-term-support-for-strengthening-social-innovation-and-scaling-up-impact-223580-2019-08-30'} target="_blank">
                            <Image src={'/img/banner-img-16.png'} width={120} height={120} style={{width:'80%',height:'auto',marginLeft:'40px'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.businesstoday.in/pti-feed/story/changemakers-from-public-private-and-development-sector-to-underscore-long-term-support-for-strengthening-social-innovation-and-scaling-up-impact-223580-2019-08-30'} target="_blank">
                            Changemakers From Public, Private and Development Sector to Underscore Long-Term Support for Strengthening Social Innovation and Scaling up Impact
                            </Link>
                            <br />
                            <p>2022-07-05<br /><Link href={'https://www.businesstoday.in/pti-feed/story/changemakers-from-public-private-and-development-sector-to-underscore-long-term-support-for-strengthening-social-innovation-and-scaling-up-impact-223580-2019-08-30'} target="_blank">Published by Business Today</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://yourstory.com/socialstory/2021/02/covid-action-collab-helping-pandemic-times-catalyst-group'} target="_blank">
                            <Image src={'/img/banner-img-17.jpeg'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://yourstory.com/socialstory/2021/02/covid-action-collab-helping-pandemic-times-catalyst-group'} target="_blank">
                            This non-for-profit collaborative has delivered over 1.7 lakh services amidst the COVID-19 pandemic
                            </Link>
                            <br />
                            <p>2022-07-05<br /><Link href={'https://yourstory.com/socialstory/2021/02/covid-action-collab-helping-pandemic-times-catalyst-group'} target="_blank">Published by Social Story</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                <div className="medialinkbox" style={{paddingTop:'120px'}}>
                        <Link href={'https://www.theweek.in/wire-updates/national/2019/08/29/nrg31-dl-forum-solutions%20(r).html'} target="_blank">
                            <Image src={'/img/banner-img-18.png'} width={120} height={120} style={{width:'80%',height:'auto', marginLeft:'30px'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.theweek.in/wire-updates/national/2019/08/29/nrg31-dl-forum-solutions%20(r).html'} target="_blank">
                            Multi-stakeholder forum hosted in Bengaluru for bringing innovative solutions
                            </Link>
                            <br />
                            <p>2022-07-05<br /><Link href={'https://www.theweek.in/wire-updates/national/2019/08/29/nrg31-dl-forum-solutions%20(r).html'} target="_blank">Published by The Week</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://www.businessworld.in/article/Over-150-Organizations-Come-Together-To-Form-COVIDActionCollab/22-04-2020-189942/'} target="_blank">
                            <Image src={'/img/banner-img-19.jpeg'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.businessworld.in/article/Over-150-Organizations-Come-Together-To-Form-COVIDActionCollab/22-04-2020-189942/'} target="_blank">
                            Over 150 Organizations Come Together To Form #COVIDActionCollab
                            </Link>
                            <br />
                            <p>2022-07-05<br /><Link href={'https://www.businessworld.in/article/Over-150-Organizations-Come-Together-To-Form-COVIDActionCollab/22-04-2020-189942/'} target="_blank">Published by BusinessLine</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="medialinkbox">
                        <Link href={'https://everythingexperiential.businessworld.in/article/Do-social-impact-organizations-adopt-technology-successfully-by-Aveek-De-and-Neelima-Kurup/19-08-2019-174935/'} target="_blank">
                            <Image src={'/img/banner-img-20.jpeg'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://everythingexperiential.businessworld.in/article/Do-social-impact-organizations-adopt-technology-successfully-by-Aveek-De-and-Neelima-Kurup/19-08-2019-174935/'} target="_blank">
                            Do social impact organizations adopt technology successfully: Aveek De and Neelima Kurup
                            </Link>
                            <br />
                            <p>2022-07-05<br /><Link href={'https://everythingexperiential.businessworld.in/article/Do-social-impact-organizations-adopt-technology-successfully-by-Aveek-De-and-Neelima-Kurup/19-08-2019-174935/'} target="_blank">Published by Business World</Link></p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                <div className="medialinkbox">
                        <Link href={'https://www.financialexpress.com/lifestyle/changing-behaviors-changing-lives-three-major-problems-that-can-save-millions-of-lives/1689608/'} target="_blank">
                            <Image src={'/img/banner-img-21.jpeg'} width={120} height={120} style={{width:'100%',height:'auto'}} alt="Media 1" />
                        </Link>
                        <div className="txtbox">
                            <Link href={'https://www.financialexpress.com/lifestyle/changing-behaviors-changing-lives-three-major-problems-that-can-save-millions-of-lives/1689608/'} target="_blank">
                            Changing Behaviors, Changing Lives: Three major problems that can save millions of live
                            </Link>
                            <br />
                            <p>2022-07-05<br /><Link href={'https://www.financialexpress.com/lifestyle/changing-behaviors-changing-lives-three-major-problems-that-can-save-millions-of-lives/1689608/'} target="_blank">Published by Financial Express</Link></p>
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
export default InTheMedia;