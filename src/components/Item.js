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

        <div class="card m-2">

            <img src={image} alt={title} />
            <p class="card-text m-auto">{title}</p>
            <p class="card-title m-auto">{price}</p>
            <button class="btn btn-primary" onClick={verDetalle}>Ver</button>

        </div>

    );
};

export default Item;

