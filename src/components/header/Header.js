import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "./../../logo.svg"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import HeaderOption from "./HeaderOption";

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
                <Nav>
                    {headerOptions.map((option) => <HeaderOption key={option.title} title={option.title} url={option.url} />)}
                </Nav>
                <NavbarCollapse className="justify-content-end">
                    <NavDropdown title={data.name}>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                        <NavDropdown.Item>User Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </NavbarCollapse>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }
}

const data = {
    name: "Nithin Pradeep"
}

const headerOptions = [{
    title: "Home",
    url: "/"
},{
    title: "Education",
    url: "/education"
},{
    title: "Work Experience",
    url: "/work-experience"
},{
    title: "Projects",
    url: "/projects"
}]

export default Header