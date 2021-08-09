import React from 'react';
import '../App.css';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import user from '../images/user.png';

class ItemCount extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            item: 1
        });
    }

    remove(item) {
        if (item >= 1) {
            this.setState(item = item - 1)
            console.log("remove");
        }
    }

    add(item) {
        if (item >= 1) {
            this.setState(item = item + 1)
            console.log("add");
        }
    }

    render() {

        return (
            <div>
                <p>Cantidad:{this.state.item}</p>
                <button type="button" onClick={this.remove.bind(this)}>-</button>
                <button type="button" onClick={this.add.bind(this)}>+</button>
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

