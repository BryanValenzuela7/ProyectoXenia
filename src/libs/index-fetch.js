export async function obtenerProductosDummy(){
    const response = await fetch('https://dummyjson.com/products')
    if(!response.ok ) throw new Error('No se pudieron obtener los productos')
    return response.json()

}