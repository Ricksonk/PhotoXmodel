import React from "react";
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { StyledFooter } from './styles';


export function Footer() {

    return (
        <StyledFooter>
            <Container fluid className='bg-dark px-5'>
                <Row className='py-4' >
                    <Col className='col-lg-4 col-sm-6'>
                        <Row >
                            <h4>About Us</h4>
                        </Row>
                        <Row>
                            <p className='descript'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </Row>
                    </Col>

                    <Col className='col-lg-4 col-sm-6'>
                        <Row>
                            <h4>Need Help?</h4>
                        </Row>
                        <Row><a href="#">COSTUMER</a></Row>
                        <Row><a href="#">SUPORT</a></Row>
                        <Row><a href="#" className='email'>photox@email.com</a></Row>

                    </Col>
                    <Col className='col-lg-4 col-sm-6'>
                        <Row>
                            <h4>Stay Connected</h4>
                        </Row>
                        <Row><p className='descript'>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></Row>

                        <Stack direction="horizontal" gap={3}>
                            <div><a href="#" className='face'><FaFacebookSquare /></a></div>
                            <div><a href="#" className='insta'><FaInstagram /></a></div>
                            <div><a href="#" className='twi'><FaTwitterSquare /></a></div>



                        </Stack>
                    </Col>
                </Row>

                <Row>
                    <hr />
                    <p className='copy'>© 2018 Copyright, All Rights Reserved </p>
                </Row>

            </Container>

        </StyledFooter>
    )
}