import React, { Component } from 'react';
import { Container, Row, Col, Form,FormSelect,Button } from 'react-bootstrap';
import img from '../../images/hbanner-img.jpg';

class HomeBanner extends Component {
   render() {
        
        return (
            <> 
                <section className="hbanner_section bg-prop" style={{ backgroundImage: 'url(' + img + ')' }}>
                    <div className="hbanner_cntbx">
                        <Container>
                            <h1 className="text-white text-center">Let Us Guide You Home</h1>                           
                            <Form className="hbannerformsec">
                                <Row>
                                    <Col lg={4} md={4} sm={6}>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col lg={3} md={3} sm={6}>
                                        <Form.Group className="mb-30 mapickuplocbx hbtwocolbx" controlId="formGridState">
                                            <Form.Control as="select" className="master">
                                                <option>Select City</option>
                                                <option>New York</option>
                                                <option>California</option>
                                                <option>Washington</option>
                                                <option>New Jersey</option>
                                            </Form.Control>                                        
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={3} sm={6}>
                                        <Form.Group controlId="" className="mb-30 mapickuplocbx hbtwocolbx">
                                            <div className="select_box">
                                                <span className="map_icon"></span>
                                                <span className="select_arrow"></span> 
                                                    <Form.Control as="select" className="master">
                                                        <option>Select City</option>
                                                        <option>New York</option>
                                                        <option>California</option>
                                                        <option>Washington</option>
                                                        <option>New Jersey</option>
                                                    </Form.Control>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={2} md={2} sm={6}>
                                         <Button type="submit" className="btn-main"> Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    

                </section>       
            </>
        );
    }
}

export default HomeBanner;
