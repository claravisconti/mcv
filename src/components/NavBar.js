import React from 'react';
import '../App.css';
import { Navbar, Container, NavDropdown, Nav, Image } from 'react-bootstrap';
import user from '../images/user.png';

function NavBar() {
    return (
        <div>

            {/* Nabvar */}
            <Navbar collapseOnSelect expand="lg" className="pinkNav">
                <Container>
                    <Navbar.Brand href="#home">Bloom</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Inicio</Nav.Link>
                            <NavDropdown title="Colección" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Camperas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Camisas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Blusas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">Pantalones</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Vestidos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Zapatos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Sale</Nav.Link>
                            <Nav.Link href="#pricing">Contacto</Nav.Link>
                           
                        </Nav>
                        <Nav>

                            <img src={user}></img>
                            <NavDropdown title="Clara Visconti" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Carrito</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavBar;
