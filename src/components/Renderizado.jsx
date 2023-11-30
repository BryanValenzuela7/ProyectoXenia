'use client'
import { useState } from 'react';

const Renderizado = ({ producto }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-2/3 p-4 m-2 mt-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">{producto.nombre}</h1>
        <p className="text-gray-800 uppercase">{producto.puesto}</p>
        <p className="text-indigo-600">{producto.correo}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={openModal}
          >
            Ver más
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <p className="text-indigo-600">{producto.nombre_dependencia}</p>
            <p className="text-indigo-500">{producto.domicilio}</p>
            <p className="text-indigo-400">{producto.telefono}</p>
            <p className="text-indigo-300">{producto.nombre_titular}</p>
            <p className="text-indigo-200">{producto.cargo_puesto}</p>
            <p className="text-indigo-100">{producto.departamento_area}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
              onClick={closeModal}
            >
              Cerrar Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Renderizado;
