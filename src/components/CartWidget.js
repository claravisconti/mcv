import React from 'react';
import '../App.css';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import user from '../images/user.png';

function CartWidget() {
    return (
        <div>
            <Nav.Link href="#pricing"><i class="fas fa-shopping-cart"></i></Nav.Link>
        </div>
    );
}

export default CartWidget;

