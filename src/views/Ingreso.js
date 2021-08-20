import "../App.css";
import usuarios from '../apis/usuarios';

const usuario = [{
    avatar: usuarios[0].avatar,
    email: usuarios[0].email,
    contraseña: usuarios[0].contraseña
}]


function Ingreso() {

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
                                </div>,

                                <div class="form-floating mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder={item.contraseña}
                                        class="form-control"
                                        required
                                    />
                                    <label for="password">Contraseña</label>
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
                                                Recordarme
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-6 d-flex justify-content-end">
                                        <a href="#">Recuperar contraseña</a>
                                    </div>
                                </div>,

                                <button type="submit" class="btn btn-primary w-100 py-2">
                                    Ingresar
                                </button>

                            ]
                        })
                    }
                </form>
            </div>
        </div >
    );
}

export default Ingreso;