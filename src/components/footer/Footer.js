import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import CopyrightBar from "./CopyrightBar";
import FooterContact from "./FooterContact";
import FooterLast from "./FooterLast";
import FooterLink from "./FooterLinks";
import References from "./References";

function Footer(props) {
    return(
        // <div>
        //     <CardGroup>
        //     <Card style={{ width: '18rem' }}>
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        //         <Card.Text>
        //         Some quick example text to build on the card title and make up the bulk of
        //         the card's content.
        //         </Card.Text>
        //         <Card.Link href="#">Card Link</Card.Link>
        //         <Card.Link href="#">Another Link</Card.Link>
        //     </Card.Body>
        //     </Card>
        //     {media.map((item) => 
        //         <References key={item.title} title={item.title} url={item.url} image={item.img} />
        //     )}
        //     </CardGroup>
        //     {/* <References /> */}
        //     <CopyrightBar />
        // </div>
		<Container>
			<Row xs={1} md={3} lg={3}>
				<Col>
                    <FooterLink 
                        instaLink="https://www.instagram.com" 
                        twitterLink="https://twitter.com" 
                        youtubeLink="https://www.youtube.com" 
                        linkedInLink="https://www.linkedin.com" 
                    />
                </Col>
				<Col><FooterContact /></Col>
				<Col><FooterLast discordUrl="https://www.google.com"/></Col>
			</Row>
            <Row xs={1} md={1} lg={1}>
                <CopyrightBar />
            </Row>
		</Container>
    )
}

export default Footer