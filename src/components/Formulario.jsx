import React, { useState } from "react";

const Formulario = ({ agregarColaborador, setAlerta }) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");

    const validarDatos = (e) => {
    e.preventDefault();
    if (nombre && email && edad && cargo && telefono) {
    const nuevoColaborador = {
        nombre,
        correo: email,
        edad,
        cargo,
        telefono,
    };
        agregarColaborador(nuevoColaborador);
        setNombre("");
        setEmail("");
        setEdad("");
        setCargo("");
        setTelefono("");
        setAlerta({ mensaje: 'Colaborador agregado', tipo: 'success' });
    } else {
        setAlerta({ mensaje: 'Completa todos los camos', tipo: 'danger' });
    }
};

    return (
    <>
    <form className="d-flex flex-column gap-2" onSubmit={validarDatos}>
        <div className="form-group">
        <input
            type="text"
            name="nombre"
            placeholder="Nombre del colaborador"
            className="form-control shadow"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
        />
        </div>
        <div className="form-group">
        <input
            type="email"
            name="email"
            placeholder="correo@correo.com"
            className="form-control shadow"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        </div>
        <div className="form-group">
        <input
            type="number"
            name="edad"
            placeholder="Edad"
            className="form-control shadow"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
            />
        </div>
        <div className="form-group">
        <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            className="form-control shadow"
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
        />
        </div>
        <div className="form-group">
        <input
            type="tel"
            name="telefono"
            placeholder="+56 9 ########"
            className="form-control shadow"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
        />
        </div>
        <button type="submit" className="btn btn-primary mt-3 rounded">
        Agregar colaborador
        </button>
    </form>
    </>
);
};

export default Formulario;