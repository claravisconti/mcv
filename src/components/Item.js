import React from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { useHistory } from 'react-router-dom';

// Cards ver todos

const Item = ({ id, title, price, image }) => {

    const history = useHistory()
    const verDetalle = () => history.push(`/detalle/${id}`);

    return (

        <div class="detalle card m-2">
            <img src={image} alt={title} onClick={verDetalle} />
            <p class="card-text m-auto">{title}</p>
            <p class="card-title m-auto">{price}</p>
        </div>

    );
};

export default Item;

