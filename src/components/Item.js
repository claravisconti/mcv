import React from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

// Cards ver todos

const Item = ({ id, title, price, image }) => {
    return (

        <div class="card m-2">
           
                <img src={image} alt={title} />
                <p class="card-text m-auto">{title}</p>
                <p class="card-title m-auto">{price}</p>
       
        </div>

    );
};

export default Item;

