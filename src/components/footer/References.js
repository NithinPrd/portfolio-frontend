import { useState } from "react";
import { Card } from "react-bootstrap";

export default function References(props) {
    console.log(props.image)
    const [border, setBorder] = useState("secondary")
    return(
        <Card style={cardStyle} border={border} 
        onMouseEnter={() => setBorder("primary")}
        onMouseLeave={() => setBorder("secondary")}>
            <Card.Img src={props.image} variant="bottom" height="75%" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Follow me, please. I'm desperate.</Card.Text>
            </Card.Body>
            <Card.Link href={props.url}>{props.title}</Card.Link>
        </Card>
    )
}

const cardStyle = {
    margin: "10px",
    padding: "10px"
}