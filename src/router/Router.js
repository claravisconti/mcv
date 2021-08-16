// Components
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import Ingreso from '../views/Ingreso';
import Registro from '../views/Registro';
import ItemListContainer from '../views/ItemListContainer';
import ItemDetailContainer from '../views/ItemDetailContainer';
import Carrito from '../views/Carrito';
import NotFound from '../views/NotFound';
import user from '../images/user.png';

function Router() {
    return (

        <BrowserRouter>

            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/carrito">Carrito</Link>
                    </li>
                </ul>
            </div>


            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/ingreso"><Ingreso /></Route>
                <Route path="/registro"><Registro /></Route>
                <Route path="/productos"><ItemListContainer /></Route>
                <Route path="/detalle"><ItemDetailContainer /></Route>
                <Route path="/carrito"><Carrito /></Route>
                <Route path="*"><NotFound /></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default Router;
