import React, { useState } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBModal,
  MDBModalDialog, MDBModalBody,MDBModalContent,MDBCollapse 
} from 'mdb-react-ui-kit';
import { BrowserRouter as  NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const [lrModal, setloginregisterModal] = useState(false);
  const toggleShow = () => setloginregisterModal(!lrModal)
  return (
    <header>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
    
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <NavLink className="nav-link" exact activeClassName="active"  to="/">
                Index
              </NavLink>
            </MDBNavbarItem>          
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  tenanent
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Available for rent</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>complaints for property</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>view status complains </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  property
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Available for property</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>tenants/changes status</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>verify/Generate lease </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>investor</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='contactus'>contact us</MDBNavbarLink>
            </MDBNavbarItem>
           
          </MDBNavbarNav>

          <MDBBtn onClick={toggleShow} className="huserbtn"><FaUserAlt /></MDBBtn>
                <MDBModal show={lrModal} getOpenState={(e: any) => setloginregisterModal(e)} tabIndex='-1'>
                  <MDBModalDialog>
                    <MDBModalContent>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        <MDBModalBody> 
                          <ul className="nav nav-tab nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link show active" id="tab-login" data-mdb-toggle="tab"  href="#tab-login" role="tab" aria-controls="tab-login">Login</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="tab-register" data-mdb-toggle="tab" href="#tab-register" role="tab" aria-controls="tab-register">Register</a>
                            </li>
                          </ul>                         
                          <div className="tab-content" id="ex1-content">
                            <div className="tab-pane show active" id="tab-login" role="tabpanel" aria-labelledby="tab-login">
                              <form>
                                <div className="text-center mb-3">
                                  <p>Sign in with:</p>
                                  <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                  </button>

                                  <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                  </button>

                                  <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                  </button>

                                  <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                  </button>
                                </div>

                                <p className="text-center">or:</p>

                               
                                <div className="form-outline mb-4">
                                  <input type="email" id="loginName" className="form-control" />
                                  <label className="form-label" for="loginName">Email or username</label>
                                </div>

                              
                                <div className="form-outline mb-4">
                                  <input type="password" id="loginPassword" className="form-control" />
                                  <label className="form-label" for="loginPassword">Password</label>
                                </div>

                                
                                <div className="row mb-4">
                                  <div className="col-md-6 d-flex justify-content-center">
                                   
                                    <div className="form-check mb-3 mb-md-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="loginCheck"
                                        checked
                                      />
                                      <label className="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                  </div>

                                  <div className="col-md-6 d-flex justify-content-center">
                                    
                                    <a href="#!">Forgot password?</a>
                                  </div>
                                </div>

                                
                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                
                                <div className="text-center">
                                  <p>Not a member? <a href="#!">Register</a></p>
                                </div>
                              </form>
                            </div>
                            <div className="tab-pane" id="tab-register" role="tabpanel" aria-labelledby="tab-register">
                              <form>
                                <div className="form-outline mb-4">
                                  <input type="text" id="registerName" className="form-control" />
                                  <label className="form-label" for="registerName">Name</label>
                                </div>                     
                                <div className="form-outline mb-4">
                                  <input type="text" id="registerUsername" className="form-control" />
                                  <label className="form-label" for="registerUsername">Username</label>
                                </div>                                
                                <div className="form-outline mb-4">
                                  <input type="email" id="registerEmail" className="form-control" />
                                  <label className="form-label" for="registerEmail">Email</label>
                                </div>                               
                                <div className="form-outline mb-4">
                                  <input type="password" id="registerPassword" className="form-control" />
                                  <label className="form-label" for="registerPassword">Password</label>
                                </div>                             
                                <div className="form-outline mb-4">
                                  <input type="password" id="registerRepeatPassword" className="form-control" />
                                  <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                                </div>                            
                                <div className="form-check d-flex justify-content-center mb-4">
                                  <input className="form-check-input me-2" type="checkbox" 
                                    value=""
                                    id="registerCheck"
                                    checked
                                    aria-describedby="registerCheckHelpText"
                                  />
                                  <label className="form-check-label" for="registerCheck">
                                    I have read and agree to the terms
                                  </label>
                                </div>

                               
                                <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                              </form>
                            </div>
                          </div>               
 
                        </MDBModalBody>             
                     </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </header>
  );
}