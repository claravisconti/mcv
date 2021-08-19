import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (

    <footer>
      <div class="container">
        <div class="row pt-5">
          <div class="col-md-4 footer-column">
            <ul class="nav flex-column">
              <li class="nav-item">
                <span class="footer-title">Bloom</span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Locales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Registrarte</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Iniciar sesión</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 footer-column">
            <ul class="nav flex-column">
              <li class="nav-item">
                <span class="footer-title">Ayuda</span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pedidos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Envíos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Devoluciones</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 footer-column">

            <h3>Suscribite</h3>

            <div class="footer-text mb-25">
              <p>Suscribite a nuestro newsletter y obtené un 10% de descuento en tu primera compra.</p>
            </div>
            <div class="form-group">
              <form>
                <input class="form-control" type="text" placeholder="Correo" />
                <button class="btn btn-primary"><i class="fab fa-telegram-plane"></i></button>
              </form>
            </div>
         
        </div>
      </div>

      <div class="text-center pt-5"><i class="fas fa-ellipsis-h"></i></div>

      <div class="row text-center">
        <div class="col-md-4 box">
          <span class="copyright quick-links">Copyright &copy; Bloom
          </span>
        </div>
        <div class="col-md-4 box">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 box">
          <ul class="list-inline quick-links">
            <li class="list-inline-item">
              <a href="#">Política de Privacidad</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Términos y condiciones</a>
            </li>
          </ul>
        </div>
      </div>
      </div >
    </footer >

  );
}

export default Footer;
