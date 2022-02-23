import React, {Component} from 'react';

import HomeBanner from '../components/Home/homebanner';
import PropertiyYourCity from '../components/Home/propertiyyourcity';
import PopularProperties from '../components/Home/popularproperties';
import HCategorySection from '../components/Home/hcategorysection';
import GetFreeConsult from '../components/Home/getfreeconsult';
import HNewsUpdateSection from '../components/Home/hnewsupdatebx';
class IndexPage extends Component {
  render() {
      return (
          
            <>
                <HomeBanner/>
                <div className="home_page">
                  <PopularProperties/>
                  <HCategorySection/>
                  <PropertiyYourCity/>
                  <GetFreeConsult/>
                  <HNewsUpdateSection/>
                </div>       
            </>
          
      )
  }
}
export default IndexPage
