import React from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ItemCount from '../components/ItemCount';
import vestidoClara from '../images/vestidoClara.jpg';
import vestidoSofia from '../images/vestidoSofia.jpg';
import vestidoLuna from '../images/vestidoLuna.jpg';

// Cards unico producto

const ItemDetail = ({ id, title, price, image, colores, talles, fotos }) => {

    return (
        <div>
            <div class="row mx-5">

                {/* Preview */}

                <div class="col-md-3">



                    <div>
                        {/* {
                            fotos.map((item, key) => (
                                <img key={item}>{item}</img>
                            ))
                        } */}
                    </div>

                </div>

                {/* View */}


                <div class="col-md-6">

                    <img src={image} alt={title} />

                </div>

                {/* Info producto */}

                <div class="col-md-3">

                    <div class="row">

                        <div>
                            <h2>{title}</h2>
                            <h2>{price}</h2>
                            <ul>
                                {
                                    colores.map((item, key) => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                            <ul>
                                {
                                    talles.map((item, key) => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                            <ItemCount />
                            <div>
                                <a href="#" class="btn btn-primary w-100">Añadir al carrito</a>
                            </div>
                            <div>
                                <a href="#" class="btn btn-primary w-100">Agregar a favoritos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;

