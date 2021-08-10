import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';
import vestidos from '../apis/vestidos';

function ItemList() {

    const pasarVestidos = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (vestidos.length > 0) {
                    resolve(vestidos)
                } else {
                    reject("No se encontraron resultados")
                }
            }, 1000);
        });

    pasarVestidos()
        .then(
            (resultado) => {
                console.log(resultado)
            },
            (error) => console.log(error)
        )
        .catch(error => console.log(error));

    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        {
                            vestidos.map((item)=> {
                                return <Item key={item.id} title={item.title} price={item.price} image={item.image} />
                            })
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemList;
