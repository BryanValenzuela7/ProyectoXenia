"use client";
import React from "react";
import "../app/styles/styles.css";

const Formulario = () => {
  return (
    <div className="flex justify-center pt-6">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-stretch py-8 formulario-con-sombra rounded-md">
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="dependencia">
            <p className="text-white p-2">Dependencia</p>
          </label>
          <input
            type="text"
            id="dependencia"
            placeholder="dependencia"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="direccion">
            <p className="text-white p-2">Direccion</p>
          </label>
          <input
            type="text"
            id="direccion"
            placeholder="direccion"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="telefono">
            <p className="text-white p-2">Telefono</p>
          </label>
          <input
            type="text"
            id="telefono"
            placeholder="telefono"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="encargado">
            <p className="text-white p-2">Encargado</p>
          </label>
          <input
            type="text"
            id="encargado"
            placeholder="encargado"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 w-32 mb-4 mx-8">
          <label htmlFor="cargo">
            <p className="text-white p-2">Cargo o puesto</p>
          </label>
          <input
            type="text"
            id="cargo"
            placeholder="cargo"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 w-32 mb-4 mx-8">
          <label htmlFor="area">
            <p className="text-white p-2">Area o lugar</p>
          </label>
          <input
            type="text"
            id="area"
            placeholder="area"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="responsable">
            <p className="text-white p-2">Encargado del programa</p>
          </label>
          <input
            type="text"
            id="responsable"
            placeholder="responsable"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="rol">
            <p className="text-white p-2">Rol del responsable</p>
          </label>
          <input
            type="text"
            id="rol"
            placeholder="rol"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="correo">
            <p className="text-white p-2">Correo del responsable</p>
          </label>
          <input
            type="text"
            id="correo"
            placeholder="correo"
            className="bg-slate-100 p-2 rounded-md w-full"
          />
        </div>
        <button
          className="bg-gray-900 text-white 
        mx-20 my-6 rounded-md"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
