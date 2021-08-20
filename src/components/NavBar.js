import React from 'react';
import '../App.css';
import user from '../images/user.png';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Cards ver todos

const NavBar = () => {
    return (

            <Navbar collapseOnSelect expand="lg" className="pinkNav">
                <Container>
                    <Navbar.Brand href="#home"><h3 className="logo">Bloom</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/">Inicio</Link></a>
                            </li>
                            <NavDropdown title="Colección" id="collasible-nav-dropdown">
                                <li><a class="dropdown-item" href="#"><Link to="/productos">Abrigos</Link></a></li>
                                <li><a class="dropdown-item" href="#"><Link to="/productos">Pantalones</Link></a></li>
                                <li><a class="dropdown-item" href="#"><Link to="/productos">Vestidos</Link></a></li>
                            </NavDropdown>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/productos">Ofertas</Link></a>
                            </li>

                        </Nav>
                        <Nav>
                            <img class="d-none d-lg-block" src={user}></img>
                            <NavDropdown title="Clara Visconti" id="collasible-nav-dropdown">
                                <li><a class="dropdown-item" href="#"><Link to="/perfil">Mi cuenta</Link></a></li>
                                <li><a class="dropdown-item" href="#"><Link to="/carrito">Carrito</Link></a></li>
                                <li><a class="dropdown-item" href="#"><Link to="/ingreso">Cerrar sesión</Link></a></li>
                            </NavDropdown>
                            <Nav.Link href="#pricing"><i class="fas fa-search"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
};

export default NavBar;
