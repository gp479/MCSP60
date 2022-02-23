import React, { Component } from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import news_1 from '../../images/news_1.jpg';
import news_2 from '../../images/news_2.jpg';
import news_3 from '../../images/news_3.jpg';
class HNewsUpdateSection extends Component {
  
   render() {    
        return (
            <> 
                <section className="hnewsupdatesec bg-prop text-center">
                    <Container>
                        <span className="hsubtitle">Check out our recent</span>
                        <h2 className="mb-3 mb-md-4 mb-lg-5">News & Updates</h2>
                        <Row>
                            <Col lg={4} md={4} sm={6}>
                                <div className="hnewupdatbx">
                                    <div className="hnewupdatimg"><Image src={news_1} alt="" className="img-fluid"/></div>
                                    <div className="hnewupdatecnt">
                                        <a href="#.">Apartment</a>
                                        <h4 class="card-title text-capitalize mb-0"><a href="single-news-one.html">The most inspiring interior design for your home</a></h4>
                                        <div className="hnewbottomtxt">
                                            <p>By<a href="#.">Louis Fonsi</a><span class="date">Sep 28th , 2018</span> </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <div className="hnewupdatbx">
                                    <div className="hnewupdatimg"><Image src={news_2} alt="" className="img-fluid"/></div>
                                    <div className="hnewupdatecnt">
                                        <a href="#.">Real estate</a>
                                        <h4 class="card-title text-capitalize mb-0"><a href="single-news-one.html"> 7 Simple secrets to totally rocking your Real Estate </a></h4>
                                        <div className="hnewbottomtxt">
                                            <p>By<a href="#.">Tony stark</a><span class="date">Mar 21st, 2019</span> </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={6}>
                                <div className="hnewupdatbx">
                                    <div className="hnewupdatimg"><Image src={news_3} alt="" className="img-fluid"/></div>
                                    <div className="hnewupdatecnt">
                                        <a href="#.">Commercial</a>
                                        <h4 class="card-title text-capitalize mb-0"><a href="single-news-one.html">10 benifits of rental that may change your perspective</a></h4>
                                        <div className="hnewbottomtxt">
                                            <p>By<a href="#.">Bob Haris</a><span class="date">Sep 28th , 2018</span> </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>      
            </>
        );
    }
}

export default HNewsUpdateSection;
