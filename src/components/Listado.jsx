import React from "react";

const Listado = ({ colaborador, eliminarColaborador }) => {
    const { nombre, correo, edad, cargo, telefono } = colaborador;

    return (
    <tr>
        <td>{nombre}</td>
        <td>{correo}</td>
        <td>{edad}</td>
        <td>{cargo}</td>
        <td>{telefono}</td>
        <td>
        <button className="btn btn-danger" onClick={eliminarColaborador}>
            Eliminar
        </button>
        </td>
    </tr>
);
};

export default Listado;