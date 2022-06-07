import React, { Component  } from 'react';
import { Container,Row,Col, Image} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FaStar, FaRegBell, FaRegSun, FaBuilding,FaUserAlt,FaUnlink,FaStarHalfAlt,FaAsterisk } from 'react-icons/fa';
import property_1 from '../../images/property_1.jpg';
import property_2 from '../../images/property_2.jpg';
import property_3 from '../../images/property_3.jpg';
class Reviews extends Component { 
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
                <Row>
                  <Col lg={4} md={5} sm={12}>
                    <div className="mprof_left">
                      <ul className="dashboard_listleft">
                        <li><a href="/dashboardmain"><span className="mproficon"><FaRegSun/></span>Dashboard</a></li>
                        <li><a href=""><span className="mproficon"><FaBuilding/></span>My Properties</a></li>
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
                      <ul className="notification_mainlist">
                        <li>
                          <div className="notificationlistimgbx">
                            <div className="notificationlistimg">
                              <Image src={property_1} alt="" className="img-fluid"/>
                            </div>
                            <h5>Stacy G.</h5>                            
                          </div>
                          <span className="notifiction_name_txt">
                            <h3>Family Apartment in Cecil lake</h3>
                            <div className="staredateimg">Jun 13, 2019
                            <ul>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStarHalfAlt/></li>
                            </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptates eum, velit recusandae, ducimus earum aperiam commodi error officia optio aut et quae nam nostrum!</p>
                          </span>
                        </li>
                        <li>
                        <div className="notificationlistimgbx">
                          <div className="notificationlistimg">
                            <Image src={property_2} alt="" className="img-fluid"/>                            
                          </div>
                          <h5>Louis F..</h5>
                          </div>
                          <span className="notifiction_name_txt">
                            <h3>Family Apartment in Cecil lake</h3>
                            <div className="staredateimg">Jun 13, 2019
                            <ul>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStarHalfAlt/></li>
                            </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptates eum, velit recusandae, ducimus earum aperiam commodi error officia optio aut et quae nam nostrum!</p>
                          </span>
                        </li>
                        <li>
                            <div className="notificationlistimgbx">
                            <div className="notificationlistimg">
                              <Image src={property_3} alt="" className="img-fluid"/>
                              <h5>Tony stark</h5>
                            </div>
                          </div>
                          <span className="notifiction_name_txt">
                            <h3>Family Apartment in Cecil lake</h3>
                            <div className="staredateimg">Jun 13, 2019
                            <ul>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStarHalfAlt/></li>
                            </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptates eum, velit recusandae, ducimus earum aperiam commodi error officia optio aut et quae nam nostrum!</p>
                          </span>
                        </li>
                      
                      </ul>
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
export default Reviews
