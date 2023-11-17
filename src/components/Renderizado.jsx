'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { useRouter } from 'next/navigation'

const Renderizado = ({producto}) => {
  const rutas = new useRouter()

  return (
    // sm:640 a 768, 
    // md: 768 a 1024, 
    // lg: 1024 a 1280,
    // xl: 1280 a 1536
    // 2xl: 1536

  <div className="w-80 p-4 m-2 mt-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={producto.thumbnail} />
    <div className="p-4">
      <h1 className="text-xl font-semibold">{producto.title}</h1>
      <p className="text-gray-800 uppercase">Categoria: {producto.category}</p>
      <p className="text-gray-600">{producto.brand}</p>
      <p className="text-indigo-600">Precio: ${producto.price}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => {
            rutas.push(`http://localhost:3000/fetcheo/${producto.id}`);
          }}
        >
          Ver mas
        </button>
      </div>
    </div>
  </div>

  )
}

export default Renderizado