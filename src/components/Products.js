import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardStyle from './CardStyle';
import vestidoClara from '../images/vestidoClara.jpg';
import vestidoSofia from '../images/vestidoSofia.jpg';
import vestidoLuna from '../images/vestidoLuna.jpg';

const dresses = [
    {
        id: 1,
        title: "Vestido Clara",
        price: "$5000",
        image: vestidoClara,
    },
    {
        id: 2,
        title: "Vestido Sofia",
        price: "$5000",
        image: vestidoSofia,
    },
    {
        id: 3,
        title: "Vestido Luna",
        price: "$5000",
        image: vestidoLuna,
    }
];

function Products() {
    return (
        <div>
            <Container>
                <Row>
                <Col>
                    {
                        dresses.map(item => {
                            return <CardStyle id={item.id} title={item.title} price={item.price} image={item.image} />
                        })
                    }
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Products;
