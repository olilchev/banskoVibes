import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet, faBath, faUtensils, faDoorOpen, faShower, faPerson,faChild, faDog, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

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
    console.log("test");
  }, []);


  

    return (
<>
{/* <div style={{ display: 'flex', flexWrap: 'wrap' }}> */}
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<div style={{ display: 'flex' }}>
<Card id = "flora"
  style={{
    display: 'block',
    width: '18rem',
    padding: 30,
    marginTop: "30px",
    border: 'none' ,
    marginLeft: "30px",
    backgroundColor: 'transparent'
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
    <CardTitle tag="h5" style={{fontWeight: 'bold', fontSize:"200"}}>
      Vesta Apartment
    </CardTitle>
    <CardSubtitle
    className="mb-2"
    style={{
     
      display: "flex",
      justifyContent: "center",
      fontSize: "1.2rem", // optional: change the font size
      style: "fontWeight: 'bold"
    }}>
  Cozzy and quiet near ski slope and hiking routes
</CardSubtitle>
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
 
  <span style={{ paddingRight: "20" }}>
  <FontAwesomeIcon icon={faPerson} size="2x" />
  <FontAwesomeIcon icon={faPerson} size="2x" />
  
  </span>
  <span style={{ paddingRight: "10px" }}>
    <FontAwesomeIcon icon={faDog} size="2x" /> 
    </span>
  <div className="button-container" style={{ marginTop: '15px',  width: '70%'}}>
 
      <CardLink href="#" className="details-custom">
        <Button className="details-custom" size="lg" style={{ fontSize: '12px', padding: 7, width: '380%'}}>Gallery</Button>
      </CardLink>
  </div>
    
  </CardBody>
</Card>
<Card id="vesta"
  style={{
    display: 'block',
    width: '18rem',
    padding: 30,
    marginTop: "30px",
    border: 'none',
    marginLeft: "30px" ,
    backgroundColor: 'transparent'
    
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
  <CardTitle tag="h6" style={{fontWeight: 'bold'}}>
     Flora Apartment
    </CardTitle>
    <CardSubtitle
  className="mb-2"
  style={{
   
    display: "flex",
    justifyContent: "center",
    fontSize: "1.2rem", // optional: change the font size
    style: "fontWeight: 'bold"
  }}
>
  Comfort, mountain view and great location
</CardSubtitle >
{/* <CardBody>
  <video src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" autoplay loop className="card-video"></video>
</CardBody> */}
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/181"
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

  <FontAwesomeIcon icon={faChild} size="1x" />
  <FontAwesomeIcon icon={faPerson} size="2x" />
  
  </span>
  <div className="button-container" style={{ marginTop: '15px',  width: '70%'}}>
 
      <CardLink href="#" className="details-custom">
        <Button className="details-custom" size="lg" style={{ fontSize: '12px', padding: 7, width: '380%'}}>Gallery</Button>
      </CardLink>
  </div>
    
  </CardBody>
</Card>
<Card id="info"
  style={{
    display: 'block',
    width: '31rem',
    padding: 30,
    marginTop: "40px",
    border: 'none',
    marginLeft: "1px" ,
    height: 'auto',
    backgroundColor: 'transparent'
    
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
 

  {/* <CardSubtitle
  style={{
    color: "#193e3c",
    display: "flex",
    justifyContent: "center",
    fontSize: "15px",
  }}
>
  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li>Fully equipped kitchen</li>
    <li>Professional cleaning and disinfection</li>
    <li>Air conditioning and heating</li>
    <li>High-speed Wi-Fi</li>
    <li>24/7 maintenance</li>
    <li>Queen size bed</li>
    <li>Extendable sofa</li>
    <li>Cleaning on request</li>
    <li>Laundry inside</li>
    <li>Free parking</li>
    <li>Pet friendly</li>
    <li>Fresh view</li>
    <li>Great location for all activities</li>
    <li>Fresh towels and linen</li>
    <li>Transfers</li>
    <li>A little cozy terrace</li>
  </ul>
</CardSubtitle> */}




    {/* -------------------------- */}

    
  {/* <CardSubtitle
  style={{
    color: "#193e3c",
    display: "flex",
    justifyContent: "center",
    fontSize: "15px",
    flexDirection: "column",
    paddingLeft: "10px",
  }}
>
  <div
    onClick={() => setIsHighlighted(!isHighlighted)}
    style={{ fontWeight: isHighlighted ? "bold" : "normal" }}
  >
    Fully equipped kitchen
  </div>
  <div
    onClick={() => setIsHighlighted(!isHighlighted)}
    style={{ fontWeight: isHighlighted ? "bold" : "normal" }}
  >
    Proffessional cleaning and desinfection
  </div>
  <div
    onClick={() => setIsHighlighted(!isHighlighted)}
    style={{ fontWeight: isHighlighted ? "bold" : "normal" }}
  >
    Air conditioning and heating
  </div>
  <div
    onClick={() => setIsHighlighted(!isHighlighted)}
    style={{ fontWeight: isHighlighted ? "bold" : "normal" }}
  >
    High-speed Wi-Fi
  </div>
</CardSubtitle> */}







    
    <CardSubtitle
  
  style={{ color: "#193e3c", display: "inline", justifyContent: "center", fontSize: "15px"}}
>
<div style={{ display: "flex", alignItems: "center", }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Preffesional cleaning</span><br />
</div>
<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>24/7 maintenance</span><br />
</div>

<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Fast Wi-Fi</span><br />
</div>

<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Fully euipped kitchen</span><br />
</div>

<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Shared BBQ outside the building</span><br />
</div>

<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Air conditioning and heating</span><br />
</div>

<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Near ski slope and Cabin station</span><br />
</div>

<div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Near ski slope and Cabin station</span><br />
</div>

  <div st yle={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
  <FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Air conditioning and heating</span><br />
  </div>
   
  <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
<FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Near ski slope and Cabin station</span><br />
</div>
      
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <FontAwesomeIcon icon={faCheckCircle} size="2x" style={{ marginRight: "10px" }} /><span style={{ color: "black", fontWeight: "bold" }}>Air conditioning and heating</span><br />
      </div>
      


         
          
          

</CardSubtitle>
  </CardBody>
 
  <CardBody>

    
  </CardBody>
</Card>

</div>

</div>
</>
   

    )
}