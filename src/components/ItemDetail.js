import React from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ItemCount from '../components/ItemCount';

const ItemDetail = ({ id, title, price, image }) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={image} alt={title} />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText>{price}</CardText>
                    <ItemCount count={6} />
                </CardBody>
            </Card>
        </div>
    );
};

export default ItemDetail;

