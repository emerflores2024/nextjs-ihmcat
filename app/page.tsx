import { HiOutlineArrowRight } from 'react-icons/hi';
import { Button } from 'flowbite-react';
import { Card } from 'flowbite-react';

import { FaHandshake } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-10 mt-40 md:px-14 lg:px-14 xl:px-14 w-full lg:w-4/5 xl:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center ">
        <div className="w-full">
          <h3 className="text-4xl text-balance font-bold ">
            Te ayudamos a expandir tu negocio
          </h3>
          <p className="text-base md:text-base lg:text-lg xl:text-xl mt-8 text-balance">
            Expandimos tu negocio a traves del desarrollo de un sitio/app web,
            para que puedas darte a conocer con tus clientes.
          </p>
          <div className="flex gap-4 mt-14">
            <Button gradientDuoTone="purpleToPink">Cotizar</Button>
            <Button outline gradientDuoTone="purpleToPink">
              Ver catálogo
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="w-full order-first md:order-last lg:order-last xl:order-last">
          <img
            src="https://camo.githubusercontent.com/f8561052d5519d5b219d3d02cdf56d0969d2cdab435e6739ba6b7cb26866f5fe/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f646973702f3630313031343131363737303437352e363036386265666634363430612e676966"
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="container flex flex-col mx-auto px-10 pt-12 mt-20 md:px-14 lg:px-14 xl:px-14 w-full lg:w-4/5 xl:w-2/3">
        <h3 className="text-3xl tracking-tight text-center w-full xl:w-3/5 mx-auto font-bold ">
          La era digital esta aquí y es importante adaptarse
        </h3>
        <p className="mt-5 text-center text-lg w-full xl:w-3/5 mx-auto">
          Sabemos que siempre te has preguntado si realmente tu negocio necesita
          un sitio web, acalaremos esas dudas...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-7 mt-10 items-start">
          <Card className="w-full h-full border border-sky-700 shadow-none md:col-span-2 lg:col-span-1 items-start">
            <div>
              <FaHandshake className="text-5xl text-sky-600" />
              <p className="text-sky-600 font-bold mt-2">Conexion</p>
            </div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              Acercamiento con tus clientes
            </h5>
            <p className="font-normal text-gray-700">
              Al tener un sitio web, generas una conexión con tus clientes;
              permitiéndoles explorar tus productos, servicios, horarios, etc.
            </p>
          </Card>
          <Card className="w-full h-full border border-pink-600 shadow-none md:col-span-2 lg:col-span-1">
            <div>
              <FaChartLine className="text-4xl text-pink-500 mb-3" />
              <p className="text-pink-500 font-bold mt-2">Ganancias</p>
            </div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              Incremento de tus ventas
            </h5>
            <p className="font-normal text-gray-700">
              Tener la opción de ver tus productos y servicios a tan solo un
              "click", hace que tus potenciales ventas incrementen y tu negocio
              crezca.
            </p>
          </Card>
          <Card className="w-full h-full border border-green-800 shadow-none md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-3 ">
            <div>
              <MdOutlinePublishedWithChanges className="text-4xl text-green-700 mb-3" />
              <p className="text-green-700 font-bold mt-2">Mantenimiento</p>
            </div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900">
              Información siempre actualizada
            </h5>
            <p className="font-normal text-gray-700">
              ¿Cambiaste de dirección? ¿Tienes nuevos productos o servicios? ¡No
              hay problema! Siempre tendrás la información correcta al alcance.
            </p>
          </Card>
        </div>
      </div>

      <div className="container flex flex-col mx-auto px-10 mt-20 md:px-14 lg:px-14 xl:px-14 w-full lg:w-4/5 xl:w-2/3 bg-gray-900 pb-10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
          <div className="w-full flex flex-col text-gray-200">
            <h1 className="text-6xl">71%</h1>
            <p className="text-lg mt-3">
              de negocios tienen un sitio web hasta el 2023
            </p>
          </div>
          <div className="w-full flex flex-col text-gray-200">
            <h1 className="text-6xl">94%</h1>
            <p className="text-lg mt-3">
              de las primeras impresiones provienen del diseño de tu sitio web
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10 md:px-14 lg:px-14 xl:px-14 w-full lg:w-4/5 xl:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center ">
        <div className="w-full">
          <img
            src="https://srgdigiworld.com/wp-content/uploads/2023/05/webdevelopment-1.gif"
            alt="Picture of the author"
          />
        </div>
        <div className="w-full">
          <h3 className="text-2xl text-balance font-bold ">
            ¿Ya tienes un sitio web? Nosotros te lo rediseñamos
          </h3>
          <p className="text-base md:text-base lg:text-lg xl:text-lg mt-8 text-balance">
            Nos encargamos de cambiar completamente la apariencia de tu sitio
            web, mejorando su funcionalidad y siendo mas amigable con el
            usuario, haciendo que la experiencia de navegación sea fácil y
            amena.
          </p>
          <div className="flex gap-4 mt-10">
            <Button outline gradientDuoTone="purpleToBlue">
              Explorar servicios
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
