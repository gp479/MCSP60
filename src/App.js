import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.js';
import './components/style.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ContactUs from './pages/contactus';
import About from './pages/about';
import IndexPage from './pages/index';
import AvailableProperty from './pages/availableproperty';
import ViewStatusComplains from './pages/viewstatuscomplains';
import Login from './pages/login';
import DashBoardMain from './components/Dashboard/dashboardmain';
import Faq from './pages/faq';
import Investor from './pages/investor';

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
        <Route path='/viewstatuscomplains' component={ViewStatusComplains} />
        <Route path='/login' component={Login} />
        <Route path='/dashboardmain' component={DashBoardMain} />
       

        </Switch>
		<Footer /> 
    </Router>
  );
}

export default App;
