import Image from "next/image";
import React from "react";
import Link from "next/link";
import Formulario from "@/components/Formulario";

async function consultarDatosProducto(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) throw new Error("No se pudieron obtener los productos");
  return response.json();
}

const page = async ({ params: { id } }) => {
  const data = await consultarDatosProducto(id);
  return (
    <div className="p-4 md:w-1/4 mt-4 bg-white shadow-md rounded-lg mx-auto">
      <h1 className="text-xl font-semibold mb-2">{data.title}</h1>
      <div className="flex flex-wrap mb-4 justify-center">
        {data.images.map((image, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-2/5 lg:w-3/5 xl:w-1/2 2xl:w-1/2 mb-2"
          >
            <Image
              src={image}
              alt={`Product Image ${index + 1}`}
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <p className="text-gray-600 mb-2">{data.description}</p>
      <p className="text-indigo-600 mb-2">Precio: ${data.price}</p>
      <p className="text-orange-400 mb-4">Rating: {data.rating}</p>
      <div className="bg-red-500 rounded-sm w-auto text-center">
        <Link href={"/fetcheo"}> Regresar </Link>
      </div>
    </div>
  );
};

export default page;
