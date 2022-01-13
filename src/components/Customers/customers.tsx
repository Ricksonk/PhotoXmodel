import { StyledContainer } from "./styles";
import React from "react";
import { Container, Row, Col, Carousel, Stack } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import cus1 from '../../assets/cos1.jpg';
import cus2 from '../../assets/cos2.jpg';
import cus3 from '../../assets/cos3.jpg';

export function Customers() {
  return (<StyledContainer id="customers">
    <Container fluid className="customers p-5">
      <Row className="row text-white text-center">
        <Col className="md-4">
          <h1 className="display-4 md-4">Happy Customers</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.</p>
        </Col>
      </Row>
      <Row>
        <Col className="cold-md-6 mx-auto">
          <Carousel indicators={false}>
            <Carousel.Item className="text-center">
              <img
                className="img-fluid rounded-circle m-5 " width={150}
                src={cus1}
                alt="First slide"
              />
              <Col className="text-light"> <h3 className="text-light font-weight-bold mb-3">Monica</h3>
                <p className="">Nulla vitae elit libero, a pharetra augue mollis interdum.</p></Col>

              <Carousel.Caption>

                <Col className="text-center text-warning star">
                  <Stack direction="horizontal" gap={3} >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    < FaStar />

                  </Stack> </Col>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <img
                className="img-fluid rounded-circle m-5 img" width={150}
                src={cus2}
                alt="Second slide"
              />
              <Col className="text-light">
                <h3 className="text-light font-weight-bold mb-3">Michelle</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
              <Carousel.Caption>
                <Col className="text-center text-warning star">
                  <Stack direction="horizontal" gap={3} >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />

                  </Stack> </Col>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <img
                className="img-fluid rounded-circle m-5" width={150}
                src={cus3}
                alt="Third slide"
              />
              <Col className="text-light"> <h3 className="text-light font-weight-bold mb-3">Johnatan</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></Col>
              <Carousel.Caption>

                <Col className="text-center text-warning star">
                  <Stack direction="horizontal" gap={3} >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    < FaStar />

                  </Stack> </Col>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  </StyledContainer>)
}