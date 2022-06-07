import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './components/style.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ContactUs from './pages/contactus';
import About from './pages/about';
import IndexPage from './pages/index';
import AvailableProperty from './pages/availableproperty';
import PropertyRent from './pages/propertyrent';
import Complains from './pages/complains';
import Login from './pages/login';
import Faq from './pages/faq';
import Investor from './pages/investor';
import MyProfile from './components/Dashboard/my-profile';
import DashBoardMain from './components/Dashboard/dashboardmain';
import Notification from './components/Dashboard/notification';
import Reviews from './components/Dashboard/reviews';
import MyProperties from './components/Dashboard/myproperties';
import ComplainStatus from './components/Dashboard/complainstatus';
function App() {
  return (
    <Router>
		<Header />
        <Switch>
  				<Route exact path='/' component={ IndexPage } />	
  				<Route path='/contactus' component={ ContactUs } />
  				<Route path='/about' component={ About } />
          <Route path='/faq' component={ Faq } />   
          <Route path='/availableproperty' component={AvailableProperty} /> 
          <Route path='/propertyrent' component={PropertyRent} />
          <Route path='/complains' component={Complains} />
          <Route path='/investor' component={Investor} />
          <Route path='/login' component={Login} />
          <Route path='/my-profile' component={MyProfile} />  
          <Route path='/dashboardmain' component={DashBoardMain} />
           <Route path='/notification' component={Notification} />
           <Route path='/reviews' component={Reviews} />
           <Route path='/myproperties' component={MyProperties} />
           <Route path='/complainstatus' component={ComplainStatus} />
        </Switch>
		<Footer /> 
    </Router>
  );
}

export default App;
