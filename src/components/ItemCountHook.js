import React, { useState } from 'react';
import '../App.css';

function ItemCountHook() {
  
    const [item, setItem] = useState(1);

    function remove() {
        if (item > 1) {
            setItem(item - 1)
        }
    }

    function add() {
        if (item >= 1) {
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

