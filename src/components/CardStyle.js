import React from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import slide from '../images/banner_01.jpg';

const clothes = [{
    id: 1,
    title: "Vestido Clara",
    price: "$5000",
    image: "vestidoClara.jpg"
},
{
    id: 2,
    title: "Vestido Sofía",
    price: "$5000",
    image: "vestidoSofia.jpg"
}
];

const CardStyle = (clothes) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={clothes.route} alt={clothes.title} />
                <CardBody>
                    <CardTitle tag="h5">{clothes.title}</CardTitle>
                    <CardText>{clothes.price}</CardText>
                    {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
        </div>
    );
};

export default CardStyle;

