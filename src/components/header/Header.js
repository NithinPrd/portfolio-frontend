import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./../../logo.svg"
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} width="50" alt="Logo" />
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/" class="Avoid-style">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/education" class="Avoid-style">Education</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="work-experience" class="Avoid-style">Work Experience</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="projects" class="Avoid-style">Projects</Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}

export default Header