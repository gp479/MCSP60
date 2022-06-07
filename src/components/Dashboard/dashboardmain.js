import React, { Component  } from 'react';
import { Container,Row,Col,Image} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FaStar, FaRegBell, FaRegSun, FaBuilding,FaUserAlt,FaUnlink,FaBed, FaBath, FaArrowsAlt, FaCarAlt, FaStarHalfAlt, FaMapMarkerAlt,FaHome,FaAsterisk } from 'react-icons/fa';
import property_1 from '../../images/property_1.jpg';
import property_2 from '../../images/property_2.jpg';
import property_3 from '../../images/property_3.jpg';
import agent_minthumb_img1 from '../../images/agent_minthumb_img1.jpg';
import agent_minthumb_img2 from '../../images/agent_minthumb_img2.jpg';
import agent_minthumb_img3 from '../../images/agent_minthumb_img3.jpg';  
class DashBoardMain extends Component { 
  render() {
     return (         
        <>
          <section className="inner_banner text-center">
            <Container>
              <h2 className="text-white text-uppercase">Dashboard</h2>
                  <nav aria-label="breadcrumb" className="breadcrumbbx">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                  </nav>                                 
            </Container> 
          </section>   
          <section className="dashboard_main_twoclsec two_colnewprofdashpage">
            <Container>              
              <div className="prof_row">
                <Row className="row-flex">
                  <Col lg={4} md={5} sm={12}>
                    <div className="mprof_left">
                      <ul className="dashboard_listleft">
                        <li><a href="/dashboardmain"><span className="mproficon"><FaRegSun/></span>Dashboard</a></li>
                        <li><a href="/myproperties"><span className="mproficon"><FaBuilding/></span>My Properties</a></li>
                        <li><a href="/reviews"><span className="mproficon"><FaStar/></span> Reviews</a></li>
                        <li><a href="/notification"><span className="mproficon"><FaRegBell/></span> notification</a></li>
                        <li><a href="/complainstatus"><span className="mproficon"><FaAsterisk/></span>Complain Status</a></li>
                        <li><a href="/my-profile"><span className="mproficon"><FaUserAlt/></span>My Profile</a></li>
                        <li><a href="#."><span className="mproficon"><FaUnlink/></span>Log out</a></li>
                      </ul>
                    </div> 
                  </Col> 
                  <Col lg={8} md={7} sm={12}>
                    <div className="mprof_right">
                      <div className="recent_activitybx">
                        <h3>Recent Activities</h3>
                        <ul>
                          <li><p>Your Property <strong>Villa On Hartford</strong> has been approved!</p> <span>30 mins ago</span></li>
                          <li><p><strong>Andrew</strong> sends a Booking request for <strong>Villa on Sunbury</strong> Property!</p> <span>5 hours ago</span></li>                   
                        </ul>
                      </div>
                      <ul className="mpdash_list_bx">
                        <li>
                          <div className="mpdash_libx">
                            <span className="mydashnumtxt">2</span>
                            <h4>my Property</h4>
                          </div>
                        </li>
                        <li>
                          <div className="mpdash_libx">
                            <span className="mydashnumtxt">3</span>
                            <h4>Reviews</h4>
                          </div>
                        </li>
                        <li>
                          <div className="mpdash_libx">
                            <span className="mydashnumtxt">3</span>
                            <h4>notification</h4>
                          </div>
                        </li>
                      </ul>
                      <div className="dashbord_popular_listbx">
                        <Row>
                        <Col lg={6} md={6} sm={6}>
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
                        <Col lg={6} md={6} sm={6}>
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
                        <Col lg={6} md={6} sm={6}>
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
export default DashBoardMain
