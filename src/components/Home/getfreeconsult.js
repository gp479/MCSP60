import React, { Component } from 'react';
import { Container,Row,Col, Form,FormControl,Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Image from '../../images/getfreeconsult_bg.jpg';

class GetFreeConsult extends Component {
  
   render() {    
        return (
            <> 
                <section className="getfreeconsultfrmsec text-center" style={{ backgroundImage: 'url(' + Image + ')' }}>
                    <Container>
                        <h2 className="text-white">Get a Free Consultation</h2>
                        <div className="commtxtbx">
                            <p>With no pressure to commit and no money collected until we sell your home, why not schedule your free consultation and let our expert knowledge and resources help you realize your goal of buying or selling a home.</p>
                        </div>
                        <Form className="gfconsultformbx">
                            <Row>
                                <Col lg={4} md={4} sm={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Your name" />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Your mail" />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Your phone number" />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control as="select" className="master">
                                            <option>Select your city</option>
                                            <option>NewYork</option>
                                            <option>Milan</option>
                                            <option>Florida</option>
                                            <option>Miami</option>
                                            <option>Havana</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Control as="select" className="master">
                                            <option>Buy a property</option>
                                            <option>Rent a property</option>
                                            <option>Others </option>                                            
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <Button type="submit" className="getfreconsbtn">Send Message</Button>
                                </Col>
                            </Row>
                        </Form>    
                    </Container>
                </section>      
            </>
        );
    }
}

export default GetFreeConsult;
