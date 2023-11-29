import React from 'react'
import NavbarB from '../../components/NavbarB'
import Footer from '../../components/Footer'

const MenuPrincipal = () => {

  return (

    <div 
    className="flex flex-col min-h-screen">
      <NavbarB/>
      <main className="flex-1">
      </main>
      <Footer/>
    </div>

  );

};

export default MenuPrincipal;
