import React, { Component  } from 'react';
import { Container,Row,Col,Image } from 'react-bootstrap';
import { FaBed, FaBath, FaArrowsAlt, FaCarAlt, FaStar, FaStarHalfAlt, FaMapMarkerAlt,FaHome } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import property_1 from '../images/property_1.jpg';
import property_2 from '../images/property_2.jpg';
import property_3 from '../images/property_3.jpg';
import agent_minthumb_img1 from '../images/agent_minthumb_img1.jpg';
import agent_minthumb_img2 from '../images/agent_minthumb_img2.jpg';
import agent_minthumb_img3 from '../images/agent_minthumb_img3.jpg';
class Investor extends Component { 
  render() {
    return (         
        <>
          <section className="inner_banner text-center">
            <Container>
              <h2 className="text-white text-uppercase">investor</h2>
                  <nav aria-label="breadcrumb" className="breadcrumbbx">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">investor</li>
                    </ol>
                  </nav>                                 
            </Container> 
          </section>  
          <section className="investor_page">
            <Container>
              <div className="investment_rowbx">
                <h2>INVESTMENT PROJECTS</h2>
                <Row>
                    <Col lg={4} md={4} sm={6}>
                        <div className="Proptabbx">
                            <div className="proptimgbx">
                                <a href="#." className="prpimg"><Image src={property_1} alt="" className="img-fluid"/></a>
                                <ul class="feature_text">
                                    <li class="feature_cb"><span> Featured</span></li>
                                    <li class="feature_or"><span>For Sale</span></li>
                                </ul>
                                <div class="property-author-wrap">
                                    <a href="#" class="property-author">
                                        <Image src={agent_minthumb_img1} alt="" className="img-fluid"/>
                                        <span>Tony Stark</span>
                                    </a>                                                   
                                </div>
                            </div>
                            <div className="propcntbx">
                                <h4><a href="#.">Villa on Hartford</a></h4>
                                <p><FaMapMarkerAlt/>2854 Meadow View Drive, Hartford, USA</p>
                                <ul class="property-feature">
                                    <li><FaBed/>
                                        <span>4 Bedrooms</span>
                                    </li>
                                    <li><FaBath/> <i class="fas fa-bath"></i>
                                        <span>3 Bath</span>
                                    </li>
                                    <li><FaArrowsAlt/>
                                        <span>2142 sq ft</span>
                                    </li>
                                    <li><FaCarAlt/>
                                        <span>2 Garage</span>
                                    </li>
                                </ul>
                                <div class="trending-bottom">
                                    <div class="trend-left">
                                        <ul class="product-rating m-0 p-0">
                                            <li><FaStar/></li>
                                            <li><FaStar/></li>
                                            <li><FaStar/></li>
                                            <li><FaStarHalfAlt/></li>
                                            <li><FaStarHalfAlt/></li>
                                        </ul>
                                    </div>
                                    <a class="trend-right float-right">
                                        <div class="trend-open">
                                            <p><span class="per_sale">starts from</span>$25000</p>
                                        </div>
                                    </a>
                                </div>
                            </div>  
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                        <div className="Proptabbx">
                            <div className="proptimgbx">
                                <a href="#." className="prpimg"><Image src={property_2} alt="" className="img-fluid"/></a>
                                <ul class="feature_text">
                                    <li class="feature_or"><span>For Sale</span></li>
                                </ul>
                                <div class="property-author-wrap">
                                    <a href="#" class="property-author">
                                        <Image src={agent_minthumb_img2} alt="" className="img-fluid"/>
                                        <span>Zilion Properties</span>
                                    </a>                                                   
                                </div>
                            </div>
                            <div className="propcntbx">
                                <h4><a href="#.">Family home in Glasgow</a></h4>
                                <p><FaMapMarkerAlt/>60 High St, Glasgow, London</p>
                                <ul class="property-feature">
                                    <li><FaBed/>
                                        <span>3 Bedrooms</span>
                                    </li>
                                    <li><FaBath/> <i class="fas fa-bath"></i>
                                        <span>3 Bath</span>
                                    </li>
                                    <li><FaArrowsAlt/>
                                        <span>1982 sq ft</span>
                                    </li>
                                    <li><FaCarAlt/>
                                        <span>1 Garage</span>
                                    </li>
                                </ul>
                                <div class="trending-bottom">
                                    <div class="trend-left">
                                        <ul class="product-rating m-0 p-0">
                                            <li><FaStar/></li>
                                            <li><FaStar/></li>
                                            <li><FaStar/></li>
                                            <li><FaStarHalfAlt/></li>
                                            <li><FaStarHalfAlt/></li>
                                        </ul>
                                    </div>
                                    <a class="trend-right float-right">
                                        <div class="trend-open">
                                            <p><span class="per_sale">starts from</span>$25000</p>
                                        </div>
                                    </a>
                                </div>
                            </div>  
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                        <div className="Proptabbx">
                            <div className="proptimgbx">
                                <a href="#." className="prpimg"><Image src={property_3} alt="" className="img-fluid"/></a>
                                <ul class="feature_text">
                                    <li class="feature_cb"><span>New</span></li>
                                    <li class="feature_or"><span>For Sale</span></li>
                                </ul>
                                <div class="property-author-wrap">
                                    <a href="#" class="property-author">
                                        <Image src={agent_minthumb_img3} alt="" className="img-fluid"/>
                                        <span>Bob Haris</span>
                                    </a>                                                   
                                </div>
                            </div>
                            <div className="propcntbx">
                                <h4><a href="#.">Villa on Hartford</a></h4>
                                <p><FaMapMarkerAlt/>131 midlas , Cecil Lake, BC</p>
                                <ul class="property-feature">
                                    <li><FaBed/>
                                        <span>4 Bedrooms</span>
                                    </li>
                                    <li><FaBath/> <i class="fas fa-bath"></i>
                                        <span>3 Bath</span>
                                    </li>
                                    <li><FaArrowsAlt/>
                                        <span>2142 sq ft</span>
                                    </li>
                                    <li><FaCarAlt/>
                                        <span>2 Garage</span>
                                    </li>
                                </ul>
                                <div class="trending-bottom">
                                    <div class="trend-left">
                                        <ul class="product-rating m-0 p-0">
                                            <li><FaStar/></li>
                                            <li><FaStar/></li>
                                            <li><FaStar/></li>
                                            <li><FaStarHalfAlt/></li>
                                            <li><FaStarHalfAlt/></li>
                                        </ul>
                                    </div>
                                    <a class="trend-right float-right">
                                        <div class="trend-open">
                                            <p><span class="per_sale">starts from</span>$25000</p>
                                        </div>
                                    </a>
                                </div>
                            </div>  
                        </div>
                    </Col>
                </Row>
              </div>
            </Container>
          </section>                      
        </>          
      )
  }
}
export default Investor
