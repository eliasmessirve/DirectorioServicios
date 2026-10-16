"use client"
// Importamos Link para poder navegar entre las diferentes páginas
// sin recargar completamente el sitio.
import Link from "next/link";
import { useState } from "react";
// Importamos la lista de servicios que vamos a mostrar en la página.
import servicios from "./data/servicios";
import Image from "next/image";
type Props = {
  nombre: string;
  precio: number;
  categoria: string;
  descripcion: string;
  imagen: string;
  ruta: string;
  color: string;
};

// Componente reutilizable para mostrar cada servicio
function Tarjeta({
  nombre,
  precio,
  categoria,
  descripcion,
  imagen,
  ruta,
  color
}: Props) {
  return ( 
      // Cada tarjeta permite acceder a la página de detalle del servicio
    <div className="bg-gray-200">
      <div className="p-5 rounded-lg bg-white border shadow mx-2 my-2 flex flex-col">
        <img className="w-full h-48 object-cover rounded-md" src={imagen} alt={nombre}/>
        <p className={`font-medium  w-fit px-1 py-1 mt-3 rounded-full inline-block ${color}`}>{categoria}</p>
        <h2 className="text-xl font-bold mt-1">{nombre}</h2>
        <p className="font-semibold mt-1">${precio}</p>  
        <p className="text-gray-600 text-sm mt-2 flex-1">{descripcion}</p>
         <Link href={ruta} className="mt-4 w-fit items-center gap-2  border border-blue-600 text-blue-600 px-4 py-2 rounded-full "> Ver Más → <span></span>
    </Link>
      </div>
    
    </div>
  );
}

// Página principal
export default function Home() {
  const [busqueda, setBusqueda] = useState("")
  const [categoria, setCategoria] = useState("")
  const [categoriaAbierta, setCategoriaAbierta] = useState(false);
  const serviciosFiltrados = servicios.filter(servicio => servicio.nombre.toLowerCase().includes(busqueda.toLowerCase()) && (categoria === "" || servicio.categoria === categoria) )
  return (
    <div className="bg-white">
    <div className="bg-white text-black max-w-7xl mx-auto">
      

<header className="grid grid-cols-2 items-center gap-x-3 gap-y-4 px-4 py-3 sm:flex sm:flex-nowrap sm:justify-between sm:gap-4 sm:px-6 sm:py-4">
  <Link
    href="/"
    className="col-span-2 flex w-full justify-center sm:col-span-1 sm:w-auto sm:flex-none"
  >
    <Image
      src="/DirectorioServiciosLogo.png"
      alt="Directorio Servicio"
      width={280}
      height={90}
      priority
      className="h-auto w-52 sm:w-60"
    />
  </Link>

  <input
    type="text"
    placeholder="Buscar un servicio..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
    className="col-span-2 order-3 w-full min-w-0 rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:order-none sm:col-span-1 sm:max-w-sm sm:flex-1 sm:px-5 sm:py-3 sm:text-base"
  />

  <nav className="col-span-2 order-2 flex w-full items-center gap-3 sm:order-none sm:col-span-1 sm:w-auto sm:shrink-0">
    <div className="relative flex-1 sm:flex-none">
      <button
        type="button"
        onClick={() => setCategoriaAbierta(!categoriaAbierta)}
        className="w-full whitespace-nowrap rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:px-5 sm:py-3"
      >
        Categorías <span className="ml-1">▾</span>
      </button>

      {categoriaAbierta && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-64 w-56 max-w-[85vw] overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
          <button
            type="button"
            onClick={() => {
              setCategoria("");
              setCategoriaAbierta(false);
            }}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-50"
          >
            Todas las categorías
          </button>

          {[...new Set(servicios.map((servicio) => servicio.categoria))].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategoria(cat);
                setCategoriaAbierta(false);
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-blue-50"
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>

    <Link
      href="/contacto"
      className="flex-1 whitespace-nowrap rounded-full border border-blue-600 bg-white px-4 py-2.5 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:flex-none sm:px-5 sm:py-3"
    >
      Contacto
    </Link>
  </nav>
</header>


      <section id="servicios"
        className="relative min-h-[500px] max-w-7xl mx-auto bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/part-male-construction-worker.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent " />

        <div className="relative z-10 px-8 text-white">
          <h2 className="text-4xl font-bold my-8">
            <span className="block">Los servicios que</span>
            <span className="block">necesitás, los encontrás</span>
            <span className="block text-blue-500">acá</span>
          </h2>

          <p className="text-lg my-12">
            Profesionales y servicios para lo que necesitas
          </p>

          <Link
            href="/#servicios"
            className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full"
          >
            Ver servicios <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    <div className="bg-gray-200 max-w-7xl mx-auto px-8 pt-5 mt-6">
      <h3 className="text-blue-500 font-medium px-3">NUESTROS SERVICIOS</h3>
      <h2 className="text-3xl font-bold text-start px-3 mt-1
      ">Servicios Destacados</h2>
      <p className="text-gray-600 text-lg mt-2 max-w-2xl px-3">
  Explora algunos de los servicios mas buscados. Hace clic en cada uno para ver mas detalles y contactar al profesional.
</p>
      {serviciosFiltrados.length === 0 ? (
  <div className="w-full flex justify-center py-10">
    <p className="text-3xl font-semibold text-gray-400">
      Servicio no Encontrado
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    {serviciosFiltrados.map(servicio => (
      <Tarjeta
        key={servicio.nombre}
        nombre={servicio.nombre}
        precio={servicio.precio}
        categoria={servicio.categoria}
        descripcion={servicio.descripcion}
        imagen={servicio.imagen}
        ruta={servicio.ruta}
        color={servicio.color}
      />
    ))}
  </div>
)}
      </div>
      {/* Copyright */}
      <footer id="contacto" className="bg-gray-600 text-white mt-5 mx-auto max-w-9xl">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <h2 className="text-2xl font-bold">
            DirectorioServicios
          </h2>
          <p className="text-slate-300 mt-3 max-w-md">
            Conectamos vecinos con profesionales locales confiables y de calidad.
          </p>
          <p className="text-slate-300 mt-6">
            Contacto: info@derectorioservicios.com
          </p>
          <p className="text-slate-400 text-sm mt-10 border-t border-slate-700 pt-6">
           © 2026 DirectorioServicios. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div> 
    </div>

  );
    
}
