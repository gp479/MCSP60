import React, { Component  } from 'react';
import { Container,Row,Col, Image} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FaStar, FaRegBell, FaRegSun, FaBuilding,FaUserAlt,FaUnlink,FaStarHalfAlt, FaBed, FaShower,FaVectorSquare,FaAsterisk } from 'react-icons/fa';
import property_1 from '../../images/property_1.jpg';
import property_2 from '../../images/property_2.jpg';
class MyProperties extends Component { 
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
                      <ul className="myproperties_list">
                        <li>
                          <div className="myprop_img">
                            <Image src={property_1} alt="" className="img-fluid"/>
                          </div>
                          <div className="myprop_rightbx">
                            <h3>House and Land Packages</h3>
                            <p>Apartment | By Angie Smith</p>
                            <div className="myprop_viewlistbad">
                              <span><FaBed/>4</span> 
                              <span><FaShower/>3</span> 
                              <span><FaVectorSquare/>1986 sqft</span> 
                            </div>
                            <div className="myprop_pricebx">$764,000</div>
                          </div>
                        </li>
                        <li>
                          <div className="myprop_img">
                            <Image src={property_2} alt="" className="img-fluid"/>
                          </div>
                          <div className="myprop_rightbx">
                            <h3>Brand New Home</h3>
                            <p>Apartment | By Barbara E Johnson</p>
                            <div className="myprop_viewlistbad">
                              <span><FaBed/>5</span> 
                              <span><FaShower/>5</span> 
                              <span><FaVectorSquare/>3986 sqft</span> 
                            </div>
                            <div className="myprop_pricebx">$859,900</div>
                          </div>
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
export default MyProperties
