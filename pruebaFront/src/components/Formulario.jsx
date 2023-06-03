import { useState } from 'react'

export default function Formulario(props) {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [error, setError] = useState('')

  const handleClick = () => {

    console.log('Se hizo clic en el botón');
  };

  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeApellido= e => {
    setApellido(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!/^\S/.test(nombre)) {
      setError('El nombre no puede tener espacio en blanco al principio')
    } else if (nombre.length <= 2) {
      setError('El nombre debe tener al menos 3 caracteres')
    } else if (apellido.length<= 6) {
      setError('La persona tiene que tener al menos 6 caracteres')
    } else {
      setError('')
      props.guardarPersona(nombre, apellido)
    }
  }

  return (
    <form  onSubmit={handleSubmit} className='form'>
      <label htmlFor='nombre'>Nombre</label>
      <input
        type='text'
        id='nombre'
        value={nombre}
        placeholder='Ingrese su nombre '
        onChange={onChangeNombre}
      />

      <label htmlFor='apellido'>Apellido</label>
      <input
        type='text'
        id='apellido'
        value={apellido}
        placeholder='Ingrese su apellido'
        onChange={onChangeApellido}
      />
       <button onClick={handleClick}>Enviar</button>
      {error && <p>{error}</p>}
    </form>
  )
}

