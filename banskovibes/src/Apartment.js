import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet, faBath, faUtensils, faDoorOpen, faShower, faPerson } from '@fortawesome/free-solid-svg-icons'

import {

    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    Button
} from 'reactstrap';

import './custom-styles.css';

import { useEffect } from "react";
import { useState } from "react";


export const Apartment = () => {
  useEffect(() => {
    console.log("MOUNTING");
  }, []);

    return (

<Card
  style={{
    display: 'block',
    width: '18rem',
    padding: 30,
    marginTop: "30px",
    border: 'none' 
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
    <CardTitle tag="h5">
      Vesta Apartment
    </CardTitle>
    {/* <CardSubtitle
  className="mb-2 text-muted"
  style={{ color: "#193e3c", display: "flex", justifyContent: "center" }}
>
  Style & Comfort
</CardSubtitle> */}
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>

  <span style={{ paddingRight: "10px" }}>
    <FontAwesomeIcon icon={faShower} size="2x" /> 
</span>
  <span style={{ paddingRight: "20px" }}>
  <FontAwesomeIcon icon={faKitchenSet} size="2x" />
  </span>
  <span style={{ paddingRight: "0" }}>
  <FontAwesomeIcon icon={faPerson} size="2x" />
  <FontAwesomeIcon icon={faPerson} size="2x" />
  <FontAwesomeIcon icon={faPerson} size="2x" />
  <FontAwesomeIcon icon={faPerson} size="2x" />
  </span>
  <div className="button-container" style={{ marginTop: '15px',  width: '70%'}}>
 
      <CardLink href="#" className="details-custom">
        <Button className="details-custom" size="lg" style={{ fontSize: '12px', padding: 7, width: '380%'}}>Details</Button>
      </CardLink>
  </div>
    
  </CardBody>
</Card>
   

    )
}