import React from 'react'
import NavbarB from './NavbarB'
import Footer from './Footer'

const MenuPrincipal = () => {

  return (

    <div className="flex flex-col min-h-screen">
      {/*Navbar*/}
      <NavbarB />

      <main className="flex-1">
        {/* Contenido específico del menú principal */}
      </main>

      {/*Footer*/}
      <Footer />
    </div>

  );

};

export default MenuPrincipal;
