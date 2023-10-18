import React, { useState } from 'react';
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador";
import { BaseColaboradores } from "./BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlerta({ mensaje: 'Colaborador agregado exitosamente', tipo: 'success' });
  };

  const eliminarColaborador = (index) => {
    const nuevosColaboradores = colaboradores.filter((_, i) => i !== index);
    setColaboradores(nuevosColaboradores);
    setAlerta({ mensaje: 'Colaborador eliminado exitosamente', tipo: 'success' });
  };

  return (
    <div className="container">
      <h1 className="text-center">Lista de Colaboradores</h1>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <Formulario agregarColaborador={agregarColaborador} setAlerta={setAlerta} />
          <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Edad</th>
                  <th>Cargo</th>
                  <th>Teléfono</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {colaboradores.map((colaborador, index) => (
                  <Listado
                    key={index}
                    colaborador={colaborador}
                    eliminarColaborador={() => eliminarColaborador(index)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Alert alerta={alerta} />
    </div>
  );
};

export default App;