import React from "react";

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
    padding: 40,
    marginTop: "20px"
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
    <CardTitle tag="h5">
      Vesta Apartment
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Cozzy and Comfort
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>
    <CardText>
      1 bedroom, 1 bathroom, fully equipped kitchen, balkony, great location
    </CardText>
    <CardLink href="#" className="details-custom">
      Details
    </CardLink>
   
  </CardBody>
</Card>
   

    )
}