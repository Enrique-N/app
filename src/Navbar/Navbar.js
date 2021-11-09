import React from 'react'

const Navbar = () => {

    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-lg-3">
                <form action="/signUp" method="post">
                    <label>Nombre Completo:</label>
                    <input type="text" name="name"></input>
                    <label className="col-lg-12">Pais de Residencia:</label>
                    <select name="country">
                        <option>Mexico</option>
                        <option>Peru</option>
                    </select>
                    <label className="col-lg-12">Correo Electronico:</label>
                    <input type="email" name="email"></input>
                    <label className="col-lg-12">Nombre de Usuario:</label>
                    <input type="text" name="user"></input>
                    <label className="col-lg-12">Contraseña:</label>
                    <input type="password" name="password"></input>
                    <label className="col-lg-12">Confirmar Contraseña:</label>
                    <input type="password" name="password_2"></input>
                </form>
                <button className="my-2">Registrar</button>
            </div>
        </div>
    )
}

export default Navbar
