import React from 'react'

import { obtenerProductosDummy } from '@/libs/index-fetch'
import Renderizado from '@/components/Renderizado'



const DummyJsonPage = async () => {
    const data = await obtenerProductosDummy()
    const products = data.products
  return (
    <div className='flex flex-wrap -m-4'>
    {products.map((producto) =>  <Renderizado producto={producto}/>)}
    </div>
  )
}

export default DummyJsonPage