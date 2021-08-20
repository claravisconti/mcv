import React from "react";
import "../App.css";
import usuarios from '../apis/usuarios';

const usuario = [{
    avatar: usuarios[0].avatar,
    nombre: usuarios[0].nombre,
    apellido: usuarios[0].apellido,
    email: usuarios[0].email,
    contraseña: usuarios[0].contraseña,
    nacimiento: usuarios[0].nacimiento
}]

function Registro() {

    return (
        <div class="row d-flex justify-content-center">
            <div class="col-md-3 form-login">
                <form action="" method="" class="">

                    {
                        usuario.map(item => {

                            return [

                                <div class="d-flex justify-content-center my-3">
                                    <img class="pb-3" src={item.avatar} alt="Avatar del usuario" />
                                </div>,

                                <div class="row g-2">
                                    <div class="col-md">
                                        < div class="form-floating mb-3" >
                                            <input
                                                type="text"
                                                name="nombre"
                                                id="nombre"
                                                placeholder={item.nombre}
                                                class="form-control"
                                                required
                                            />
                                            <label for="nombre">Nombre</label>
                                        </div>
                                    </div>

                                    <div class="col-md">
                                        < div class="form-floating mb-3" >
                                            <input
                                                type="text"
                                                name="apellido"
                                                id="apellido"
                                                placeholder={item.apellido}
                                                class="form-control"
                                                required
                                            />
                                            <label for="apellido">Apellido</label>
                                        </div>
                                    </div>
                                </div>,

                                <div class="row g-2">
                                    <div class="col-md">
                                        < div class="form-floating mb-3" >
                                            <input
                                                type="email"
                                                name="emailLogin"
                                                id="email"
                                                placeholder={item.email}
                                                class="form-control"
                                                required
                                            />
                                            <label for="emailLogin">Email</label>
                                        </div>
                                    </div>

                                    <div class="col-md">
                                        < div class="form-floating mb-3" >
                                            < div class="form-floating mb-3" >
                                                <input
                                                    type="email"
                                                    name="emailLogin"
                                                    id="email"
                                                    placeholder={item.email}
                                                    class="form-control"
                                                    required
                                                />
                                                <label for="emailLogin">Confirmar email</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>,


                                <div class="row g-2">
                                    <div class="col-md">
                                        < div class="form-floating mb-3" >
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder={item.contraseña}
                                                class="form-control"
                                                required
                                            />
                                            <label for="password">Contraseña</label>
                                        </div>
                                    </div>

                                    <div class="col-md">
                                        < div class="form-floating mb-3" >
                                            <input
                                                type="password"
                                                name="repetirpassword"
                                                id="repetirpassword"
                                                placeholder="Repetir contraseña"
                                                class="form-control"
                                                required
                                            />
                                            <label for="repetirpassword">Confirmar contraseña</label>
                                        </div>
                                    </div>
                                </div>,

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
                                                Suscribirme al newsletter
                                            </label>
                                        </div>
                                    </div>

                                </div>,

                                <button type="submit" class="btn btn-primary w-100 py-2">
                                    Registrarme
                                </button>

                            ]
                        })
                    }
                </form>
            </div>
        </div >
    );
}

export default Registro;