"use client";
import React from "react";
import "../app/styles/styles.css";

const Formulario = () => {
  return (
    <div className="flex justify-center m-8">
      <form className="flex flex-col sm:grid-cols-2 gap-4 place-content-stretch py-8 formulario-con-sombra rounded-md">
        <div className="text-center text-white pb-8 text-2xl">
          <h1>Registro de personal</h1>
        </div>
        <div className="flex-1 w-64 mb-4 mx-8 input-container">
          <label htmlFor="responsable">
            <p className="text-white p-2 text-lg">Encargado del programa</p>
          </label>
          <input
            type="text"
            id="responsable"
            placeholder="Responsable"
            className="bg-slate-100 p-2 rounded-md w-full image-input"
          />
          <img src='/Image/user.png' className='input-image'/>
        </div>
        <div className="flex-1 w-64 mb-4 mx-8 input-container">
          <label htmlFor="rol">
            <p className="text-white p-2 text-lg">Rol del responsable</p>
          </label>
          <input
            type="text"
            id="rol"
            placeholder="Puesto"
            className="bg-slate-100 p-2 rounded-md w-full image-input"
          />
          <img src='/Image/maletin.png' className='input-image'/>
        </div>
        <div className="flex-1 w-64 mb-4 mx-8 input-container">
          <label htmlFor="correo">
            <p className="text-white p-2 text-lg">Correo del responsable</p>
          </label>
          <input
            type="text"
            id="correo"
            placeholder="Contacto"
            className="bg-slate-100 p-2 rounded-md w-full image-input"
          />
          <img src="/Image/mail.png" className='input-image'/>
        </div>
        <button className="bg-gray-800 text-white mx-10 my-2 px-10 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
