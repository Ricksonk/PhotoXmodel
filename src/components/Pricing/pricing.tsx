import { StyledContainer } from "./styles";
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import React from "react";


export function Pricing() {
    return (<StyledContainer className="bg-light text-center my-5" id="pricing">
        <Container fluid className="px-5">
            <Row className="text-muted text-center">
                <Col className="py-4 md-4">
                    <h1 className="display-4 md-4">Join Us</h1>
                    <div className="underline-dark mb-4"></div>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
            <Row >
                <Col className="col-lg-4 ">
                    <Card style={{ width: '22rem' }} className="card-1 py-4 my-4">
                        <Card.Body>
                            <Card.Title className="text-uppercase font-weight-bold mb-5">Monthly Membership</Card.Title>
                            <Card.Subtitle className="display-4">$19</Card.Subtitle>
                            <ListGroup variant="flush" >
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item">Photoshop</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item">After Effects</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item border-0">Video Montage</ListGroup.Item>
                                <Button variant="" className="price-card-button">SIGN-UP!</Button>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-4">
                    <Card style={{ width: '22rem' }} className="card-2 py-4 my-4">
                        <Card.Body>
                            <Card.Title className="text-uppercase font-weight-bold mb-5">Annual Membership</Card.Title>
                            <Card.Subtitle className="display-4">$199</Card.Subtitle>
                            <ListGroup variant="flush" >
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item">Photoshop</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item">After Effects</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item border-0">Video Montage</ListGroup.Item>
                                <Button variant="" className="price-card-button">SIGN-UP!</Button>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-lg-4">
                    <Card style={{ width: '22rem' }} className="card-3 py-4 my-4">
                        <Card.Body>
                            <Card.Title className="text-uppercase font-weight-bold mb-5">Unlimited Membership</Card.Title>
                            <Card.Subtitle className="display-4">$499</Card.Subtitle>
                            <ListGroup variant="flush" >
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item">Photoshop</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item">After Effects</ListGroup.Item>
                                <ListGroup.Item className="font-weight-bold py-3 card-list-item border-0">Clip Maker</ListGroup.Item>
                                <Button variant="" className="price-card-button">SIGN-UP!</Button>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                

            </Row>

        </Container>

    </StyledContainer>)
}