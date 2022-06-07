import React, { Component  } from 'react';
import { Container,Row,Col, Form,FormControl,Button } from 'react-bootstrap';
import { FaStar, FaRegBell, FaRegSun, FaBuilding,FaUserAlt,FaUnlink,FaStarHalfAlt,FaAsterisk } from 'react-icons/fa';
import ReactDOM from 'react-dom';

class MyProfile extends Component { 
  render() {
     return (         
        <>
          <section className="inner_banner text-center">
            <Container>
              <h2 className="text-white text-uppercase">Welcome</h2>
                  <nav aria-label="breadcrumb" className="breadcrumbbx">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">My Profile</li>
                    </ol>
                  </nav>                                 
            </Container> 
          </section>   
          <section className="myprofile_twoclsec two_colnewprofdashpage">
            <Container>
              <div className="prof_row">
                <Row className="col-container">
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
                      <div className="myprof_form_mainrightbx">
                        <div className="myprof_title"><h3>My Account</h3></div>
                        <Form>
                          <Row className="justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="James Peterson" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="jamespeterson@testmail.com" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="James Petersonr" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="John Smith" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="+98 5968452952" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="125, South Wals, Los Angeles" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="California" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="986521" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="California" />
                              </Form.Group>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <Form.Group className="mb-3">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="US State" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <div className="change_passsec">
                              <div className="myprof_title">
                                <h3>Social Accounts</h3>
                              </div>
                              <Row className="justify-content-center"> 
                                 <Col lg={6} md={6} sm={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control type="text" placeholder="https://facebook.com/jamespeterson" />
                                  </Form.Group>
                                </Col>   
                                 <Col lg={6} md={6} sm={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>LinkedIn</Form.Label>
                                    <Form.Control type="text" placeholder="https://linkedin.com/jamespeterson" />
                                  </Form.Group>
                                </Col>
                                 
                                
                              </Row>
                          </div>
                          <div className="change_passsec">
                              <div className="myprof_title">
                                <h3>Change Password</h3>
                              </div>
                              <Row className="justify-content-center"> 
                                 <Col lg={6} md={6} sm={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Current Password" />
                                  </Form.Group>
                                </Col>   
                                 <Col lg={6} md={6} sm={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Current Password" />
                                  </Form.Group>
                                </Col>   
                                 <Col lg={12} md={12} sm={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Current Password" />
                                  </Form.Group>
                                </Col>                                
                                <Col lg={3} md={4} sm={6}>
                                  <Button type="submit" className="getfreconsbtn">Update Profile</Button>
                                </Col>
                              </Row>
                          </div>
                          
                        </Form>
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
export default MyProfile
