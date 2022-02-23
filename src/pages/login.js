import React, { Component  } from 'react';
import { Container,Tabs,Tab,Row,Col,Form,FormControl,Button, Image} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import loginimg from '../images/loginimg.png';

class Login extends Component { 
  render() {
      return (         
        <>
          <section className="inner_banner text-center">
            <Container>
              <h2 className="text-white text-uppercase">login/register</h2>
                  <nav aria-label="breadcrumb" className="breadcrumbbx">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">login/register</li>
                    </ol>
                  </nav>                                 
            </Container> 
          </section>
          <section className="login_registerpage">
            <Container>
               <Tabs defaultActiveKey="login">
                  <Tab eventKey="login" title="login">
                    <Row className="justify-content-center">
                      <Col lg={6} md={6} sm={6}>
                        <Form className="gfloginformbx">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="email" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                      <div className="checkremebertxt">
                                        <Form.Check aria-label="option 1" />
                                        Remember me
                                      </div>
                                      <div className="forgotpasstxt">
                                        <a href="#.">Forgot Password?</a>
                                      </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} sm={6}>
                                    <Button type="submit" className="btn">Log In</Button>
                                </Col>
                            </Row>
                        </Form>   
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div className="logregist-img text-center">
                          <Image src={loginimg} alt=""/>
                          <p>Welcome Back! Please Login to your Account for latest property listings.</p>                    
                        </div>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="register" title="register">
                    <Row className="justify-content-center">
                      <Col lg={6} md={6} sm={6}>
                        <Form className="gfregisterformbx">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Username" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Email Address" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>
                                </Col> 
                                <Col lg={12} md={12} sm={12}>
                                    <Form.Group className="mb-3">
                                      <div className="checkremebertxt">
                                        <Form.Check aria-label="option 1" />
                                          I have read and accept terms & conditions
                                      </div>                                       
                                    </Form.Group>
                                </Col>                                
                                <Col lg={4} md={4} sm={6}>
                                    <Button type="submit" className="btn">Sign Up</Button>
                                </Col>
                            </Row>
                        </Form>   
                      </Col>
                      <Col lg={6} md={6} sm={6}>
                        <div className="logregist-img text-center">
                            <Image src={loginimg} alt=""/>
                            <p>Create an account to find the best Property for you.</p>                      
                        </div>
                      </Col>
                    </Row>                  
                  </Tab>                  
                </Tabs>
            </Container>
          </section>                      
        </>          
      )
  }
}
export default Login
