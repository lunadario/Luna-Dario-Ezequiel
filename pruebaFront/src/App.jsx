import './App.css'
import Card from './components/card'
import Formulario from './components/Formulario'
import { useState } from 'react'

function App() {
  const [persona, setPersona] = useState({})

  const guardarPersona = (nombre, apellido) => {
    setPersona({ nombre, apellido })
  }
  return (
    <>
      <Formulario guardarPersona={guardarPersona} />
      {Object.keys(persona).length === 0 ? undefined : (
        <Card nombre={persona.nombre} apellido={persona.apellido} />
      )}
    </>
  )
}

export default App