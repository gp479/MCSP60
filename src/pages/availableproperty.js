import React, { Component  } from 'react';
import { Container,Row, Col,Image, Modal,Button, } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import aboutone from '../images/aboutone.jpg';
import pin from '../images/pin.png';
import customer_support from '../images/customer_support.png';
import rent from '../images/rent.png';
import deal from '../images/deal.png';
import partner_1 from '../images/partner_1.jpg';
import partner_2 from '../images/partner_2.jpg';
import partner_3 from '../images/partner_3.jpg';
import partner_4 from '../images/partner_4.jpg';
import partner_5 from '../images/partner_5.jpg';
import partner_6 from '../images/partner_6.jpg';
import partner_7 from '../images/partner_7.jpg';
import { FaPlay } from 'react-icons/fa';

class AvailableProperty extends Component { 
  render() {
     const partnersettings = {
      arrows:false,
      dots:false,      
      infinite: true,  
      autoplay:true,    
      slidesToShow: 4,
      speed: 500,
       slidesToScroll: 1
    };
      return (         
        <>
          <section className="inner_banner text-center">
            <Container>
              <h2 className="text-white text-uppercase">Available Poperty</h2>
                  <nav aria-label="breadcrumb" className="breadcrumbbx">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">available property</li>
                    </ol>
                  </nav>                                 
            </Container> 
          </section>  

          <section className="innner_page about_page">
            <div className="abouttwocolsec">
              <Container>
                <Row>
                  <Col lg={6} md={6} sm={6}>
                    <div className="aboutleft">
                      <Image src={aboutone} alt="" className="img-fluid"/>
                      <div className="videopopupbx">
                         <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><FaPlay/></Button>
                         
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={6}>
                    <div className="aboutrightbx">
                      <span>Lorem ipsum dolor sit.</span>
                      <h2>WE'LL HELP YOU TO FIND A PLACE THAT YOU'LL LOVE.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quasi natus quia facilis corporis quibusdam ut non laudantium recusandae fugiat rerum ab aliquid accusamus cumque quae, illum id voluptatem ducimus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quasi natus quia facilis corporis quibusdam ut non laudantium recusandae fugiat rerum ab aliquid accusamus cumque quae, illum id voluptatem ducimus</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="aboutwhychoosesec">
              <Container>
                <Row className="align-items-center">
                  <Col lg={5} md={5} sm={12}>
                    <span>Lorem ipsum dolor sit.</span>
                    <h2>Why Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora. Placeat voluptatem eum numquam quas distinctio obcaecati quaerat, repudiandae qui! Quia, omnis, doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae alias tempora.</p>
                  </Col>
                  <Col lg={7} md={7} sm={12}>
                    <Row>
                      <Col lg={6} md={6} sm={6}>
                        <div className="abtwhychosebx bgpurpal">
                          <Image src={pin} alt="" className="img-fluid"/>
                          <h4 className="text-white">Personalized Service.</h4>
                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquid cumque</p>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div className="abtwhychosebx">
                          <Image src={customer_support} alt="" className="img-fluid"/>
                          <h4>24/7 support.</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquid cumque</p>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div className="abtwhychosebx">
                          <Image src={rent} alt="" className="img-fluid"/>
                          <h4>Financing made easy.</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquid cumque</p>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div className="abtwhychosebx bglred">
                          <Image src={deal} alt="" className="img-fluid"/>
                          <h4 className="text-white">Trusted by thousands.</h4>
                          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquid cumque</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="ourpatnerslidersec text-center">
            <Container>
              <h2>Our Partners</h2>
              <div className="ourpatnerslidebx">
                <Slider {...partnersettings}>
                  <div className="patnerlogoimg">
                    <Image src={partner_1} alt="" className="img-fluid"/>                      
                  </div>
                  <div className="patnerlogoimg">
                    <Image src={partner_2} alt="" className="img-fluid" />                        
                  </div>
                  <div className="patnerlogoimg">
                    <Image src={partner_3} alt="" className="img-fluid" />                        
                  </div>
                  <div className="patnerlogoimg">
                    <Image src={partner_4} alt="" className="img-fluid" />                        
                  </div>
                  <div className="patnerlogoimg">
                    <Image src={partner_5} alt="" className="img-fluid" />                        
                  </div>
                  <div className="patnerlogoimg">
                    <Image src={partner_6} alt="" className="img-fluid" />                        
                  </div>
                  <div className="patnerlogoimg">
                    <Image src={partner_7} alt="" className="img-fluid" />                        
                  </div>
                </Slider>
                
              </div>
            </Container>                
          </div>
        </section>              
      </>          
      )
  }
}
export default AvailableProperty
