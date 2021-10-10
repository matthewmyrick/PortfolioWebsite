import '../css/Home.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import waves from '../images/waves-homepage.jpg';

function Home() {
  return (
    <div className="Home">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={waves} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    </div>
    
  );
}

export default Home;