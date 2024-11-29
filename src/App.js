import React from 'react';
import './App.css';
import { Button, Card, Carousel, Container, Form, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
    <Navbar bg="primary" data-bs-theme='dark' >
        <Container>
          <Navbar.Brand href="#home">Norway</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1049922746/fr/photo/color%C3%A9-aurore-bor%C3%A9ale.webp?a=1&b=1&s=612x612&w=0&k=20&c=JVC4Vle-NPwf-_xsdn0wJ7WMU_Rk7x1nELnmbRfvVwE="
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Chasing the Northern Lights</h5>
          <p>Discover Norway's iconic fjords, where dramatic cliffs plunge into crystal-clear waters.
             These natural wonders, such as Geirangerfjord and Nærøyfjord, are perfect for scenic cruises and photography.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1500420309/fr/photo/reflet-parfait-du-village-de-reine-sur-leau-du-fjord-dans-les-%C3%AEles-lofoten-norv%C3%A8ge.webp?a=1&b=1&s=612x612&w=0&k=20&c=a5mM-yXrq5kF2vFYp-WmCPTIDdWjGtECdx-KMsKWGsU="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Montagnes et aventures norvégiennes</h5>
          <p>Experience the magic of the Aurora Borealis in Norway’s Arctic regions.
             Tromsø and the Lofoten Islands offer some of the best spots to witness this natural light show dancing across the sky.

.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1261741158/fr/photo/balestrand-norv%C3%A8ge.webp?a=1&b=1&s=612x612&w=0&k=20&c=Blg82D6aUs5jAucax3KYqC6NNA66T4TjUkAgGBdViDE="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>The Majestic Fjords of Norwayl</h5>
          <p>
          Discover Norway's iconic fjords, where dramatic cliffs plunge into crystal-clear waters.
           These natural wonders, such as Geirangerfjord and Nærøyfjord, are perfect for scenic cruises and photography.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div classname='intro'>
<h1>Norway
</h1>
<p>Norway, located in Scandinavia, is renowned for its breathtaking natural landscapes, including majestic fjords, snow-capped mountains, and the northern lights. 
  The country boasts a high quality of life and a rich culture deeply rooted in Viking history.
   Oslo, its capital, is famous for its modern museums and green spaces.
   Norway is a paradise for outdoor enthusiasts, offering activities like hiking, skiing, and fjord cruises.
   Its pristine nature and commitment to sustainability make it a unique destination.</p>
    </div>
  
   <h1>room</h1>

   <div class='cards'>
    <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="https://media.istockphoto.com/id/1049922746/fr/photo/color%C3%A9-aurore-bor%C3%A9ale.webp?a=1&b=1&s=612x612&w=0&k=20&c=JVC4Vle-NPwf-_xsdn0wJ7WMU_Rk7x1nELnmbRfvVwE=" />
   <Card.Body>
     <Card.Title>Chasing the Northern Lights</Card.Title>
     <Card.Text>
     Discover Norway's iconic fjords, where dramatic cliffs plunge into crystal-clear waters. 
     These natural wonders, such as Geirangerfjord and Nærøyfjord, are perfect for scenic cruises and photography.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>

 <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="https://media.istockphoto.com/id/1500420309/fr/photo/reflet-parfait-du-village-de-reine-sur-leau-du-fjord-dans-les-%C3%AEles-lofoten-norv%C3%A8ge.webp?a=1&b=1&s=612x612&w=0&k=20&c=a5mM-yXrq5kF2vFYp-WmCPTIDdWjGtECdx-KMsKWGsU=" />
   <Card.Body>
     <Card.Title>Norwegian Mountains and Adventure</Card.Title>
     <Card.Text>
     Explore Norway’s rugged peaks and endless trails, ideal for hiking and skiing. 
     From the famous Trolltunga to the Jotunheimen National Park, adventure awaits in every corner.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>

 <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="https://media.istockphoto.com/id/1261741158/fr/photo/balestrand-norv%C3%A8ge.webp?a=1&b=1&s=612x612&w=0&k=20&c=Blg82D6aUs5jAucax3KYqC6NNA66T4TjUkAgGBdViDE=" />
   <Card.Body>
     <Card.Title>The Majestic Fjords of Norwayl</Card.Title>
     <Card.Text>
     Discover Norway's iconic fjords, where dramatic cliffs plunge into crystal-clear waters.
      These natural wonders, such as Geirangerfjord and Nærøyfjord, are perfect for scenic cruises and photography.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
   </Card.Body>
 </Card>
 </div>
 <h1>Contact</h1>
 <Form className='contact'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
<footer className='footer'>
  copy rigth @2024
</footer>
 </div>
  )
}

export default App;
