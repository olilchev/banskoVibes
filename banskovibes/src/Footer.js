import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import {
// 	Navbar,
// 	NavItem,
// 	NavbarToggler,
// 	Collapse,
// 	NavLink,
// 	Nav,
// 	NavbarBrand
// } from 'reactstrap';
import './custom-styles.css'


export const Footer = () => {
    return (
        <>
      <div className="footer-container">
        <footer className="bg-dark-green text-white position-fixed" style={{ bottom: 0, left: 0, right: 0, width: "100%" }}>
          <div className="container">
            <div className="row mt-auto">
              <div className="col-lg-12 text-center">
                <a href=""><FontAwesomeIcon icon={faFacebook} className="footer-icon" color="white" size="2x" /></a>
                <a href=""><FontAwesomeIcon icon={faWhatsapp} className="footer-icon" color="white" size="2x" /></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} className="footer-icon" color="white" size="2x" /></a>
              </div>
              <div className="col-lg-12 text-center mt-3">
                <p>
                  © {new Date().getFullYear()} Bansko Vibes Apartments. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </>
    );
  };