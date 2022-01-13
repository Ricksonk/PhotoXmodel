import { StyledContainer } from "./styles";
import { Container, Row, Col, Card } from 'react-bootstrap';
import React from "react";

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/wedding.jpg';
import img3 from '../../assets/party.jpg';
import img4 from '../../assets/business.jpg';
import img5 from '../../assets/fashion.jpg';
import img6 from '../../assets/family.jpg';


export function Collection() {
  return (<StyledContainer id="collection">
    <div className="bg-secondary py-4">
      <Container fluid>
        <Row className="text-white text-center">
          <Col className="md-4">
            <h1 className="display-4 md-4">Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, sint quam inventore. </p>


          </Col>
        </Row>
        <Container fluid>
          <Row className="px-5 py-3">
            <Card style={{ width: '35rem' }}className="mx-3 mt-4">
              <Card.Img variant="top" src={img1} />
              <div className="card-img-overlay">
                <h5 className="text-white font-weight-bold p-2 heading">NATURE PHOTOGRAPHY</h5>

              </div>
            </Card>

            <Card style={{ width: '35rem' }} className="mx-3 mt-4">
              <Card.Img variant="top" src={img2} />
              <div className="card-img-overlay">
                <h5 className="text-white font-weight-bold p-2 heading">NATURE PHOTOGRAPHY</h5>

              </div>
            </Card>
            <Card style={{ width: '35rem' }} className="mx-3 mt-4">
              <Card.Img variant="top" src={img3} />
              <div className="card-img-overlay">
                <h5 className="text-white font-weight-bold p-2 heading">NATURE PHOTOGRAPHY</h5>

              </div>
            </Card>
            <Card style={{ width: '35rem' }} className="mx-3 mt-4">
              <Card.Img variant="top" src={img4} />
              <div className="card-img-overlay">
                <h5 className="text-white font-weight-bold p-2 heading">NATURE PHOTOGRAPHY</h5>

              </div>
            </Card>
            <Card style={{ width: '35rem' }}className="mx-3 mt-4">
              <Card.Img variant="top" src={img5} />
              <div className="card-img-overlay">
                <h5 className="text-white font-weight-bold p-2 heading">NATURE PHOTOGRAPHY</h5>

              </div>
            </Card>
            <Card style={{ width: '35rem' }}className="mx-3 mt-4">
              <Card.Img variant="top" src={img6} />
              <div className="card-img-overlay">
                <h5 className="text-white font-weight-bold p-2 heading">NATURE PHOTOGRAPHY</h5>

              </div>
            </Card>

          </Row>

        </Container>

      </Container>

    </div>
  </StyledContainer>)
}