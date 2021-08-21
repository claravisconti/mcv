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
import NavBar from '../components/NavBar';
import CartWidget from '../components/CartWidget';

function Router() {
    return (

        <BrowserRouter>

            <NavBar />

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/ingreso"><Ingreso /></Route>
                <Route path="/registro"><Registro /></Route>
                <Route path="/productos"><ItemListContainer /></Route>
                <Route path="/detalle/:productoId"><ItemDetailContainer /></Route>
                <Route path="/carrito"><Carrito /></Route>
                <Route path="/contacto"><Contact /></Route>
                <Route path="/perfil"><Perfil /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default Router;
