import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

import './custom-styles.css';

export const NavigationBar = () => {


	return (

        <>
        <Navbar className="navbar-custom" dark expand="md" fixed="top">
  <NavbarBrand href="/" className="pulse-animation">
    Bansko Vibes
  </NavbarBrand>
  <Nav className="justify-content-between" navbar>
    <NavItem>
      <NavLink href="#">Apartments</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Services</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Book Now!</NavLink>
    </NavItem>
    <NavItem className="ml-auto">
      <NavLink href="/login">
        
      </NavLink>
    </NavItem>
  </Nav>
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href="#">
        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 beat-animation" />
        Conatct Us!
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        <FontAwesomeIcon icon={faFacebook} className="mr-2 beat-animation" />
        Subscribe!
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        <FontAwesomeIcon icon={faInstagram} className="mr-2" />
        Instagram
      </NavLink>
    </NavItem>
  </Nav>
</Navbar>
</>

  )
  }