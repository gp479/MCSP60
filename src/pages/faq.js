import React, { Component  } from 'react';
import { Container,Accordion, Card,Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Faq extends Component { 
  render() {
      return (         
            <>
              <section className="inner_banner text-center">
                <Container>
                  <h2 className="text-white text-uppercase">faq</h2>
                      <nav aria-label="breadcrumb" className="breadcrumbbx">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">faq</li>
                        </ol>
                      </nav>                                 
                </Container> 
              </section>  

              <section className="innner_page faq_page">
                <Container>
                  <div className="faq_bx">
                    <h3>Buy A property</h3>
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Lorem ipsum dolor sit amet?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            consectetur adipisicing elit. Earum, eius ?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Labore omnis unde in dicta neque eligendi ?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="faq_bx">
                    <h3>Rent a Property</h3>
                    <Accordion eventKey="3">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Iusto aperiam esse quasi eum quod?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            Lorem ipsum dolor sit amet?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            Consectetur adipisicing elit Totam quisquam?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="faq_bx">
                    <h3>Mortgage a Property</h3>
                    <Accordion eventKey="6">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="6">
                            Labore omnis unde in dicta neque eligendi ?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                          <Card.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="7">
                            Lorem consectetur adipisicing elit Dolore veniam ?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="8">
                             consectetur adipisicing elit. Earum, eius ?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="8">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="faq_bx">
                    <h3>Terms & Conditions</h3>
                    <Accordion eventKey="6">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="6">
                            Voluptates accusamus officia laudantium ullam ad id?
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="7">
                            Lorem ipsum dolor sit amet? 
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="8">
                             Molestias incidunt pariatur modi enim.
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="8">
                          <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget leo massa. Mauris sed enim ac orci semper consequat sed vel ipsum. Nulla mauris arcu, malesuada sollicitudin condimentum vitae, porta quis est
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </Container>
              </section>
            </>          
      )
  }
}
export default Faq
