import React from 'react'
import { Link } from 'react-router-dom'

const Chose = () => {
    return (
        <div className="d-flex justify-content-evenly align-items-center" style={{ width: "100vw", height: "100vh", backgroundColor: "#FCF6A0" }}>
            <div>
                <Link to="/register">
                    <button className="btn btn-success fs-4" style={{ borderRadius: "15px" }}>Emprendedor</button>
                </Link>
            </div>
            <div>
                <Link to="/register">
                    <button className="btn btn-danger fs-4" style={{ borderRadius: "15px" }}>Participante</button>
                </Link>
            </div>
        </div>
    )
}

export default Chose
