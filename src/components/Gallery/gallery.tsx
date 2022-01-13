import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { PhotoGallery } from "./photoGallery"
import { StyledContainer } from "./styles";


export function Gallery() {


    return (
        <StyledContainer className="py-5" id="gallery">
            <Container fluid>
                <Row>
                    <Col><h1 className="dispĺay-4 md-4 text-center">Gallery</h1>
                        <p className="text-center py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Col>
                    <Container fluid>

                        <div className=" flex-wrap justify-content-center"> <PhotoGallery /></div>

                    </Container>
                </Row>

            </Container>
        </StyledContainer>
    )
}