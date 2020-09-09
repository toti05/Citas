import React from 'react';

const Cita = ({ cita, eliminarCita }) => (
    <div className='cita'>
        <p>Mascota: <span>{cita.mascota}</span> </p>
        <p>Dueño: <span>{cita.propietario}</span> </p>
        <p>Fecha: <span>{cita.fecha}</span> </p>
        <p>Hora: <span>{cita.hora}</span> </p>
        <p>Sintomas: <span>{cita.sintomas}</span> </p>

        <button className='button eliminar u-full-width'
            // onClick={eliminarCita()} asi estariamos llamando la funcion por eso hay que usar =>
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
)

export default Cita;

//const Cita = () => {
//    return (  );
//}

//export default Cita;


