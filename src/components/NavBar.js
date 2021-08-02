import React from 'react';
import '../App.css';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import user from '../images/user.png';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" className="pinkNav">
                <Container>
                    <Navbar.Brand href="#home"><h3 className="logo">Bloom</h3></Navbar.Brand>
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
                            <img class="d-none d-lg-block" src={user}></img>
                            <NavDropdown title="Clara Visconti" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Carrito</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                            <CartWidget/>
                            <Nav.Link href="#pricing"><i class="fas fa-search"></i></Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default NavBar;
