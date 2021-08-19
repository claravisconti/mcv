// Components
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import Home from '../views/Home';
import Ingreso from '../views/Ingreso';
import Registro from '../views/Registro';
import ItemListContainer from '../views/ItemListContainer';
import ItemDetailContainer from '../views/ItemDetailContainer';
import Carrito from '../views/Carrito';
import Contact from '../views/Contact';
import Perfil from '../views/Perfil';
import NotFound from '../views/NotFound';
import user from '../images/user.png';
import CartWidget from '../components/CartWidget';

function Router() {
    return (

        <BrowserRouter>

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
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link to="/contacto">Contacto</Link></a>
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


            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/ingreso"><Ingreso /></Route>
                <Route path="/registro"><Registro /></Route>
                <Route path="/productos"><ItemListContainer /></Route>
                <Route path="/detalle"><ItemDetailContainer /></Route>
                <Route path="/carrito"><Carrito /></Route>
                <Route path="/contacto"><Contact /></Route>
                <Route path="/perfil"><Perfil /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default Router;
