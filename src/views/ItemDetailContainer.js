import React, { useEffect, useState } from 'react';

import "../App.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ItemDetail from '../components/ItemDetail';
import vestidos from '../apis/vestidos';

function ItemDetailContainer() {

    const [ropa, setRopa] = useState([]);

    useEffect(() => {
        const pasarVestidos = () =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (vestidos.length > 0) {
                        resolve(vestidos)
                    } else {
                        reject("No se encontraron resultados")
                    }
                }, 2000);
            });

        pasarVestidos()
            .then(
                (resultado) => {
                    setRopa(resultado)
                },
                (error) => console.log(error)
            )
            .catch(error => console.log(error));
    }, [ropa]);

    return (
        <div>
         <Container>
                <Row>
                    <Col>
                        {
                            ropa.map((item) => {
                                return <ItemDetail key={item.id} title={item.title} price={item.price} image={item.image} />
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemDetailContainer;