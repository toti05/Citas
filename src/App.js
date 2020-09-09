import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  //Citas en localStorage
  //JSON.parse porque el localStorage solo almacena String
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = []
  }
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //similar did mount,did update en una misma funcion
  //use Efect para realizar ciertas operaciones cuando el state cambia
  //se ejecuta cuando el componente esta listo o cuando cambia.
  useEffect(() => {
    //let citasIniciales = JSON.parse(localStorage.getItem
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
    //cada vez que el state de cita cambia se usa el useeffect
  }, [citas, citasIniciales]);

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
