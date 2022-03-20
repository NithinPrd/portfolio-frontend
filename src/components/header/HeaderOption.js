import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function HeaderOption(props) {
    return(
        <Nav.Link>
            <Link to={props.url} class="Avoid-style">{props.title}</Link>
        </Nav.Link>
    )
}