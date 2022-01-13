import { StyledContainer } from "./styles";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import camera from "../../assets/camera.png"
import {FaCogs, FaRegThumbsUp, FaHandshake } from "react-icons/fa"


export function Mission(){
    return(<StyledContainer className="p-5 bg-dark" id="mission">
        <Container fluid>
            <Row className="my-5 text-white text-center" >
                <Col className="md-4">
                    <h1 className="display-4 md-4">Our Mission</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>
                </Col>
            </Row>
           <Row className="my-5">
               <Col className="col-md-4 text-center">
                   <FaCogs className="icon text-danger mb-4"/>
                   <h1 className="text-white mb-3">Creativity</h1>
                   <p className="text-muted">Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>

               </Col>
               <Col className="col-md-4 text-center">
                   <FaRegThumbsUp className="icon text-danger mb-4"/>
                   <h1 className="text-white mb-3">Quality</h1>
                   <p className="text-muted">Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>

               </Col>
               <Col className="col-md-4 text-center">
                   <FaHandshake className="icon text-danger mb-4"/>
                   <h1 className="text-white mb-3">Experience</h1>
                   <p className="text-muted">Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. </p>

               </Col>
           </Row>

            </Container>

            <Container fluid>
                <Row className="allign-items-center">
                    <Col className="col-lg-5 text-center">
                        <img src={camera} width="350" className="img-fluid camera-img "></img>
                    </Col>
                    <Col className="col-lg-7 text-white text-lg-right text-center mission-text">
                    <h1>We know what we do</h1>
                   <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
   
                    </Col>
                </Row>
            </Container>
    </StyledContainer>)
}