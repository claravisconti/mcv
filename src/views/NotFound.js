import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import notFound from "../images/notFound.png";

function NotFound() {
  return (
    <div class="container d-flex justify-content-center">
      <div class="row mb-5">
        <div class="text-center">
          <img class="mt-5" src={notFound} alt="Avatar del usuario" />
          <p class="notFound">Página no encontrada</p>
          <Link to="/"><button class="btn btn-primary">Volver a Inicio</button></Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
