import React from "react";
import "../App.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ItemDetail from '../components/ItemDetail';

function ItemDetailContainer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <ItemDetail/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemDetailContainer;