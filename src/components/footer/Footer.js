import { CardGroup } from "react-bootstrap";
import CopyrightBar from "./CopyrightBar";
import References from "./References";

function Footer(props) {
    var media = socialMedia
    return(
        <div>
            <CardGroup>
            {media.map((item) => 
                <References key={item.title} title={item.title} url={item.url} image={item.img} />
            )}
            </CardGroup>
            {/* <References /> */}
            <CopyrightBar />
        </div>
    )
}

const socialMedia = [
    {
        title: "Instagram",
        url: "https://www.instagram.com/privatefeed_nofollow/",
        img: "./instagram-text.svg"
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/nithin-pradeep-80822414b/",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
    }
]

export default Footer