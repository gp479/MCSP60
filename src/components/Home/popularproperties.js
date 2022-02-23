import React, { Component } from 'react';
import { Container,Image } from 'react-bootstrap';
import Slider from 'react-slick';
import place_1 from '../../images/place_1.jpg';
import place_2 from '../../images/place_2.jpg';
import place_3 from '../../images/place_3.jpg';
import place_4 from '../../images/place_4.jpg';
import place_5 from '../../images/place_5.jpg';
import { FaArrowRight } from 'react-icons/fa';
class PopularProperties extends Component {
   render() {
    const settings = {
      arrows:false,
      dots:true,      
      infinite: true,      
      slidesToShow: 3,
      speed: 500,
       slidesToScroll: 1
    };
        return (
            <> 
                <section className="propertitysec text-center">
                    <Container>
                        <span>Browse popular properties around the world</span>
                        <h2>Find Properties In Your City</h2>
                        <div className="propertity_rowbx mt-4 mt-md-5 mt-lg-6">
                            <Slider {...settings}>
                              <div className="proptislierbx">
                                <Image src={place_1} alt="" className="img-fluid"/>
                               <div className="discovtxtbx">
                                    <h4 className="mt-0"><span>50</span>Luxury Apartment</h4>
                                    <a href="#.">See all Listings <FaArrowRight/></a>
                                </div>
                              </div>
                              <div className="proptislierbx">
                                <Image src={place_2} alt="" className="img-fluid" />
                                <div className="discovtxtbx">
                                    <h4 className="mt-0"><span>30</span>Luxury villa</h4>
                                    <a href="#.">See all Listings <FaArrowRight/></a>
                                </div>
                              </div>
                              <div className="proptislierbx">
                                <Image src={place_3} alt="" className="img-fluid" />
                                <div className="discovtxtbx">
                                    <h4 className="mt-0"><span>80</span>Apartments for sale</h4>
                                    <a href="#.">See all Listings <FaArrowRight/></a>
                                </div>
                              </div>
                              <div className="proptislierbx">
                                <Image src={place_4} alt="" className="img-fluid" />
                                <div className="discovtxtbx">
                                    <h4 className="mt-0"><span>145</span>Property Listings</h4>
                                    <a href="#.">See all Listings <FaArrowRight/></a>
                                </div>
                              </div>
                              <div className="proptislierbx">
                                <Image src={place_5} alt="" className="img-fluid" />
                                <div className="discovtxtbx">
                                    <h4 className="mt-0"><span>50</span>Luxury Apartment</h4>
                                    <a href="#.">See all Listings <FaArrowRight/></a>
                                </div>
                              </div>
                            </Slider>
                        </div>
                    </Container>
                </section>      
            </>
        );
    }
}

export default PopularProperties;
