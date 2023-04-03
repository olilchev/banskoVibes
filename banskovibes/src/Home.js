import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './custom-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCheckCircle } from '@fortawesome/free-solid-svg-icons'


export const Home = () => {
  return (

    <Container className="my-5" >
  <Row >
    <Col md="6">
      <div className="p-3" >
        <h2 className="text-center mb-4">Bansko Vibes Apartments</h2>
        <p>
        <div style={{ display: "flex", alignItems: "center", marginTop: "20px", flexDirection: "column" }}>
        <span style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>Serviced apartments - we manage everything and you enjoy your stay!</span>
        <span style={{ color: "black", fontWeight: "bold" }}>From comfortable beds and well-appointed kitchens, to fast and reliable Wi-Fi and top-notch customer service, we go above and beyond to make sure our guests have an unforgettable stay.</span>
        <span style={{ color: "black", fontWeight: "bold", marginTop: "10px" }}>As a small team, we are able to provide a level of attention and care that is simply not possible with larger properties, and we take great pride in the relationships we build with our guests.</span>
      </div>
        </p>
        
       

        <div className="d-flex justify-content-center mt-3">
          <Button className="details-custom me-3" size="lg" style={{ fontSize: "16px", padding: 7, width: "25%"}}>
            Apartments
          </Button>
          
        </div>
      </div>
    </Col>
    <Col md="6">
      <Row>
        <Col>
          <div className="p-3">
            <h2 className="text-center mb-4">Container 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius risus eu lacus
              vestibulum hendrerit. Ut nec dolor id odio gravida efficitur. Duis ultrices turpis eget
              nibh commodo malesuada. Nulla facilisi. Nullam eget turpis at arcu vestibulum eleifend.
            </p>
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


