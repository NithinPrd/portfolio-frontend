import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MailIcon from "../../resources/MailIconFooter.svg"
import DiscordIdle from "../../resources/DiscordIdle.svg"
import DiscordPlus from "../../resources/DiscordPlus.svg"

export default class FooterLast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            discordIcon: DiscordIdle
        }
    }

    render() {
        return(
            <Container>
                <Row><br /></Row>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    <img src={MailIcon} width={30} />
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="Subscribe to our newsletter" />
                    </Col>
                </Form.Group>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row><br /></Row>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                    <a href={this.props.discordUrl}><img src={this.state.discordIcon} width={30} /></a>
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="Join us on Discord" />
                    </Col>
                </Form.Group>
            </Container>
        )
    }

    changeIcon = (icon) => {
        this.setState({
            discordIcon: icon
        })
    }
}