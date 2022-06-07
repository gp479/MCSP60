import React, { Component } from 'react';
import { Container,Row,Col, Form,FormControl,Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
//import Image from '../../images/inner_banner_image.jpg';
import { FaMapMarkerAlt, FaPhoneAlt,FaBusinessTime } from 'react-icons/fa';
import Iframe from 'react-iframe'
class ContactUs extends Component {
  render() {
      return (         
            <>
              <section className="inner_banner text-center" >
                <Container>
                  <h2 className="text-white">Contact Us</h2>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                    </ol>                
                </Container>
              </section>  
              <div className="contactpage_sec">
                <section className="contact_threecolbx">
                  <Container>
                    <Row>
                      <Col lg={4} md={4} sm={6}>
                        <div className="contac_bx text-center">
                            <span className="contacticon"><FaMapMarkerAlt/></span>
                            <h4>Corporate Office</h4>
                            <p>7652 Washington Avenue, Suite 315 Miami Beach, FL 33139</p>
                        </div>
                      </Col>
                      <Col lg={4} md={4} sm={6}>
                        <div className="contac_bx text-center">
                            <span className="contacticon"><FaPhoneAlt/></span>
                            <h4>Direct Contact</h4>
                            <ul className="cntlist">
                            <li><strong>Phone</strong>: <a href="tel:8009876543">800 987 6543</a></li>
                            <li><strong>Email </strong>: <a href="tel:8009876543">800 987 6543</a></li>
                            </ul>
                        </div>
                      </Col>
                      <Col lg={4} md={4} sm={6}>
                        <div className="contac_bx text-center">
                            <span className="contacticon"><FaBusinessTime/></span>
                            <h4>Business Hours</h4>
                            <ul className="cntlist">
                              <li><span>Sunday</span> : Closed</li>
                              <li><span>Monday-Friday</span> : 10AM - 8PM</li>
                              <li><span>Saturday</span> : 10AM - 2PM</li>
                            </ul>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
                <section className="contactmap_formsec">
                  <Container>
                    <Row>                      
                      <Col lg={6} md={6} sm={12}>
                        <Form className="contactformbx">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                  <Form.Group className="mb-3">
                                      <Form.Control type="text" placeholder="Your Mail" />
                                  </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                  <Form.Group className="mb-3">
                                      <Form.Control type="text" placeholder="Your Phone Number" />
                                  </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Control as="textarea" rows={6} placeholder="Message" />
                                  </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <Button type="submit" className="getfreconsbtn">Send Message</Button>
                                </Col>

                            </Row>
                        </Form> 
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <div className="cntmapbx">
                          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5528318873507!2d-80.13615398217138!3d25.78532966922901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b48e782b755b%3A0x5918d1d531f2e815!2sWashington%20Ave%2C%20Miami%20Beach%2C%20FL%2033139%2C%20USA!5e0!3m2!1sen!2sin!4v1654619857867!5m2!1sen!2sin"
                            width="100%"
                            height="350px"
                            id="myId"
                            
                            display="initial"
                            position="relative"/>
                          
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
            </>          
      )
  }
}
export default ContactUs
