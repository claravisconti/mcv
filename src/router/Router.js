// Components
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Ingreso from '../views/Ingreso';
import Registro from '../views/Registro';
import ItemListContainer from '../views/ItemListContainer';
import ItemDetailContainer from '../views/ItemDetailContainer';
import Carrito from '../views/Carrito';
import NotFound from '../views/NotFound';

function Router() {
    return (

        <BrowserRouter>
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
