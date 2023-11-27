"use client";
import React from "react";
/* import "../app/styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
 */
import { useState } from "react";
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
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="bg-gray-800 text-white mx-10 my-2 px-10 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
