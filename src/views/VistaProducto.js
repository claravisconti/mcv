import React from "react";
import "../App.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ItemCount from '../components/ItemCount';

function VistaProducto() {
    return (
        <div>
            <Container>
                <Row>
                    <ItemCount count={6} />
                </Row>
            </Container>
        </div>
    );
}

export default VistaProducto;