import React, { Component  } from 'react';
import { Container,Row, Col,Image, Modal,Button, } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class DashBoardMain extends Component { 
  render() {
     return (         
        <>
          <section className="inner_banner text-center">
            <Container>
              <h2 className="text-white text-uppercase">Dashboard</h2>
                  <nav aria-label="breadcrumb" className="breadcrumbbx">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                  </nav>                                 
            </Container> 
          </section>  

                      
      </>          
      )
  }
}
export default DashBoardMain
