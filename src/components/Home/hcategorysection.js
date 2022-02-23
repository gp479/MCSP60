import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/hcategory-bg.jpg';
class HCategorySection extends Component {
  
   render() {    
        return (
            <> 
                <section className="hcatgoriresec bg-prop text-center" style={{ backgroundImage: 'url(' + img + ')' }}>
                    <Container>
                        <h2 className="text-white">Looking to Buy a new property or Sell an existing one?</h2>
                        <div className="hcatbtnbx mt-3 mt-md-4 mt-lg-5">
                            <a href="#." className="btn btn-white">Rent Properties</a>
                            <a href="#." className="btn btn-whitetranf">Buy Properties</a>
                        </div>
                    </Container>
                </section>      
            </>
        );
    }
}

export default HCategorySection;
