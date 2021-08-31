import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const title = "Crypto Coins powered Coingecko + React";
const main = [
  {url: "/home", name: "Home"},
  {url: "/about", name: "About"},
  {url: "/More", name: "More"},
];

const Navigate = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        {main.map((d) => (
          <Nav.Link href={d.url}>{d.name}</Nav.Link>
        ))} 
        </Nav>        
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigate;