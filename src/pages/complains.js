import React, { Component  } from 'react';
import { Container,Row,Col, Form,FormControl,Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
class Complains extends Component { 
render() {    
return (         
<>
<section className="inner_banner text-center">
  <Container>
    <h2 className="text-white text-uppercase">view complains</h2>
    <nav aria-label="breadcrumb" className="breadcrumbbx">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">view complains</li>
      </ol>
    </nav>
  </Container>
</section>
<section className="innner_page viewstatuscomplains_page">
  <Container>
    <div className="complians_formsec">
      <Form>
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>
          </Col>
          <Col lg={12} md={12} sm={12}>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={8} placeholder="complain" />
          </Form.Group>
          </Col>
          <Col lg={3} md={4} sm={6}>
          <Button type="submit" className="getfreconsbtn">Send Message</Button>
          </Col>
        </Row>
      </Form>
    </div>
  </Container>
</section>
</>          
)
}
}
export default Complains