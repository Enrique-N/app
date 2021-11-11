import React from 'react'

const IniciarSesion = () => {

    function onChangeEvent() {

    }

    return (
        <div className="container-fluid d-flex justify-content-center" style={{ backgroundColor: "#416C81", height: "100vh" }}>
            <div className="row col-lg-5 border p-4" style={{ borderRadius: "25px", backgroundColor: "white", height: "550px", marginTop: "70px" }}>
                <h1 class="text-center" style={{ color: "#416C81" }}>Iniciar Sesión</h1>
                <form action="/signUp" method="post" className="text-start" style={{ color: "#70AF90" }}>
                    <label className="col-lg-12 fs-3">Usuario:</label>
                    <input className="col-lg-12 py-1" type="text" name="name" onChange={onChangeEvent} style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <label className="col-lg-12 fs-3">Contraseña:</label>
                    <input className="col-lg-12 py-1" type="password" name="password" onChange={onChangeEvent} required style={{ backgroundColor: "#C4C4C4", borderRadius: "10px" }}></input>
                    <div className="text-end">
                        <button className="col-lg-5 my-2 btn btn-warning" style={{ borderRadius: "10px", color: "#416C81" }}>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default IniciarSesion
