"use client";
import React, { useState, useEffect } from "react";

async function obtenerDatos() {
  const datos = await fetch("http://localhost:3000/app/formulario");
  return datos.json;
}

/* import "../app/styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
 */
import Registrodependencia from "./Registrodependencia";
import Registropersonal from "./Registropersonal";
const Formulario = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    encargado: "",
    rol: "",
    correo: "",
    dependencia: "",
    direccion: "",
    contacto: "",
    propietario: "",
    ocupacion: "",
    seccion: "",
  });
  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombre_dependencia, setNombre_Dependencia] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombre_titular, setNombre_Titular] = useState("");
  const [cargo_puesto, setCargo_Puesto] = useState("");
  const [departamento_area, setDepartamento_Area] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/app/formulario");
    const data = await response.json();
    setData(data);
  };

  const agregarDatos = async () => {
    try {
      const response = await fetch("http://localhost:3000/app/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          puesto,
          correo,
          nombre_dependencia,
          telefono,
          departamento_area,
          domicilio,
          nombre_titular,
          cargo_puesto,
        }),
      });

      if (response.ok) {
        console.log("Datos agregados correctamente");
        setNombre("");
        setPuesto("");
        setCorreo("");
        setCargo_Puesto("");
        setDomicilio("");
        setNombre_Dependencia("");
        setNombre_Titular("");
        setTelefono("");
        setDepartamento_Area("");
        fetchData();
      } else {
        console.error("Error al agregar la informacion");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerDatos();
      setData(data);
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarDatos();
  };

  /* const FormTitles = ["Registro de personal", "Dependencia"]; */
  const PageDisplay = () => {
    if (page === 0) {
      return <Registropersonal formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <Registrodependencia formData={formData} setFormData={setFormData} />
      );
    }
  };
  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container">
        {/* <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div> */}
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            className="bg-gray-800 text-white mx-10 my-2 px-10 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            onClick={() => {
              setPage((currPage) => Math.max(currPage - 1, 0));
            }}
          >
            Prev
          </button>
          <button
            className="bg-gray-800 text-white mx-10 my-2 px-10 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            onClick={() => {
              setPage((currPage) => Math.min(currPage + 1, 1));
            }}
            onSubmit={handleSubmit}
          >
            {page === 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
