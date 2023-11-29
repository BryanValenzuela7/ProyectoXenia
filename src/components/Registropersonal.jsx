import React from "react";
import "../app/styles/styles.css";

function Registropersonal({
  formData,
  setFormData,
  setNombre,
  setPuesto,
  setCorreo,
}) {
  return (
    <div className="flex justify-center m-8">
      <form className="flex flex-col sm:grid-cols-2 gap-4 place-content-stretch py-8 formulario-con-sombra rounded-md">
        <div className="text-center text-white pb-8 text-2xl">
          <h1>Registro de personal</h1>
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="responsable">
            <p className="text-white p-2 text-lg"> Encargado del programa</p>
          </label>
          <input
            type="text"
            id="responsable"
            placeholder="Responsable"
            value={formData.encargado}
            onChange={(event) =>
              setFormData({
                ...formData,
                encargado: event.target.value,
                setNombre,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="rol">
            <p className="text-white p-2 text-lg">Rol del responsable</p>
          </label>
          <input
            type="text"
            id="rol"
            placeholder="Puesto"
            value={formData.rol}
            onChange={(event) =>
              setFormData({ ...formData, rol: event.target.value, setPuesto })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="correo">
            <p className="text-white p-2 text-lg">Correo del responsable</p>
          </label>
          <input
            type="text"
            id="correo"
            placeholder="Contacto"
            value={formData.correo}
            onChange={(event) =>
              setFormData({
                ...formData,
                correo: event.target.value,
                setCorreo,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default Registropersonal;
