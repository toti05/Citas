import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
    //Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    //state para el error
    const [error, actualizarError] = useState(false)

    //state para el error de hora
    //const [horario, HorarioNoDisponible] = useState(false)

    //para ver que campo seleccionamos:console.log(e.target.name)//.value para obtener el dato
    //funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarDatos = (e) => {
        actualizarCita({
            //hacemos una copia de cita para no sobreescribir los datos
            ...cita,
            //Array destructuring,para escribir la informacion del input dentro de la propiedad a la que queramos agregar
            [e.target.name]: e.target.value
        });
    };

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Enviar formulario
    const submitCita = (e) => {
        e.preventDefault();

        //Primero: validar
        //.trim() quita espacios en blanco al inicio y final
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            setTimeout(() => {
                actualizarError(false);
            }, 3000);
            //para que no siga corriendo
            return;
        }
        //Segundo: Asignar un ID
        cita.id = uuidv4();
        //Tercero: Crear la cita
        crearCita(cita);

        //Cuarto: Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (
        <div>
            <h2>Crear Citas</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligarios</p> : null}

            <form
                //evento del boton enviar
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarDatos}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño'
                    onChange={actualizarDatos}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarDatos}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    max='20:00'
                    min='09:00'
                    className='u-full-width'
                    onChange={actualizarDatos}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={actualizarDatos}
                    value={sintomas}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </div>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;