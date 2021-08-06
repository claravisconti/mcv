import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardStyle from './CardStyle';

const clothes = [
    {
        id: 1,
        title: "Vestido Clara",
        price: "$5000",
        image: "vestidoClara.jpg",
    },
    {
        id: 2,
        title: "Vestido Sofia",
        price: "$5000",
        image: "vestidoSofia.jpg",
    },
    {
        id: 3,
        title: "Vestido Luna",
        price: "$5000",
        image: "vestidoLuna.jpg",
    }
];

function Products() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {
                            clothes.map(item => {
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
