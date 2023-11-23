'use client'
import React from 'react'
import '../app/globals.css'
import { useState } from 'react'
import MenuPrincipal from './menuPrincipal'

const InicioSesion = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [menuPrincipal, setMenuPrincipal] = useState(false)


    const handleIngresar = () => {

      console.log('Nombre de usuario: ', username,' Contraseña: ',password)
      setMenuPrincipal(true)
    }

    if(menuPrincipal){
      return <MenuPrincipal/>
    }

  return (
    <div className='font-poppins flex items-center justify-center min-h-screen bg-gradient-to-r from-blueClaro to-blueOscuro'>
        <div className='mt-4 mb-4 p-6 md:p-12 rounded shadow-md max-w-md w-full bg-white flex flex-col'>
            <img
            src='https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion_114360-757.jpg?w=900&t=st=1700554020~exp=1700554620~hmac=e25e01cfc8235417baed8c12496c6cb2f2a2dad3334066cfa0b54b8438e817a4'
            alt='Login'
            className='mb-1 w-full h-auto md:w-150 md:h-150'
            />
            <h1 className='text-black text-center text-2xl md:text-3xl font-semibold mb-6'>INICIO SESIÓN</h1>

            <label htmlFor='InputUser' className='text-gray-600 block text-sm font-medium mb-2'>Usuario:</label>
            <input
            type="text"
            className='border border-gray-300 rounded p-2 w-full mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
            id='InputUser'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor='InputPassword' className='text-gray-600 block text-sm font-medium mb-2'>Contraseña:</label>
            <input
            type='password'
            className='border border-gray-300 rounded p-2 w-full mb-2 text-gray-700 focus:outline-none focus:border-blue-500'
            id='InputPassword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button 
            className='text-white bg-blue-500 rounded py-2 hover:bg-blue-600 shadow-md focus:shadow-outline w-full'
            onClick={handleIngresar}
            >
              Ingresar
            </button>

        </div>
    </div>
  )

}

export default InicioSesion