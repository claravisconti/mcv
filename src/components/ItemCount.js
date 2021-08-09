import React from 'react';
import '../App.css';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import user from '../images/user.png';

class ItemCount extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 1 }
    }

    add() {
        if (this.state.count >= 1) {
        this.setState({ count: this.state.count + 1 });
        }
    }

    remove() {  
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {

        return (
            <div>
                <p>Cantidad:{this.state.count}</p>
                <button type="button" onClick={this.remove.bind(this)}>-</button>
                <button type="button" onClick={this.add.bind(this)}>+</button>
                <button type="button">Agregar al carrito</button>
            </div>
        );

    }

}

export default ItemCount;
