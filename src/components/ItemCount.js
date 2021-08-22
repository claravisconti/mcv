import React, { useState } from 'react';
import '../App.css';

function ItemCount(props) {

    const [item, setItem] = useState(1);
    const [stock, setStock] = useState(props.count);

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

    function onAdd() {
       console.log();
    }

    return (
        <div class="d-flex">
            <button type="button" class="btn btn-secondary" onClick={remove}>-</button>
            <div class="mx-3">{item}</div>
            <button type="button" class="btn btn-secondary" onClick={add}>+</button>
        </div>
    );
}

export default ItemCount;

