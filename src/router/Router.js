// Components
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import Ingreso from '../views/Ingreso';
import Registro from '../views/Registro';
import ItemListContainer from '../views/ItemListContainer';
import ItemDetailContainer from '../views/ItemDetailContainer';
import Carrito from '../views/Carrito';
import Contact from '../views/Contact';
import NotFound from '../views/NotFound';
import user from '../images/user.png';
import CartWidget from '../components/CartWidget';

function Router() {
    return (

        <BrowserRouter>

            <div>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-brand" href="#"><h3>Bloom</h3></div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"><Link to="/">Inicio</Link></a>
                                </li>
                              
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Colección
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#"><Link to="/productos">Abrigos</Link></a></li>
                                        <li><a class="dropdown-item" href="#"><Link to="/productos">Pantalones</Link></a></li>
                                        <li><a class="dropdown-item" href="#"><Link to="/productos">Vestidos</Link></a></li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"><Link to="/contacto">Contacto</Link></a>
                                </li>
                                
                                
                                <img class="d-none d-lg-block" src={user}></img>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Clara Visconti
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#"><Link to="/productos">Perfil</Link></a></li>
                                        <li><a class="dropdown-item" href="#"><Link to="/productos">Carrito</Link></a></li>
                                        <li><a class="dropdown-item" href="#"><Link to="/productos">Cerrar Sesión</Link></a></li>
                                    </ul>
                                </li>
                             
                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </div>


            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/ingreso"><Ingreso /></Route>
                <Route path="/registro"><Registro /></Route>
                <Route path="/productos"><ItemListContainer /></Route>
                <Route path="/detalle"><ItemDetailContainer /></Route>
                <Route path="/carrito"><Carrito /></Route>
                <Route path="/contacto"><Contact /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default Router;
