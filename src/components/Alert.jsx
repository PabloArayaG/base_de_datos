import React from "react";

const Alert = ({ alerta }) => {
if (!alerta) {
    return null;
}

return (
    <div className={`alert alert-${alerta.tipo}`} role="alert">
        {alerta.mensaje}
    </div>
);
};

export default Alert;