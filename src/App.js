import React, { useState } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'



function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //Funcion Eliminar cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //funcion que tome llas citas actuales y tome la nueva
  const crearCita = cita => {
    guardarCitas([...citas, cita]);
  }

  //Mensaje condicional
  //console.log(citas.length);
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administrar citas';

  return (
    <div className="principal">
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className='one-half column' >
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
