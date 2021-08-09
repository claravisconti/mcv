import React from 'react';
import '../App.css';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import user from '../images/user.png';

class ItemCount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    render() {

        return (
            <div>
                <p>Cantidad:{this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <button type="button">Agregar al carrito</button>
            </div>
        );

    }

}

export default ItemCount;

// FUNCIONES

// function ItemCount() {

//     var item = 1;

//     function remove() {
//         if (item >= 1) {
//             item = item - 1;
//             console.log("remove");
//         }
//     }

//     function add() {
//         if (item >= 1) {
//             item = item + 1;
//             console.log("add");
//         }
//     }

//     function addToBag() {
//         if (item >= 1) {
//             console.log("Bag");
//         }
//     }

//     return (
//         <div>
//             <p>Cantidad:{item}</p>
//             <button type="button" onClick={remove}>-</button>
//             <button type="button" onClick={add}>+</button>
//             <button type="button" onClick={addToBag}>Agregar al carrito</button>
//         </div>
//     );
// }

//export default ItemCount;

