import { Container, Button, Row, Col } from "react-bootstrap";
import { StyleContainer } from './styles'
import React from "react";

export function Contact() {
    return (

        <StyleContainer className="p-5" id="contact">
            <Container fluid>
                <Row>
                    <Col className="col-lg-3 pb-4">
                        <h4 className="display-4 mb-5">Get In Touch</h4>
                        <form className="contact-form" action="index.html" method="post">
                            <div className="form-group py-4">

                                <input type="text" className="form-control my-2 p-2 input"
                                    placeholder="Name" required></input>
                            </div>
                            <div className="form-group py-4">
                                <input type="email" className="form-control my-2 p-2 input" placeholder="Email Address" required />
                            </div>
                            <Button type="submit" className="btn tbn-block p-2 font-weight-bold submit-button">Submit</Button>
                        </form>
                    </Col>
                </Row>

            </Container>
        </StyleContainer>
    );
}