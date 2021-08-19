import React from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

// Cards ver todos

const Item = ({ id, title, price, image }) => {
    return (
      
            <div class="card col-md-5 m-2">
               
                    <img src={image} alt={title} />
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{price}</p>
             
            </div>
    
    );
};

export default Item;

