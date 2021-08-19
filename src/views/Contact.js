import React from "react";
import "../App.css";
import { Container, Row } from "react-bootstrap";

function Contacto ({ email, password }) {
    return (
      <div class="row d-flex justify-content-center">
        <div class="col-md-3 form-login">
          <form action="" method="" class="">
            {/* Single-row inputs */}
            <div class="d-flex justify-content-center">
              <img class="pb-3" src="" alt="Avatar del usuario" />
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                name="emailLogin"
                id="email"
                placeholder="Email"
                class="form-control"
                required
              />
              <label for="emailLogin">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                class="form-control"
                required
              />
              <label for="password">Contraseña</label>
            </div>
            {/* Recordarme/Recuperar contraseña */}
            <div class="d-flex mb-3">
              <div class="col-6">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Recordarme
                  </label>
                </div>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <a href="#">Recuperar contraseña</a>
              </div>
            </div>
            {/* Botones */}
            <button type="submit" class="btn btn-primary w-100 py-2">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }
  

export default Contacto;