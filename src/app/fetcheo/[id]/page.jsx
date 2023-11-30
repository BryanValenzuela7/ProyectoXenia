import Image from "next/image";
import React from "react";
import Link from "next/link";
import Formulario from "@/app/formulario/page";

async function consultarDatosProducto(id) {
  const response = await fetch(`http://localhost:3000/api/datosusuario/${id}`);
  if (!response.ok) throw new Error("No se pudieron obtener los productos");
  return response.json();
}

const page = async ({ params: { id } }) => {
  const data = await consultarDatosProducto(id);
  return (
    <div className="p-4 md:w-1/4 mt-4 bg-white shadow-md rounded-lg mx-auto">
      <h1 className="text-xl font-semibold mb-2">{data.id}</h1>

      <p className="text-gray-600 mb-2"></p> {/* Línea vacía */}
      <p className="text-indigo-600 mb-2">Precio: $</p>
      <p className="text-orange-400 mb-4">Rating: </p>
      <div className="bg-red-500 rounded-sm w-auto text-center">
        <Link href={"/fetcheo"}> Regresar </Link>
      </div>
    </div>
  );
};

export default page;
