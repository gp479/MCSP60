import React, { Component  } from 'react';
import { Container, } from 'react-bootstrap';
import ReactDOM from 'react-dom';
class ViewStatusComplains extends Component { 
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
            <h1>TEST</h1>
          </section>              
      </>          
      )
  }
}
export default ViewStatusComplains
