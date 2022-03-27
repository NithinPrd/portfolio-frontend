import React from "react";
import { Container, Row } from "react-bootstrap";

export default class FooterContact extends React.Component {
    render() {
        return(
            <Container>
                <Row><br /></Row>
                <Row className="Footer-Title2">Support</Row>
                <Row><br/></Row>
                <Row>Contact Us</Row>
                <Row>FAQ</Row>
                <Row>Source Code</Row>
                <Row>Features</Row>
            </Container>
        )
    }
}