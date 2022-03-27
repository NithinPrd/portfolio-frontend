import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InstagramIcon from "../../resources/InstagramFooterIcon.svg"
import LinkedInIcon from "../../resources/LinkedInFooterIcon.svg"
import TwitterIcon from "../../resources/TwitterFooterIcon.svg"
import YoutubeIcon from "../../resources/YoutubeFooterIcon.svg"

export default class FooterLinks extends React.Component {
    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <Container className="Footer-Title">Portfolio</Container>
                    </Row>
                    <Row><br/></Row>
                    <Row>
                        <Col><a href={this.props.instaLink}><img src={InstagramIcon} width={40} /></a></Col>
                        <Col><a href={this.props.twitterLink}><img src={TwitterIcon} width={40} /></a></Col>
                        <Col><a href={this.props.youtubeLink}><img src={YoutubeIcon} width={40} /></a></Col>
                        <Col><a href={this.props.linkedInLink}><img src={LinkedInIcon} width={40} /></a></Col>
                    </Row>
                </Container>
            </div>
        )
    }

    clickedIcon() {
        console.log("Hello")
    }
}