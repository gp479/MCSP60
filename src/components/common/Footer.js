import React, { Component } from 'react';
import { Container, Row, Col, Form,FormSelect,Button } from 'react-bootstrap';
import { FaPhoneAlt,FaMapMarkerAlt } from 'react-icons/fa';

class Footer extends Component {
  render() {
      return (
         <>         		
              <footer>
					  		<section className="footer-main">
					  			<Container>
										<Row>
										    <Col lg={4} md={4} sm={6}>
										    	<h4 className="mb-3 mb-md-4 font-weight-bold">Quick Links</h4>
										    	<ul className="footerlinks">
										    		<li><a href="about">About us</a></li>
										    		<li><a href="contactus">Contact us</a></li>
										    		<li><a href="#">Privacy Policy</a></li>
										    		<li><a href="faq">FAQ</a></li>
										    	</ul>
										    </Col>
										    <Col lg={4} md={4} sm={6}>
										    	<h4 className="mb-3 mb-md-4 font-weight-bold">Popular Searches</h4>
										    	<ul className="footerlinks">
										    		<li><a href="#">Property for Rent</a></li>
										    		<li><a href="#">Property for Sale</a></li>
										    		<li><a href="#">Resale Properties</a></li>
										    		<li><a href="#">Recent Properties	</a></li>
										    	</ul>
										    </Col>
										    <Col lg={4} md={4} sm={6}>
										    	<h4 className="mb-3 mb-md-4 font-weight-bold">Contact us</h4>
										    	<ul className="contactList">
										    		<li><a href="#"><FaMapMarkerAlt/>13th North Ave, Florida, USA</a></li>
										    		<li><a href="tel:44078767595"><FaPhoneAlt/>+44 078 767 595</a></li>
										    		<li><a href="#"></a></li>
										    	</ul>

										    </Col>
										</Row>
									</Container>
					  		</section>
							</footer>
            </>
          
      )
  }
}
export default Footer

