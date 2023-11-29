import React from "react";

function Registrodependencia({
  formData,
  setFormData,
  setNombre_Dependencia,
  setDomicilio,
  setTelefono,
  setDepartamento_Area,
  setNombre_Titular,
  setCargo_Puesto,
}) {
  return (
    <div className="flex justify-center m-8">
      <form className="flex flex-col sm:grid-cols-2 gap-4 place-content-stretch py-8 formulario-con-sombra rounded-md">
        <div className="text-center text-white pb-8 text-2xl">
          <h1>Registro de dependencia</h1>
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="dependencia">
            <p className="text-white p-2 text-lg"> Nombre dependencia</p>
          </label>
          <input
            type="text"
            id="dependencia"
            placeholder="Lugar"
            value={formData.dependencia}
            onChange={(event) =>
              setFormData({
                ...formData,
                dependencia: event.target.value,
                setNombre_Dependencia,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="direccion">
            <p className="text-white p-2 text-lg">Domicilio</p>
          </label>
          <input
            type="text"
            id="direccion"
            placeholder="Direccion"
            value={formData.direccion}
            onChange={(event) =>
              setFormData({
                ...formData,
                direccion: event.target.value,
                setDomicilio,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="contacto">
            <p className="text-white p-2 text-lg">Telefono</p>
          </label>
          <input
            type="text"
            id="contacto"
            placeholder="Contacto"
            value={formData.contacto}
            onChange={(event) =>
              setFormData({
                ...formData,
                contacto: event.target.value,
                setTelefono,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="propietario">
            <p className="text-white p-2 text-lg">Nombre del titular</p>
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Propietario"
            value={formData.propietario}
            onChange={(event) =>
              setFormData({
                ...formData,
                propietario: event.target.value,
                setNombre_Titular,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="ocupacion">
            <p className="text-white p-2 text-lg">Cargo o puesto</p>
          </label>
          <input
            type="text"
            id="ocupacion"
            placeholder="Ocupacion"
            value={formData.ocupacion}
            onChange={(event) =>
              setFormData({
                ...formData,
                ocupacion: event.target.value,
                setCargo_Puesto,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
        <div className="flex-1 w-64 mb-4 mx-8">
          <label htmlFor="seccion">
            <p className="text-white p-2 text-lg">Departamento o area</p>
          </label>
          <input
            type="text"
            id="seccion"
            placeholder="Seccion"
            value={formData.seccion}
            onChange={(event) =>
              setFormData({
                ...formData,
                seccion: event.target.value,
                setDepartamento_Area,
              })
            }
            className="bg-slate-100 text-black p-2 rounded-md w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default Registrodependencia;
