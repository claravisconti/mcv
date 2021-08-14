import React from 'react';
import '../App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ItemCount from '../components/ItemCount';

const ItemDetail = ({ id, title, price, image, colores, talles, fotos }) => {

    return (
        <div>
            <div class="container">
                <div class="row mt-5">

                    {/* Preview */}

                    <div class="col-md-3">

                        {
                            fotos.map((item, key) => (
                                <div class="d-flex justify-content-center pb-3">
                                    <img src={item} alt={item} class="preview" />
                                </div>
                            ))
                        }


                    </div>

                    {/* View */}

                    <div class="col-md-5">
                        <div class="d-flex justify-content-center">
                            <img src={image} alt={title} class="view" />
                        </div>
                    </div>

                    {/* Info producto */}

                    <div class="col-md-3">

                        <div class="row">

                            <div class="py-3">
                                <h2>{title}</h2>
                                <h2>{price}</h2>
                                <div>
                                    {
                                        colores.map((item, reference) => (
                                            <a class={`
                                            color-picker
                                            ${item}
                                        `}></a>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        talles.map((item, key) => (
                                            <button class="btn btn-light" key={item}>{item}</button>
                                        ))
                                    }
                                </div>
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
        </div>
    );
};

export default ItemDetail;

