"use client";
import React, { useState } from "react";
import "../app/styles/Navbar.css";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const abrirCerrarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div>
      <header>
        <div className="barras">
          <button onClick={abrirCerrarMenu} className="boton_menu " id="x">
            {menuAbierto ? (
              <span className="icono">&#215;</span>
            ) : (
              <span className="icono">&#8801;</span>
            )}
          </button>
        </div>
        <nav
          id="menu"
          className={`desplegable ${menuAbierto ? "abrir_menu" : ""}`}
        >
          <ul>
            <li>
              <a href="/">INICIO</a>
            </li>
            <li>
              <a href="/fetcheo">ESTUDIANTES</a>
            </li>
            <li>
              <a href="/formulario">EJEMPLO</a>
            </li>
            <li>
              <a href="#">EJEMPLO</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
