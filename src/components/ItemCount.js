import React, { useState } from 'react';
import '../App.css';

function ItemCountHook() {

    const [item, setItem] = useState(1);
    const [stock, setStock] = useState(5);

    function remove() {
        if (item > 1) {
            setItem(item - 1)
        }
    }

    function add() {
        if (item >= 1 && item < stock) {
            setItem(item + 1)
        }
    }

    return (
        <div>
            <p>Cantidad:{item}</p>
            <button type="button" onClick={remove}>-</button>
            <button type="button" onClick={add}>+</button>
            <button type="button">Agregar al carrito</button>
        </div>
    );
}

export default ItemCountHook;


// class ItemCount extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { count: 1 }
//     }

//     add() {
//         if (this.state.count >= 1) {
//         this.setState({ count: this.state.count + 1 });
//         }
//     }

//     remove() {  
//         if (this.state.count > 1) {
//             this.setState({ count: this.state.count - 1 });
//         }
//     }

//     render() {

//         return (
//             <div>
//                 <p>Cantidad:{this.state.count}</p>
//                 <button type="button" onClick={this.remove.bind(this)}>-</button>
//                 <button type="button" onClick={this.add.bind(this)}>+</button>
//                 <button type="button">Agregar al carrito</button>
//             </div>
//         );

//     }

// }

// export default ItemCount;


