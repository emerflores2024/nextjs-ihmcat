import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Link from 'next/link'

export function MyNavbar() {
  return (
    <Navbar
      fluid
      rounded
      className="lg:px-14 py-5 rounded-none fixed top-0 left-0 right-0 z-50"
    >
      <NavbarBrand href="">
        <img
          src="https://www.svgrepo.com/show/431534/code.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Creative Coding Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Creative Coding
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Contacto</Button>
        <NavbarToggle className="ml-3" />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Inicio
        </NavbarLink>
        <NavbarLink as={Link} href="/about">Quienes somos</NavbarLink>
        <NavbarLink href="#">Servicios</NavbarLink>
        <NavbarLink href="#">Catalogo</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
