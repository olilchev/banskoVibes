import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './custom-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


export const Home = () => {
  return (

    <Container className="my-5" >
  <Row style={{ marginTop: "60px" }}>
    <Col md="6">
      <div className="p-3" >
        <h2 className="text-center mb-4">Bansko Vibes Apartments</h2>
        <p>
        <div style={{ display: "flex", alignItems: "center", marginTop: "20px", flexDirection: "column" }}>
        <span style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>Serviced apartments - we manage everything and you enjoy your stay!</span>
        <span style={{ color: "black",  }}>From comfortable beds and well-appointed kitchens, to fast and reliable Wi-Fi and top-notch customer service, we go above and beyond to make sure our guests have an unforgettable stay.</span>
        <span style={{ color: "black", marginTop: "10px" }}>As a small team, we are able to provide a level of attention and care that is simply not possible with larger properties, and we take great pride in the relationships we build with our guests.</span>
      </div>
        </p>
        
       

        <div className="d-flex justify-content-center mt-3">
        <img
    alt="Card cap"
    src="https://picsum.photos/318/181"
    width="50%"
  />
          <Button className="details-custom me-3" size="lg" style={{ marginTop: "10px",fontSize: "16px", padding: 7, width: "25%"}}>
            Apartments
          </Button>
          
        </div>
      </div>
    </Col>
    <Col md="4">
      <Row style={{ marginTop: "3px" }}>
        <Col>
          <div className="p-3">
            <h2 className="text-center mb-4">Our Mission</h2>
            
            <div style={{ display: "flex", alignItems: "center", marginTop: "20px", flexDirection: "column" }}>
        <span style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>Serviced apartments - we manage everything and you enjoy your stay!</span>
        <span style={{ color: "black",  }}>From comfortable beds and well-appointed kitchens, to fast and reliable Wi-Fi and top-notch customer service, we go above and beyond to make sure our guests have an unforgettable stay.</span>
        <span style={{ color: "black", marginTop: "10px" }}>As a small team, we are able to provide a level of attention and care that is simply not possible with larger properties, and we take great pride in the relationships we build with our guests.</span>
      </div>
            <div className="d-flex justify-content-end mt-3">
              <Button className="details-custom" size="lg" style={{ fontSize: "16px", padding: 7, width: "150%" }}>
                Book Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>

  );
};


