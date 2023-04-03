import { Card, CardBody, CardTitle, CardSubtitle, Button, CardLink } from 'reactstrap';
export const Home = () => {
    return (
      

<Card id = "flora"
  style={{
    display: 'block',
    width: '33rem',
    padding: 30,
    marginTop: "30px",
    border: 'none' ,
    marginLeft: "30px",
    backgroundColor: 'transparent'
    // "30px 60px 30px 45px"
  }}
    
 
>
  <CardBody>
    <CardTitle tag="h2" style={{fontSize:"200"}}>
      Professionally managed serviced apartments in a quiet building with perfect location for skiers, hikers and explorers of Bansko.
    </CardTitle>
    <CardTitle tag="h3" style={{ fontSize:"75"}}>
    Enjoy the vibers of Bansko and the magic of Pirin Mountain in a cozzy athmosphere and apartment    </CardTitle>
    <CardSubtitle
    className="mb-2"
    style={{
     
      display: "flex",
      justifyContent: "center",
      fontSize: "1.2rem", // optional: change the font size
      style: "fontWeight: 'bold"
    }}>
 
</CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>


  
 
 
      <CardLink href="#" className="details-custom">
        <Button className="details-custom" size="lg" style={{ fontSize: '12px', padding: 7, width: '380%'}}>Gallery</Button>
      </CardLink>

    
  </CardBody>
</Card>
    )
}