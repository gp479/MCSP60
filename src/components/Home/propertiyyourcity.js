import React, { Component } from 'react';
import { Container,Tab, Tabs, Row,Col,Image } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FaBed, FaBath, FaArrowsAlt, FaCarAlt, FaStar, FaStarHalfAlt, FaMapMarkerAlt,FaHome } from 'react-icons/fa';
import property_1 from '../../images/property_1.jpg';
import property_2 from '../../images/property_2.jpg';
import property_3 from '../../images/property_3.jpg';
import property_4 from '../../images/property_4.jpg';
import property_5 from '../../images/property_5.jpg';
import property_6 from '../../images/property_6.jpg';
import property_7 from '../../images/property_7.jpg';
import agent_minthumb_img1 from '../../images/agent_minthumb_img1.jpg';
import agent_minthumb_img2 from '../../images/agent_minthumb_img2.jpg';
import agent_minthumb_img3 from '../../images/agent_minthumb_img3.jpg';
import agent_minthumb_img4 from '../../images/agent_minthumb_img4.jpg';
import agent_minthumb_img5 from '../../images/agent_minthumb_img5.jpg';
import agent_minthumb_img6 from '../../images/agent_minthumb_img6.jpg';
class PropertiyYourCity extends Component {
  
   render() {    
        return (
            <> 
                <section className="propertitytabsec text-center">
                    <Container>
                        <span>Find rental properties anywhere</span>
                        <h2>Discover Popular Properties</h2>
                        <Tabs defaultActiveKey="first">
                            <Tab eventKey="first" title="All Property">
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
                            </Tab>
                            <Tab eventKey="second" title="For Sale">
                                <Row>
                                    <Col lg={4} md={4} sm={6}>
                                        <div className="Proptabbx">
                                            <div className="proptimgbx">
                                                <a href="#." className="prpimg"><Image src={property_4} alt="" className="img-fluid"/></a>
                                                <ul class="feature_text">
                                                    <li class="feature_cb"><span> Featured</span></li>
                                                    <li class="feature_or"><span>For Sale</span></li>
                                                </ul>
                                                <div class="property-author-wrap">
                                                    <a href="#" class="property-author">
                                                        <Image src={agent_minthumb_img4} alt="" className="img-fluid"/>
                                                        <span>Hexa Properties</span>
                                                    </a>                                                   
                                                </div>
                                            </div>
                                            <div className="propcntbx">
                                                <h4><a href="#.">Office Space in Thatcham</a></h4>
                                                <p><FaMapMarkerAlt/>Colthrop Lane, Thatcham, London</p>
                                                <ul class="property-feature">
                                                    <li><FaHome/>
                                                        <span> 6 Rooms</span>
                                                    </li>
                                                    <li><FaBath/>
                                                        <span>2 Bath</span>
                                                    </li>
                                                    <li><FaArrowsAlt/>
                                                        <span>1400 sq ft</span>
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
                                                            <p><span class="per_sale">starts from</span>$12000</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>  
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={6}>
                                        <div className="Proptabbx">
                                            <div className="proptimgbx">
                                                <a href="#." className="prpimg"><Image src={property_5} alt="" className="img-fluid"/></a>
                                                <ul class="feature_text">
                                                    <li class="feature_or"><span>For Sale</span></li>
                                                </ul>
                                                <div class="property-author-wrap">
                                                    <a href="#" class="property-author">
                                                        <Image src={agent_minthumb_img5} alt="" className="img-fluid"/>
                                                        <span>Seaside Properties</span>
                                                    </a>                                                   
                                                </div>
                                            </div>
                                            <div className="propcntbx">
                                                <h4><a href="#.">Luxury Villa in Birmingham</a></h4>
                                                <p><FaMapMarkerAlt/>159 Dudley Rd, Birmingham, UK</p>
                                                <ul class="property-feature">
                                                    <li><FaBed/>
                                                        <span>5 Bedrooms</span>
                                                    </li>
                                                    <li><FaBath/> <i class="fas fa-bath"></i>
                                                        <span>4 Bath</span>
                                                    </li>
                                                    <li><FaArrowsAlt/>
                                                        <span>3000 sq ft</span>
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
                                                            <p><span class="per_sale">starts from</span>$21000</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>  
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={6}>
                                        <div className="Proptabbx">
                                            <div className="proptimgbx">
                                                <a href="#." className="prpimg"><Image src={property_1} alt="" className="img-fluid"/></a>
                                                <ul class="feature_text">
                                                    <li class="feature_cb"><span>New</span></li>
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
                                                        <span> 4 Bedrooms</span>
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
                            </Tab>
                            <Tab eventKey="third" title="For Rent">
                             <Row>
                                    <Col lg={4} md={4} sm={6}>
                                        <div className="Proptabbx">
                                            <div className="proptimgbx">
                                                <a href="#." className="prpimg"><Image src={property_6} alt="" className="img-fluid"/></a>
                                                <ul class="feature_text">
                                                    <li class="feature_cb"><span> Featured</span></li>
                                                    <li class="feature_or"><span>For Sale</span></li>
                                                </ul>
                                                <div class="property-author-wrap">
                                                    <a href="#" class="property-author">
                                                        <Image src={agent_minthumb_img6} alt="" className="img-fluid"/>
                                                        <span>Carmen Properties</span>
                                                    </a>                                                   
                                                </div>
                                            </div>
                                            <div className="propcntbx">
                                                <h4><a href="#.">Villa on Sunbury</a></h4>
                                                <p><FaMapMarkerAlt/>39 Casey Ave, Sunbury, VIC 3429</p>
                                                <ul class="property-feature">
                                                    <li><FaBed/>
                                                        <span>5 Bedrooms</span>
                                                    </li>
                                                    <li><FaBath/> <i class="fas fa-bath"></i>
                                                        <span>4 Bath</span>
                                                    </li>
                                                    <li><FaArrowsAlt/>
                                                        <span>2048 sq ft</span>
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
                                                            <p><span class="per_sale">month</span>$9200</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>  
                                        </div>
                                    </Col>
                                    <Col lg={4} md={4} sm={6}>
                                        <div className="Proptabbx">
                                            <div className="proptimgbx">
                                                <a href="#." className="prpimg"><Image src={property_7} alt="" className="img-fluid"/></a>
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
                                                <h4><a href="#.">Comfortable Family Apartment</a></h4>
                                                <p><FaMapMarkerAlt/>4210 Khale Street, Florence, USA</p>
                                                <ul class="property-feature">
                                                    <li><FaBed/>
                                                        <span>2 Bedrooms</span>
                                                    </li>
                                                    <li><FaBath/> <i class="fas fa-bath"></i>
                                                        <span>2 Bath</span>
                                                    </li>
                                                    <li><FaArrowsAlt/>
                                                        <span>1500 sq ft</span>
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
                                                            <p><span class="per_sale">month</span>$7500</p>
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
                                                    <li class="feature_cb"><span>New</span></li>
                                                    <li class="feature_or"><span>For Sale</span></li>
                                                </ul>
                                                <div class="property-author-wrap">
                                                    <a href="#" class="property-author">
                                                        <Image src={agent_minthumb_img1} alt="" className="img-fluid"/>
                                                        <span>Zilion Properties</span>
                                                    </a>                                                   
                                                </div>
                                            </div>
                                            <div className="propcntbx">
                                                <h4><a href="#."><span>Tony Stark</span></a></h4>
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
                                                            <p><span class="per_sale">month</span>$7500</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>  
                                        </div>
                                    </Col>
                                </Row>
                            </Tab>                           
                        </Tabs>
                        <a href="#." className="btn btn-primary propbrbtn mt-3 mt-md-4 mt-lg-5">Browse More</a>
                    </Container>
                </section>      
            </>
        );
    }
}

export default PropertiyYourCity;
