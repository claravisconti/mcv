import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ItemList from './ItemList';


function ItemListContainer() {
    return (
        <Container>
            <Row>
                <Col>
                    <ItemList />
                </Col>
            </Row>
        </Container>

    );
}

export default ItemListContainer;

