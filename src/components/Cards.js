import React from 'react';
// Bootstrap

import'bootstrap/dist/css/bootstrap.min.css';

import "./Cards.css";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { CardDeck } from 'react-bootstrap';

// Create seperate component to hold cards


export default function Cards() {
    return (
        <div className="card-holder">
    
            <CardDeck>
            <div className="card">
            <Card style={{ width: '45rem' }}>
            <Card.Img variant="top" src="placeholder-car.png" />
            <Card.Body>
            <Card.Title>I want to buy a car</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="light">See more </Button>
            </Card.Body>
            </Card>
            </div>

            <div className="card">
            <Card style={{ width: '45rem' }}>
            <Card.Img variant="top" src="placeholder-car.png" />
            <Card.Body>
            <Card.Title>I want to sell a car</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="light">See more </Button>
            </Card.Body>
            </Card>
            </div>

            <div className="card">
            <Card style={{ width: '45rem' }}>
            <Card.Img variant="top" src="placeholder-car.png" />
            <Card.Body>
            <Card.Title>I want to finance my car</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            <Button variant="light">See more </Button>
            </Card.Body>
            </Card>
            </div>

            <div className="card">
            <Card style={{ width: '45rem' }}>
            <Card.Img variant="top" src="placeholder-car.png" />
            <Card.Body>
            <Card.Title>I want to insure my car</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            <Button variant="light">See more </Button>
            </Card.Body>
            </Card>
            </div>
            </CardDeck>


        </div>
    )
}
