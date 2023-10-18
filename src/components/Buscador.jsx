import React, { useState } from "react";

const Buscador = ({ colaboradores, setColaboradores }) => {
    const [filtro, setFiltro] = useState("");
    const [colaboradoresOriginales, setColaboradoresOriginales] = useState(colaboradores);

    const filtrarColaboradores = (filtro) => {
    const nuevosColaboradores = colaboradoresOriginales.filter((colaborador) => {
    return (
        colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.edad.toString().includes(filtro) ||
        colaborador.cargo.toLowerCase().includes(filtro) ||
        colaborador.telefono.includes(filtro)
    );
    });
    setColaboradores(nuevosColaboradores);
    setFiltro(filtro);
};

    const handleChange = (e) => {
    if (e.target.value === "") {
        setColaboradores(colaboradoresOriginales);
        setFiltro("");
    } else {
        filtrarColaboradores(e.target.value);
    }
};

    return (
    <div className="mb-3">
        <input
        type="text"
        className="form-control"
        placeholder="Buscar colaboradores"
        value={filtro}
        onChange={handleChange}
    />
    </div>
);
};

export default Buscador;