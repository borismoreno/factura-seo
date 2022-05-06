import * as React from "react"
import LogoIcon from "../svg/LogoIcon"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = ({ siteTitle }) => (
  <header
    className="sticky top-0 bg-white shadow"
  >
    <div className="container flex flex-col md:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Factura Ágil
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-primary-darker" href="#features">
          Características
        </AnchorLink>
        <AnchorLink className="px-4 text-primary-darker" href="#services">
          Servicios
        </AnchorLink>
        <AnchorLink className="px-4 text-primary-darker" href="#testimonials">
          Nuestros Clientes
        </AnchorLink>
        <AnchorLink className="px-4 text-primary-darker" href="#contacto">
          Contacto
        </AnchorLink>
      </div>
      <div className="mt-4 sm:mt-0">
        <a className="bg-primary
        hover:bg-primary-darker
        hover:text-white
        rounded
        py-3 px-8
        text-white" href="https://app.factura-agil.com/">Iniciar sesión</a>
      </div>
    </div>
  </header>
);


export default Header
