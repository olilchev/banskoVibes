
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet, faBath, faUtensils, faDoorOpen, faShower, faPerson,faChild, faCheck } from '@fortawesome/free-solid-svg-icons'

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
    marginLeft: "30px"
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
    <CardTitle tag="h5">
      Vesta Apartment
    </CardTitle>
    <CardSubtitle
  className="mb-2 text-muted"
  style={{ color: "#193e3c", display: "flex", justifyContent: "center" }}
>
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
  <span style={{ paddingRight: "0" }}>
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
<Card id="vesta"
  style={{
    display: 'block',
    width: '18rem',
    padding: 30,
    marginTop: "30px",
    border: 'none',
    marginLeft: "30px" 
    
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
    <CardTitle tag="h5">
     Flora Apartment
    </CardTitle>
    <CardSubtitle
  className="mb-2 text-muted"
  style={{ color: "#193e3c", display: "flex", justifyContent: "center" }}
>
Comfort, mountain view and great location
</CardSubtitle>
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
        <Button className="details-custom" size="lg" style={{ fontSize: '12px', padding: 7, width: '380%'}}>Details</Button>
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
    marginLeft: "1px" 
    
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>

    
    <CardSubtitle
  
  style={{ color: "#193e3c", display: "flex", justifyContent: "center", fontSize: "20px", fontWeight: "bold" }}
>

Fully equipped kitchen <br />
          Proffessional cleaning and desinfection<br />
          Air conditioning and heating <br />
          High-speed Wi-Fi <br />
          
          Queen size bed <br />
          Cleaning on request<br />
          Laundry inside<br />
          Free parking <br />
         
          Fresh towels and linen<br />
          Transfers<br />
          Good option for digital nomads!<br />

</CardSubtitle>
  </CardBody>
 
  <CardBody>

    
  </CardBody>
</Card>

</div>
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
<h2>Profesionally cleaning and desinfection</h2>
</div>
</div>
</>
   

    )
}