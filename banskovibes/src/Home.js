import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './custom-styles.css';


export const Home = () => {
  return (

    <Container className="my-5">
  <Row>
    <Col md="6">
      <div className="p-3">
        <h2 className="text-center mb-4">Introduction:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius risus eu lacus
          vestibulum hendrerit. Ut nec dolor id odio gravida efficitur. Duis ultrices turpis eget
          nibh commodo malesuada. Nulla facilisi. Nullam eget turpis at arcu vestibulum eleifend.
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


